var myChart11 = echarts.init(document.getElementById('chart2_55'));
		var app = {};
option = null;
		// 显示标题，图例和空的坐标轴
		option = {
//  backgroundColor: '#fff',
    title: {
        text: '确诊病例统计',
        left: 'left',
//      top: 20,
//      itemGap:380  ,
//      x: '20%',
//			y: '85%',
			textStyle: {
				color:'#fff',
				fontSize: 18,
				//				font-family:"黑体"
			}
//         subtext:'数据来源：河南省卫生健康委员会\n\n数据时间：截至2020年2月4日24:00',
//         subtextStyle:{
//             fontSize:12,
//             color: '#000000',
//          
//         }
        // textStyle: {
        //     color: '#ccc'
        // }
    },
//  legend: {
//         type: 'scroll',
//         orient: 'vertical',
//         right: 10,
//         top: 20,
//         bottom: 20,
//         data: data.legendData,

//         // selected: data.selected
//     },
    tooltip: {
        trigger: 'item',
        formatter: "{b} : {c} ({d}%)"
    },

    visualMap: {
        show: false,
        min: 500,
        max: 600,
        inRange: {
            //colorLightness: [0, 1]
        }
    },
    series: [{
        name: '访问来源',
        type: 'pie',
        radius: '50%',
        center: ['50%', '50%'],
        color: ['#808080','#F4A460',  '#1DB7E5','#FE5050', ], //'#FBFE27','rgb(11,228,96)','#FE5050'
        data:[
{"name":"郑州市","value":"132"},
{"name":"开封市","value":"25"},
{"name":"洛阳市","value":"28"},
{"name":"平顶山市","value":"54"},
{"name":"安阳市","value":"46"},
{"name":"鹤壁市","value":"18"},
{"name":"新乡市","value":"48"},
{"name":"焦作市","value":"28"},
{"name":"濮阳市","value":"11"},
{"name":"许昌市","value":"32"},
{"name":"漯河市","value":"31"},
{"name":"三门峡市","value":"7"},
{"name":"南阳市","value":"136"},
{"name":"商丘市","value":"86"},
{"name":"信阳市","value":"228"},
{"name":"周口市","value":"65"},
{"name":"驻马店市","value":"126"},
{"name":"济源市","value":"4"}

].sort(function(a, b) {
            return a.value - b.value
        }),
        roseType: 'radius',

        label: {
            normal: {
                color: '#fff',
                        fontSize: 8,
                        fontWeight:'bold',
                        lineHeight: 5,
                formatter: "{b} ({d}%)",
                rich: {
                    c: {
                        color: '#333333',
                        fontSize: 20,
                        fontWeight:'bold',
                        lineHeight: 5
                    },
                    b: {
                        color: '#333333',
                        fontSize: 15,
                        height: 40
                    },
                },
            }
        },
        labelLine: {
            normal: {
                lineStyle: {
                    color: '#333333',
                },
                smooth: 0.2,
                length: 10,
                length2: 20,

            }
        },
        itemStyle: {
            normal: {
                shadowColor: 'rgba(0, 0, 0, 0.8)',
                shadowBlur: 10,
            }
        },
//      top:'30%',
//      bottom:'30%'
    }]
};
myChart11.setOption(option);