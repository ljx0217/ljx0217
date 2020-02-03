var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
//app.title = '笛卡尔坐标系上的热力图';

$.get('word(1).json', function(result) {
	console.log(result);
	//	var data = [];

	//	data = result.map(function(item) {
	//		console.log(item);
	//		return item;
	//	});

	myChart.setOption({
		tooltip: {
			show: true
		},
		series: [{
			type: "wordCloud",
			gridSize: 20,
			shape: 'diamond',
			sizeRange: [12, 50],
			width: 800,       
			height: 500,
			textStyle: {
				normal: {
					color: function() {
						var colors = ['#FFFF00', '#000', '#BBFFFF', "#00FFFF", "#EEEE00", '#ADFF2F', '#EEEE00', '#FF00FF','#00FFFF','#FFFF00', '#BBFFFF'];
						return colors[parseInt(Math.random() * 10)];
					}
				},
				emphasis: {
					shadowBlur: 10,
					shadowColor: '#333'
				}
			},
			data: result
		}]

	});
	console.log(11);
});