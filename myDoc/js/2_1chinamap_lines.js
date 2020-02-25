var dom = document.getElementById("chart2_1");
var myChart2_1 = echarts.init(dom);
var app = {};
option = null;
var chinaGeoCoordMap = {
	"安阳": [114.35511, 36.10849],
	"北京": [116.23128, 40.22077],
	"巩义": [113.02206, 34.74798],
	"湖北十堰": [110.76916, 32.65192],
	"湖北荆州": [112.70977, 29.976219],
	"湖北襄阳": [112.13555, 32.04487],
	"洛阳": [112.51078, 34.70431],
	"焦作": [113.23064, 35.24052],
	"漯河": [114.017372, 33.629681],
	"广西南宁": [108.27331, 22.78121],
	"南阳": [112.5396, 33.0036],
	"平顶山": [112.89888, 33.89889],
	"濮阳": [115.041298, 35.768234],
	"三门峡": [111.87449, 34.74725],
	"山东曹县": [115.54214, 34.82553],
	"商丘": [115.61396, 34.44379],
	"武汉": [114.02919, 30.58203],
	"湖南湘潭": [112.90737, 27.85632],
	"新乡": [113.90598, 35.3718],
	"信阳": [114.05857, 32.11683],
	"湖北宜昌": [111.43471, 30.53],
	"永城": [116.44946, 33.92915],
	"越南": [105.53, 21.01],
	"浙江金华": [120.24191, 29.28946],
	"郑州": [113.6401, 34.72468],
	"周口": [114.65048, 33.64738],
	"河南": [114.4668, 34.6234],
	"驻马店": [114.02, 32.98],
	"长垣": [114.68, 35.20],
	"鹤壁": [114.28, 35.75],
	"开封": [114.30, 34.80],
	"许昌": [113.85, 34.03],
	"上海": [121.47, 31.23],
	"广东深圳": [114.05, 22.55],
	"浙江义乌": [120.07, 29.30],
	"湖北黄冈": [114.88, 30.43],
	"湖北鄂州": [114.88, 30.40],
	"广东广州": [113.27, 23.13],
	"四川遂宁": [105.28, 30.52],
	"泰国": [100.29, 13.5],
	"山东济南": [117.38, 36.67],
	"湖北孝感": [113.92, 30.93],
	"广东广州": [113.27, 23.13],
	"云南昆明": [102.72, 25.05]
};

//省外数据用亮黄色
var chinaDatas_wuhan = [{
		"fromname": "武汉",
		"toname": "郑州",
		"value": "47"
	},
	{
		"fromname": "武汉",
		"toname": "鹤壁",
		"value": "6"
	},
	{
		"fromname": "武汉",
		"toname": "新乡",
		"value": "16"
	},

	{
		"fromname": "武汉",
		"toname": "南阳",
		"value": "43"
	},
	{
		"fromname": "武汉",
		"toname": "驻马店",
		"value": "2"
	},
	//{"fromname":"武汉","toname":"安阳","value":"1"},
	{
		"fromname": "武汉",
		"toname": "长垣",
		"value": "2"
	},
	{
		"fromname": "武汉",
		"toname": "永城",
		"value": "2"
	},
	{
		"fromname": "武汉",
		"toname": "洛阳",
		"value": "4"
	},
	{
		"fromname": "武汉",
		"toname": "开封",
		"value": "5"
	},
	{
		"fromname": "武汉",
		"toname": "平顶山",
		"value": "2"
	},

	{
		"fromname": "武汉",
		"toname": "濮阳",
		"value": "2"
	},
	{
		"fromname": "武汉",
		"toname": "许昌",
		"value": "8"
	},
	{
		"fromname": "武汉",
		"toname": "漯河",
		"value": "15"
	},
	{
		"fromname": "武汉",
		"toname": "商丘",
		"value": "24"
	},
	{
		"fromname": "武汉",
		"toname": "信阳",
		"value": "54"
	},
	{
		"fromname": "武汉",
		"toname": "周口",
		"value": "28"
	}

];

