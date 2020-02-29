var dom=document.getElementById("chart2_3");
			var myChart2_3=echarts.init(dom);
			var foreignColor={color:'rgb(0,125,255)'};
			var guoneiColor={color:'rgb(234,104,104)'};
			var shenneiColor={color:'#f3d26f'};
			$.get("",function(data){
				myChart2_3.setOption({
					title:{
						text:'河南省确诊病例来源',
//						top:'',
						left:'center',
						textStyle:{
							color:'#fff',
							fontSize:14
						}
					},
					tooltip:{
						
					},
					legend:{
						show:false
					},
					series:[{
						name:"河南省病例来源分布",
						type:'pie',
						radius:['30%','50%'],
						data:[
						{value:59,name:"其他省份",itemStyle:foreignColor},
						
							{value:575,name:"湖北省",itemStyle:guoneiColor},
							{value:606,name:"河南省内",itemStyle:shenneiColor}
							
						]
					}],
					label:{
						formatter:'{b}:{d}%'
					}
				});
			});