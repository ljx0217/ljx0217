


var myChart4_2 = echarts.init(document.getElementById('chart4_2'));

var link = [],
	node = [];
var categories = [{
	name: "一代病例"
}, {
	name: "二代病例"
}, {
	name: "三代病例"
}, {
	name: "未知人员"
}, {
	name: "地点"
}];
var option4_2 = {
	backgroundColor: '#093b78',
	// 图的标题
	title: {
		// text: 'ECharts 关系图'
	},
	//		toolbox:{
	//			show:true,
	//			feature:{
	//				restore:{}
	//			}
	//		},
	// 提示框的配置
//	tooltip: {
//		formatter: function(x) {
//			return x.data.category;
//		}
//	},
	legend: [{
		// selectedMode: 'single',
		data: categories.map(function(a) {
			return a.name;
		}),
		textStyle: {
			color: '#fff'
		}
	}],
	color: ['#2998e1', '#faa136', '#02edff', '#f00', '#f00'],
	series: [{
		type: 'graph', // 类型:关系图
		layout: 'force', //图的布局，类型为力导图

		symbolSize: 20, // 调整节点的大小
		roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
		//		edgeSymbol: ['circle', 'arrow'],
		symbol: function(value, params) {
			// console.log(params)
			if(params.data._type == "address") {
				return 'rect'
			} else {
				return 'circle'
			}
		},
		edgeSymbolSize: [2, 5],
		edgeLabel: {
			normal: {
				textStyle: {
					fontSize: 1,
					position: "right",
					color: '#fff'
				}
			}
		},
		force: {
			repulsion: 150,
			gravity: 0.1,
			edgeLength: 25,
			layoutAnimation: true,
		},
		draggable: true,
		focusNodeAdjacency: true,
		itemStyle: {

		},
		lineStyle: {
			normal: {
				width: 2,
				color: '#44bcff',
			}
		},
		edgeLabel: {
			normal: {
				show: true,
				color: '#fff',
				formatter: function(x) {
					return x.data.name;
				}
			}
		},
		label: {
			normal: {
				show: true,
				textStyle: {
					color: '#fff',
					position: "right"
				}
			}
		},

		// 数据
		data: [],
		links: [],
		categories: categories,
	}]

};
$.get("data/graph_data.json", function(data) {

	link = data.links;
	node = data.nodes;

	option4_2.series[0].data = node;
	option4_2.series[0].links = link;

	myChart4_2.setOption(option4_2);
	//	console.log(option4_2);
	//加载数据内
});

var infor_data = [];
var point_select = []; //用于存放解析之后的坐标数据

// 百度地图API功能
var map = new BMap.Map("chart4_1");
var point = new BMap.Point(113.731398, 34.77445); //地图中心
map.centerAndZoom(point, 12);
map.enableScrollWheelZoom(); //启用滚轮缩放
map.setMapStyleV2({
	styleId: '952a710ef90dbe24cb87afce9c8c2fcc'
});

$.get("data/郑州病例.json", function(result) {
	infor_data = result;
//	console.log(infor_data)
for(var i = 0; i < infor_data.length; i++) {
	var number_n = infor_data[i][0];
	var position_n = infor_data[i][1];
	var information_n = infor_data[i][2];
	Get_Points(number_n, position_n, information_n);
	//	console.log(point_select);
	//标记病例地点

}
});
myChart4_2.on('click', function(params) {
	var txy = params.data.id;
	var position_select;
	var information_s;
	for(var i = 0; i < infor_data.length; i++) {
		if(infor_data[i][0] == txy) {
			position_select = infor_data[i][1];
			information_s = infor_data[i][2];
		}
	}
	var myGeo = new BMap.Geocoder();
	// 将地址解析结果显示在地图上，并调整地图视野    
	myGeo.getPoint(position_select, function(point) {
			if(point) {
				console.log(point)
				map.centerAndZoom(point, 12);
				Get_Points_2(txy, position_select, information_s);

			}
		},
		"郑州市");

});

function Get_Points(number_n, position_n, information_n) {
	var myGeo = new BMap.Geocoder();
	// 将地址解析结果显示在地图上，并调整地图视野    
	myGeo.getPoint(position_n, function(point) {
			if(point) {
				point_select.push([number_n, position_n, point]);

				createMakers(point, number_n, position_n, information_n);

			}
		},
		"郑州市");
}

