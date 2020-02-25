$.get("data/3_3barData.json", function(result) {
	function ZoomOut(width, height) {
		console.log('ZoomOut');
		var margin = {
				top: 5,
				right: 0,
				bottom: 5,
				left: 5
			},
			width = 120 - margin.left - margin.right,
			height = 40 - margin.top - margin.bottom;
		var sum = 0;
		var x = d3.scale.ordinal()
			.rangeRoundBands([0, width], .1);

		var y = d3.scale.linear()
			.rangeRound([height, 0]);

		var color = d3.scale.ordinal()
			.range(["#4aa7b0", "#5974b8", "#887ad0", "#adb4c3", "#d0d6e1"]);

		var svg = d3.select(".d3-tip").append('svg')
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom);

		var data = [{
			"Form3": 20,
			"Form4": 30,
			"Form4C": 40,
			"Other": 10,
			"excess": 200
		}] || props.data;
		color.domain(d3.keys(data[0]));
		data.forEach(function(d) {
			var y0 = 0;
			d.nums = color.domain().map(function(name) {
				sum += d[name];
				return {
					name: name,
					y0: y0,
					y1: y0 += +d[name]
				};
			});
		});

		y.domain([0, d3.max(data, function(d) {
			return data[0].total;
		})]);

		var form = svg.selectAll(".form")
			.data(data)
			.enter().append("g")
			.attr("class", "g")
			.attr("transform", function(d) {
				return "translate(120,30)";
			});
		form.selectAll("rect")
			.data(function(d) {
				return d.nums;
			})
			.enter().append("rect")
			.attr("width", 20)
			.attr("y", function(d) {
				return(sum - d.y1) * width / sum;
			})
			.attr("height", function(d) {
				return(d.y1 - d.y0) * width / sum;
			})
			.attr("transform", "rotate(90)")
			.style("fill", function(d) {
				return color(d.name);
			})
	}

	function redraw(width, height) {
		var margin = {
				top: 5,
				right: 0,
				bottom: 5,
				left: 5
			},
			width = 120 - margin.left - margin.right,
			height = 40 - margin.top - margin.bottom;
		var sum = 0;
		var x = d3.scale.ordinal()
			.rangeRoundBands([0, width], .1);

		var y = d3.scale.linear()
			.rangeRound([height, 0]);

		var color = d3.scale.ordinal()
			.range(["#4aa7b0", "#5974b8", "#887ad0", "#adb4c3", "#d0d6e1"]);

		var svg = d3.select("chart3_3").append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom);

		var data = [{
			"Form3": 20,
			"Form4": 30,
			"Form4C": 40,
			"Other": 10,
			"excess": 200
		}] || props.data;
		color.domain(d3.keys(data[0]));
		data.forEach(function(d) {
			var y0 = 0;
			d.nums = color.domain().map(function(name) {
				sum += d[name];
				return {
					name: name,
					y0: y0,
					y1: y0 += +d[name]
				};
			});
		});

		y.domain([0, d3.max(data, function(d) {
			return data[0].total;
		})]);

		var form = svg.selectAll(".form")
			.data(data)
			.enter().append("g")
			.attr("class", "g")
			.attr("transform", function(d) {
				return "translate(120,30)";
			});
		/* Initialize tooltip */
		var tip = d3.tip().attr('class', 'd3-tip').html(function(d) {
			console.info('tip d', d);
			return ZoomOut();
		});
		ZoomOut();
		//        var tip = d3.tip()
		//                .attr('class', 'd3-tip')
		//                .offset([-10, 0])
		//                .html(function(d) {
		//                    return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
		//                })

		/* Invoke the tip in the context of your visualization */
		svg.call(tip);

		form.selectAll("rect")
			.data(function(d) {
				return d.nums;
			})
			.enter().append("rect")
			.attr("width", 20)
			.attr("y", function(d) {
				return(sum - d.y1) * width / sum;
			})
			.attr("height", function(d) {
				return(d.y1 - d.y0) * width / sum;
			})
			.attr("transform", "rotate(90)")
			.style("fill", function(d) {
				return color(d.name);
			})
			.on("mouseover", tip.show)
			.on("mouseout", tip.hide);

	}
	redraw();

});