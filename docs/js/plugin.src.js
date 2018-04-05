let level = 0
function parseApi(content, base = '') {
  level++
  const pattern = /([+-.])\s*(attribute|property|get|function)\s*(\w+)(?:\((.*?)\))?(?::(.+))?\s(.*?)\n([\s\S]*?)\n---/img
  let matched = pattern.exec(content)
  const api = {
    attributes: [],
    properties: [],
    methods: [],
  }

  while(matched) {
    let [text, access, type, name, params, returnType, returnComment, details] = matched.map(m => m && m.trim())

    if(params) {
      params = params.split(/\s*,\s*/g)
        .map((p) => {
          return p.split(/\s*:\s*/)
        })
      params.forEach((param) => {
        const pattern = new RegExp(`\\* ${param[0]} - (.+?)?(\n|$)`, 'im')

        const m = details.match(pattern)

        if(m) {
          details = details.replace(pattern, '')
          param.push(m[1])
        } else {
          param.push('&nbsp;')
        }
        if(param[1].endsWith(' optional')) {
          param.push('No')
          param[1] = param[1].replace(' optional', '')
        } else {
          param.push('Yes')
          const matched = param[1].match(/ = (.+)/)
          if(matched) {
            param.push(matched[1])
            param[1] = param[1].replace(matched[0], '')
          }
        }
      })
    } else {
      params = []
    }

    if(returnType) {
      returnType = returnType.replace(/\|/g, '<span class="or">or</span>')
    }

    if(access === '+') {
      access = 'public'
    } else if(access === '.') {
      access = 'static'
    } else {
      access = 'private'
    }
    const inheritance = base || ''
    const item = {text, inheritance, access, type, name, params, returnType, returnComment, details, level}

    if(type === 'attribute') {
      api.attributes.push(item)
    } else if(type === 'function') {
      api.methods.push(item)
    } else {
      api.properties.push(item)
    }

    matched = pattern.exec(content)
  }

  return {api, text: content.replace(pattern, '')}
}

function generateHtml(context, searchIndex) {
  let {api, text} = context
  text = format('attributes', api.attributes, text)
  text = format('properties', api.properties, text)
  text = format('methods', api.methods, text)
  createSearchIndex('attributes', api.attributes, searchIndex)
  createSearchIndex('properties', api.properties, searchIndex)
  createSearchIndex('methods', api.methods, searchIndex)
  return text
}

function createSearchIndex(region, list, searchIndex) {
  if(region === 'attributes') {
    const sIdx = {}
    sIdx.slug = '?id=attributes'
    sIdx.body = list.map(item => item.text).join('')
    sIdx.title = 'attributes'
    searchIndex.push(sIdx)
    return searchIndex
  }
  if(region === 'properties') {
    list.forEach(({text, inheritance, access, type, name, params, returnType, returnComment, details, level}) => {
      const sIdx = {}
      // privatereadonly-boundrect-array-basesprite
      sIdx.slug = `?id=${access}${type === 'get' ? 'readonly' : ''}-${name}-${returnType}-${inheritance}`.toLowerCase()
      sIdx.body = text
      sIdx.title = name
      searchIndex.push(sIdx)
    })
    return searchIndex
  }
  if(region === 'methods') {
    list.forEach(({text, inheritance, access, type, name, params, returnType, returnComment, details, level}) => {
      const sIdx = {}
      let paramList = ''
      if(params.length) {
        /* eslint-disable no-confusing-arrow */
        paramList = `${params.map(a => a[4] ? `${a[0]} = ${a[4]}` : a[0]).join(', ')}`
        /* eslint-enable no-confusing-arrow */
      }
      sIdx.slug = `?id=${access}-${name}${paramList.replace(/\s*[,=]\s*/g, '-')}-${inheritance}`.toLowerCase()
      sIdx.body = text
      sIdx.title = name
      searchIndex.push(sIdx)
    })
    return searchIndex
  }
}

