var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
console.log(111);
$.ajax({
        crossOrigin: true,
        type: 'GET',
        url: 'http://m.zz.bendibao.com/news/66758.shtm',
        success: function (body, heads, status) {
            alert(body);  //body就是内容了，也就是url网页中的内容
        },
        error: function () {
            alert("ERROR!")
        }
    });

//var req = new XMLHttpRequest();
//if(req != null) {
//	req.onreadystatechange = function() { //// Checks the asyn request completed or not.        
//		if(req.readyState == 4) {
//			if((req.status >= 200 && req.status < 300) || req.status == 304) {
//				alet(req.responseText); //获取成功就弹出取得的内容        
//			} else {
//				alert("Request was unsuccessful: " + req.status);
//			}
//		}
//	};
//	req.open("GET", "http://m.zz.bendibao.com/news/66758.shtm", true); //url是获取的地址  
//	req.send(null);
//};
//
option = {
	title: {
		text: '',
		textStyle: {
			color: '#ff9300',
			fontSize: '22'
		},
		//		subtext: dateselected.year + '-' + dateselected.month + '-' + dateselected.day + '- ' + pointdata_time + '时',
		subtextStyle: {
			color: '#ff9300',
			fontSize: '18'
		}
		// x: 'center',
		// align: 'right'
	},
	// brush: {
	//   toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear']
	//   // xAxisIndex: 'all'
	// },
	// toolbox: {
	//   feature: {
	//     magicType: {
	//       type: ['stack', 'tiled']
	//     },
	//     dataView: {}
	//   }
	// },
	//	legend: {
	//		data: ['departure', 'arrive'],
	//		show: true,
	//		right: 20,
	//		textStyle: {
	//			color: '#ff9300'
	//		}
	//	},
	tooltip: {
		show: false
	},
	animation: false,
	bmap: {
		center: [110.35, 19.99999],
		zoom: 13,
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
		name: 'departure',
		type: 'scatter',
		coordinateSystem: 'bmap',
		data: [],
		symbolSize: function(val) {
			return val[2] / 1
		},
		label: {
			normal: {
				formatter: '{b}',
				position: 'right',
				show: false
			},
			emphasis: {
				show: true
			}
		},
		itemStyle: {
			normal: {
				color: '#ff9300'
			}
		}
	}]
};

myChart.setOption(option);

var bmap = myChart.getModel().getComponent('bmap').getBMap();
bmap.setMapStyleV2({
	// styleId: '857f17e4b6d087d0e1e122666d706b6f'
	styleId: '952a710ef90dbe24cb87afce9c8c2fcc'
})

var longitude=0, latitude=0;
navigator.geolocation.getCurrentPosition(function(position) {
	longitude = position.coords.longitude;
	latitude = position.coords.latitude;
});
alert(longitude,latitude)