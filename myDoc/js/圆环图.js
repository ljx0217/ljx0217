var dom=document.getElementById("chart55");
			var pieChart_1=echarts.init(dom);
			var foreignColor={color:'rgb(0,125,255)'};
			var guoneiColor={color:'rgb(234,104,104)'};
			var shenneiColor={color:'#f3d26f'};
			$.get("",function(data){
				pieChart_1.setOption({
					title:{
						text:'河南省病例来源',
						top:'bottom',
						left:'5%',
						textStyle:{
							color:'#fff',
							
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
						{value:6,name:"其他省份",itemStyle:foreignColor},
						
							{value:288,name:"湖北省",itemStyle:guoneiColor},
							{value:45,name:"河南省内",itemStyle:shenneiColor}
							
						]
					}],
					label:{
						formatter:'{b}:{d}%'
					}
				});
			});