var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var allData = {
	"citys": [{
			"name": "智利",
			"value": [-69.201, -23.176],
			"symbolSize": 2
		},
		{
			"name": "越南",
			"value": [105.373, 21.75],
			"symbolSize": 2
		},
		{
			"name": "英国",
			"value": [-1.259, 52.289],
			"symbolSize": 20
		},
		{
			"name": "印度尼西亚",
			"value": [114.045, -0.739],
			"symbolSize": 9
		},
		{
			"name": "印度",
			"value": [78.236, 22.741],
			"symbolSize": 17
		},
		{
			"name": "意大利",
			"value": [11.1084, 44.3713],
			"symbolSize": 2
		},
		{
			"name": "以色列",
			"value": [34.834, 30.992],
			"symbolSize": 9
		},
		{
			"name": "伊朗",
			"value": [54.0418, 33.408],
			"symbolSize": 8
		},
		{
			"name": "伊拉克",
			"value": [43.278, 33.545],
			"symbolSize": 2
		},
		{
			"name": "牙买加",
			"value": [-77.477, 18.163],
			"symbolSize": 2
		},
		{
			"name": "叙利亚",
			"value": [38.322, 35.303],
			"symbolSize": 8
		},
		{
			"name": "匈牙利",
			"value": [19.618, 47.174],
			"symbolSize": 6
		},
		{
			"name": "新西兰",
			"value": [172.377, -42.558],
			"symbolSize": 2
		},
		{
			"name": "新加坡",
			"value": [103.81, 1.364],
			"symbolSize": 2
		},
		{
			"name": "希腊",
			"value": [21.617, 39.787],
			"symbolSize": 14
		},
		{
			"name": "西班牙",
			"value": [-3.388, 40.617],
			"symbolSize": 12
		},
		{
			"name": "乌兹别克斯坦",
			"value": [63.958, 41.757],
			"symbolSize": 9
		},
		{
			"name": "乌拉圭",
			"value": [-56.249, -32.948],
			"symbolSize": 2
		},
		{
			"name": "乌克兰",
			"value": [32.132, 49.364],
			"symbolSize": 8
		},
		{
			"name": "文莱",
			"value": [114.557, 4.452],
			"symbolSize": 2
		},
		{
			"name": "委内瑞拉",
			"value": [-64.588, 6.983],
			"symbolSize": 2
		},
		{
			"name": "土库曼斯坦",
			"value": [59.597, 39.584],
			"symbolSize": 2
		},
		{
			"name": "土耳其",
			"value": [34.188, 39.144],
			"symbolSize": 6
		},
		{
			"name": "突尼斯",
			"value": [9.421, 35.594],
			"symbolSize": 2
		},
		{
			"name": "特立尼达和多巴哥",
			"value": [-60.32, 11.18],
			"symbolSize": 2
		},
		{
			"name": "坦桑尼亚",
			"value": [34.146, -5.651],
			"symbolSize": 2
		},
		{
			"name": "泰国",
			"value": [100.845, 15.688],
			"symbolSize": 7
		},
		{
			"name": "塔吉克斯坦",
			"value": [72.597, 38.367],
			"symbolSize": 8
		},
		{
			"name": "斯里兰卡",
			"value": [80.727, 7.3],
			"symbolSize": 2
		},
		{
			"name": "沙特阿拉伯",
			"value": [44.32, 24.191],
			"symbolSize": 2
		},
		{
			"name": "塞尔维亚",
			"value": [20.699, 44.021],
			"symbolSize": 2
		},
		{
			"name": "萨尔瓦多",
			"value": [-89.229, 13.848],
			"symbolSize": 2
		},
		{
			"name": "瑞士",
			"value": [8.0329, 46.7794],
			"symbolSize": 2
		},
		{
			"name": "日本",
			"value": [137.855, 35.962],
			"symbolSize": 18
		},
		{
			"name": "葡萄牙",
			"value": [-7.9373, 40.957],
			"symbolSize": 5
		},
		{
			"name": "尼加拉瓜",
			"value": [-85.03, 12.692],
			"symbolSize": 4
		},
		{
			"name": "尼泊尔",
			"value": [83.5608, 28.2114],
			"symbolSize": 2
		},
		{
			"name": "南非",
			"value": [23.441, -31.7],
			"symbolSize": 14
		},
		{
			"name": "墨西哥",
			"value": [-101.68, 22.925],
			"symbolSize": 7
		},
		{
			"name": "缅甸",
			"value": [96.05, 21.841],
			"symbolSize": 2
		},
		{
			"name": "秘鲁",
			"value": [-72.98, -12.664],
			"symbolSize": 2
		},
		{
			"name": "孟加拉国",
			"value": [90.1963, 24.598],
			"symbolSize": 2
		},
		{
			"name": "孟加拉",
			"value": [90.1963, 24.598],
			"symbolSize": 2
		},
		{
			"name": "蒙古",
			"value": [102.564, 46.516],
			"symbolSize": 2
		},
		{
			"name": "美国",
			"value": [-98.8164, 40.0792],
			"symbolSize": 20
		},
		{
			"name": "马里",
			"value": [-2.209, 18.211],
			"symbolSize": 2
		},
		{
			"name": "马来西亚",
			"value": [102.099, 4.416],
			"symbolSize": 2
		},
		{
			"name": "马尔代夫",
			"value": [73.463, 4.221],
			"symbolSize": 4
		},
		{
			"name": "罗马尼亚",
			"value": [25.119, 45.933],
			"symbolSize": 2
		},
		{
			"name": "利比亚",
			"value": [17.571, 27.24],
			"symbolSize": 12
		},
		{
			"name": "老挝",
			"value": [102.538, 19.595],
			"symbolSize": 2
		},
		{
			"name": "肯尼亚",
			"value": [38.166, 0.806],
			"symbolSize": 2
		},
		{
			"name": "科特迪瓦",
			"value": [-5.336, 7.497],
			"symbolSize": 2
		},
		{
			"name": "卡塔尔",
			"value": [51.17, 25.168],
			"symbolSize": 2
		},
		{
			"name": "津巴布韦",
			"value": [30.047, -19.098],
			"symbolSize": 2
		},
		{
			"name": "捷克",
			"value": [15.2812, 49.848],
			"symbolSize": 2
		},
		{
			"name": "柬埔寨",
			"value": [104.444, 12.69],
			"symbolSize": 4
		},
		{
			"name": "加拿大",
			"value": [-111.1937, 59.2067],
			"symbolSize": 9
		},
		{
			"name": "几内亚",
			"value": [-10.907, 10.599],
			"symbolSize": 2
		},
		{
			"name": "吉尔吉斯斯坦",
			"value": [75.043, 41.741],
			"symbolSize": 2
		},
		{
			"name": "荷兰",
			"value": [5.0102, 52.1704],
			"symbolSize": 2
		},
		{
			"name": "韩国",
			"value": [128.16, 36.338],
			"symbolSize": 15
		},
		{
			"name": "哈萨克斯坦",
			"value": [69.772, 48.866],
			"symbolSize": 2
		},
		{
			"name": "古巴",
			"value": [-76.456, 20.571],
			"symbolSize": 9
		},
		{
			"name": "哥斯达黎加",
			"value": [-84.075, 10.126],
			"symbolSize": 2
		},
		{
			"name": "哥伦比亚",
			"value": [-73.606, 3.794],
			"symbolSize": 2
		},
		{
			"name": "刚果",
			"value": [16.08, 0.509],
			"symbolSize": 2
		},
		{
			"name": "斐济",
			"value": [177.948, -17.8226],
			"symbolSize": 2
		},
		{
			"name": "菲律宾",
			"value": [121.256, 17.181],
			"symbolSize": 8
		},
		{
			"name": "法国",
			"value": [2.543, 46.656],
			"symbolSize": 17
		},
		{
			"name": "俄罗斯",
			"value": [104.062, 64.736],
			"symbolSize": 19
		},
		{
			"name": "德国",
			"value": [9.9877, 51.3819],
			"symbolSize": 15
		},
		{
			"name": "丹麦",
			"value": [9.096, 56.113],
			"symbolSize": 2
		},
		{
			"name": "朝鲜",
			"value": [126.389, 39.767],
			"symbolSize": 9
		},
		{
			"name": "博茨瓦纳",
			"value": [23.662, -22.126],
			"symbolSize": 2
		},
		{
			"name": "玻利维亚",
			"value": [-65.183, -16.71],
			"symbolSize": 2
		},
		{
			"name": "波兰",
			"value": [19.72, 52.442],
			"symbolSize": 17
		},
		{
			"name": "冰岛",
			"value": [-18.417, 64.826],
			"symbolSize": 2
		},
		{
			"name": "比利时",
			"value": [4.4588, 50.6745],
			"symbolSize": 5
		},
		{
			"name": "白俄罗斯",
			"value": [27.9492, 53.3292],
			"symbolSize": 2
		},
		{
			"name": "巴西",
			"value": [-48.978, -11.694],
			"symbolSize": 14
		},
		{
			"name": "巴勒斯坦",
			"value": [35.26, 32.097],
			"symbolSize": 2
		},
		{
			"name": "巴基斯坦",
			"value": [66.6429, 28.1854],
			"symbolSize": 11
		},
		{
			"name": "巴布亚新几内亚",
			"value": [142.798, -5.636],
			"symbolSize": 2
		},
		{
			"name": "澳大利亚",
			"value": [133.582, -24.578],
			"symbolSize": 4
		},
		{
			"name": "奥地利",
			"value": [14.705, 47.65],
			"symbolSize": 2
		},
		{
			"name": "安哥拉",
			"value": [17.808, -12.836],
			"symbolSize": 2
		},
		{
			"name": "爱尔兰",
			"value": [-7.588, 53.214],
			"symbolSize": 5
		},
		{
			"name": "埃塞俄比亚",
			"value": [38.786, 8.435],
			"symbolSize": 2
		},
		{
			"name": "埃及",
			"value": [28.742, 26.16],
			"symbolSize": 2
		},
		{
			"name": "阿塞拜疆",
			"value": [47.883, 40.46],
			"symbolSize": 2
		},
		{
			"name": "阿联酋",
			"value": [53.9031, 23.9299],
			"symbolSize": 6
		},
		{
			"name": "阿根廷",
			"value": [-64.31, -33.166],
			"symbolSize": 8
		},
		{
			"name": "阿富汗",
			"value": [65.5267, 34.023],
			"symbolSize": 2
		},
		{
			"name": "中国",
			"value": [99.3877, 35.1753],
			"symbolSize": 23
		}
	],
	"moveLines": [
  {
    "fromName": "中国",
    "toName": "美国",
    "value": "8"
  },
  {
    "fromName": "中国",
    "toName": "孟加拉",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "老挝",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "澳大利亚",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "委内瑞拉",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "南非",
    "value": "3"
  },
  {
    "fromName": "中国",
    "toName": "安哥拉",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "博茨瓦纳",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "古巴",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "乌拉圭",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "智利",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "古巴",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "朝鲜",
    "value": "5"
  },
  {
    "fromName": "中国",
    "toName": "韩国",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "英国",
    "value": "5"
  },
  {
    "fromName": "中国",
    "toName": "希腊",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "爱尔兰",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "土耳其",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "俄罗斯",
    "value": "8"
  },
  {
    "fromName": "中国",
    "toName": "坦桑尼亚",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "南非",
    "value": "3"
  },
  {
    "fromName": "中国",
    "toName": "刚果",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "印度",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "巴基斯坦",
    "value": "4"
  },
  {
    "fromName": "中国",
    "toName": "瑞士",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "德国",
    "value": "3"
  },
  {
    "fromName": "中国",
    "toName": "特立尼达和多巴哥",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "哥斯达黎加",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "墨西哥",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "土库曼斯坦",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "哈萨克斯坦",
    "value": "3"
  },
  {
    "fromName": "中国",
    "toName": "乌兹别克斯坦",
    "value": "3"
  },
  {
    "fromName": "中国",
    "toName": "吉尔吉斯斯坦",
    "value": "3"
  },
  {
    "fromName": "中国",
    "toName": "印度尼西亚",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "马来西亚",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "文莱",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "泰国",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "越南",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "罗马尼亚",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "乌兹别克斯坦",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "巴西",
    "value": "3"
  },
  {
    "fromName": "中国",
    "toName": "荷兰",
    "value": "2"
  },
  {
    "fromName": "中国",
    "toName": "法国",
    "value": "5"
  },
  {
    "fromName": "中国",
    "toName": "德国",
    "value": "5"
  },
  {
    "fromName": "中国",
    "toName": "阿根廷",
    "value": "1"
  },
  {
    "fromName": "中国",
    "toName": "加拿大",
    "value": "1"
  },
  {"fromName":"美国","toName":"印度","value":"5"},
   {"fromName":"美国","toName":"加拿大","value":"5"},
{"fromName":"美国","toName":"印度尼西亚","value":"1"},
{"fromName":"美国","toName":"葡萄牙","value":"1"},
{"fromName":"美国","toName":"巴西","value":"3"},
{"fromName":"美国","toName":"萨尔瓦多","value":"1"},
{"fromName":"美国","toName":"英国","value":"3"},
{"fromName":"美国","toName":"韩国","value":"8"},
{"fromName":"美国","toName":"德国","value":"4"},
{"fromName":"美国","toName":"墨西哥","value":"3"},
{"fromName":"美国","toName":"泰国","value":"2"},
{"fromName":"美国","toName":"缅甸","value":"2"},
{"fromName":"美国","toName":"越南","value":"4"},
{"fromName":"美国","toName":"南非","value":"2"},
{"fromName":"美国","toName":"比利时","value":"2"},
{"fromName":"美国","toName":"日本","value":"5"},
{"fromName":"美国","toName":"沙特阿拉伯","value":"2"},
{"fromName":"美国","toName":"以色列","value":"5"},
{"fromName":"美国","toName":"波兰","value":"3"},
{"fromName":"美国","toName":"法国","value":"3"},
{"fromName":"美国","toName":"牙买加","value":"3"},
{"fromName":"美国","toName":"巴拿马","value":"3"},
{"fromName":"美国","toName":"西班牙","value":"3"},
{"fromName":"美国","toName":"肯尼亚","value":"2"},
{"fromName":"美国","toName":"古巴","value":"3"},
{"fromName":"美国","toName":"墨西哥","value":"2"},
{"fromName":"美国","toName":"老挝","value":"2"},
{"fromName":"俄罗斯","toName":"委内瑞拉","value":"1"},
{"fromName":"俄罗斯","toName":"奥地利","value":"1"},
{"fromName":"俄罗斯","toName":"阿根廷","value":"2"},
{"fromName":"俄罗斯","toName":"克里米亚","value":"4"},
{"fromName":"俄罗斯","toName":"意大利","value":"3"},
{"fromName":"俄罗斯","toName":"印度","value":"1"},
{"fromName":"俄罗斯","toName":"南非","value":"1"},
{"fromName":"俄罗斯","toName":"韩国","value":"1"},
{"fromName":"俄罗斯","toName":"克里米亚","value":"1"},
{"fromName":"俄罗斯","toName":"法国","value":"1"},
{"fromName":"俄罗斯","toName":"白俄罗斯","value":"2"},
{"fromName":"俄罗斯","toName":"尼加拉瓜","value":"2"},
{"fromName":"俄罗斯","toName":"土耳其","value":"5"},
{"fromName":"俄罗斯","toName":"德国","value":"2"},
{"fromName":"俄罗斯","toName":"日本","value":"1"},
{"fromName":"俄罗斯","toName":"希腊","value":"4"},
{"fromName":"日本","toName":"印度","value":"4"},
{"fromName":"日本","toName":"蒙古","value":"1"},
{"fromName":"日本","toName":"英国","value":"4"},
{"fromName":"日本","toName":"沙特阿拉伯","value":"1"},
{"fromName":"日本","toName":"科特迪瓦","value":"1"},
{"fromName":"日本","toName":"德国","value":"2"},
{"fromName":"日本","toName":"巴布亚新几内亚","value":"1"},
{"fromName":"英国","toName":"印度","value":"4"},
{"fromName":"英国","toName":"蒙古","value":"1"},
{"fromName":"英国","toName":"法国","value":"4"},
{"fromName":"英国","toName":"沙特阿拉伯","value":"1"},
{"fromName":"英国","toName":"科特迪瓦","value":"1"},
{"fromName":"英国","toName":"德国","value":"2"},
{"fromName":"英国","toName":"巴布亚新几内亚","value":"1"},
{"fromName":"英国","toName":"阿根廷","value":"1"},
{"fromName":"英国","toName":"巴西","value":"2"},
{"fromName":"英国","toName":"利比亚","value":"1"},
{"fromName":"英国","toName":"加拿大","value":"2"},
{"fromName":"英国","toName":"墨西哥","value":"1"},
]
};
var linesData = function() {
	var res = [];
	for(var i = 0; i < allData.moveLines.length; i++) {
		var c1, c2;
		var fromName = allData.moveLines[i].fromName;
		var toName = allData.moveLines[i].toName;
		let value = allData.moveLines[i].value;
		for(var j = 0; j < allData.citys.length; j++) {
			if(fromName == allData.citys[j].name) {
				c1 = allData.citys[j].value;
			}
			if(toName == allData.citys[j].name) {
				c2 = allData.citys[j].value;
			}
		}
		res.push({
			"fromName": fromName,
			"toName": toName,
			"coords": [
				c1,c2
			],
			"lineStyle": {
				"normal": {
					"width": value
				}
			}
		});
	}
console.log(res)
	return res;
};
option = {
	backgroundColor: '#404a59',
	title: {
		text: '朴姓人口迁徙图',
		left: 'center',
		textStyle: {
			color: '#fff'
		}
	},
	legend: {
		show: false,
		orient: 'vertical',
		top: 'bottom',
		left: 'right',
		data: ['地点', '线路'],
		textStyle: {
			color: '#fff'
		}
	},
	geo: {
		map: 'world',
		label: {
			emphasis: {
				show: false
			}
		},
		roam: true,
		itemStyle: {
			normal: {
				areaColor: '#323c48',
				borderColor: '#404a59'
			},
			emphasis: {
				areaColor: '#2a333d'
			}
		}
	},
	series: [{
		name: '地点',
		type: 'scatter',
		coordinateSystem: 'geo',
		zlevel: 2,
		rippleEffect: {
			brushType: 'stroke'
		},
		label: {
			show: true,
			position: 'right',
			formatter: '{b}',
			color: "gray",
			emphasis: {
				show: true,
				position: 'right',
				formatter: '{b}'
			}
		},
		symbolSize: 2,
		showEffectOn: 'render',
		itemStyle: {
			normal: {
				color: '#46bee9'
			}
		},
		data: allData.citys
	}, {
		name: '线路',
		type: 'lines',
		coordinateSystem: 'geo',
		zlevel: 2,
		large: true,
		effect: {
			show: true,
			constantSpeed: 30,
			symbol: 'pin',
			symbolSize: 3,
			trailLength: 0,
		},
		lineStyle: {
			normal: {
				color: '#ffbf31',
				width: 4,
				opacity: 0.5,
				curveness: 0.1
			}
		},
		data: linesData()
	}]
};
myChart.setOption(option);