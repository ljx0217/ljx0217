var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var chinaGeoCoordMap = {
//	'信大': [113.65, 34.76],
	'郑州市': [113.65, 34.76],
	'浙江舟山': [122.2, 30],
	'西藏林芝': [94.36, 29.65],
	"安徽黄山": [118.33, 29.72],
	'天津滨海新区': [117.68, 39.03],
	"云南德宏": [98.58, 24.43],
	"甘肃平凉": [106.68, 35.51],
	"青海西宁": [101.74, 36.56],
	"新疆喀什": [78.20, 38.51],
	"广东深圳": [114.07, 22.62],
	"云南昆明": [102.73, 25.04],
	"浙江杭州": [120.19, 30.26],
	"山西长治": [113.08, 36.18],
	"山东济南": [117, 36.65],
	"海南文昌": [110.72, 19.61],
	"新疆乌鲁木齐": [87.68, 43.77],
	"河北定州": [114.97, 38.52],
	"浙江杭州": [120.19, 30.26],
	"浙江宁波": [121.56, 29.86],
	"安徽合肥": [117.27, 31.86],
"北京市": [116.43,39.92],
"河北保定": [115.48,38.85],
};

//地名标签设置在圆圈下方
var chinaDatas_bottom = [
	
	
	[{
		name: '云南德宏',
		value: 0
	}],
	
	
	
	[{
		name: '云南昆明',
		value: 0
	}],
	
	
	
	[{
		name: '河北定州',
		value: 0
	}],
	
	[{
		name: '浙江宁波',
		value: 0
	}],
	
];

//地名标签设置在圆圈上方
var chinaDatas_top = [
[{
		name: '安徽合肥',
		value: 0
	}],
	[{
		name: '北京市',
		value: 0
	}],
	
	[{
		name: '浙江杭州',
		value: 0
	}],
	[{
		name: '山西长治',
		value: 0
	}]
];

//地名标签设置在圆圈右方
var chinaDatas_right = [
	[{
		name: '浙江舟山',
		value: 0
	}],[{
		name: '天津滨海新区',
		value: 0
	}],[{
		name: '山东济南',
		value: 0
	}],
];
//地名标签设置在圆圈左方
var chinaDatas_left = [
	[{
		name: '河北保定',
		value: 0
	}],[{
		name: '甘肃平凉',
		value: 0
	}],[{
		name: '安徽黄山',
		value: 0
	}],[{
		name: '郑州市',
		value: 0
	}],
	
	
];

var convertData = function(data) {
	var res = [];
	for(var i = 0; i < data.length; i++) {
		var dataItem = data[i];
		var toCoord =  [115.48,38.85];
		var fromCoord = chinaGeoCoordMap[dataItem[0].name];
		if(fromCoord && toCoord) {
			res.push([{
				coord: fromCoord,
				value: dataItem[0].value
			}, {
				coord: toCoord,
			}]);
		}
	}
	return res;
};
var series = [];
[['河北保定', chinaDatas_bottom]].forEach(function(item, i) {
	console.log(item)
	series.push({
			type: 'lines',
			zlevel: 2,
			effect: {
				show: true,
				period: 4, //箭头指向速度，值越小速度越快
				trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
				symbol: 'arrow', //箭头图标
				symbolSize: 5, //图标大小
			},
			lineStyle: {
				normal: {
					width: 1, //尾迹线条宽度
					opacity: 1, //尾迹线条透明度
					curveness: .3 //尾迹线条曲直度
				}
			},
			data: convertData(item[1])
		}, {
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: { //涟漪特效
				period: 4, //动画时间，值越小速度越快
				brushType: 'stroke', //波纹绘制方式 stroke, fill
				scale: 4 //波纹圆环最大限制，值越大波纹越大
			},
			label: {
				normal: {
					show: true,
					position: 'bottom', //显示位置
					offset: [5, 0], //偏移设置
					formatter: function(params) { //圆环显示文字
						return params.data.name;
					},
					fontSize: 20
				},
				emphasis: {
					show: true
				}
			},
			symbol: 'circle',
			symbolSize: function(val) {
				return 5 + val[2] * 5; //圆环大小
			},
			itemStyle: {
				normal: {
					show: false,
					color: '#f00'
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[0].name,
					value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
				};
			}),
		},
		//被攻击点
		{
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				period: 4,
				brushType: 'stroke',
				scale: 4
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					offset: [5, 0],
					color: '#0f0',
					formatter: '{b}',
					textStyle: {
						color: "#0f0"
					},
					fontSize: 20
				},
				emphasis: {
					show: true,
					color: "#f60"
				}
			},
			symbol: 'pin',
			symbolSize: 30,
			data: [{
				name: item[0],
				value: chinaGeoCoordMap[item[0]].concat([10]),
			}],
		}
	);
});