var chinaDatas_N_wuhan = [{
		"fromname": "越南",
		"toname": "郑州",
		"value": "2"
	},
	{
		"fromname": "泰国",
		"toname": "濮阳",
		"value": "2"
	},
	{
		"fromname": "广西南宁",
		"toname": "郑州",
		"value": "1"
	},
	{
		"fromname": "湖南湘潭",
		"toname": "郑州",
		"value": "1"
	},
	{
		"fromname": "湖北十堰",
		"toname": "郑州",
		"value": "1"
	},
	{
		"fromname": "北京",
		"toname": "郑州",
		"value": "1"
	},
	{
		"fromname": "北京",
		"toname": "商丘",
		"value": "1"
	},
	{
		"fromname": "北京",
		"toname": "信阳",
		"value": "1"
	},
	{
		"fromname": "湖北襄阳",
		"toname": "南阳",
		"value": "1"
	},
	{
		"fromname": "湖北荆州",
		"toname": "南阳",
		"value": "1"
	},
	{
		"fromname": "浙江金华",
		"toname": "永城",
		"value": "1"
	},
	{
		"fromname": "广西南宁",
		"toname": "商丘",
		"value": "1"
	},
	{
		"fromname": "山东曹县",
		"toname": "商丘",
		"value": "1"
	},
	{
		"fromname": "湖北宜昌",
		"toname": "安阳",
		"value": "1"
	},
	{
		"fromname": "上海",
		"toname": "焦作",
		"value": "1"
	},
	{
		"fromname": "上海",
		"toname": "洛阳",
		"value": "1"
	},
	{
		"fromname": "广东深圳",
		"toname": "开封",
		"value": "1"
	},
	{
		"fromname": "广东广州",
		"toname": "周口",
		"value": "1"
	},
	{
		"fromname": "浙江金华",
		"toname": "许昌",
		"value": "1"
	},
	{
		"fromname": "湖北黄冈",
		"toname": "郑州",
		"value": "1"
	},
	{
		"fromname": "四川遂宁",
		"toname": "濮阳",
		"value": "1"
	},
	{
		"fromname": "山东济南",
		"toname": "安阳",
		"value": "1"
	},
	{
		"fromname": "湖北孝感",
		"toname": "信阳",
		"value": "1"
	},
	{
		"fromname": "广东广州",
		"toname": "信阳",
		"value": "1"
	},
	{
		"fromname": "云南昆明",
		"toname": "郑州",
		"value": "1"
	},
];

var chinaDatas_wuhan_right = [{
		"fromname": "武汉",
		"toname": "安阳",
		"value": "10"
	},
	{
		"fromname": "武汉",
		"toname": "焦作",
		"value": "7"
	},
];

var chinaDatas_wuhan_left = [

	{
		"fromname": "武汉",
		"toname": "三门峡",
		"value": "5"
	},

];

var henanDatas = [{
		"fromname": "新乡",
		"toname": "新乡",
		"value": "3"
	},
	{
		"fromname": "三门峡",
		"toname": "三门峡",
		"value": "2"
	},
	{
		"fromname": "南阳",
		"toname": "南阳",
		"value": "21"
	},
	{
		"fromname": "永城",
		"toname": "永城",
		"value": "5"
	},
	{
		"fromname": "郑州",
		"toname": "郑州",
		"value": "10"
	},
	{
		"fromname": "新乡",
		"toname": "郑州",
		"value": "1"
	},
	{
		"fromname": "周口",
		"toname": "郑州",
		"value": "1"
	},
	{
		"fromname": "郑州",
		"toname": "新乡",
		"value": "2"
	},

]

var convertData = function(data) {
	var res = [];
	for(var i = 0; i < data.length; i++) {
		var dataItem = data[i];
		var fromCoord = chinaGeoCoordMap[dataItem.fromname];
		var toCoord = chinaGeoCoordMap[dataItem.toname];;
		if(fromCoord && toCoord) {
			res.push([{
				coord: fromCoord,
//				value: dataItem.value
			}, {
				coord: toCoord,
			}]);
		}
	}
	return res;
};

