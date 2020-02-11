var myChart_22 = echarts.init(document.getElementById("chart22"));

// option 里面的内容基本涵盖你要画的图表的所有内容
var option = {
	//             graphic: [
	//      {
	//         type: 'group',
	//         left: 30,
	//         bottom: 0,
	//         children: [
	//             {
	//                 type: 'rect',
	//                 z: 100,
	//                 left: 'center',
	//                 top: 'middle',
	//                 shape: {
	//                     width: 190,
	//                     height: 30
	//                 },
	//                 style: {
	//                     fill: '#fff',
	//                    // stroke: '#555',
	//                     lineWidth: 0,
	//                     shadowBlur: 0,
	//                    // shadowOffsetX: 3,
	//                    // shadowOffsetY: 3,
	//                    // shadowColor: 'rgba(0,0,0,0.3)'
	//                 }
	//             },
	//             {
	//                 type: 'text',
	//                 z: 100,
	//                 left: 'center',
	//                 top: 'middle',
	//                 style: {
	//                     fill: '#333',
	//                     text: [
	//                       //  '数据来源：河南省卫生健康委员会',
	//                       //  '数据时间：截止2020年2月6日24:00',
	//                     ].join('\n'),
	//                     fontSize: '12px ',
	//                     fontWeight:'bold'
	//                 }
	//             }
	//         ]
	//     }
	// ],
	//	backgroundColor: "#FFFFFF",
	title: [{
			left: 'center',
			text: '河南省病例日增变化图',
			textStyle: {
				color: '#fff',
				fontSize: 16
			},
		},
//		{
//			text: '\n' + '2月10日',
//			textStyle: {
//				color: '#fff',
//				fontSize: 16,
//				fontWeight: 800
//			},
//			left: '1%',
//		},
		{
			text: '\n\n                疑似：{nums|' + '61' + '}',
			textStyle: {
				color: '#F4A460',
				fontSize: 12,
				rich: {
					nums: {
						color: '#F4A460',
						fontSize: 12,
						fontWeight: 800
					}
				}
			},
			left: '1%'
		},
		{
			text: '\n\n                                     确诊：{nums|' + '32' + '}',
			textStyle: {
				color: '#ff0000',
				fontSize: 12,
				rich: {
					nums: {
						color: '#ff0000',
						fontSize: 12,
						fontWeight: 800
					}
				}
			},
			left: '1%'
		},
		{
			text: '\n\n                                                            治愈：{nums|' + '29' + '}',
			textStyle: {
				color: '#228B22',
				fontSize: 12,
				rich: {
					nums: {
						color: '#228B22',
						fontSize: 12,
						fontWeight: 800
					}
				}
			},
			left: '1%'
		},
	],

	legend: {
		orient: 'horizontal',
		itemGap:1,
//		left: '250',
		top: 'bottom',
		data: ['日新增疑似病例', '日新增密切接触者',
			'日新增确诊病例', '日新增治愈病例'
		],
		textStyle: {
			color: '#fff',
			fontSize: 10
		},
	},
	xAxis: {
		type: 'category',
		nameLocation: 'center',
		axisLabel: { //坐标轴刻度标签的相关设置。
			interval: 0,
			rotate: "40",
			color: '#fff',
			fontSize: 10
		},
		offset: 0,
		data: ['1-21', '1-22', '1-23', '1-24', '1-25', '1-26', '1-27', '1-28', '1-29', '1-30', '1-31', '2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8', '2-9', '2-10'],
	},
	yAxis: [{
			type: 'value',
			name: '人数',
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
			},
			//scale:true,/*按比例显示*/
		},
		//  {
		//     type : 'value',
		//     name:'人数',
		//      axisLabel : {
		//        formatter: '{value} '
		//      }
		//  	,splitLine: {
		//        show: false
		//  	},
		// // //	scale:true,/*按比例显示*/
		//  }
	],

	series: [{
			name: '日新增疑似病例',
			data: [, , , 1, 3, 18, 100, 78, 29, 4, 14, 17, 26, 44, 52, 45, 66, 56, 52, 56, 61],
			label: {
				show: true,
			},
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#F4A460'
				}
			},
			//smooth:true,
			//  symbol: 'none',
			type: 'line',
			yAxisIndex: 0,
		},
		//     {name:'日新增医学观察者',

		//         data: [	303,	379,	263	,598,	418	,807,	1992,	1455,	23,	924,	1088,	780	,665	,255	,188,	49	,-9

		//        ],

		// itemStyle: {
		//             normal: {
		// 　　　　　　　　//这里是重点
		//                 color:'#40E0D0' 
		//                 }
		//             },
		// type: 'line',
		// yAxisIndex: 0,
		//     },
		{
			name: '日新增确诊病例',

			data: [1, 4, 4, 23, 51, 45, 40, 38, 72, 74, 70, 71, 73, 109, 89, 87, 63, 67, 53, 40, 32],
			label: {
				show: true,
			},
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#ff0000'
				}
			},
			type: 'line',
			yAxisIndex: 0,
		},
		{
			name: '日新增治愈病例',

			data: [, , , , , , , 1, 1, 1, 0, 1, 10, 6, 21, 13, 14, 29, 34, 38, 29

			],
			label: {
				show: true,
			},
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#228B22'
				}
			},
			type: 'line',
			yAxisIndex: 0,
		},

	]
};

myChart_22.setOption(option);