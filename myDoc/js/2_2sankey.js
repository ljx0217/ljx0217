var dom = document.getElementById("chart2_2");
			var myChart2_2 = echarts.init(dom);
			var app = {};
			// test 
			$.get("data/sankey4.1.json",function(data){
				var foreignColor={color:'rgb(0,125,255)',borderWidth:0};
				var guoneiColor={color:'rgb(234,104,104)',borderWidth:0};
				var shenneiColor={color:'#f3d26f',borderWidth:0};
				var acolor='#fbb4ae';
				var leng=data.length;
				
				var set=new Set();
				var arr=[];
				
				var citys=[];
				for(i=0;i<leng;i++){
					switch(data[i]['tag']){
						case '1':
							if(arr.includes(data[i]['source'])){
								break;
							}
							else{
								citys.push({'name':data[i]['source'],'itemStyle':shenneiColor});
								arr.push(data[i]['source'])
								break;
							}
						case '2':
							if(arr.includes(data[i]['source'])){
								break;
							}
							else{
								citys.push({'name':data[i]['source'],'itemStyle':foreignColor});
								arr.push(data[i]['source'])
								break;
							}
						case '3':
							if(arr.includes(data[i]['source'])){
								break;
							}
							else{
								citys.push({'name':data[i]['source'],'itemStyle':guoneiColor});
								arr.push(data[i]['source'])
								break;
							}
						default:
							break;
					}
				};
				
				citys.push(
				{name:' 信阳市 ',itemStyle:shenneiColor},
				{name:' 南阳市 ',itemStyle:shenneiColor},
				{name:' 商丘市 ',itemStyle:shenneiColor},
				{name:' 郑州市 ',itemStyle:shenneiColor},
				{name:' 周口市 ',itemStyle:shenneiColor},
				{name:' 安阳市 ',itemStyle:shenneiColor},
				{name:' 平顶山市 ',itemStyle:shenneiColor},
				{name:' 驻马店市 ',itemStyle:shenneiColor},
				{name:' 新乡市 ',itemStyle:shenneiColor},
				{name:' 焦作市 ',itemStyle:shenneiColor},
				{name:' 洛阳市 ',itemStyle:shenneiColor},
				{name:' 濮阳市 ',itemStyle:shenneiColor},
				{name:' 济源市 ',itemStyle:shenneiColor},
				{name:' 许昌市 ',itemStyle:shenneiColor},
				{name:' 开封市 ',itemStyle:shenneiColor},
				{name:' 三门峡市 ',itemStyle:shenneiColor},
				{name:' 荥阳市 ',itemStyle:shenneiColor},
				{name:' 鹤壁市 ',itemStyle:shenneiColor},
				{name:' 漯河市 ',itemStyle:shenneiColor}
				);//name后面加个空格用来和其他同名项区分
//				console.log(citys);
//				console.log(data);
				var option={
					title:{
						left:'left',
						text:'河南省确诊病例来源',
						textStyle:{
							color:'#fff',
							fontSize:14
						}
					},
//					tooltip:{
//						
//					},
					series:{
						x:'25%',
//						y:'10%',
						type:'sankey',
						focusNodeAdjacency: 'allEdges',
						data:citys,
						links:data,
						lineStyle:{
								color:'source',
								size:300
							},
							label:{
								color:'#fff',
								show:true,
								position:'left',
								fontFamily:'Microsoft YaHei',
								fontSize:8,	
							},
							nodeGap:10,
							width:200,
							
							//layoutIteration:0
						}
				}
				myChart2_2.setOption(option);
//				
			});