[['河北保定', chinaDatas_top]].forEach(function(item, i) {
	console.log(item)
	series.push({
			type: 'lines',
			zlevel: 2,
			effect: {
				show: true,
				period: 4, //箭头指向速度，值越小速度越快
				trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
				symbol: 'arrow', //箭头图标
				symbolSize: 5, //图标大小
			},
			lineStyle: {
				normal: {
					width: 1, //尾迹线条宽度
					opacity: 1, //尾迹线条透明度
					curveness: .3 //尾迹线条曲直度
				}
			},
			data: convertData(item[1])
		}, {
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: { //涟漪特效
				period: 4, //动画时间，值越小速度越快
				brushType: 'stroke', //波纹绘制方式 stroke, fill
				scale: 4 //波纹圆环最大限制，值越大波纹越大
			},
			label: {
				normal: {
					show: true,
					position: 'top', //显示位置
					offset: [5, 0], //偏移设置
					formatter: function(params) { //圆环显示文字
						return params.data.name;
					},
					fontSize: 20
				},
				emphasis: {
					show: true
				}
			},
			symbol: 'circle',
			symbolSize: function(val) {
				return 5 + val[2] * 5; //圆环大小
			},
			itemStyle: {
				normal: {
					show: false,
					color: '#f00'
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[0].name,
					value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
				};
			}),
		},
		//被攻击点
		{
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				period: 4,
				brushType: 'stroke',
				scale: 4
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					offset: [5, 0],
					color: '#0f0',
					formatter: '{b}',
					textStyle: {
						color: "#0f0"
					},
					fontSize: 20
				},
				emphasis: {
					show: true,
					color: "#f60"
				}
			},
			symbol: 'pin',
			symbolSize: 30,
			data: [{
				name: item[0],
				value: chinaGeoCoordMap[item[0]].concat([10]),
			}],
		}
	);
});


[['河北保定', chinaDatas_right]].forEach(function(item, i) {
	console.log(item)
	series.push({
			type: 'lines',
			zlevel: 2,
			effect: {
				show: true,
				period: 4, //箭头指向速度，值越小速度越快
				trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
				symbol: 'arrow', //箭头图标
				symbolSize: 5, //图标大小
			},
			lineStyle: {
				normal: {
					width: 1, //尾迹线条宽度
					opacity: 1, //尾迹线条透明度
					curveness: .3 //尾迹线条曲直度
				}
			},
			data: convertData(item[1])
		}, {
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: { //涟漪特效
				period: 4, //动画时间，值越小速度越快
				brushType: 'stroke', //波纹绘制方式 stroke, fill
				scale: 4 //波纹圆环最大限制，值越大波纹越大
			},
			label: {
				normal: {
					show: true,
					position: 'right', //显示位置
					offset: [5, 0], //偏移设置
					formatter: function(params) { //圆环显示文字
						return params.data.name;
					},
					fontSize: 20
				},
				emphasis: {
					show: true
				}
			},
			symbol: 'circle',
			symbolSize: function(val) {
				return 5 + val[2] * 5; //圆环大小
			},
			itemStyle: {
				normal: {
					show: false,
					color: '#f00'
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[0].name,
					value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
				};
			}),
		},
		//被攻击点
		{
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				period: 4,
				brushType: 'stroke',
				scale: 4
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					offset: [5, 0],
					color: '#0f0',
					formatter: '{b}',
					textStyle: {
						color: "#0f0"
					},
					fontSize: 20
				},
				emphasis: {
					show: true,
					color: "#f60"
				}
			},
			symbol: 'pin',
			symbolSize: 30,
			data: [{
				name: item[0],
				value: chinaGeoCoordMap[item[0]].concat([10]),
			}],
		}
	);
});


