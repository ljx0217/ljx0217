var myChart_22 = echarts.init(document.getElementById("chart1_4"));

// option 里面的内容基本涵盖你要画的图表的所有内容
var option = {
	
	title: [{
			left: 'left',
			text: '河南省病例日增变化图',
			textStyle: {
				color: '#fff',
				fontSize: 14
			},
		},

	],
	 tooltip: {
	 	show:true
//      trigger: 'item',
//      formatter: "{b} : {c}例"
    },

	legend: {
		orient: 'horizontal',
		itemGap:1,
//		left: '250',
		top: 20,
		data: ['日新增疑似病例', '日新增密切接触者',
			'日新增确诊病例', '日新增治愈病例'
		],
		textStyle: {
			color: '#fff',
			fontSize: 10
		},
	},
	grid: {
//				right: 55,
				top: 55,
				bottom: 20,
//				width: '85%',
//				height:'50%'
			},
	xAxis: {
		type: 'category',
		nameLocation: 'center',
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
		offset: 0,
		data: ['1-21', '1-22', '1-23', '1-24', '1-25', '1-26', '1-27', '1-28', '1-29', '1-30', '1-31', '2-1', '2-2', '2-3', '2-4', '2-5', '2-6', '2-7', '2-8', '2-9', '2-10','2-11', '2-12', '2-13', '2-14', '2-15', '2-16', '2-17', '2-18', '2-19', '2-20','2-21', '2-22', '2-23', '2-24'],
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
			show:false
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
			data: [, , , 1, 3, 18, 100, 78, 29, 4, 14, 17, 26, 44, 52, 45, 66, 56, 52, 56, 61, 60,56,207,59,63,68,59,52,53,53,54,43,22,16],
			label: {
				show: false,
			},
			markPoint: {
//				 symbol : 'narrow',
				data: [{
					name: '某个坐标',
					coord: [6, 100],
					symbolSize: [1, 1],
					label: {
						formatter: '100',
						fontWeight: 'bold',
						color: '#F4A460',
						position:'top'
					},
					itemStyle: {
						color: '#F4A460'
					}
				},{
					name: '某个坐标',
					coord: [23, 207],
					symbolSize: [1, 1],
					label: {
						formatter: '207',
						fontWeight: 'bold',
						color: '#F4A460',
						position:'top'
					},
					itemStyle: {
						color: '#F4A460'
					}
				}]
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
		
		{
			name: '日新增确诊病例',

			data:  [1, 4, 4, 23, 51, 45, 40, 38, 72, 74, 70, 71, 73, 109, 89, 87, 63, 67, 53, 40, 32, 30,34,15,28,19,15,11,5,4,2,3,1,0,0], 
			label: {
				show: false,
			},
			markPoint: {
//				 symbol : 'narrow',
				data: [{
					name: '某个坐标',
					coord: [13, 109],
					symbolSize: [15, 20],
					label: {
						formatter: '转折点',
						fontWeight: 'bold',
						color: '#43bbff',
						position:'top'
					},
					itemStyle: {
						color: '#f00'
					}
				}]
			},
//			markArea: {
//              data: [ [{
//                  name: '转折点',
//                  xAxis: '2-3',
//                  label:{
//                  	color:'#228B22',
//                  	position:'inside',
//                  	fontSize:16
//                  },
//                  itemStyle:{
//                  	color:'#fff',
//                  	opacity:.8
//                  }
//              }, {
//                  xAxis: '2-4'
//              }] ]
//          },
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#43bbff'
				}
			},
			type: 'line',
			yAxisIndex: 0,
		},
		{
			name: '日新增治愈病例',

			data: [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 10, 6, 21, 13, 14, 29, 34, 38, 29, 33,27,55,45,42,41,67,47,62,103,85,59,69,59],
			label: {
				show: false,
			},
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#228B22'
				}
			},
			type: 'line',
			yAxisIndex: 0,
			markPoint: {
//				 symbol : 'narrow',
				data: [{
					name: '某个坐标',
					coord: [30, 103],
					symbolSize: [1, 1],
					label: {
						formatter: '103',
						fontWeight: 'bold',
						color: '#228B22',
						position:'top'
					},
					itemStyle: {
						color: '#228B22'
					}
				}]
			},
		},

	]
};

myChart_22.setOption(option);