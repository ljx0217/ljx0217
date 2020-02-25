var myChart1_5 = echarts.init(document.getElementById("chart1_5"));

// option 里面的内容基本涵盖你要画的图表的所有内容
var option = {
	
	"title": {
		"text": "河南省确诊病例指数分析",
		// "subtext": "R0的定义：在发病初期，当所有人均为易感者时，一个病人在其平均患病期内所传染的人数。",
		x: 'left',
		y: 'top',
		textAlign: 'left',
		textStyle: {
			color: '#fff',
			fontSize: 14
		},
		subtextStyle: {
			color: '#fff',
			fontSize: 11

		},
	},
	tooltip:{
		show:true,
		trigger: 'item',
//      formatter: "{b} : {c} %"
	},
	legend: {
		orient: 'horizontal',
//		left: 'right',
		top: 20,
		itemGap:1,
		data: ['扩散指数', '消亡指数', '河南省每日新增人数'],
		textStyle: {
			color: '#fff',
			fontSize: 10
		},
	},
	grid: {
//		left: 40,
		top: 30,
		bottom: 30,
//		width: '20%'
	},
	xAxis: {
		type: 'category',
		axisLine:{
			lineStyle:{
				color:'#fff'
			}
		},
		axisLabel: { //坐标轴刻度标签的相关设置。
//			interval: 0,
//			rotate: "40",
			color: '#fff',
			fontSize: 12
		},
		data: ['1-21', '1-22','1-23', '1-24','1-25','1-26', '1-27','1-28', '1-29','1-30', '1-31', '2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8', '2-9', '2-10', '2-11', '2-12', '2-13', '2-14', '2-15', '2-16', '2-17', '2-18', '2-19', '2-20', '2-21', '2-22'],

	},
	yAxis: [{
			type: 'value',
			name: '日增长率',
			show:false,
			axisLabel: {
				formatter: '{value}(%) ',
				color: '#fff',
				fontSize: 10
			},
			splitLine: {
				show: false
			},
			nameTextStyle: {
				color: '#fff'
			},
			//			offset:-10
			//scale:true,/*按比例显示*/
		},
		{
			type: 'value',
			name: '总人数',
			show:false,
			axisLabel: {
				formatter: '{value} ',
				color: '#fff',
				fontSize: 10
			},
			splitLine: {
				show: false
			},
			nameTextStyle: {
				color: '#fff'
			}
			//	scale:true,/*按比例显示*/
		}
	],

	series: [{
			name: '扩散指数',
			data: [,,,,,0.542168675,0.3125,0.226190476,0.349514563,0.26618705,0.198863636,0.168246445,0.148073022,0.192579505,0.131851852,0.113874346,0.074030552,0.073304158,0.054026504,0.038722168,0.029822926,0.027149321,0.029955947,0.01283148,0.023648649,0.015676568,0.012185215,0.00882825,0.003977725,0.002377179,0.001581028],
			markPoint: {
				// symbol : 'narrow',
				data: [{
					name: '某个坐标',
					coord: [5, 0.54],
					symbolSize: [1, 1],
					label: {
						formatter: '0.54',
						fontWeight: 'bold',
						color: '#F4A460',
						position:'left'
					},
					itemStyle: {
						color: '#FFFFFF'
					}
				},{
					name: '某个坐标',
					coord: [30, 0.0015],
					symbolSize: [1, 1],
					label: {
						formatter: '0.0015',
						fontWeight: 'bold',
						color: '#F4A460',
						position:'right'
					},
					itemStyle: {
						color: '#FFFFFF'
					}
				}]
			},
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#F4A460'
				}
			},
			smooth: true,
//			symbol: 'none',
			type: 'line',
			yAxisIndex: 0,
		}, {
			name: '消亡指数',
			//    markLine : {
			// 							symbol:"none",               //去掉警戒线最后面的箭头
			// 							label:{
			// 								position:"start"          //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
			// 							},
			//                             data : [{
			// 								silent:false,             //鼠标悬停事件  true没有，false有
			// 								lineStyle:{               //警戒线的样式  ，虚实  颜色
			//                                     type:"solid",
			// 									color:"#FE5153",
			// 								},
			// 								yAxis: 1           // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
			// 							}]
			//                         },

			data: [,0,0,0,0.03125,0,0,0.011904762,0.004854369,0.003597122,0,0.002369668,0.020283976,0.010600707,0.031111111,0.017015707,0.017626322,0.032822757,0.036697248,0.03678606,0.027958993,0.030769231,0.025550661,0.047904192,0.039695946,0.034653465,0.035743298,0.056179775,0.037390613,0.049128368,0.081422925],
			markPoint: {
				// symbol : 'narrow',
				data: [{
					name: '某个坐标',
					coord: [4, 0.031],
					symbolSize: [1, 1],
					label: {
						formatter: '0.031',
						fontWeight: 'bold',
						color: '#FF0000',
						position:'left'
					},
					itemStyle: {
						color: '#FFFFFF'
					}
				},{
					name: '某个坐标',
					coord: [30,0.081],
					symbolSize: [1, 1],
					label: {
						formatter: '0.081',
						fontWeight: 'bold',
						color: '#FF0000',
						position:'right'
					},
					itemStyle: {
						color: '#FFFFFF'
					}
				}]
			},

			smooth: true,
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#FE5050'
				}
			},
			type: 'line',
			yAxisIndex: 0,
		},
		{
			data: [0,1,5,9,32,83,128,168,206,278,352,422,493,566,675,764,851,914,981,1033,1073,1105,1135,1169,1184,1212,1231,1246,1257,1262,1265],
			type: 'bar',
			stack: '总人数',
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#041d55',
					opacity:.0
				}
			},
			
			name: '河南省累计人数',
			yAxisIndex: 1,
		},
		{

			data: [1,4,4,24,51,45,40,38,72,74,70,71,73,109,89,87,63,67,53,40,32,30,34,15,28,19,15,11,5,3,2],
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#1DB7E5'
				}
			},

			type: 'bar',
			stack: '总人数',
			name: '河南省每日新增人数',
			yAxisIndex: 1,
			markPoint: {
				// symbol : 'narrow',
				data: [{
					name: '某个坐标',
					coord: [13,600],
					symbolSize: [1, 1],
					label: {
						formatter: '新增109例',
						fontWeight: 'bold',
						color: '#1DB7E5',
						position:'right'
					},
					itemStyle: {
						color: '#1DB7E5'
					}
				}]
			},

		},
	]
};

// 一定不要忘了这个，具体是干啥的我忘了，官网是这样写的使用刚指定的配置项和数据显示图表。  
myChart1_5.setOption(option);