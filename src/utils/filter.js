import {toNumber} from './attribute_value';

export function parseFilterString(filterStr) {
  filterStr = filterStr.trim();
  if(!filterStr || filterStr === 'none') return null;

  const filterReg = /^(?:(url|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(([^()]*(?:\(.*\))*[^()]*)\))+$/i;
  const filters = filterStr.match(/(?:(url|blur|brightness|contrast|drop-shadow|grayscale|hue-rotate|invert|opacity|saturate|sepia)\(([^()]*(?:\(.*\))*[^()]*)\))+?/ig);

  const ret = [];
  if(filters) {
    filters.forEach((filter) => {
      const matched = filter.match(filterReg);
      if(!matched) throw new TypeError('Invalid fitler string.');
      let [, type, args] = matched;
      type = type.toLowerCase();
      args = args.trim().match(/(?<=\s|^)([^( )]+|([^( )]+\(.*\)))(?=\s|$)/g).map((n, i) => {
        let value;
        if(type === 'url' || type === 'drop-shadow' && i === 3) {
          value = n;
        } else {
          value = toNumber(n);
        }

        if(/%$/.test(n)) {
          value /= 100;
        }
        return value;
      });
      ret.push({type, args});
    });
  }

  return ret;
}

export function applyFilters(mesh, filters) {
  mesh.clearFilter();
  if(filters) {
    filters.forEach(({type, args}) => {
      let method = type;
      if(method === 'drop-shadow') method = 'dropShadow';
      else if(method === 'hue-rotate') method = 'hueRotate';
      mesh[method](...args);
    });
  }
}
