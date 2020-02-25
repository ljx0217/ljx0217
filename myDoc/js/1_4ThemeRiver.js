var myChart1_4 = echarts.init(document.getElementById('chart1_4'));
		$.get('data/ThemRiverData.json').done(function (data) {	
			
			var datas = [];
			var len = data.Dates.length;
			

			for(var i=0; i<len; i++){
				var dataTemp = [];
				dataTemp.push(data.Dates[i]);
				dataTemp.push(data.Cure[i]);
				dataTemp.push('治愈');
				datas.push(dataTemp);
			}
			for(var i=0; i<len; i++){
				var dataTemp = [];
				dataTemp.push(data.Dates[i]);
				dataTemp.push(data.QWandPT[i]);
				dataTemp.push('轻型和普通型');
				datas.push(dataTemp);
			}
			for(var i=0; i<len; i++){
				var dataTemp = [];
				dataTemp.push(data.Dates[i]);
				dataTemp.push(data.ZZ[i]);
				dataTemp.push('重型');
				datas.push(dataTemp);
			}
			for(var i=0; i<len; i++){
				var dataTemp = [];
				dataTemp.push(data.Dates[i]);
				dataTemp.push(data.WZZ[i]);
				dataTemp.push('危重型');
				datas.push(dataTemp);
			}
			for(var i=0; i<len; i++){
				var dataTemp = [];
				dataTemp.push(data.Dates[i]);
				dataTemp.push(data.Death[i]);
				dataTemp.push('死亡');
				datas.push(dataTemp);
			}		
			
			
			// console.log(datas)
			option = {		
				color: ['#7EE6B8', '#FFF0A5', '#FFB03B', '#B64926', '#8E2800', ],
//				backgroundColor: "#FFFFFF",
				title:[
					{
						'left' :'center',
						'text': '河南省新冠肺炎确诊病例变化图',
						'textStyle':{color:'#fff','fontSize' : 16},
					},
//				    {
//						// '('+(curCure/curTotal*100).toFixed(2)+'%)}'
//						'text':'\n\n{nums0|'+data.Dates[len-1]+'}'+
//						   '\n\n确诊：   {nums1|'+data.total[len-1]+'}'+
//						   '\n\n治愈：   {nums2|'+data.Cure[len-1]+'('+(data.Cure[len-1]/data.total[len-1]*100).toFixed(2)+'%)}'+
//						   '\n\n轻型与普通型：{nums3|'+data.QWandPT[len-1]+'}'+
//						   '\n\n重型：   {nums4|'+data.ZZ[len-1]+'}'+
//						   '\n\n危重型：{nums5|'+data.WZZ[len-1]+'}'+
//						   '\n\n死亡：   {nums6|'+data.Death[len-1]+'}',
//						'textStyle':{
//							'color':'#000',
//							'fontSize':20,
//							'fontWeight':800,
//							'rich':{
//								'nums0':{'color':'#000','fontSize':26,'fontWeight':800},
//								'nums1':{'color': '#0000ac','fontSize':24,'fontWeight':800},
//								'nums2':{'color': '#69c79b','fontSize':24,'fontWeight':800},
//								'nums3':{'color': '#f88c43','fontSize':24,'fontWeight':800},
//								'nums4':{'color': '#e87272','fontSize':24,'fontWeight':800},
//								'nums5':{'color': '#e80000','fontSize':24,'fontWeight':800},
//								'nums6':{'color': '#6f0000','fontSize':24,'fontWeight':800},
//							},
//						},
//						'left':'8%',
//					},
				],
			    legend: {
					orient: 'horizontal', // 'vertical'
					// x: 'right', // 'center' | 'left' | {number},
					// y: 'bottom', // 'top''center' | 'bottom' | {number}
					left: '10%',//距离左侧的百分比
					y : '10%',
					textStyle: { //图例文字的样式
						color: '#fff',
						fontSize: 12
					 },
					// '治愈','轻型和普通型','重型','危重型','死亡'
			        data: ['治愈','轻型和普通型','重型','危重型','死亡']
			    },
				label:{
					show:false,
				},
			    singleAxis: {
			        top: 50,
			        bottom: 50,
			        axisTick: {},
			        axisLabel: {
			        	color:'#fff'
			        },
			        type: 'time',
			        axisPointer: {
			            animation: true,
			            label: {
			                show: true,
			                color:'#fff'
			            }
			        },
			        splitLine: {
			            show: true,
			            lineStyle: {
			                type: 'dashed',
			                opacity: 0.2
			            }
			        },
					name:'日期',
					minInterval:1,
					// z:50
			    },
			    series: [
			        {
			            type: 'themeRiver',
						
			            emphasis: {
			                itemStyle: {
			                    shadowBlur: 20,
			                    shadowColor: 'rgba(0, 0, 0, 0.8)'
			                }
			            },
						data: datas,
						 label: {
						            show: false
						        }
			        }
			    ]
			};
			myChart1_4.setOption(option);
		});