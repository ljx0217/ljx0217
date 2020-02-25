var dom = document.getElementById("chart2_1");
var myChart2_1 = echarts.init(dom);
var app = {};
option = null;

var chinaGeoCoordMap={
	'黑龙江省': [127.9688, 45.368],
	'内蒙古自治区': [110.3467, 41.4899],
	"吉林省": [125.8154, 44.2584],
	'北京市': [116.4551, 40.2539],
	"辽宁省": [123.1238, 42.1216],
	"河北省": [114.4995, 38.1006],
	"天津市": [117.4219, 39.4189],
	"山西省": [112.3352, 37.9413],
	"陕西省": [109.1162, 34.2004],
	"甘肃省": [103.5901, 36.3043],
	"宁夏回族自治区": [106.3586, 38.1775],
	"青海省": [101.4038, 36.8207],
	"新疆维吾尔自治区": [87.9236, 43.5883],
	"西藏自治区": [91.11, 29.97],
	"四川省": [103.9526, 30.7617],
	"重庆市": [108.384366, 30.439702],
	"山东省": [117.1582, 36.8701],
	"河南省": [113.4668, 34.6234],
	"江苏省": [118.8062, 31.9208],
	"安徽省": [117.29, 32.0581],
	"湖北省": [114.3896, 30.6628],
	"浙江省": [119.5313, 29.8773],
	"福建省": [119.4543, 25.9222],
	"江西省": [116.0046, 28.6633],
	"湖南省": [113.0823, 28.2568],
	"贵州省": [106.6992, 26.7682],
	"云南省": [102.9199, 25.4663],
	"广东省": [113.12244, 23.009505],
	"广西壮族自治区": [108.479, 23.1152],
	"海南省": [110.3893, 19.8516],
	'上海市': [121.4648, 31.2891]
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
var chinaDatas_province=[
	{"fromname":"安徽省","toname":"河南省","value":"20.59"},
	{"fromname":"山东省","toname":"河南省","value":"18.18"},
	{"fromname":"河北省","toname":"河南省","value":"9.48"},
	{"fromname":"山西省","toname":"河南省","value":"7.52"},
	{"fromname":"江苏省","toname":"河南省","value":"7.00"},
	{"fromname":"陕西省","toname":"河南省","value":"5.00"},
	{"fromname":"四川省","toname":"河南省","value":"3.93"},
	{"fromname":"湖北省","toname":"河南省","value":"3.66"},
	{"fromname":"广东省","toname":"河南省","value":"3.47"},
	{"fromname":"北京市","toname":"河南省","value":"3.21"},
	{"fromname":"浙江省","toname":"河南省","value":"2.84"},
	{"fromname":"上海市","toname":"河南省","value":"2.06"},
	{"fromname":"湖南省","toname":"河南省","value":"1.52"},
	{"fromname":"福建省","toname":"河南省","value":"1.48"},
	{"fromname":"甘肃省","toname":"河南省","value":"1.36"},
	{"fromname":"海南省","toname":"河南省","value":"1.13"},
	{"fromname":"江西省","toname":"河南省","value":"1.08"},
	{"fromname":"广西壮族自治区","toname":"河南省","value":"0.93"},
	{"fromname":"辽宁省","toname":"河南省","value":"0.91"},
	{"fromname":"天津市","toname":"河南省","value":"0.81"},
	{"fromname":"重庆市","toname":"河南省","value":"0.79"},
	{"fromname":"云南省","toname":"河南省","value":"0.59"},
	{"fromname":"贵州省","toname":"河南省","value":"0.53"},
	{"fromname":"内蒙古自治区","toname":"河南省","value":"0.51"},
	{"fromname":"黑龙江省","toname":"河南省","value":"0.38"},
	{"fromname":"吉林省","toname":"河南省","value":"0.32"},
	{"fromname":"新疆维吾尔自治区","toname":"河南省","value":"0.22"},
	{"fromname":"宁夏回族自治区","toname":"河南省","value":"0.19"},
	{"fromname":"青海省","toname":"河南省","value":"0.12"},
	{"fromname":"西藏自治区","toname":"河南省","value":"0.01"}
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
			label:{
				normal:{
					show:true
				}
			},
			itemStyle: { //地图区域的多边形 图形样式
				normal: { //是图形在默认状态下的样式
					label: {
						show: true, //是否显示标签
						fontSize:10,
						textStyle: {
							size: 12,
							position:'top',
							color: "#fff",
							textBorderColor: '#ffffff',
							textBorderWidth: 2
						},
						formatter: "{b}\n{c} 例",
					},
//					color: '#013954'
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
	['河南', chinaDatas_province]
].forEach(function(item, i) {
	console.log(item)
	console.log('i:' + i)
	series.push({
		name:'人口迁徙',
			type: 'lines',
			zlevel: 1,
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
					color: '#f9a136',
//					shadowBlur:2,
//					shadowColor:'#007dfe',
//					borderWidth:2,
					width: 1, //尾迹线条宽度
					opacity: 1, //尾迹线条透明度
					curveness: .3 //尾迹线条曲直度
				}
			},
			data: convertData(item[1])
		}, {
			name:'人口迁徙',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			zlevel: 2,
			visualMap: false,
			rippleEffect: { //涟漪特效
				period: 4, //动画时间，值越小速度越快
				brushType: 'stroke', //波纹绘制方式 stroke, fill
				scale: 4 //波纹圆环最大限制，值越大波纹越大
			},
			label: {
				normal: {
					color:'#f9a136',
					show: true,
					position: 'bottom', //显示位置
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
				return val[2]+5; //圆环大小
			},
			itemStyle: {
				normal: {
					show: false,
					color: '#f9a136'
				}
			},
			data: item[1].map(function(dataItem) {
				var value = dataItem.value;
				console.log(dataItem.fromname)
				return {
					name: dataItem.fromname,
					value: chinaGeoCoordMap[dataItem.fromname].concat(value)
				};
			}),
		},
		//被攻击点
		{
			name:'被攻击点',
			type: 'scatter',
			coordinateSystem: 'geo',
			zlevel: 1,
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
					value: chinaGeoCoordMap[dataItem.toname].concat(value)
				};
			}),
		}
	);
});