function format(region, list, content) {
  if(!list.length) {
    return content
  }
  list.sort((a, b) => {
    if(a.name === 'constructor' && b.name !== 'constructor') {
      return -1
    } else if(b.name === 'constructor' && a.name !== 'constructor') {
      return 1
    }
    if(a.access === 'private' && b.access === 'public') {
      return -1
    } else if(a.access === 'public' && b.access === 'private') {
      return 1
    } else if(a.name > b.name) {
      return 1
    } else if(a.name < b.name) {
      return -1
    } else if(a.level !== b.level) {
      return a.level - b.level < 0 ? -1 : 1
    } else if(a.params.join('') > b.params.join('')) {
      return 1
    }
    return -1
  })
  for(let i = list.length - 1; i > 0; i--) {
    if(list[i - 1].name === list[i].name && (list[i - 1].level !== list[i].level || list[i - 1].params.join('') === list[i].params.join(''))) {
      list.splice(i, 1)
      if(!list[i - 1].inheritance) {
        list[i - 1].inheritance = 'override'
      }
    }
  }
  let text
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
      return `<tr><td> ${name} </td><td> ${returnType} </td><td> ${defaultValue} </td><td> ${details} </td></tr>`
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
    return `| ${param[0]} | ${param[1].replace(/\|/g, '<span class="or">or</span>')} | ${param[3]} | ${param[2]} |
`
  }).join('')}
`
      }
      return `
### ${type !== 'attribute' ? `<span class="access">${access}</span>` : ''}${type==='get' ? '<span class="readonly">readonly</span>' : ''} ${name}${type === 'function' ? paramList :returnType ? ': ' + returnType : ''} <span class="inheritance">${inheritance}</span>

${type === 'function' ? paramTable : ''}


${type === 'function' ? `* **Returns:** ${returnType}${returnComment ? ' - ' : ''}${returnComment}` : ''}

${details}

`
    })
    text = `
## ${region}

${list.join('\n\n')}

`
  }
  /* eslint-enable */
  const pattern = new RegExp(`<!--${region}-->`, 'img')
  if(pattern.test(content)) {
    content = content.replace(pattern, text)
  } else {
    content += text
  }
  return content
}

function getBase(base, res) {
  return fetch(`/api/${base}.md`).then(res => res.text())
    .then((baseContent) => {
      const r = parseApi(baseContent, base)

      res.api.attributes.push(...r.api.attributes)
      res.api.properties.push(...r.api.properties)
      res.api.methods.push(...r.api.methods)

      const basePattern = /\+ extends (\w+)/im
      const extendList = baseContent.match(basePattern)
      if(extendList) {
        const base = extendList[1].trim().toLowerCase()
        return getBase(base, res)
      }

      return Promise.resolve(res)
    })
}

window.generateApiPlugin = function (hook, vm) {
  const searchIndex = []
  hook.beforeEach((content, next) => {
    if(vm.route.path.startsWith('/api/')) {
      const basePattern = /\+ extends (\w+)/im
      const extendList = content.match(basePattern)
      content = content.replace(basePattern, '<span class="extends">extends</span> $1')
      const res = parseApi(content)

      if(extendList) {
        const base = extendList[1].trim().toLowerCase()
        getBase(base, res).then((res) => {
          next(generateHtml(res, searchIndex))
        })
      } else {
        next(generateHtml(res, searchIndex))
      }
    } else {
      next(content)
    }
  })
  hook.afterEach((content, next) => {
    const path = vm.route.path
    if(path.startsWith('/api/')) {
      const searchIndexData = JSON.parse(localStorage.getItem('docsify.search.index'))
      searchIndex.forEach(({slug, body, title}, i) => {
        slug = `#${path}${slug}`
        searchIndexData[path][slug] = {slug, body, title}
      })
      delete searchIndexData[path].searchIndex
      localStorage.setItem('docsify.search.index', JSON.stringify(searchIndexData))
      next(`<div id="api-doc">${content}</div>`)
    } else {
      next(content)
    }
  })
}