[['河北保定', chinaDatas_left]].forEach(function(item, i) {
	console.log(item)
	series.push({
			type: 'lines',
			zlevel: 2,
			effect: {
				show: true,
				period: 4, //箭头指向速度，值越小速度越快
				trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
				symbol: 'arrow', //箭头图标
				symbolSize: 5, //图标大小
			},
			lineStyle: {
				normal: {
					width: 1, //尾迹线条宽度
					opacity: 1, //尾迹线条透明度
					curveness: .3 //尾迹线条曲直度
				}
			},
			data: convertData(item[1])
		}, {
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: { //涟漪特效
				period: 4, //动画时间，值越小速度越快
				brushType: 'stroke', //波纹绘制方式 stroke, fill
				scale: 4 //波纹圆环最大限制，值越大波纹越大
			},
			label: {
				normal: {
					show: true,
					position: 'left', //显示位置
					offset: [5, 0], //偏移设置
					formatter: function(params) { //圆环显示文字
						return params.data.name;
					},
					fontSize: 20
				},
				emphasis: {
					show: true
				}
			},
			symbol: 'circle',
			symbolSize: function(val) {
				return 5 + val[2] * 5; //圆环大小
			},
			itemStyle: {
				normal: {
					show: false,
					color: '#f00'
				}
			},
			data: item[1].map(function(dataItem) {
				return {
					name: dataItem[0].name,
					value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
				};
			}),
		},
		//被攻击点
		{
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			rippleEffect: {
				period: 4,
				brushType: 'stroke',
				scale: 4
			},
			label: {
				normal: {
					show: true,
					position: 'right',
					offset: [5, 0],
					color: '#0f0',
					formatter: '{b}',
					textStyle: {
						color: "#0f0"
					},
					fontSize: 20
				},
				emphasis: {
					show: true,
					color: "#f60"
				}
			},
			symbol: 'pin',
			symbolSize: 30,
			data: [{
				name: item[0],
				value: chinaGeoCoordMap[item[0]].concat([10]),
			}],
		}
	);
});


option = {
	tooltip: {
		trigger: 'item',
		backgroundColor: 'rgba(166, 200, 76, 0.82)',
		borderColor: '#FFFFCC',
		showDelay: 0,
		hideDelay: 0,
		enterable: true,
		transitionDuration: 0,
		extraCssText: 'z-index:100',
		formatter: function(params, ticket, callback) {
			//根据业务自己拓展要显示的内容
			var res = "";
			var name = params.name;
			var value = params.value[params.seriesIndex + 1];
			res = "<span style='color:#fff;'>" + name + "</span><br/>数据：" + value;
			return res;
		}
	},
	backgroundColor: "#013954",
	visualMap: { //图例值控制
		min: 0,
		max: 1,
		calculable: true,
		show: true,
		color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
		textStyle: {
			color: '#fff'
		}
	},
	geo: {
		map: 'china',
		zoom: 1.2,
		label: {
			emphasis: {
				show: false
			}
		},
		roam: true, //是否允许缩放
		itemStyle: {
			normal: {
				color: 'rgba(51, 69, 89, .5)', //地图背景色
				borderColor: '#516a89', //省市边界线00fcff 516a89
				borderWidth: 1
			},
			emphasis: {
				color: 'rgba(37, 43, 61, .5)' //悬浮背景
			}
		}
	},
	series: series
};

myChart.setOption(option);