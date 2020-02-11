var myChart_11 = echarts.init(document.getElementById("chart11"));

// option 里面的内容基本涵盖你要画的图表的所有内容
var option = {
	//	graphic: [{
	//		type: 'group',
	//		left: 30,
	//		bottom: 0,
	//		children: [{
	//				type: 'rect',
	//				z: 100,
	//				left: 'center',
	//				top: 'middle',
	//				shape: {
	//					width: 190,
	//					height: 30
	//				},
	//				style: {
	//					fill: '#fff',
	//					// stroke: '#555',
	//					lineWidth: 0,
	//					shadowBlur: 0,
	//					// shadowOffsetX: 3,
	//					// shadowOffsetY: 3,
	//					// shadowColor: 'rgba(0,0,0,0.3)'
	//				}
	//			},
	//			{
	//				type: 'text',
	//				z: 100,
	//				left: 'center',
	//				top: 'middle',
	//				style: {
	//					fill: '#333',
	//					text: [
	//						//  '数据来源：河南省卫生健康委员会',
	//						//  '数据时间：截止2020年2月6日24:00',
	//					].join('\n'),
	//					fontSize: '12px ',
	//					fontWeight: 'bold'
	//				}
	//			}
	//		]
	//	}],
	//	backgroundColor: "#FFFFFF",
	"title": {
		"text": "河南省确诊病例近十日变化图",
		// "subtext": "R0的定义：在发病初期，当所有人均为易感者时，一个病人在其平均患病期内所传染的人数。",
		x: 'center',
		y: 'top',
		textAlign: 'left',
		textStyle: {
			color: '#fff',
			fontSize: 16
		},
		subtextStyle: {
			color: '#fff',
			fontSize: 11

		},
	},
	legend: {
		orient: 'horizontal',
//		left: 'right',
		top: 'bottom',
		itemGap:1,
		data: ['全国增长率', '河南省增长率', '河南省每日新增人数'],
		textStyle: {
			color: '#fff',
			fontSize: 10
		},
	},
	grid: {
		left: 40,
//		top: 30,
//		bottom: 10,
//		width: '20%'
	},
	xAxis: {
		type: 'category',
		axisLabel: { //坐标轴刻度标签的相关设置。
			interval: 0,
			rotate: "40",
			color: '#fff',
			fontSize: 10
		},
		data: ['1-30', '1-31', '2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8'],

	},
	yAxis: [{
			type: 'value',
			name: '日增长率',
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
			name: '全国增长率',
			data: [26, 22, 22, 20, 19, 18.8217478, 15.1866469, 11.2178, 10.86, 7.68

			],
			markPoint: {
				// symbol : 'narrow',
				data: [{
					name: '某个坐标',
					coord: [9, 9],
					symbolSize: [10, 10],
					label: {
						formatter: '7.68%',
						fontWeight: 'bold',
						color: '#F4A460',
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
			symbol: 'none',
			type: 'line',
			yAxisIndex: 0,
		}, {
			name: '河南省增长率',
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

			data: [19.8863636, 16.8246445, 14.8073022, 19.2579505, 13.1851852, 13.1851852, 11.3874346, 7.4, 7.33, 5.3],
			markPoint: {
				// symbol : 'narrow',
				data: [{
					name: '某个坐标',
					coord: [9, 5.8],
					symbolSize: [10, 10],
					label: {
						formatter: '5.3%',
						fontWeight: 'bold',
						color: '#FF0000',
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
			data: [278, 352, 422, 493, 566, 675, 764, 851, 914, 981

			],

			type: 'bar',
			stack: '总人数',
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#0b0f34'
				}
			},
			name: '河南省累计人数',
			yAxisIndex: 1,
		},
		{

			data: [74, 70, 71, 73, 109, 89, 87, 63, 67, 53],
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#1DB7E5'
				}
			},

			type: 'bar',
			stack: '总人数',
			name: '河南省每日新增人数',
			yAxisIndex: 1,

		},
	]
};

// 一定不要忘了这个，具体是干啥的我忘了，官网是这样写的使用刚指定的配置项和数据显示图表。  
myChart_11.setOption(option);