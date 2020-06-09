var myChart1_1 = echarts.init(document.getElementById('chart1_1'));
var myChart1_2 = echarts.init(document.getElementById('chart1_2'));
var myChart1_3 = echarts.init(document.getElementById('chart1_3'));
var myChart1_6 = echarts.init(document.getElementById('chart1_6'));
//var myChart1_0 = echarts.init(document.getElementById('chart1_0'));
var app = {};
option = null;
$.get('data/chart1/河南timeline_bar.json', function(result) {
	var datas = [];
	datas = result;
	console.log(datas);
	var len = datas.title_data.Dates.length;

	var i = 12;
	var obj = 12;

	var option1_1 = {
		title: [{
			text: datas.timeline[obj] + '{nums1|\n\n确诊：   ' + datas.title_data.total[obj] + '}' +
				'\n\n{nums2|治愈：   ' + datas.title_data.Cure[obj] + '(' + (datas.title_data.Cure[obj] / datas.title_data.total[obj] * 100).toFixed(2) + '%)}' +
				'\n\n{nums3|轻型与普通型：' + datas.title_data.QWandPT[obj] + '}' +
				'\n\n{nums4|重型：   ' + datas.title_data.ZZ[obj] + '}' +
				'\n\n{nums5|危重型：' + datas.title_data.WZZ[obj] + '}' +
				'\n\n{nums6|死亡：   ' + datas.title_data.Death[obj] + '}',
			textStyle: {
				'color': '#fff',
				'fontSize': 16,
				'fontWeight': 800,
				'rich': {
					'nums0': {
						'color': '#fff',
						'fontSize': 26,
						'fontWeight': 800
					},
					'nums1': {
						'color': '#43bbff',
						'fontSize': 16,
						'fontWeight': 800
					},
					'nums2': {
						'color': '#69c79b',
						'fontSize': 16,
						'fontWeight': 800
					},
					'nums3': {
						'color': '#f88c43',
						'fontSize': 16,
						'fontWeight': 800
					},
					'nums4': {
						'color': '#e87272',
						'fontSize': 16,
						'fontWeight': 800
					},
					'nums5': {
						'color': '#e80000',
						'fontSize': 16,
						'fontWeight': 800
					},
					'nums6': {
						'color': '#ac533f',
						'fontSize': 16,
						'fontWeight': 800
					},
				},
			},
			subtext: '应对措施：',
			subtextStyle: {
				fontSize: 16,
				color: '#43bbff'
			},
			itemGap: 170,
			x: '0%',
			y: '0%'
		}],
		tooltip: { //提示框组件。
			show: true,
			trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
			formatter: "{b} : {c} 例"
		},
		color: '#fff',
		legend: {
			orient: 'horizontal', //图例的排列方向
			x: 'left', //图例的位置
			data: ['确诊人数'],
			show: false
		},

		grid: {
			right: 55,
			top: 150,
			bottom: 20,
			width: '85%',
			height: '50%'
		},
		yAxis: {
			min: 0,
			max: 270,
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

		visualMap: { //颜色的设置  dataRange
			show: true,
			x: '80%',
			y: '55%',
			type: 'continuous', // 定义为连续型 viusalMap
			min: 0, //指定 visualMapContinuous 组件的允许的最小值
			max: 275, //指定 visualMapContinuous 组件的允许的最大值
			range: [0, 275],
			calculable: true,

			color: ["#013c62", "#0c67a3", "#2998e1", ],
			color: ["#013c62", "#2998e1"],
			textStyle: {
				color: "#fff"
			}, //文本样式
			//				formatter: function (value) { //标签的格式化工具。
			//				return  value; // 范围标签显示内容。
			//				}

		},
		roamController: { //控制地图的上下左右放大缩小 图上没有显示
			show: true,
			x: '30%',
			mapTypeControl: {
				'河南': true
			}
		},

		series: [{
				name: '确诊人数',
				type: 'map',
				map: '河南',
				geoIndex: 1,
				top: '28%',
				left: '18%',
				bottom: '5%',
				roam: true, //是否开启鼠标缩放和平移漫游

				itemStyle: { //地图区域的多边形 图形样式
					normal: { //是图形在默认状态下的样式
						borderColor: '#43bbff',
						borderWidth: 1,
						areaColor: '#fff',
						//							shadowColor: '#013c62',
						//						 shadowOffsetX: -7,
						//						 shadowOffsetY: 7,
						//						 shadowBlur: 20,
						label: {
							show: true, //是否显示标签
							fontSize: 10,
							textStyle: {
								//									size: 4,
								color: "#f69f36",
								//									textBorderColor: '#f69f36',
								//									textBorderWidth: 1
							},
							//								formatter: "{b}"
							formatter: "{b}\n{c} 例",
						},
						color: '#f69f36'
					},
					emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
						areaColor: '#2998e1',
						label: {
							show: true,
							textStyle: {
								color: "#43bbff"
							}
						}
					}
				},
				top: "3%", //组件距离容器的距离
				data: datas.data[i]
			},
			//				{
			//					name: 'barSer',
			//					type: 'bar',
			//					roam: true,
			//					visualMap: true,
			////					zlevel: 2,
			//					barMaxWidth: 12,
			//					barGap: 0,
			//					itemStyle: {
			//						normal: {
			//							label: {
			//								position: 'top',
			//								show: true, //是否显示标签
			//								rotate:40 ,
			//								textStyle: {
			//									size: 12,
			//									color: "#fff",
			////									textBorderColor: '#ffffff',
			////									textBorderWidth: 2
			//								},
			//								formatter: "{c}例"
			//								//								formatter: "{b}\n{c} 例",
			//							},
			//							
			//							barBorderRadius: 15
			//						}
			//					},
			//					data: datas.data[i]
			//
			//				}
		]
	};

	myChart1_1.setOption(option1_1);
	//	myChart1.on('click', function(params) {
	//		//		var dataIndex = params.dataIndex;
	//		console.log(params);
	//		if(params.name == '辽宁') {
	//
	//		}
	//	});

	var option1_2 = {

		title: {
			text: '河南省累计确诊病例统计',
			left: 'center',
			textStyle: {
				color: '#fff',
				fontSize: 14,

			}
			//     
		},

		tooltip: {
			trigger: 'item',
			formatter: "{b} : {c} ({d}%)"
		},

		visualMap: {
			show: false,
			min: 500,
			max: 600,
			inRange: {
				//colorLightness: [0, 1]
			}
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '50%',
			center: ['50%', '50%'],
			color: ['#F4A460', '#1DB7E5', '#FE5050', '#808080', ], //'#FBFE27','rgb(11,228,96)','#FE5050'
			data: datas.data[12].sort(function(a, b) {
				return a.value - b.value
			}),
			roseType: 'radius',

			label: {
				normal: {
					color: '#fff',
					fontSize: 10,
					fontWeight: 'bold',
					lineHeight: 5,
					formatter: "{b} ({d}%)",
					rich: {
						c: {
							color: '#333333',
							fontSize: 20,
							fontWeight: 'bold',
							lineHeight: 5
						},
						b: {
							color: '#333333',
							fontSize: 15,
							height: 40
						},
					},
				}
			},
			labelLine: {
				normal: {
					lineStyle: {
						color: '#333333',
					},
					smooth: 0.2,
					length: 10,
					length2: 20,

				}
			},
			itemStyle: {
				normal: {
					shadowColor: 'rgba(0, 0, 0, 0.8)',
					shadowBlur: 10,
					opacity: .9
				}
			},
			top: '-5%',
			bottom: '0%'
		}]
	};
	myChart1_2.setOption(option1_2);
	
	//气泡图
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
	var i = 12;
	var option1_3 = {
		title: [{
			text: datas.timeline[i],
			left: '70%',
			top: '15%',
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
		},{
			text: '圆圈大小代表死亡人数',
			left: 'center',
			top: 25,
			textStyle: {
				color: '#ac533f',
				fontWeight: 'normal',
				fontSize: 12
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
			max: 300,
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
			data: double_bar.series[i],
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
	myChart1_3.setOption(option1_3);
	
	

	var option1_6 = {
		baseOption: {
			//设置时间轴
			timeline: {
				axisType: 'category',
				realtime: true,
				x: '5%',
				x2: '5%',
				loop: true,
				autoPlay: true,
				currentIndex: 12,
				playInterval: 1000,
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
			//			backgroundColor: '#fff',
			title: [{
				text: datas.timeline[n],
				//				x: '10%',
				//				y: '1%',
				textStyle: {
					color: "#fff",
					fontSize: 14,
					//				font-family:"黑体"
				}
			}],
			tooltip: { //提示框组件。
				show: true,
				trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
				formatter: "{b} : {c} "
			},
			color: '#fff',
			legend: {
				orient: 'horizontal', //图例的排列方向
				x: 'left', //图例的位置
				data: ['确诊人数'],
				show: false
			},

			grid: {
				left: 88,
				top: 10,
				bottom: 30,
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
				//				inverse: false,
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
						color: '#2998e1',
						label: {
							position: 'top',
							show: true, //是否显示标签
							//								rotate:40 ,
							textStyle: {
								size: 12,
								color: "#fff",
								//									textBorderColor: '#ffffff',
								//									textBorderWidth: 2
							},
							//								formatter:function(paramas){
							//									console.log(1)
							//									console.log(paramas.name)
							//									if(paramas.name == '1月21日'){console.log(datas.aaa[0]); return datas.aaa[0];}
							//									else if(paramas.name == '1月22日'){return "河南确认首例输入性新型冠状病毒感染的肺炎确诊病例";}
							//								}
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
		option1_6.baseOption.timeline.data.push(datas.timeline[n]);

		//		console.log(datas.policy)

		//数据写入series(最终改良版)
		var series_p = {
			title: {
				text: datas.timeline[n],
				subtext: datas.aaa[n],
				subtextStyle: {
					color: '#fff',
					fontSize: 14
				}
			},
			itemGap: -10,
			xAxis: {
				data: datas.timeline,

			},
			series: [{
				name: '政策',
				//				data: datas.policy[n]
			}]
		};
		option1_6.options.push(series_p);
	};
	myChart1_6.setOption(option1_6);

	myChart1_6.on("timelinechanged", function(obj) {
		obj = obj.currentIndex;
		//		console.log(obj);

		//更改地图+柱图
		option1_1.title = {
			// '('+(curCure/curTotal*100).toFixed(2)+'%)}'
			text: datas.timeline[obj] + '{nums1|\n\n确诊：   ' + datas.title_data.total[obj] + '}' +
				'\n\n{nums2|治愈：   ' + datas.title_data.Cure[obj] + '(' + (datas.title_data.Cure[obj] / datas.title_data.total[obj] * 100).toFixed(2) + '%)}' +
				'\n\n{nums3|轻型与普通型：' + datas.title_data.QWandPT[obj] + '}' +
				'\n\n{nums4|重型：   ' + datas.title_data.ZZ[obj] + '}' +
				'\n\n{nums5|危重型：' + datas.title_data.WZZ[obj] + '}' +
				'\n\n{nums6|死亡：   ' + datas.title_data.Death[obj] + '}',
		};

		option1_1.series[0].data = datas.data[obj];

		myChart1_1.setOption(option1_1);

		//更改玫瑰图
		option1_2.series[0].data = datas.data[obj].sort(function(a, b) {
			return a.value - b.value
		});
		myChart1_2.setOption(option1_2);

		//更改柱图+饼图
		//	   	console.log(xAxisDatas[obj]);
		//	    option1_3.xAxis.data = xAxisDatas[obj];
		//	    option1_3.series[0].data = Deaths[obj];
		//	    option1_3.series[1].data = WZZs[obj];
		//	    option1_3.series[2].data = ZZs[obj];
		//	    option1_3.series[3].data = QWandPTs[obj];
		//	    option1_3.series[4].data = Cures[obj];
		//	    option1_3.series[5].data = Totals[obj];

		//更改气泡图
		option1_3.title[0] = {
			text: datas.timeline[obj]
		};
		option1_3.series[0].data = double_bar.series[obj];
		myChart1_3.setOption(option1_3);
	});

});