var series = [{
			name: '确诊人数',
			type: 'map',
			map: 'china',
			geoIndex: 0,
			top: '28%',
		    left:'18%',
            bottom: '30%',
			roam: true, //是否开启鼠标缩放和平移漫游
			itemStyle: { //地图区域的多边形 图形样式
				normal: { //是图形在默认状态下的样式
					label: {
						//				show: true, //是否显示标签
						textStyle: {
							size: 12,
							color: "#013954",
							textBorderColor: '#ffffff',
							textBorderWidth: 2
						},
						formatter: "{b}\n{c} 例",
					},
					//			color: '#013954'
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
			data: [{
					"name": "湖北",
					"value": "31728"
				},
				{
					"name": "浙江",
					"value": "1092"
				},
				{
					"name": "广东",
					"value": "1159"
				},
				{
					"name": "河南",
					"value": "1105"
				},
				{
					"name": "湖南",
					"value": "879"
				},
				{
					"name": "江西",
					"value": "771"
				},
				{
					"name": "安徽",
					"value": "860"
				},
				{
					"name": "重庆",
					"value": "486"
				},
				{
					"name": "江苏",
					"value": "492"
				},
				{
					"name": "四川",
					"value": "417"
				},
				{
					"name": "山东",
					"value": "486"
				},
				{
					"name": "上海",
					"value": "302"
				},
				{
					"name": "北京",
					"value": "337"
				},
				{
					"name": "福建",
					"value": "261"
				},
				{
					"name": "黑龙江",
					"value": "360"
				},
				{
					"name": "广西",
					"value": "215"
				},
				{
					"name": "陕西",
					"value": "213"
				},
				{
					"name": "河北",
					"value": "239"
				},
				{
					"name": "云南",
					"value": "149"
				},
				{
					"name": "海南",
					"value": "138"
				},
				{
					"name": "山西",
					"value": "122"
				},
				{
					"name": "辽宁",
					"value": "108"
				},
				{
					"name": "天津",
					"value": "95"
				},
				{
					"name": "贵州",
					"value": "109"
				},
				{
					"name": "甘肃",
					"value": "86"
				},
				{
					"name": "吉林",
					"value": "81"
				},
				{
					"name": "内蒙古",
					"value": "58"
				},
				{
					"name": "宁夏",
					"value": "49"
				},
				{
					"name": "新疆",
					"value": "55"
				},
				{
					"name": "青海",
					"value": "18"
				},
				{
					"name": "香港",
					"value": "42"
				},
				{
					"name": "台湾",
					"value": "18"
				},
				{
					"name": "澳门",
					"value": "10"
				},
				{
					"name": "西藏",
					"value": "1"
				}

			]
		}];

[
	['河南', chinaDatas_wuhan]
].forEach(function(item, i) {
	console.log(item)
	console.log('i:' + i)
	series.push( {
			type: 'lines',
			zlevel: 2,
			visualMap: false,
			effect: {
				show: true,
				period: 4, //箭头指向速度，值越小速度越快
				trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
				symbol: 'arrow', //箭头图标
				symbolSize: 5, //图标大小
			},

			lineStyle: {
				normal: {
					color: '#f00',
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
			visualMap: false,
			//			rippleEffect: { //涟漪特效
			//				period: 4, //动画时间，值越小速度越快
			//				brushType: 'stroke', //波纹绘制方式 stroke, fill
			//				scale: 4 //波纹圆环最大限制，值越大波纹越大
			//			},
			label: {
				normal: {
					color: '#f00',
					show: true,
					position: 'bottom', //显示位置
					offset: [5, 0], //偏移设置
					formatter: function(params) { //圆环显示文字
						return params.data.name;
					},
					textBorderColor: '#fff',
					textBorderWidth:3,
					fontSize: 18
				},
				emphasis: {
					show: true
				}
			},
			symbol: 'circle',
			symbolSize: function(val) {
				return 5 + val[2] / 15; //圆环大小
			},
			itemStyle: {
				normal: {
					show: true,
					color: '#f00'
				}
			},
			data: item[1].map(function(dataItem) {
				var value = dataItem.value;
				console.log(dataItem.fromname)
				return {
					name: dataItem.fromname,
					value: chinaGeoCoordMap[dataItem.fromname]
				};
			}),
		},
		//被攻击点
		{
			name:'被攻击点',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			visualMap: false,
			//			rippleEffect: {
			//				period: 4,
			//				brushType: 'stroke',
			//				scale: 4
			//			},
			itemStyle: {
				normal: {
					show: true,
					color: 'rgb(0,125,255)'
				}
			},
			label: {
				normal: {
					show: false,
					position: 'bottom',
					offset: [5, 0],
					color: 'rgb(0,125,255)',
					formatter: '{b}',
					textStyle: {
						color: "rgb(0,125,255)"
					},
					fontSize: 12
				},
				emphasis: {
					show: true,
					color: "rgb(0,125,255)"
				}
			},
//			color:'rgb(0,125,255)',
			//			symbol: 'pin',
						symbolSize:0,
			data: item[1].map(function(dataItem) {
				var value = dataItem.value;
				console.log(dataItem.toname)
				return {
					name: dataItem.toname,
					value: chinaGeoCoordMap[dataItem.toname]
				};
			}),
		}
	);
});

[
	['河南', chinaDatas_wuhan_left]
].forEach(function(item, i) {
	console.log(item)
	console.log('i:' + i)
	series.push({
			type: 'lines',
			zlevel: 2,
			visualMap: false,
			effect: {
				show: true,
				period: 4, //箭头指向速度，值越小速度越快
				trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
				symbol: 'arrow', //箭头图标
				symbolSize: 5, //图标大小
			},

			lineStyle: {
				normal: {
					color: '#CD7F32',
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
			visualMap: false,
			//			rippleEffect: { //涟漪特效
			//				period: 4, //动画时间，值越小速度越快
			//				brushType: 'stroke', //波纹绘制方式 stroke, fill
			//				scale: 4 //波纹圆环最大限制，值越大波纹越大
			//			},
			label: {
				normal: {
					color: '#fff',
					show: false,
					position: 'bottom', //显示位置
					offset: [5, 0], //偏移设置
					formatter: function(params) { //圆环显示文字
						return params.data.name;
					},
					fontSize: 18
				},
				emphasis: {
					show: true
				}
			},
			symbol: 'circle',
			symbolSize: function(val) {
				return 5 + val[2] / 15; //圆环大小
			},
			itemStyle: {
				normal: {
					show: true,
					color: '#f00'
				}
			},
			data: item[1].map(function(dataItem) {
				var value = dataItem.value;
				console.log(dataItem.fromname)
				return {
					name: dataItem.fromname,
					value: chinaGeoCoordMap[dataItem.fromname]
				};
			}),
		},
		//被攻击点
		{
			name:'被攻击点',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			visualMap: false,
			//			rippleEffect: {
			//				period: 4,
			//				brushType: 'stroke',
			//				scale: 4
			//			},
			itemStyle: {
				normal: {
					show: false,
					color: 'rgb(0,125,255)'
				}
			},
			label: {
				normal: {
					show: false,
					position: 'left',
					offset: [5, 0],
					color: 'rgb(0,125,255)',
					formatter: '{b}',
					textStyle: {
						color: "rgb(0,125,255)"
					},
					fontSize: 12
				},
				emphasis: {
					show: true,
					color: "rgb(0,125,255)"
				}
			},
			//			symbol: 'pin',
						symbolSize:1,
			data: item[1].map(function(dataItem) {
				var value = dataItem.value;
				console.log(dataItem.toname)
				return {
					name: dataItem.toname,
					value: chinaGeoCoordMap[dataItem.toname]
				};
			}),
		}
	);
});

[
	['河南', chinaDatas_N_wuhan]
].forEach(function(item, i) {
	console.log(item)
	console.log('i:' + i)
	series.push({
			type: 'lines',
			zlevel: 2,
			visualMap: false,
			effect: {
				show: true,
				period: 4, //箭头指向速度，值越小速度越快
				trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
				symbol: 'arrow', //箭头图标
				symbolSize: 5, //图标大小
			},

			lineStyle: {
				normal: {
//					color: '#69c79b',
					color: '#87cefa',
					shadowBlur:2,
					shadowColor:'#007dfe',
					borderWidth:2,
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
			visualMap: false,
			//			rippleEffect: { //涟漪特效
			//				period: 4, //动画时间，值越小速度越快
			//				brushType: 'stroke', //波纹绘制方式 stroke, fill
			//				scale: 4 //波纹圆环最大限制，值越大波纹越大
			//			},
			label: {
				normal: {
					color:'#69c79b',
					show: true,
					position: 'right', //显示位置
					offset: [5, 0], //偏移设置
					formatter: function(params) { //圆环显示文字
						return params.data.name;
					},
					fontSize: 10,
					textBorderColor: '#090b09',
					textBorderWidth:1,
				},
				emphasis: {
					show: true
				}
			},
			symbol: 'circle',
			symbolSize: function(val) {
				return 5 + val[2] / 15; //圆环大小
			},
			itemStyle: {
				normal: {
					show: true,
					color: '#69c79b'
				}
			},
			data: item[1].map(function(dataItem) {
				var value = dataItem.value;
				console.log(dataItem.fromname)
				return {
					name: dataItem.fromname,
					value: chinaGeoCoordMap[dataItem.fromname]
				};
			}),
		},
		//被攻击点
		{
			name:'被攻击点',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			visualMap: false,
			//			rippleEffect: {
			//				period: 4,
			//				brushType: 'stroke',
			//				scale: 4
			//			},
			itemStyle: {
				normal: {
					show: false,
					color: 'rgb(0,125,255)'
				}
			},
			label: {
				normal: {
					show: false,
					position: 'right',
					offset: [5, 0],
					color: 'rgb(0,125,255)',
					formatter: '{b}',
					textStyle: {
						color: "rgb(0,125,255)"
					},
					fontSize: 12
				},
				emphasis: {
					show: true,
					color: "rgb(0,125,255)"
				}
			},
			//			symbol: 'pin',
						symbolSize:1,
			data: item[1].map(function(dataItem) {
				var value = dataItem.value;
				console.log(dataItem.toname)
				return {
					name: dataItem.toname,
					value: chinaGeoCoordMap[dataItem.toname]
				};
			}),
		}
	);
});

[
	['河南', chinaDatas_wuhan_right]
].forEach(function(item, i) {
	console.log(item)
	console.log('i:' + i)
	series.push({
			type: 'lines',
			zlevel: 2,
			visualMap: false,
			effect: {
				show: true,
				period: 4, //箭头指向速度，值越小速度越快
				trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
				symbol: 'arrow', //箭头图标
				symbolSize: 5, //图标大小
			},

			lineStyle: {
				normal: {
					color: '#f00',
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
			visualMap: false,
			//			rippleEffect: { //涟漪特效
			//				period: 4, //动画时间，值越小速度越快
			//				brushType: 'stroke', //波纹绘制方式 stroke, fill
			//				scale: 4 //波纹圆环最大限制，值越大波纹越大
			//			},
			label: {
				normal: {
					show: true,
					color: '#f00',
					position: 'bottom', //显示位置
					offset: [5, 0], //偏移设置
					formatter: function(params) { //圆环显示文字
						return params.data.name;
					},
					fontSize: 18
				},
				emphasis: {
					show: true
				}
			},
			symbol: 'circle',
			symbolSize: function(val) {
				return 5 + val[2] / 15; //圆环大小
			},
			itemStyle: {
				normal: {
					show: true,
					color: '#f00'
				}
			},
			data: item[1].map(function(dataItem) {
				var value = dataItem.value;
				console.log(dataItem.fromname)
				return {
					name: dataItem.fromname,
					value: chinaGeoCoordMap[dataItem.fromname]
				};
			}),
		},
		//被攻击点
		{
			name:'被攻击点',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			visualMap: false,
			//			rippleEffect: {
			//				period: 4,
			//				brushType: 'stroke',
			//				scale: 4
			//			},
			itemStyle: {
				normal: {
					show: true,
					color: 'rgb(0,125,255)'
				}
			},
			label: {
				normal: {
					show: false,
					position: 'right',
					offset: [5, 0],
					color: 'rgb(0,125,255)',
					formatter: '{b}',
					textStyle: {
						color: "rgb(0,125,255)"
					},
					fontSize: 12
				},
				emphasis: {
					show: true,
					color: "rgb(0,125,255)"
				}
			},
			//			symbol: 'pin',
						symbolSize:1,
			data: item[1].map(function(dataItem) {
				var value = dataItem.value;
				console.log(dataItem.toname)
				return {
					name: dataItem.toname,
					value: chinaGeoCoordMap[dataItem.toname]
				};
			}),
		}

	);
});

option = {
	title: [
			{
					left: 'center',
					text: '河南省确诊病例来源示意',
					textStyle: {
						color: '#fff',
						fontSize: 18
					},
				},

		{
			text: '\n武汉输入：{nums|' + '279' + '}',
			textStyle: {
				color: '#f00',
				fontSize: 14,
				rich: {
					nums: {
						color: '#f00',
						fontSize: 14,
						fontWeight: 800
					}
				}
			},
			left: '5%',
			top: '5%'
		},
		{
			text: '\n\n\n非武汉输入：{nums|' + '169' + '}',
			textStyle: {
				color: '#007dfe',
				fontSize: 14,
				rich: {
					nums: {
						color: '#007dfe',
						fontSize: 14,
						fontWeight: 800
					}
				}
			},
			left: '5%',
			top: '7%'
		}
	],
	tooltip: {
		trigger: 'item',
//		backgroundColor: 'rgba(166, 200, 76, 0.82)',
//		borderColor: '#FFFFCC',
		showDelay: 0,
		hideDelay: 0,
		enterable: true,
		transitionDuration: 0,
		extraCssText: 'z-index:100',
		formatter: function(params, ticket, callback) {
			//根据业务自己拓展要显示的内容
			var res = "";
			var name = params.name;
			var value = params.value;
			res = "<span style='color:#fff;'>" + name + "</span><br/>确诊：" + value;
			return res;
		}
	},
	//	backgroundColor: "#FFF",
	visualMap: { //颜色的设置  dataRange
		x: '70%',
		y: '60%',
		type: 'piecewise', // 定义为连续型 viusalMap
//		min: 0, //指定 visualMapContinuous 组件的允许的最小值
//		max: 2000, //指定 visualMapContinuous 组件的允许的最大值
//		range: [0, 500],
		calculable: true,
		show: false,
		pieces:[
		{min:2000},
		{min:800,max:2000},
		{min:300,max:800},
		{max:300}
		],
		color:["#013c62","#0c67a3","#2998e1",],
//		dimension: 2,
		//			color: ['#1d2d7f','#345eab','#237da7','#42efdd',]
	},
	legend: {
		data:['被攻击点','确诊人数'],
		color:'rgb(0,125,255)',
		show: false
	},
	geo: {
		map: 'china',
		zoom: 1.2,
//		center: [113.6401, 34.72468],
		label: {
			emphasis: {
				show: false
			}
		},
		roam: true, //是否允许缩放
		itemStyle: {
			normal: {
				borderColor: '#43bbff',
							borderWidth: 1,
							areaColor:'#fff',
							shadowColor: '#013c62',
						 shadowOffsetX: -5,
						 shadowOffsetY: 5,
						 shadowBlur: 15,
//				color: '#013954', //地图背景色
//				borderColor: '#516a89', //省市边界线00fcff 516a89
//				borderWidth: 1
			},
			emphasis: {
				color: '#336699' //悬浮背景
			}
		}
	},
	series: series
};

myChart2_1.setOption(option);

myChart2_1.on('click', function(params) {
			//		var dataIndex = params.dataIndex;
			console.log(params.name);
			if(params.name=="河南"){
				window.location.href="河南省各市比较分析.html"; 
			}
		});