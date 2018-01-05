/**
 * Created by lenovo on 2018/1/5.
 */
const column = function (d3,dom,data) {
  var width = 400
  var height = 400
  var svg = d3.select(dom).append('svg')
  svg.attr('width', width).attr('height', height)
 
  var rectStep = 35
  var rectWidth = 30
  svg.selectAll('rect').data(data).enter().append('rect').attr('fill','red')
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
}
export default column