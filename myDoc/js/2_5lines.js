var dom = document.getElementById("chart2_5");
mychart2_5 = echarts.init(dom);
var color = ['#f6da86', '#007dff', '#50a4fc'];
$.get("data/curve.json", function(data) {
	var option2_5 = {
		title: {
			text: '河南省人口流入图',
			x: '10%',
			textStyle: {
				color: '#fff',
				fontSize: 14
			}
		},
		//					backgroundColor:'#2d84ae',
		grid: {
			top: 5,
			bottom: 20
		},
		xAxis: [
			//						{
			//							type:"category",
			//							axisTick:{
			//								show:false,
			//								alignWithLabel:true,
			//								lineStyle:{
			//									color:'red'
			//								}
			//							},
			//							axisLabel:{
			//								interval:0,
			//								rotate:60,
			//								fontSize:11,
			//								fontWeight:'bold'
			//							},
			//							axisLine:{
			//								lineStyle:{
			//									color:'#013954'
			//								}
			//							},
			//							data:[
			//								"腊月初七","腊月初八","腊月初九",
			//								"腊月初十","腊月十一","腊月十二",
			//								"腊月十三","腊月十四","腊月十五",
			//								"腊月十六","腊月十七","腊月十八",
			//								"腊月十九","腊月廿","腊月廿一",
			//								"腊月廿二","腊月廿三","腊月廿四",
			//								"腊月廿五","腊月廿六","腊月廿七",
			//								"腊月廿八","腊月廿九","腊月三十",
			//								"正月初一","正月初二","正月初三",
			//								"正月初四","正月初五","正月初六",
			//								"正月初七","正月初八","正月初九",
			//								"正月初十","正月十一","正月十二",
			//								"正月十三","正月十四","正月十五",
			//								"正月十六","正月十七","正月十八",
			//								"正月十九","正月廿","正月廿一",
			//								"正月廿二","正月廿三","正月廿四",
			//								"正月廿五","正月廿六","正月廿七",
			//								"正月廿八","正月廿九","二月初一",
			//								"二月初二","二月初三","二月初四",
			//								"二月初五","二月初六","二月初七"	
			//							]
			//						},
			{
				type: "category",
				axisTick: {
					alignWithLabel: true
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#fff',
						fontSize:10
					},
//					interval: 0,
//					rotate: -60
				},
				axisLine: {
					onZero: false,
					lineStyle: {
						color: "#FFF"
					}
				},
				data: [
					'01-01', '01-02', '01-03', '01-04', '01-05',
					'01-06', '01-07', '01-08', '01-09', '01-10',
					'01-11', '01-12', '01-13', '01-14', '01-15',
					'01-16', '01-17', '01-18', '01-19', '01-20',
					'01-21', '01-22', '01-23', '01-24', '01-25',
					'01-26', '01-27', '01-28', '01-29', '01-30',
					'01-31', '02-01', '02-02', '02-03', '02-04',
					'02-05', '02-06', '02-07', '02-08', '02-09',
					'02-10', '02-11', '02-12', '02-13', '02-14',
					'02-15', '02-16', '02-17', '02-18', '02-19',
					'02-20', '02-21', '02-22', '02-23', '02-24',
					'02-25', '02-26', '02-27', '02-28', '02-29',
					'03-01', '03-02', '03-03', '03-04', '03-05',
					'03-06', '03-07'
				]
			}
		],
		yAxis: [{
			type: "value",
			axisLabel: {
				color: '#fff',
				fontSize: 12
			},
			axisLine: {
				show: false,
				lineStyle: {
					color: "#fff"
				}
			},
			splitLine:{
				show:false
			}
		}],
		tooltip: {

		},
		legend: {
			orient: 'horizontal',
			itemGap: 1,
			left: '220',
			top: 10,
			data: ['2019年迁徙规模数据', '2020年迁徙规模数据'],
			textStyle: {
				color: '#fff',
				fontSize: 10
			},
		},
		series: [{
				name: '2019年迁徙规模数据',
				type: 'line',
				smooth: true,
				xAxisIndex: 0,
				itemStyle: {
					color: '#43bbff'
				},
				lineStyle: {
					color: '#43bbff'
				},
				data: data["2019"]
			},
			{
				name: '2020年迁徙规模数据',
				type: 'line',
				smooth: true,
				itemStyle: {
					color: '#f6da86'
				},
				lineStyle: {
					color: '#f6da86'
				},
				data: data["2020"]
			}
		]
	};
	mychart2_5.setOption(option2_5);
})