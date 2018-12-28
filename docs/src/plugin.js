let level = 0;
function parseApi(content, base = '') {
  level++;
  const pattern = /([+-.])\s*(attribute|property|get|function|async)\s*(\w+)(?:\((.*?)\))?(?::((?:\w|\|)+))?\s(.*?)\n([\s\S]*?)\n---/img;
  let matched = pattern.exec(content);
  const api = {
    attributes: [],
    properties: [],
    methods: [],
  };

  while(matched) {
    let [text, access, type, name, params, returnType, returnComment, details] = matched.map(m => m && m.trim());

    if(params) {
      params = params.split(/\s*,\s*/g)
        .map((p) => {
          if(p.startsWith('...')) {
            p = `${p}:Array`;
          }
          return p.split(/\s*:\s*/);
        });
      params.forEach((param) => {
        const pattern = new RegExp(`\\* ${param[0]} - (.+?)?(\n|$)`, 'im');

        const m = details.match(pattern);

        if(m) {
          details = details.replace(pattern, '');
          param.push(m[1]);
        } else {
          param.push('&nbsp;');
        }
        if(param[1].endsWith(' optional')) {
          param.push('No');
          param[1] = param[1].replace(' optional', '');
        } else {
          const matched = param[1].match(/ = (.+)/);
          if(matched) {
            param.push('No');
            param.push(matched[1]);
            param[1] = param[1].replace(matched[0], '');
          } else {
            param.push('Yes');
          }
        }
      });
    } else {
      params = [];
    }

    if(returnType) {
      returnType = returnType.replace(/\|/g, '<span class="or">or</span>');
    }

    if(access === '+') {
      access = 'public';
    } else if(access === '.') {
      access = 'static';
    } else {
      access = 'private';
    }
    const inheritance = base || '';
    const item = {text, inheritance, access, type, name, params, returnType, returnComment, details, level};

    if(type === 'attribute') {
      api.attributes.push(item);
    } else if(type === 'function' || type === 'async') {
      api.methods.push(item);
    } else {
      api.properties.push(item);
    }

    matched = pattern.exec(content);
  }

  return {api, text: content.replace(pattern, '')};
}

function generateHtml(context, searchIndex) {
  let {api, text} = context;
  text = format('attributes', api.attributes, text);
  text = format('properties', api.properties, text);
  text = format('methods', api.methods, text);
  createSearchIndex('attributes', api.attributes, searchIndex);
  createSearchIndex('properties', api.properties, searchIndex);
  createSearchIndex('methods', api.methods, searchIndex);
  return text;
}

function createSearchIndex(region, list, searchIndex) {
  if(region === 'attributes') {
    const sIdx = {};
    sIdx.slug = '?id=attributes';
    sIdx.body = list.map(item => item.text).join('');
    sIdx.title = 'attributes';
    searchIndex.push(sIdx);
    return searchIndex;
  }
  if(region === 'properties') {
    list.forEach(({text, inheritance, access, type, name, params, returnType, returnComment, details, level}) => {
      const sIdx = {};
      // privatereadonly-boundrect-array-basesprite
      sIdx.slug = `?id=${access}${type === 'get' ? 'readonly' : ''}-${name}-${returnType}-${inheritance}`.toLowerCase();
      sIdx.body = text;
      sIdx.title = name;
      searchIndex.push(sIdx);
    });
    return searchIndex;
  }
  if(region === 'methods') {
    list.forEach(({text, inheritance, access, type, name, params, returnType, returnComment, details, level}) => {
      const sIdx = {};
      let paramList = '';
      if(params.length) {
        /* eslint-disable no-confusing-arrow */
        paramList = `${params.map(a => a[4] ? `${a[0]} = ${a[4]}` : a[0]).join(', ')}`;
        /* eslint-enable no-confusing-arrow */
      }
      sIdx.slug = `?id=${access}-${name}${paramList.replace(/\s*[,=]\s*/g, '-')}-${inheritance}`.toLowerCase();
      sIdx.body = text;
      sIdx.title = name;
      searchIndex.push(sIdx);
    });
    return searchIndex;
  }
}

