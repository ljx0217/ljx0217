var dom = document.getElementById("chart4_2");
var myChart4_2 = echarts.init(dom);
var app = {};
option = null;
var signal = '郑州市';

//console.log(tool.value);
var myChart4_2 = echarts.init(dom);
var myData = ['1月21日','1月22日', '1月23日', '1月24日', '1月25日',
	'1月26日', '1月27日', '1月28日', '1月29日', '1月30日', '1月31日', '2月1日', '2月2日', '2月3日',
	'2月4日', '2月5日', '2月6日', '2月7日', '2月8日', '2月9日', '2月10日', '2月11日', '2月12日', '2月13日',
	'2月14日', '2月15日','2月16日', '2月17日', '2月18日', '2月19日', '2月20日', '2月21日', '2月22日', '2月23日',
	'2月24日'];
$.get("data/时间分布柱状图.json", function(data) {
	console.log(signal);
	option = {
		color: ['#f6da86', '#007dff', '#50a4fc', ],
//		backgroundColor: "#ffffff",
		legend: {
			data: ['本地传播', '省外输入'],
			x: "43%",
			textStyle: {
			color: '#fff',
			fontSize: 10
		},
		},
		grid: [{
			show: false,
			left: '-2%',
			top: 30,
			bottom: 5,
			containLabel: true,
			width: '43%',
		}, {
			show: false,
			left: '50.5%',
			top: 30,
			bottom: 5,
			width: '0%',
		}, {
			show: false,
			right: '-2%',
			top: 30,
			bottom: 5,
			containLabel: true,
			width: '43%',
		}],
		xAxis: [{
			type: 'value',
			inverse: true,
			axisLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			max:10,
			position: 'top',
			axisLabel: {
				show: false,
				textStyle: {
					color: '#fff',
					fontSize: 12,
				},
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#1F2022',
					width: 1,
					type: 'solid',
				},
			},
		}, {
			gridIndex: 1,
			show: false,
		}, {
			gridIndex: 2,
			type: 'value',
			axisLine: {
				show: false,
			},
			axisTick: {
				show: false,
			},
			max:10,
			position: 'top',
			axisLabel: {
				show: false,
				textStyle: {
					color: '#B2B2B2',
					fontSize: 12,
				},
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#1F2022',
					width: 1,
					type: 'solid',
				},
			},
		}, ],
		yAxis: [{
			type: 'category',
			inverse: true,
			position: 'right',
			axisLine: {
				show: false
			},
			
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false,
				margin: 8,
				textStyle: {
					color: '#9D9EA0',
					fontSize: 12,
				},

			},
			data: myData,
		}, {
			gridIndex: 1,
			type: 'category',
			inverse: true,
			position: 'left',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize: 12,
				},
				interval: 0
			},
			data: myData.map(function(value) {
				return {
					value: value,
					textStyle: {
						align: 'center',
					}
				}
			}),
		}, {
			gridIndex: 2,
			type: 'category',
			inverse: true,
			position: 'left',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false,
				textStyle: {
					color: '#fff',
					fontSize: 12,
				},

			},
			data: myData,
		}, ],
		series: [{
			name: '本地传播',
			type: 'bar',
			stack: '本地',
			yAxisIndex: 0,
			xAxisIndex: 0,
			label: {
				normal: {
					show: true,
					position: 'left',
					fontSize: 12,
					color: "#fff"
				},
			},
			data: data[signal]["本省数据"]
		}, {
			name: '省外输入',
			type: 'bar',
			stack: '总量',
			yAxisIndex: 2,
			xAxisIndex: 2,
			label: {
				normal: {
					show: true,
					position: 'insideRight',
					fontSize: 12
				},
			},
			data: data[signal]["省外输入"]
		}]
	};
	myChart4_2.setOption(option);
});
