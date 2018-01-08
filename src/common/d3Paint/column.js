/**
 * Created by lenovo on 2018/1/5.
 */
const column = function (d3,dom,data) {
  var width = 400
  var height = 400
  var svg = d3.select(dom)
  svg.attr('width', width).attr('height', height)
 
  var rectStep = 35
  var rectWidth = 30
  var updateRect =  svg.selectAll('rect').data(data) // 填充数据
  updateRect.enter().append('rect').attr('fill','red') // enter是数据多余，用append处理
    .attr('x', function (d,i) {
      return i*rectStep
    })
    .attr('y', function (d,i) {
      return height - d
    })
    .attr('width',rectWidth)
    .attr('height', function (d,i) {
      return d
    })
  var updateText = svg.selectAll('text').data(data)
  updateText.enter().append('text')
    .attr('fill', 'blue')
    .attr('font-size', '12px')
    .attr('x',function (d,i) {
      return i*rectStep
    })
    .attr('y',function (d,i) {
      return height - d
    })
    .attr('dx',function (d,i) {
      return rectWidth/2
    })
    .attr('dy','-2px')
    .attr('text-anchor','middle')
    .text(function (d) {
      return d
    })
  // 线性比例尺
  var linear = d3.scaleLinear() //线性比例尺新API
    .domain([1,3])
    .range([2,6])
  console.log(linear(5))
  // 量子比例尺和阈值比例尺差不多
  var quantize = d3.scaleQuantile()
    .domain([0,50])
    .range(['#888','#666','#444','#222','#000'])
  var r = [50,45,30,15,10]  // 定义圆的半径
  var updateCircle = svg.selectAll('circle').data(r)
  updateCircle.enter().append('circle')
    .attr('cx', function (d, i) {
      return 50 + i*30
    })
    .attr('cy',50)
    .attr('r',function (d) {
      return d
    })
    .attr('fill',function (d) {
      return quantize(d)
    })
}
export default column