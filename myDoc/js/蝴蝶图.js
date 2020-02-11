var dom = document.getElementById("chart2_33");
var barChart = echarts.init(dom);
var myData = ['郑州市', '洛阳市', '三门峡市', '信阳市', '周口市', '平顶山市', '新乡市', '南阳市', '驻马店市', '安阳市', '漯河市', '鹤壁市', '许昌市', '开封市', '商丘市', '焦作市', '濮阳市',
	'济源市'
];
option = {
	color: ['#f6da86', '#007dff', '#50a4fc', ],
	//			    backgroundColor: "#ffffff",
	legend: {
		data: ['本地传播', '省外输入', '省内输入'],
		left: "center",
		top: 'bottom',
		textStyle: {
			color: '#fff',
			fontSize: 10
		},
	},
	grid: [{
		show: false,
		left: '-5%',
		top: 20,
		bottom: 30,
		containLabel: true,
		width: '46%',
	}, {
		show: false,
		left: '50.5%',
		top: 40,
		bottom: 30,
		width: '10%',
	}, {
		show: false,
		right: '-3%',
		top: 20,
		bottom: 30,
		containLabel: true,
		width: '46%',
	}],
	xAxis: [{
		type: 'value',
		inverse: true,
		max:110,
		axisLine: {
			show: false,
		},
		axisTick: {
			show: false,
		},
		position: 'top',
		axisLabel: {
			show: true,
			textStyle: {
				color: '#B2B2B2',
				fontSize: 12,
			},
		},
		splitLine: {
			show: true,
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
		max: 110,
		axisLine: {
			show: false,
		},
		axisTick: {
			show: false,
		},
		position: 'top',
		axisLabel: {
			show: true,
			textStyle: {
				color: '#B2B2B2',
				fontSize: 12,
			},
		},
		splitLine: {
			show: true,
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
		data: [43, 6, 2, 60, 24, 36, 19, 58, 32, 22, 4, 4, 12, 3, 45, 10, 4, 2]
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
		data: [81, 12, 5, 80, 36, 5, 23, 74, 81, 17, 25, 11, 18, 18, 38, 9, 5, 2, ]
	}, {
		name: '省内输入',
		type: 'bar',
		stack: '总量',
		yAxisIndex: 2,
		xAxisIndex: 2,
		label: {
			normal: {
				show: true,
				position: 'right',
				fontSize: 12
			},
		},
		data: [6, 2, 0, 0, 1, 1, 2, 1, 1, 5, 1, 2, 0, 0, 1, 2, 0, 0]
	}]
};
barChart.setOption(option);