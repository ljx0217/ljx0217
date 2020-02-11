var myChart1 = echarts.init(document.getElementById('chart2_11'));
var app = {};
option = null;
$.get('data/chart1/河南timeline_bar.json', function(result) {
	var datas = [];
	datas = result;
	console.log(datas);

	var option = {
		baseOption: {
			//设置时间轴
			timeline: {
				axisType: 'category',
				realtime: true,
				x: '5%',
				x2: '5%',
				loop: true,
				autoPlay: true,
				// currentIndex: 2,
				playInterval: 800,
				controlStyle: {
					position: 'left'
				},
				//type: 'number',
//				height: '400',
				symbol: 'circle',
				symbolSize: '8',
				lineStyle: {
//					 show: false,
					width: 1
				},
				padding: [
					500, // 上
					0, // 右
					0, // 下
					0, // 左
				],
				label:{
					fontSize:7,
					color:"#fff",
					rotate:40 ,
				}, //文本样式
				
				orient: 'horizontal',//水平放置
//				orient: 'vertical',
				data: []
			},
//			backgroundColor: '#fff',
			title: {
//				text: '数据来源：河南省卫生健康委员会\n\n数据时间：截止2020年2月10日24:00',
				x: '10%',
				y: '3%',
				textStyle: {
					color:"#fff",
					fontSize: 12,
					//				font-family:"黑体"
				}
			},
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
				show:false
			},
			
			grid: {
				right: 25,
				top: 200,
				bottom: 20,
				width: '85%',
				height:'50%'
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
					rotate:50 ,
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
				show:false,
				x: '1%',
				y: '40%',
				type: 'continuous', // 定义为连续型 viusalMap
				min: 0, //指定 visualMapContinuous 组件的允许的最小值
				max: 230, //指定 visualMapContinuous 组件的允许的最大值
				range: [0, 230],
				calculable: true,
//				dimension: 0,
//				color:["#FF9933","#CCFFCC"]
				textStyle:{
					color:"#fff"
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
					mapType: '河南',
				    top: '20%',
                    bottom: '30%',
					roam: true, //是否开启鼠标缩放和平移漫游
					itemStyle: { //地图区域的多边形 图形样式
						normal: { //是图形在默认状态下的样式
							label: {
								show: true, //是否显示标签
								textStyle: {
									size: 12,
									color: "#013954",
									textBorderColor: '#ffffff',
									textBorderWidth: 2
								},
								formatter: "{b}"
								//								formatter: "{b}\n{c} 例",
							},
							color: '#013954'
						},
						emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
							label: {
								show: true,
								textStyle: {
									color: "rgb(249, 249, 249)"
								}
							}
						}
					},
					top: "3%", //组件距离容器的距离
					data: []
				},
				{
					name: 'barSer',
					type: 'bar',
					roam: true,
					visualMap: true,
//					zlevel: 2,
					barMaxWidth: 12,
					barGap: 0,
					itemStyle: {
						normal: {
							label: {
								position: 'top',
								show: true, //是否显示标签
								rotate:40 ,
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

				}
			]
		},
		options: []
	};

	for(var n = 0; n < datas.timeline.length; n++) {
		//		console.log(data.timeline);
		option.baseOption.timeline.data.push(datas.timeline[n]);

		var yAxisData = [];

		for(var m = 0; m < datas.data[n].length; m++) {
			//			console.log(datas.data[n][m].name);
			yAxisData.push(datas.data[n][m].name);
		}

//		console.log(yAxisData)

		//数据写入series(最终改良版)
		var series_p = {
			title: {
				//				top: 5, //时间标签位置
//								left: "center",
				text: datas.timeline[n],
				textStyle: {
					color: '#fff',
					fontSize: 20
				},
//				itemGap: -560
			},
			xAxis: {
				data: yAxisData
			},
			series: [{
				name: "确诊人数",
				data: datas.data[n]
			}, {
				name: 'barSer',
				data: datas.data[n]
			}]
		};
		option.options.push(series_p);
	};

	myChart1.setOption(option);
	//	myChart1.on('click', function(params) {
	//		//		var dataIndex = params.dataIndex;
	//		console.log(params);
	//		if(params.name == '辽宁') {
	//
	//		}
	//	});
});