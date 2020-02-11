var myChart66 = echarts.init(document.getElementById("chart66"));
ajax = $.get('data/lines_data.json').done(function (data) {
	var dates = data.dates
	var categories = data.categories
	var total = data.total
	var cure = data.cure
	var death = data.death
	var zhongzheng = data.zhongzheng
	var weizhongzheng = data.weizhongzheng
	var zhiliaozhong = data.zhiliaozhong;
	
	var curLen = dates.length;
	var curTotal = total[curLen-1];
	var curCure = cure[curLen-1];
	var curDeath = death[curLen-1];
	var curZZ = zhongzheng[curLen-1];
	var curWZZ = weizhongzheng[curLen-1];
	var curZLZ = zhiliaozhong[curLen-1];
	
// option 里面的内容基本涵盖你要画的图表的所有内容
var option = {
	title: [{
//		top:'10%',
			left: 'center',
			text: '河南省确诊病例人数变化',
			textStyle: {
				color: '#fff',
				fontSize: 16
			},
		},
		
		{
			text: '\n确诊：    {nums|' + total[total.length - 1] + '}',
			textStyle: {
				color: '#389BB7',
				fontSize: 12,
				rich: {
					nums: {
						color: '#389BB7',
						fontSize: 12,
						fontWeight: 800
					}
				}
			},
			left: '0%'
		},
		{
			text: '\n\n治愈：   {nums|' + cure[cure.length - 1] + '(' + (curCure / curTotal * 100).toFixed(2) + '%)}',
			textStyle: {
				color: '#69c79b',
				fontSize: 12,
				rich: {
					nums: {
						color: '#69c79b',
						fontSize: 12,
						fontWeight: 800
					}
				}
			},
			left: '0%'
		},
		{
			text: '\n\n\n轻型与普通型：{nums|' + zhiliaozhong[zhiliaozhong.length - 1] + '(' + (curZLZ / curTotal * 100).toFixed(2) + '%)}',
			textStyle: {
				color: '#f88c43',
				fontSize: 12,
				rich: {
					nums: {
						color: '#f88c43',
						fontSize: 12,
						fontWeight: 800
					}
				}
			},
			left: '0%'
		},
		{
			text: '\n\n\n\n重型：  {nums|' + zhongzheng[zhongzheng.length - 1] + '(' + (curZZ / curTotal * 100).toFixed(2) + '%)}',
			textStyle: {
				color: '#e87272',
				fontSize: 12,
				rich: {
					nums: {
						color: '#e87272',
						fontSize: 12,
						fontWeight: 800
					}
				}
			},
			left: '0%'
		},
		{
			text: '\n\n\n\n\n危重型：{nums|' + weizhongzheng[weizhongzheng.length - 1] + '(' + (curWZZ / curTotal * 100).toFixed(2) + '%)}',
			textStyle: {
				color: '#e80000',
				fontSize: 12,
				rich: {
					nums: {
						color: '#e80000',
						fontSize: 12,
						fontWeight: 800
					}
				}
			},
			left: '0%'
		},
		{
			text: '\n\n\n\n\n\n死亡：  {nums|' + death[death.length - 1] + '(' + (curDeath / curTotal * 100).toFixed(2) + '%)}',
			textStyle: {
				color: '#6f0000',
				fontSize: 12,
				rich: {
					nums: {
						color: '#6f0000',
						fontSize: 12,
						fontWeight: 800
					}
				}
			},
			left: '0%'
		}
	],
	legend: {
		orient: 'horizontal',
		     left: '150',
		top: '10%',
		textStyle: {
			color: '#fff',
			fontSize: 10,
		},
		data: [
			'总人数', '治愈', '轻型和普通型', '重型', '危重型', '死亡'
		]
	},
	grid: {
//				right: 130,
//				top: 180,
//				bottom: 100,
				width: '90%',
				height:'40%'
			},
	xAxis: {
		type: 'category',
		axisLabel: { //坐标轴刻度标签的相关设置。
			interval: 0,
			rotate:40 ,
//			rotate: "0",
			align: 'right',
			color: '#fff',
			fontSize: 10,
		},
		nameLocation: 'center',
		axisTick: {
			alignWithLabel: true
		},
		data: categories
	},
	yAxis: [{
			type: 'value',
			name: '人数',
			show:false,
			axisLabel: {
				color: '#fff',
				formatter: '{value} '
			},
			splitLine: {
				show: false
			},
			//scale:true,/*按比例显示*/
	}
	],

	series: [{
			name: '死亡',
			symbol: "none",
			data: death,
			stack: '总量',

			areaStyle: {},
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: ' #A52A2A'
				}
			},
			type: 'line',
			yAxisIndex: 0,
		},
		{
			name: '危重型',
			data: weizhongzheng,
			stack: '总量',
			areaStyle: {},
			//        markPoint: {
			//        // symbol : 'narrow',
			//     data: [
			//         {
			//             name: '某个坐标',
			//             coord: [9, 5.8],
			//             symbolSize:[10,10],
			//             label:{
			//                 formatter:'5.3%',
			//                 fontWeight :'bold',
			//                 color:'#FF0000',
			//             },
			//             itemStyle:{
			//                 color:'#FFFFFF'
			//             }
			//         }
			//     ]
			// },

			//smooth:true,
			symbol: 'none',
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#ff0000'
				}
			},
			type: 'line',
			yAxisIndex: 0,
		}, {
			name: '重型',
			data: zhongzheng,
			stack: '总量',
			areaStyle: {},

			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#e87272'
				}
			},
			//smooth:true,
			symbol: 'none',
			type: 'line',
			yAxisIndex: 0,
		},

		{
			name: '轻型和普通型',

			data: zhiliaozhong,
			stack: '总量',
			areaStyle: {},
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: '#F5EDAE'
				}
			},
			type: 'line',
			symbol: 'none',
			yAxisIndex: 0,
		}, {
			name: '治愈',

			data: cure,
			areaStyle: {},
			stack: '总量',
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: ' #69c79b'
				}
			},
			type: 'line',
			symbol: 'none',
			yAxisIndex: 0,
		}, {
			name: '总人数',
			type: 'line',
			// symbol:'none',            //stack: '总量',
			label: {

				normal: {
					show: true,
					position: 'top',
					color: '#fff',
					fontSize: 10,

				}
			},
			itemStyle: {
				normal: {　　　　　　　　 //这里是重点
					color: ' #389BB7',
					// opacity=1
				}
			},
			//   areaStyle: {},
			data: total
		}
	]
};

// 一定不要忘了这个，具体是干啥的我忘了，官网是这样写的使用刚指定的配置项和数据显示图表。  
myChart66.setOption(option);

});