function Get_Points_2(number_n, position_n, information_n) {
	var myGeo = new BMap.Geocoder();
	// 将地址解析结果显示在地图上，并调整地图视野    
	myGeo.getPoint(position_n, function(point) {
			if(point) {
				point_select.push([number_n, position_n, point]);

				createMakers_2(point, number_n, position_n, information_n);

			}
		},
		"郑州市");
}

function createMakers(point, number_n, position_n, information_n) {

	var marker = new BMap.Marker(point);
	map.addOverlay(marker);
	//		console.log(number_n);
	createTag(marker, number_n, position_n, information_n);

}

function createMakers_2(point, number_n, position_n, information_n) {

	var marker = new BMap.Marker(point);
	map.addOverlay(marker);
	//		console.log(number_n);
	createTag_2(marker, number_n, position_n, information_n);

}

function createTag_2(marker, number_n, position_n, information_n) {
	//      console.log(number_n);
	var label = new BMap.Label(number_n, {
		offset: new BMap.Size(10, -5)
	});
	//设置label(标注的样式)
	label.setStyle({
		color: "White",
		fontSize: "14px",
		backgroundColor: "#5CACEE",
		border: "0"
	});
	marker.setLabel(label);

	//给标记添加点击事件以及显示窗口信息
	var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + information_n + "</p>");
	marker.addEventListener("click", function(params) {
		this.openInfoWindow(infoWindow);
		var msg = number_n; 
		var new_link = [];
		var new_node = [],
			new_nodes = [];

		function  distinct (arr)  { //数组去重   
			for(let  i  =  arr.length;  i  >  0;  i--)  {            
				for(let  j  =  i  -  1;  j  >  -1 ;  j--)  {                
					if(arr[i]  ===  arr[j]) {                    
						console.log(arr[j]) 
						arr.splice(j, 1)                
					}            
				}        
			}    
		}    
		for (let  i = 0; i < link.length; i++) {        
			if(link[i].source == msg  || link[i].target == msg) {                
				new_link.push(link[i]) 
				new_node.push(link[i].source) 
				new_node.push(link[i].target)        
			}      
		}      
		for(let  i = 0; i < node.length; i++) {        
			if(node[i].id == msg) {          
				new_node.push(node[i].id)        
			}      
		}      
		distinct(new_node) 
		for(let  i = 0; i < node.length; i++) { //构建新的node
			        
			for(let  j = 0; j < new_node.length; j++) {          
				if(new_node[j] == node[i].id) {           
					new_nodes.push(node[i])          
				}
			}
		}
		option4_2.series[0].data = new_nodes;
		option4_2.series[0].links = new_link;
		myChart4_2.setOption(option4_2);
	});
}

function createTag(marker, number_n, position_n, information_n) {
	//      console.log(number_n);
	var label = new BMap.Label(number_n, {
		offset: new BMap.Size(10, -5)
	});
	//设置label(标注的样式)
	label.setStyle({
		color: "White",
		fontSize: "14px",
		backgroundColor: "#5CACEE",
		border: "0"
	});
	//	marker.setLabel(label);

	//给标记添加点击事件以及显示窗口信息
	var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + information_n + "</p>");
	marker.addEventListener("click", function(params) {
		this.openInfoWindow(infoWindow);

		//			console.log(number_n);
		var msg = number_n; 
		var new_link = [];
		var new_node = [],
			new_nodes = [];

		function  distinct (arr)  { //数组去重   
			for(let  i  =  arr.length;  i  >  0;  i--)  {            
				for(let  j  =  i  -  1;  j  >  -1 ;  j--)  {                
					if(arr[i]  ===  arr[j]) {                    
						console.log(arr[j]) 
						arr.splice(j, 1)                
					}            
				}        
			}    
		}    
		for (let  i = 0; i < link.length; i++) {        
			if(link[i].source == msg  || link[i].target == msg) {                
				new_link.push(link[i]) 
				new_node.push(link[i].source) 
				new_node.push(link[i].target)        
			}      
		}      
		for(let  i = 0; i < node.length; i++) {        
			if(node[i].id == msg) {          
				new_node.push(node[i].id)        
			}      
		}      
		distinct(new_node) 
		for(let  i = 0; i < node.length; i++) { //构建新的node
			        
			for(let  j = 0; j < new_node.length; j++) {          
				if(new_node[j] == node[i].id) {           
					new_nodes.push(node[i])          
				}
			}
		}
		option4_2.series[0].data = new_nodes;
		option4_2.series[0].links = new_link;
		myChart4_2.setOption(option4_2);
	});
}

function change() {
	option4_2.series[0].data = node;
	option4_2.series[0].links = link;
	myChart4_2.setOption(option4_2);
}