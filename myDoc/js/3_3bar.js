var myChart3_3 = echarts.init(document.getElementById('chart3_3'));

$.get("data/3_3barData.json",function(result){
//	console.log(result);
    var data = result.bar_data;
//  for(var i=0;i<data.city.length;i++){
//  	data.QZ[i] = data.QZ[i] + 30; 
//  	data.cure[i] = data.cure[i] + 30;
//  	data.death[i] = data.death[i] + 30;
//  	data.stock[i] = data.stock[i] + 30;
//  }
    
	var option3_3 = {
		title:{
			text:'各地市现存病例统计',
			x:'center',
			textStyle: {
					fontSize: 14,
					color:'#fff'
				}
		},
		polar:{
			top:40,
			bottom:0
		},
    angleAxis: {
        type: 'category',
        data: data.city,
        axisLine:{
        	show:false,
        	lineStyle:{
        		
        		color:'#fff'
        	}
        },
        axisTick:{
        	show:false,
        	interval:0
        },
        axisLabel:{
        	show:true,
        	interval:0
        },
        splitLine:{
        	show:false
        }
    },
    radiusAxis: {
    	 axisLine:{
        	show:false,
        	lineStyle:{
        		color:'#031547'
        	}
        },
    	axisLabel:{
    		show:false,
    		color:'#fff'
    	},
    	splitLine:{
        	show:false
        }
    },
    polar: {
    	center:['50%','50%'],
    	radius:'60%'
    },
    legend: {
        show: true,
        data: [ '治愈', '死亡','存量'],
        textStyle: {
			color: '#fff',
			fontSize: 10
		},
		left:'left',
		top:'bottom'
//      color:['#43bbff','#69c79b','#ac533f','#f88c43']
    },
    tooltip:{
    	show:true
    },
    series: [
    {
        type: 'bar',
        data: [200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200,200],
        coordinateSystem: 'polar',
        name: '确诊',
        stack: 'a',
        color:'#031547',
        label:{
        	normal:{
        		show:true,
        		color:'#fff',
        		position:'top',
        		formatter: '{b}',
        	}
        },
    }, 
   {
        type: 'bar',
        data: data.stock,
        coordinateSystem: 'polar',
        name: '存量',
        stack: 'a',
        color:'#f88c43',
        label:{
        	normal:{
        		show:true,
        		color:'#fff',
        		position:'top',
        		formatter: '{b}',
        	}
        },
        itemStyle:{
        	normal:{
        		label:{
        			show:true
        		}
        	}
        }
    }, {
        type: 'bar',
        data: data.death,
        coordinateSystem: 'polar',
        name: '死亡',
        stack: 'a',
        color:'#ac533f'
    }, {
        type: 'bar',
        data: data.cure,
        coordinateSystem: 'polar',
        name: '治愈',
        stack: 'a',
        color:'#69c79b'
    },],
    
};

myChart3_3.setOption(option3_3);

})
