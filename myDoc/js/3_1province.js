var myChart3_1 = echarts.init(document.getElementById('chart3_4')); //地图
var myChart3_5 = echarts.init(document.getElementById('chart3_5')); //时间轴
var myChart3_4 = echarts.init(document.getElementById('chart3_1')); //气泡图

var app = {};
option = null;

var geoCoordMap = {
	'信阳市': [114.08, 32.13],
	'南阳市': [112.53, 33.01],
	'郑州市': [113.65, 34.76],
	'驻马店市': [114.02, 32.98],
	'商丘市': [115.65, 34.45],
	'周口市': [114.63, 33.63],
	'平顶山市': [113.29, 33.75],
	'安阳市': [114.38, 36.102],
	'新乡市': [113.90, 35.30],
	'许昌市': [113.81, 34.02],
	'漯河市': [114.02, 33.58],
	'洛阳市': [112.44, 34.7],
	'开封市': [114.35, 34.79],
	'焦作市': [113.21, 35.24],
	'鹤壁市': [114.17, 35.9],
	'濮阳市': [114.98, 35.71],
	'三门峡市': [111.19, 34.76],
	'济源市': [112.58, 35.07]
};

$.get('data/动态图河南病例类型.json', function(result) {
	var datas = [];
	datas = result;
	console.log(datas);

	var scatter_data = function(data) {
		var res = [];
		for(var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name];
			if(geoCoord) {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value)
				});
			}
		}
		return res;
	};

	var n = 12;

	//地图
	var option3_1 = {

		//			backgroundColor: '#fff',
		title: {
			text: '河南省确诊病例分布图',
//			x: '15%',
//			y: '18%',
			textStyle: {
				fontSize: 14,
				color: '#fff'
				//				font-family:"黑体"
			}
		},
		tooltip: { //提示框组件。
			show: false,
			trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
			//				formatter: "{b} : {c} ({d}%)"
		},
		//			color: '#fff',
		legend: {
			show: false,
			orient: 'horizontal', //图例的排列方向
			x: 'right', //图例的位置
			//				y:'10%',

			data: ['累计总数', '外省输入病例', '本省输入病例', '本地病例'],
			textStyle: {
				color: '#fff',
				fontSize: 10
			},
		},

		geo: {
			show: true,
			map: '河南',
			roam: true,
			zoom: 1,
			//				center: [113.6401, 34.72468], //中心点
			label: {
				normal: {
					position: 'bottom',
					show: false
				},

				emphasis: {
					show: false
				}
			},
			itemStyle: {
				normal: {
					areaColor: '#0c67a3',
					borderColor: '#43bbff',
					borderWidth: 1,

					//					shadowColor: '#013c62',
					//					shadowOffsetX: -7,
					//					shadowOffsetY: 7,
					//					shadowBlur: 20,
				},
				emphasis: {
					areaColor: '#389BB7',
					borderWidth: 0
				}
			}
		},

		roamController: { //控制地图的上下左右放大缩小 图上没有显示
			show: true,
			x: '30%',
			mapTypeControl: {
				'河南': true
			}
		},
		series: [{
			//文字和标志
			name: '累计总数',
			type: 'scatter',
			coordinateSystem: 'geo',
			data: scatter_data(datas.data[n]),
			symbolSize: function(val) {
				//						console.log(val[2]);
				if(val[2] < 40) {
					return 3;
				} else {
					return val[2] / 20;
				}

			},
			label: {
				normal: {
					color: '#DAA520',
					formatter: '{b}',
					position: 'bottom',
					show: false
				},
				emphasis: {
					show: true
				}
			},
			itemStyle: {
				normal: {
					color: '#FF8C00',
					position: 'right',
					//					opacity: .8,
				}
			}
		}, {
			//文字和标志
			name: '累计总数',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			data: scatter_data(datas.data[n]),
			symbolSize: function(val) {
				//						console.log(val[2]);
				if(val[2] < 40) {
					return 3;
				} else {
					return val[2] /12;
				}

			},
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke'
			},
			hoverAnimation: true,
			label: {
				normal: {
					color: '#DAA520',
					formatter: '{b}',
					position: 'bottom',
					show: true
				},
				emphasis: {
					show: true
				}
			},
			itemStyle: {
				normal: {
					color: '#f4e925',
					shadowBlur: 10,
					shadowColor: '#EE0000'
				}
			}
		}]

	};
	myChart3_1.setOption(option3_1);

	myChart3_1.on('click', function(params) {
		//		var dataIndex = params.dataIndex;
		console.log(params.name);
		if(params.name == "郑州市") {
			layer.open({
				title: false,
				type: 2,
				shade: [0.8, '#0f0f10'],
				content: ['郑州市.html', 'yes'],
				area: ['900px', '450px']
			});
		}
	});

	//气泡图
	// Schema:
	var schema = [{
			name: '确诊',
			index: 0,
			text: '确诊',
			unit: '例'
		},
		{
			name: '治愈',
			index: 1,
			text: '治愈',
			unit: '例'
		},
		{
			name: '死亡',
			index: 2,
			text: '死亡',
			unit: ''
		},
		{
			name: '城市',
			index: 3,
			text: '城市',
			unit: ''
		}
	];
	console.log(datas.double_bar)
	var double_bar = datas.double_bar;
	var option3_4 = {
		title: [{
			text: datas.timeline[n],
			left: '70%',
			top: '60%',
			textStyle: {
				color: '#fff',
				fontWeight: 'normal',
				fontSize: 18
			}
		},{
			text: '河南省各地市病例分析',
			left: 'center',
			top: 10,
			textStyle: {
				color: '#fff',
				fontWeight: 'normal',
				fontSize: 14
			}
		}],
		tooltip: {
			padding: 5,
			//			backgroundColor: '#222',
			borderColor: '#777',
			borderWidth: 1,
			formatter: function(obj) {
				var value = obj.value;
				return schema[3].text + '：' + value[3] + '<br>' +
					schema[0].text + '：' + value[0] + schema[0].unit + '<br>' +
					schema[1].text + '：' + value[1] + schema[1].unit + '<br>' +
					schema[2].text + '：' + value[2] + '<br>';
			}
		},
		grid: {
			top: 40,
			bottom: 40,
			left: 40
			//			containLabel: true,
			//			left: 30,
			//			right: '110'
		},
		xAxis: {
			//			type: '',
			name: '确诊人数',
			max: 300,
			min: 0,
			nameGap: 25,
			nameLocation: 'middle',
			nameTextStyle: {
				fontSize: 12
			},
			splitLine: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			axisLabel: {
				formatter: '{value} '
			}
		},
		yAxis: {
			type: 'value',
			name: '治愈人数',
			max: 200,
			nameTextStyle: {
				color: '#fff',
				fontSize: 12
			},
			axisLine: {
				lineStyle: {
					color: '#ccc'
				}
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				formatter: '{value} '
			}
		},
		visualMap: [{
			show: false,
			dimension: 3,
			categories: double_bar.city,
			calculable: true,
			precision: 0.1,
			textGap: 30,
			textStyle: {
				color: '#ccc'
			},
			inRange: {
				color: (function() {
					var colors = ['#FF9900','#FFFF66',  '#43bafe', '#FF6600', '#FFFF00', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a'];
					return colors.concat(colors);
				})()
			}
		}],
		series: [{
			type: 'scatter',
			itemStyle: {
				opacity: 0.8,
				shadowBlur: 10,
				shadowOffsetX: 0,
				shadowOffsetY: 0,
				shadowColor: 'rgba(0, 0, 0, 0.5)'
			},
			label: {
				normal: {
					show: true,
					textStyle: {
						color: '#11264f',
						fontSize: 10,
						textBorderColor: '#fff',
						textBorderWidth: 1
					},
					formatter: function(val) {
//						console.log(val.value)
						return val.value[3];
					}
				},
				emphasis: {
					show: true,
					textStyle: {
						color: '#fff',
						fontSize: 10,
						textBorderColor: '#f69f36',
						textBorderWidth: 1
					},
					formatter: function(val) {
//						console.log(val.value)
						return val.value[3];
					}
				}
			},
			data: double_bar.series[n],
			symbolSize: function(val) {
				if(val[2] == 0) {
					return 20;
				} else if(val[2] == 1) {
					return 30;
				} else if(val[2] == 2) {
					return 40;
				} else {
					return 50;
				}
			}
		}]

	};
	myChart3_4.setOption(option3_4);
	
	myChart3_4.on('click', function(params) {
		//		var dataIndex = params.dataIndex;
		console.log(params.value[3]);
		if(params.value[3] == "郑州市") {
			layer.open({
				title: false,
				type: 2,
				shade: [0.8, '#0f0f10'],
				content: ['郑州市.html', 'yes'],
				area: ['900px', '450px']
			});
		}
	});

	//时间轴
	var option3_5 = {
		baseOption: {
			timeline: {
				axisType: 'category',
				realtime: true,
				x: '5%',
				x2: '5%',
				loop: true,
				autoPlay: true,
				currentIndex: 12,
				playInterval: 800,
				controlStyle: {
					position: 'left'
				},
				//type: 'number',
				//				height: '400',
				symbol: 'circle',
				symbolSize: '10',
				lineStyle: {
					//					 show: false,
					width: 2
				},
				itemStyle: {
					color: '#fff'
				},
				padding: [
					400, // 上
					0, // 右
					0, // 下
					0, // 左
				],
				label: {
					fontSize: 10,
					color: "#fff",
					//					rotate:40 ,
				}, //文本样式

				orient: 'horizontal', //水平放置
				//				orient: 'vertical',
				data: []
			},
			title: [{
				text: '应对措施：',
				//				x: '10%',
				//				y: '1%',
				textStyle: {
					color: "#fff",
					fontSize: 16,
					//				font-family:"黑体"
				}
			}],

			grid: {
				//				right: 25,
				//				top: 150,
				//				bottom: 30,
				width: '85%',
				//				height:'40%'
			},
			yAxis: {
				min: 0,
				max: 5,
				show: false
			},
			xAxis: {
				type: 'category',
				inverse: false,
				//				nameGap: 16,
				axisLine: {
					show: false,
					lineStyle: {
						color: '#ddd'
					}
				},
				axisTick: {
					show: false,
					lineStyle: {
						color: '#ddd'
					}
				},
				axisLabel: {
					interval: 0,
					show: false,
					rotate: 50,
					//					margin: 55,
					textStyle: {
						color: '#fff',
						//						align: 'left',
						fontSize: 10
					},
				},
				data: []
			},

			series: [{
				name: '政策',
				type: 'bar',
				roam: true,
				//					visualMap: true,
				//					zlevel: 2,
				barMaxWidth: 12,
				barGap: 0,
				itemStyle: {
					normal: {
						label: {
							position: 'top',
							show: true, //是否显示标签
							rotate: 40,
							textStyle: {
								size: 12,
								color: "#fff",
								//									textBorderColor: '#ffffff',
								//									textBorderWidth: 2
							},
							formatter: "{c}例"
							//								formatter: "{b}\n{c} 例",
						},

						barBorderRadius: 15
					}
				},
				data: []
			}]
		},
		options: []
	};

	for(var n = 0; n < datas.timeline.length; n++) {
		//		console.log(data.timeline);
		option3_5.baseOption.timeline.data.push(datas.timeline[n]);

		//数据写入series(最终改良版)
		var series_p = {
			title: {
				subtext: datas.timeline[n] + ':\n' + datas.aaa[n],
				subtextStyle: {
					color: '#fff'
				}
			},
			xAxis: {
				data: datas.timeline,
			},
			series: [{
				name: 'barSer',
				//				data: datas.policy[n]
			}]
		};
		option3_5.options.push(series_p);

	};
	myChart3_5.setOption(option3_5);

	myChart3_5.on("timelinechanged", function(obj) {
		obj = obj.currentIndex;

		//更改地图
		option3_1.series[0].data = scatter_data(datas.data[obj]);
		option3_1.series[1].data = scatter_data(datas.data[obj]);
		myChart3_1.setOption(option3_1);

		//更改气泡图
		option3_4.title[0] = {
			text: datas.timeline[obj]
		};
		option3_4.series[0].data = double_bar.series[obj];
		myChart3_4.setOption(option3_4);

	});
});