function format(region, list, content) {
  if(!list.length) {
    return content;
  }
  list.sort((a, b) => {
    if(a.name === 'constructor' && b.name !== 'constructor') {
      return -1;
    } if(b.name === 'constructor' && a.name !== 'constructor') {
      return 1;
    }
    if(a.access === 'private' && b.access === 'public') {
      return -1;
    } if(a.access === 'public' && b.access === 'private') {
      return 1;
    } if(a.name > b.name) {
      return 1;
    } if(a.name < b.name) {
      return -1;
    } if(a.level !== b.level) {
      return a.level - b.level < 0 ? -1 : 1;
    } if(a.params.join('') > b.params.join('')) {
      return 1;
    }
    return -1;
  });
  for(let i = list.length - 1; i > 0; i--) {
    if(list[i - 1].name === list[i].name && (list[i - 1].level !== list[i].level || list[i - 1].params.join('') === list[i].params.join(''))) {
      list.splice(i, 1);
      if(!list[i - 1].inheritance) {
        list[i - 1].inheritance = 'override';
      }
    }
  }
  let text;
/* eslint-disable */
  if(region === 'attributes') {
    text = `
## ${region}

<table>
    <thead>
      <tr>
        <th> Name </th><th> Type </th><th> Default Value </th><th> Description </th>
      </tr>
    </thead>
    <tbody>
    ${list = list.map((item) => {
      let {access, inheritance, type, name, params, returnType, returnComment, details} = item
      const defaultPattern = /\* default: (.*)/im
      const matched = details.match(defaultPattern)
      let defaultValue = ''
      if(matched) {
        defaultValue = matched[1]
        details = details.replace(defaultPattern, '')
      }
      return `<tr><td class="${access}" title="${access} ${name}"> ${name} </td><td> ${returnType} </td><td> ${defaultValue} </td><td> ${details} </td></tr>`
    }).join('')}
    </tbody>
</table>
`
  } else {
    list = list.map((item) => {
      const {access, inheritance, type, name, params, returnType, returnComment, details} = item
      let paramList = '( )',
        paramTable = ''

      if(params.length) {
        paramList = `(${params.map(a => a[4] ? `${a[0]} = ${a[4]}`: a[0]).join(', ')})`
        paramTable = `
* **Paramaters:**

| Name | Type | Required | Description |
| --- | --- | --- | --- |
${params.map((param) => {
    return `| ${param[0].replace(/^\.\.\./, '')} | ${param[1].replace(/\|/g, '<span class="or">or</span>')} | ${param[3]} | ${param[2]} |
`
  }).join('')}
`
      }
      return `
### ${type !== 'attribute' ? `<span class="access">${access}</span>` : ''}${type==='get' ? '<span class="readonly">readonly</span>' : ''}${type === 'async' ? '<span class="async">async</span>' : ''} ${name}${type === 'function' || type === 'async' ? paramList :returnType ? ': ' + returnType : ''} <span class="inheritance">${inheritance}</span>

${type === 'function' || type === 'async' ? paramTable : ''}


${type === 'function' || type === 'async' ? `* **Returns:** ${returnType}${returnComment ? ' - ' : ''}${returnComment}` : ''}

${details}

`
    })
    text = `
## ${region}

${list.join('\n\n')}

`
  }
  /* eslint-enable */
  const pattern = new RegExp(`<!--${region}-->`, 'img');
  if(pattern.test(content)) {
    content = content.replace(pattern, text);
  } else {
    content += text;
  }
  return content;
}

function getBase(base, res) {
  return fetch(`/api/${base}.md`).then(res => res.text())
    .then((baseContent) => {
      const r = parseApi(baseContent, base);

      res.api.attributes.push(...r.api.attributes);
      res.api.properties.push(...r.api.properties);
      res.api.methods.push(...r.api.methods);

      const basePattern = /\+ extends (\w+)/im;
      const extendList = baseContent.match(basePattern);
      if(extendList) {
        const base = extendList[1].trim().toLowerCase();
        return getBase(base, res);
      }

      return Promise.resolve(res);
    });
}

window.generateApiPlugin = function (hook, vm) {
  const searchIndex = [];
  hook.beforeEach((content, next) => {
    if(vm.route.path.startsWith('/api/')) {
      const basePattern = /\+ extends (\w+)/im;
      const extendList = content.match(basePattern);
      content = content.replace(basePattern, '<span class="extends">extends</span> $1');
      const res = parseApi(content);

      if(extendList) {
        const base = extendList[1].trim().toLowerCase();
        getBase(base, res).then((res) => {
          next(generateHtml(res, searchIndex));
        });
      } else {
        next(generateHtml(res, searchIndex));
      }
    } else {
      const externalJS = content.match(/\n<script src="\/js\/(.*?)">/);
      if(externalJS) {
        const jsFile = `/src/${externalJS[1]}`;
        const matched = content.match(/<!-- demo: .*? -->/g);
        if(matched) {
          axios.get(jsFile).then((res) => {
            const jsContent = res.data;
            matched.forEach((mark) => {
              const jsMark = mark.replace(/<!--/, '/*').replace(/-->/, '*/');
              const parts = jsContent.split(jsMark);
              if(parts[1]) {
                const m = parts[1].match(/\n;?\((async )?function \(\) \{\n([\s\S]*?)\}\(\)\)/im);
                if(m && m[2]) {
                  if(!m[1]) {
                    const code = m[2].replace(/^ {2}/mg, '');
                    content = content.replace(mark, `\`\`\`js\n${code}\n\`\`\``);
                  } else {
                    content = content.replace(mark, `\`\`\`js\n${m[0].slice(1)}\n\`\`\``);
                  }
                }
              }
            });
            next(content);
          });
        } else {
          next(content);
        }
      } else {
        next(content);
      }
    }
  });
  hook.afterEach((content, next) => {
    const path = vm.route.path;
    const pageId = path.replace(/.*\//g, '') || 'index';

    if(path.startsWith('/api/')) {
      const searchIndexData = JSON.parse(localStorage.getItem('docsify.search.index'));
      if(searchIndexData) {
        searchIndexData[path] = searchIndexData[path] || {};
        searchIndex.forEach(({slug, body, title}, i) => {
          slug = `#${path}${slug}`;
          searchIndexData[path][slug] = {slug, body, title};
        });
        localStorage.setItem('docsify.search.index', JSON.stringify(searchIndexData));
      }
      next(`<div id="api-doc">${content}</div>`);
    } else {
      let [doc, js] = content.split('<script>');
      if(!js) {
        js = '';
      } else {
        js = `<script>${js}`;
      }
      next(`<div id="page-${pageId}">${doc}</div>${js}`);
    }
  });
};
