var myChart_33 = echarts.init(document.getElementById('chart33'));
var app = {};
option = null;
$.get('data/河南.json', function(result) {
	var datas = [];
	datas = result;
	var option = {
		backgroundColor: '#fff',
		title: {
			text: '数据来源：河南省卫生健康委员会\n\n数据时间：截止2020年2月10日24:00',
			x: '25%',
			y: '78%',
			textStyle: {
				fontSize: 12,
				//				font-family:"黑体"
			}
		},
		tooltip: { //提示框组件。
			show: true,
			trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
			formatter: "{b} : {c} ({d}%)"
		},
		color:'#fff',
		legend: {
			orient: 'horizontal', //图例的排列方向
			x: 'left', //图例的位置
			data: ['确诊人数']
		},

		visualMap: { //颜色的设置  dataRange
			x: '70%',
			y: '60%',
			type: 'continuous', // 定义为连续型 viusalMap
			min: 0, //指定 visualMapContinuous 组件的允许的最小值
			max:230, //指定 visualMapContinuous 组件的允许的最大值
			range: [0, 230],
			calculable: true,
			
		},
		//		bmap: {
		////      center: [104.114129, 37.550339],
		////      zoom: 5,
		//      roam: true,
		//    },
		toolbox: { //工具栏
			show: true,
			orient: 'vertical', //工具栏 icon 的布局朝向
			x: 'right',
			y: 'center',
			feature: { //各工具配置项。
				mark: {
					show: true
				},

				dataView: {
					show: true,
					readOnly: false
				}, //数据视图工具，可以展现当前图表所用的数据，编辑后可以动态更新。
				restore: {
					show: true
				}, //配置项还原。
				saveAsImage: {
					show: true
				} //保存为图片。
			}
		},
		roamController: { //控制地图的上下左右放大缩小 图上没有显示
			show: true,
			x: 'right',
			mapTypeControl: {
				'河南': true
			}
		},
		series: [{
				name: '确诊人数',
				type: 'map',
				mapType: '河南',
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
							formatter: "{b}\n{c} 例",
						},
						color:'#013954'
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
				data: datas
				//			{
				//				name :'海淀区',
				//				value :21000
				//			},{
				//				name :''
				//			}

				//			data: datas
			},
			
		]
	};
	myChart_33.setOption(option);
	
});