option = {
	title: [
			{
					left: 'center',
					text: '河南省人口迁入示意图',
					textStyle: {
						color: '#fff',
						fontSize: 18
					},
				},

//		{
//			text: '\n武汉输入：{nums|' + '279' + '}',
//			textStyle: {
//				color: '#f00',
//				fontSize: 14,
//				rich: {
//					nums: {
//						color: '#f00',
//						fontSize: 14,
//						fontWeight: 800
//					}
//				}
//			},
//			left: '5%',
//			top: '5%'
//		},
//		{
//			text: '\n\n\n非武汉输入：{nums|' + '169' + '}',
//			textStyle: {
//				color: '#007dfe',
//				fontSize: 14,
//				rich: {
//					nums: {
//						color: '#007dfe',
//						fontSize: 14,
//						fontWeight: 800
//					}
//				}
//			},
//			left: '5%',
//			top: '7%'
//		}
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
//		formatter: function(params, ticket, callback) {
//			//根据业务自己拓展要显示的内容
//			var res = "";
//			var name = params.name;
//			var value = params.value;
//			res = "<span style='color:#fff;'>" + name + "</span><br/>确诊：" + value;
//			return res;
//		}
	},
	//	backgroundColor: "#FFF",
	visualMap: { //颜色的设置  dataRange
		x: '80%',
		y: '50%',
		type: 'piecewise', // 定义为分段型 viusalMap
//		min: 0, //指定 visualMapContinuous 组件的允许的最小值
//		max: 2000, //指定 visualMapContinuous 组件的允许的最大值
//		range: [0, 500],
		calculable: true,
		show: true,
		pieces:[
		{min:2000},
		{min:800,max:2000},
		{min:300,max:800},
		{max:300}
		],
		color:["#013c62","#0c67a3","#2998e1",],
		textStyle:{
					color:"#fff"
				}, //文本样式
		dimension: 0,
		seriesIndex:0
		//			color: ['#1d2d7f','#345eab','#237da7','#42efdd',]
	},
	color:'#f9a136',
	geo: {
		map: 'china',
		zoom: 1.2,
//		center: [113.6401, 34.72468],
		label: {
			normal:{
				show: false,
				color:'#69c79b',
				position:'top',
				offset: [10, 10], //偏移设置
			    fontSize: 10,
				textBorderColor: '#090b09',
				textBorderWidth:1,
			},
			emphasis: {
				show: false,
				color:'#69c79b',
			}
		},
		roam: true, //是否允许缩放
		itemStyle: {
			normal: {
				borderColor: '#43bbff',
							borderWidth: 1,
							areaColor:'#fff',
//							shadowColor: '#013c62',
//						 shadowOffsetX: -5,
//						 shadowOffsetY: 5,
//						 shadowBlur: 15,
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