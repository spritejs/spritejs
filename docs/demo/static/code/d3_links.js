(function () {
  const paper = new spritejs.Scene('#paper', {
    viewport: ['auto', 'auto'],
    resolution: [1200, 900],
    stickMode: 'width',
    stickExtend: true,
  })

  const layer = paper.layer('fglayer', {
    handleEvent: false,
  })

  document.querySelector('#paper canvas').style.backgroundColor = '#313131'

  const simulation = d3.forceSimulation()
    .force('link', d3.forceLink().id(d => d.id))
    .force('charge', d3.forceManyBody())
    .force('center', d3.forceCenter(400, 300))

  d3.json('/res/data/miserables.json', (error, graph) => {
    if(error) throw error

    simulation
      .nodes(graph.nodes)
      .on('tick', ticked)

    simulation.force('link')
      .links(graph.links)

    const path = new spritejs.Path()
    path.attr({
      size: [1200, 800],
      pos: [0, 100],
      // bgcolor: '#aaa',
    })
    layer.appendChild(path)

    d3.select(layer.canvas)
      .call(d3.drag()
        .container(layer.canvas)
        .subject(dragsubject)
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended))


    path.on('afterdraw', ({context}) => {
      context.beginPath()
      graph.links.forEach((d) => {
        const [sx, sy] = [d.source.x, d.source.y],
          [tx, ty] = [d.target.x, d.target.y]

        context.moveTo(sx, sy)
        context.lineTo(tx, ty)
      })
      context.strokeStyle = '#aaa'
      context.stroke()

      context.beginPath()
      graph.nodes.forEach((d) => {
        const [x, y] = [d.x, d.y]

        context.moveTo(x + 3, y)
        context.arc(x, y, 3, 0, 2 * Math.PI)
      })
      context.fill()
      context.strokeStyle = '#fff'
      context.stroke()
    })

    function ticked() {
      path.forceUpdate(true)
    }

    function dragsubject() {
      const [x, y] = layer.toLocalPos(d3.event.x, d3.event.y)
      return simulation.find(x, y - 100)
    }
  })

  function dragstarted() {
    if(!d3.event.active) simulation.alphaTarget(0.3).restart()

    const [x, y] = [d3.event.subject.x, d3.event.subject.y]
    d3.event.subject.fx0 = x
    d3.event.subject.fy0 = y
    d3.event.subject.fx = x
    d3.event.subject.fy = y

    const [x0, y0] = layer.toLocalPos(d3.event.x, d3.event.y)
    d3.event.subject.x0 = x0
    d3.event.subject.y0 = y0
  }

  function dragged() {
    const [x, y] = layer.toLocalPos(d3.event.x, d3.event.y),
      {x0, y0, fx0, fy0} = d3.event.subject
    const [dx, dy] = [x - x0, y - y0]

    d3.event.subject.fx = fx0 + dx
    d3.event.subject.fy = fy0 + dy
  }

  function dragended() {
    if(!d3.event.active) simulation.alphaTarget(0)
    d3.event.subject.fx = null
    d3.event.subject.fy = null
  }
}())
