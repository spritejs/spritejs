/* istanbul ignore file */
import {parseColor} from '../utils/color';
import ownerDocument from '../document';

const CSSselect = require('css-select');

function isTag(elem) {
  return elem.nodeType === 1 || ownerDocument.isSpriteNode(elem.nodeName);
}

function getChildren(elem) {
  return Array.from(elem.childNodes || []);
}

function getParent(elem) {
  if(ownerDocument.isSpriteNode(elem.nodeName)) {
    return elem.parent || elem.canvas || elem.container;
  }
  return elem.parentElement;
}

function removeSubsets(nodes) {
  let idx = nodes.length,
    node,
    ancestor,
    replace;

  // Check if each node (or one of its ancestors) is already contained in the
  // array.
  while(--idx > -1) {
    node = ancestor = nodes[idx];

    // Temporarily remove the node under consideration
    nodes[idx] = null;
    replace = true;

    while(ancestor) {
      if(nodes.indexOf(ancestor) > -1) {
        replace = false;
        nodes.splice(idx, 1);
        break;
      }
      ancestor = getParent(ancestor);
    }

    // If the node has been found to be unique, re-insert it.
    if(replace) {
      nodes[idx] = node;
    }
  }

  return nodes;
}

const adapter = {
  isTag,
  existsOne(test, elems) {
    return elems.some((elem) => {
      return isTag(elem)
        ? test(elem) || adapter.existsOne(test, getChildren(elem))
        : false;
    });
  },
  getSiblings(elem) {
    const parent = getParent(elem);
    return parent && getChildren(parent);
  },
  getChildren,
  getParent,
  getAttributeValue(elem, name) {
    if(elem.nodeType === 1 && name === 'class' || name === 'id') {
      return elem[name];
    }
    if(this.hasAttrib(elem, name)) {
      let val = elem.attributes[name];
      if(Array.isArray(val)) {
        val = `[${val.join()}]`;
      }
      return String(val);
    }
  },
  hasAttrib(elem, name) {
    return elem.attributes[name] != null;
  },
  removeSubsets,
  getName(elem) {
    return elem.tagName ? elem.tagName.toLowerCase() : null;
  },
  findOne: function findOne(test, arr) {
    let elem = null;

    for(let i = 0, l = arr.length; i < l && !elem; i++) {
      if(test(arr[i])) {
        elem = arr[i];
      } else {
        const childs = getChildren(arr[i]);
        if(childs && childs.length > 0) {
          elem = findOne(test, childs);
        }
      }
    }

    return elem;
  },
  findAll: function findAll(test, elems) {
    let result = [];
    for(let i = 0, j = elems.length; i < j; i++) {
      if(!isTag(elems[i])) continue;  // eslint-disable-line
      if(test(elems[i])) result.push(elems[i]);
      const childs = getChildren(elems[i]);
      if(childs) result = result.concat(findAll(test, childs));
    }
    return result;
  },
  getText: function getText(elem) {
    if(Array.isArray(elem)) return elem.map(getText).join('');

    if(isTag(elem)) return getText(getChildren(elem));

    if(elem.nodeType === 3) return elem.nodeValue;

    if(ownerDocument.isSpriteNode(elem.nodeName)) return elem.text;

    return '';
  },
};

function resolveQuery(query) {
  if(typeof query !== 'string') return query;
  let matches = query.match(/\[(bgcolor|fillColor|strokeColor|color)\s*=\s*['"]?\w+['"]?\]/g);
  if(matches) {
    matches = matches.map((matched) => {
      const kv = matched.slice(1, -1).split('=');
      const color = parseColor(kv[1].replace(/['"]/g, ''));
      return [matched, `[${kv[0]}="${color}"]`];
    });
    matches.forEach(([r, p]) => {
      query = query.replace(r, p);
    });
  }
  matches = query.match(/\[\w+\s*=\s*['"]\[.+?\]['"]\]/g);
  if(matches) {
    matches = matches.map((matched) => {
      const kv = matched.slice(1, -1).split('=');
      const arr = kv[1].slice(2, -2).split(/,/g).map(k => k.trim());
      return [matched, `[${kv[0]}="[${arr}]"]`];
    });
    matches.forEach(([r, p]) => {
      query = query.replace(r, p);
    });
  }
  return query;
}

export function querySelectorAll(query, elems) {
  return CSSselect.selectAll(resolveQuery(query), elems, {adapter});
}

export function querySelector(query, elems) {
  return CSSselect.selectOne(resolveQuery(query), elems, {adapter});
}

export function isMatched(elem, query) {
  return CSSselect.is(elem, resolveQuery(query), {adapter});
}

export function compile(query) {
  return CSSselect.compile(resolveQuery(query), {adapter});
}
