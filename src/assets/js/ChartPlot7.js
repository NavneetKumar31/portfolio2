var thinkingArr = [];
var patienceArr = [];
var visualArr = [];
var thinkingArr2 = [];
var patienceArr2 = [];
var visualArr2 = [];

//Average values

var thinkingAvg = 0;
var patienceAvg = 0;
var visualAvg = 0;

var counterLabel = [];
var counter = 0;
var counterVisual = 0;

//Plot Graph
var thinkingPlot = true;
var patiencePlot = true;
var visualPlot = true;
var thinkingPlot2 = true;
var patiencePlot2 = true;
var visualPlot2 = true;


var data = 0;
function resetAllValues()
{
	thinkingArr = [];
	patienceArr = [];
	visualArr = [];
	thinkingArr2 = [];
	patienceArr2 = [];
	visualArr2 = [];


	//Average values

	thinkingAvg = 0;
	patienceAvg = 0;
	visualAvg = 0;
	
	thinkingAvg2 = 0;
	patienceAvg2 = 0;
	visualAvg2 = 0;

	counterLabel = [];
	counter = 0;
	counterVisual = 0;

	counterLabel2 = [];
	counter2 = 0;
	counterVisual2 = 0;
	
	countera = 0;
	counterb = 0;
	
	
	//Plot Graph
	thinkingPlot = true;
	patiencePlot = true;
	visualPlot = true;
	thinkingPlot2 = true;
	patiencePlot2 = true;
	visualPlot2 = true;
	
	data = 0;
}
function fetchDataFromJson(GraphType,LoadTime){
	console.log("DATA :"+DATA);
	console.log("DATA :"+DATA27);
	console.log("GraphType :"+GraphType);
	
	//Reset all values
	resetAllValues();
	if(GraphType == "ALL")
	{
		thinkingPlot = true;
		patiencePlot = true;
		visualPlot = true;
		thinkingPlot2 = true;
		patiencePlot2 = true;
		visualPlot2 = true;
	}
	else if(GraphType == "THINKING")
	{
		console.log("THINKING :");
		thinkingPlot = true;
		patiencePlot = false;
		visualPlot = false;
		thinkingPlot2 = true;
		patiencePlot2 = false;
		visualPlot2 = false;  
	}
	else if(GraphType == "PATIENCE")
	{
		console.log("PATIENCE :");
		thinkingPlot = false;
		patiencePlot = true;
		visualPlot = false;
		thinkingPlot2 = false;
		patiencePlot2 = true;
		visualPlot2 = false;
	}
	else if(GraphType == "VISUAL")
	{
		console.log("VISUAL :");
		thinkingPlot = false;
		patiencePlot = false;
		visualPlot = true;
		thinkingPlot2 = false;
		patiencePlot2 = false;
		visualPlot2 = true;
	}
	
	/*//Code to refresh graph without page reload
	console.log("Cleansing old data starts");
	
	patienceArr = [];
	visualArr = [];
	thinkingArr = [];

	//Average values
	patienceAvg = 0;
	visualAvg = 0;
	thinkingAvg = 0;
	
	counterLabel = [];
	counter = 0;
	console.log("Cleansing old data ends");*/

	 $.each(DATA, function(key, val) {
		 console.log("key: "+key+" val: "+val);
		 $.each(val, function(key1, val1) {
			 console.log("key1: "+key1+" val1: "+val1);
			 $.each(val1, function(key2, val2) {
				 console.log("key2: "+key2+" val2: "+val2);
				 if(key2 == "thinking" )
				 {
					 if(thinkingPlot == false)
						 val2 = 0;
					 thinkingArr.push(parseFloat(val2));
					 thinkingAvg = thinkingAvg + parseFloat(val2);
					 counter = counter + 1;
				 }
				else if(key2 == "patience")
				 {
					 if(patiencePlot == false)
						 val2 = 0;
					 patienceArr.push(parseFloat(val2));
					 patienceAvg = patienceAvg + parseFloat(val2);
				 }
				 else if(key2 == "visual")
				 {
					 if(visualPlot == false)
						 val2 = 0;
					 visualArr.push(parseFloat(val2));
					 //Only non-zero Visual appeal or eye-blink is added and counted in average
					 if(val2 != 0)
					 {
						 visualAvg = visualAvg + parseFloat(val2);
						 counterVisual = counterVisual +1;
					 }
				 }
				 				 				 
			 });
			//increase counter for one set of values
			 //console.log(counter)
			 if(counter % 1 == 0)
			 {
				 counterLabel.push(counter);
				 //console.log(counter);
			 }
			 else
			 {
				 counterLabel.push("");
				 //console.log("")
			 }			
		
			 
		 });
	 });

//test2
countera = counter;
//counter = 0; 
$.each(DATA27, function(key, val) {
		 console.log("key: "+key+" val: "+val);
		 $.each(val, function(key1, val1) {
			 console.log("key1: "+key1+" val1: "+val1);
			 $.each(val1, function(key2, val2) {
				 console.log("key2: "+key2+" val2: "+val2);
				 if(key2 == "thinking2" )
				 {
					 if(thinkingPlot2 == false)
						 val2 = 0;
					 thinkingArr2.push(parseFloat(val2));
					 thinkingAvg2 = thinkingAvg2 + parseFloat(val2);
					 	 counter2 = counter2 + 1;
				 }
				else if(key2 == "patience2")
				 {
					 if(patiencePlot2 == false)
						 val2 = 0;
					 patienceArr2.push(parseFloat(val2));
					 patienceAvg2 = patienceAvg2 + parseFloat(val2);
				 }
				 else if(key2 == "visual2")
				 {
					 if(visualPlot2 == false)
						 val2 = 0;
					 visualArr2.push(parseFloat(val2));
					 //Only non-zero Visual appeal or eye-blink is added and counted in average
					 if(val2 != 0)
					 {
						 visualAvg2 = visualAvg2 + parseFloat(val2);
						 counterVisual2 = counterVisual2 +1;
					 }
				 }
				 if(counter2 > counter && countera % 1 == 0)
			 {   countera = countera +1 ;
				 counterLabel.push(countera);
				 //console.log(counter);
			 }
			 
				 				 
			 });
						 
		 });
	 });
	 
	 //Average value
	 /*patienceAvg = patienceAvg/counter;
	 visualAvg = visualAvg/counter;
	 thinkingAvg = thinkingAvg/counter;*/
	 
	 //Reset counterVisual to 1 if "Thinking" or "Patience" button is clicked
	 if(visualAvg == 0 && counterVisual == 0)
	 {
		 counterVisual = 1;
	 }
	  if(visualAvg2 == 0 && counterVisual2 == 0)
	 {
		 counterVisual = 1;
	 }
	 thinkingAvg = parseFloat(Math.round((thinkingAvg/counter) * 100) / 100).toFixed(2);
	 patienceAvg = parseFloat(Math.round((patienceAvg/counter) * 100) / 100).toFixed(2);
	 visualAvg = parseFloat(Math.round((visualAvg/counterVisual) * 100) / 100).toFixed(2);
	 thinkingAvg2 = parseFloat(Math.round((thinkingAvg2/counter2) * 100) / 100).toFixed(2);
	 patienceAvg2 = parseFloat(Math.round((patienceAvg2/counter2) * 100) / 100).toFixed(2);
	 visualAvg2 = parseFloat(Math.round((visualAvg2/counterVisual2) * 100) / 100).toFixed(2);
	 
	 
	 
	 console.log("thinkingArr Final: "+thinkingArr);
	 console.log("patienceArr Final: "+patienceArr);
	 console.log("visualArr Final: "+visualArr);
	 console.log("counterLabel Final: "+counterLabel);
	 
	 console.log("thinkingAvg Final: "+thinkingAvg);
	 console.log("patienceAvg Final: "+patienceAvg);
	 console.log("visualAvg Final: "+visualAvg); 
	 console.log("thinkingAvg Final: "+thinkingAvg2);
	 console.log("patienceAvg Final: "+patienceAvg2);
	 console.log("visualAvg Final: "+visualAvg2); 
	 
	 //call function to load graph details
	 loadVisualGraph(LoadTime);
};
fetchDataFromJson("ALL","FIRSTLOAD");

function loadVisualGraph(LoadTime)
{
	//Set the global Chart values (these will apply to all charts)
	Chart.defaults.global = {
	  // Boolean - Whether to animate the chart
	  animation: true,
	
	  // Number - Number of animation steps
	  animationSteps: 60,
	
	  // String - Animation easing effect
	  // Possible effects are:
	  // [easeInOutQuart, linear, easeOutBounce, easeInBack, easeInOutQuad,
	  //  easeOutQuart, easeOutQuad, easeInOutBounce, easeOutSine, easeInOutCubic,
	  //  easeInExpo, easeInOutBack, easeInCirc, easeInOutElastic, easeOutBack,
	  //  easeInQuad, easeInOutExpo, easeInQuart, easeOutQuint, easeInOutCirc,
	  //  easeInSine, easeOutExpo, easeOutCirc, easeOutCubic, easeInQuint,
	  //  easeInElastic, easeInOutSine, easeInOutQuint, easeInBounce,
	  //  easeOutElastic, easeInCubic]
	  //animationEasing: "easeInOutBounce",
	  animationEasing: "easeInOutBounce",
	
	  // Boolean - If we should show the scale at all
	  showScale: true,
	
	  // Boolean - If we want to override with a hard coded scale
	  scaleOverride: false,
	
	  // ** Required if scaleOverride is true **
	  // Number - The number of steps in a hard coded scale
	  scaleSteps: null,
	  // Number - The value jump in the hard coded scale
	  scaleStepWidth: null,
	  // Number - The scale starting value
	  scaleStartValue: null,
	
	  // String - Colour of the scale line
	  scaleLineColor: "rgba(0,0,0,.1)",
	
	  // Number - Pixel width of the scale line
	  scaleLineWidth: 1,
	
	  // Boolean - Whether to show labels on the scale
	  scaleShowLabels: true,
	
	  // Interpolated JS string - can access value
	  scaleLabel: "<%=value%>",
	
	  // Boolean - Whether the scale should stick to integers, not floats even if drawing space is there
	  scaleIntegersOnly: true,
	
	  // Boolean - Whether the scale should start at zero, or an order of magnitude down from the lowest value
	  scaleBeginAtZero: false,
	
	  // String - Scale label font declaration for the scale label
	  scaleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	
	  // Number - Scale label font size in pixels
	  scaleFontSize: 12,
	
	  // String - Scale label font weight style
	  scaleFontStyle: "normal",
	
	  // String - Scale label font colour
	  scaleFontColor: "#666",
	
	  // Boolean - whether or not the chart should be responsive and resize when the browser does.
	  responsive: false,
	
	  // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
	  maintainAspectRatio: true,
	
	  // Boolean - Determines whether to draw tooltips on the canvas or not
	  showTooltips: true,
	
	  // Function - Determines whether to execute the customTooltips function instead of drawing the built in tooltips (See [Advanced - External Tooltips](#advanced-usage-external-tooltips))
	  customTooltips: false,
	
	  // Array - Array of string names to attach tooltip events
	  tooltipEvents: ["mousemove", "touchstart", "touchmove"],
	
	  // String - Tooltip background colour
	  tooltipFillColor: "rgba(0,0,0,0.8)",
	
	  // String - Tooltip label font declaration for the scale label
	  tooltipFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	
	  // Number - Tooltip label font size in pixels
	  tooltipFontSize: 14,
	
	  // String - Tooltip font weight style
	  tooltipFontStyle: "normal",
	
	  // String - Tooltip label font colour
	  tooltipFontColor: "#fff",
	
	  // String - Tooltip title font declaration for the scale label
	  tooltipTitleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
	
	  // Number - Tooltip title font size in pixels
	  tooltipTitleFontSize: 14,
	
	  // String - Tooltip title font weight style
	  tooltipTitleFontStyle: "bold",
	
	  // String - Tooltip title font colour
	  tooltipTitleFontColor: "#fff",
	
	  // String - Tooltip title template
	  tooltipTitleTemplate: "<%= label%>",
	
	  // Number - pixel width of padding around tooltip text
	  tooltipYPadding: 6,
	
	  // Number - pixel width of padding around tooltip text
	  tooltipXPadding: 6,
	
	  // Number - Size of the caret on the tooltip
	  tooltipCaretSize: 8,
	
	  // Number - Pixel radius of the tooltip border
	  tooltipCornerRadius: 6,
	
	  // Number - Pixel offset from point x to tooltip edge
	  tooltipXOffset: 10,
	  
	  // String - Template string for single tooltips
	  tooltipTemplate: "<%if (label){%><%=label%>: <%}%><%= value %>",
	  
	  // String - Template string for multiple tooltips
	  multiTooltipTemplate: "<%= value %>",
	
	  // Function - Will fire on animation progression.
	  onAnimationProgress: function(){},
	
	  // Function - Will fire on animation completion.
	  onAnimationComplete: function(){}
	}
	
	
	console.log("Load Graph");
	
	//Static data
	data = {
    //labels: ["0.08","1.09","2.11","3.13","4.14","5.15","6.16","7.16","8.17","9.19","10.2","11.21","12.22","13.22","14.25","15.26","16.28","17.29","18.3","19.31","20.34","21.35","22.37","23.38","24.39","25.4","26.4","27.42","28.43","29.45","30.48","31.48","32.48","33.5","34.52","35.53","36.55","37.58","38.58","39.59","40.61","41.61","42.64","43.66","44.67","45.68","46.7","47.72","48.75","49.77","50.79","51.79","52.81","53.83","54.84","55.86","56.88","57.89","58.89","59.91","60.92","61.94","62.96","63.99","65.01","66.01","67.03","68.04","69.05","70.07","71.1","72.1","73.11","74.14","75.15","76.17","77.18","78.19","79.21","80.24","81.26","82.28","83.3","84.31","85.33","86.36","87.36","88.37","89.4","90.41","91.41","92.44","93.45","94.46","95.49","96.5","97.5","98.52","99.53","100.54"],
    //labels: ["0.08","","","","","5.15","6.16","7.16","8.17","9.19","10.2","11.21","12.22","13.22","14.25","15.26","16.28","17.29","18.3","19.31","20.34","21.35","22.37","23.38","24.39","25.4","26.4","27.42","28.43","29.45","30.48","31.48","32.48","33.5","34.52","35.53","36.55","37.58","38.58","39.59","40.61","41.61","42.64","43.66","44.67","45.68","46.7","47.72","48.75","49.77","50.79","51.79","52.81","53.83","54.84","55.86","56.88","57.89","58.89","59.91","60.92","61.94","62.96","63.99","65.01","66.01","67.03","68.04","69.05","70.07","71.1","72.1","73.11","74.14","75.15","76.17","77.18","78.19","79.21","80.24","81.26","82.28","83.3","84.31","85.33","86.36","87.36","88.37","89.4","90.41","91.41","92.44","93.45","94.46","95.49","96.5","97.5","98.52","99.53","100.54"],
    //console.log("Load Graph");
    //labels: ["0.08","","","","","5.15"],
    //labels: ["0","1","2","3","4","5","6"],
	labels: counterLabel,
    datasets: [
        {
            label: "Thinking",
            fillColor: "rgba(20,20,220,0.2)",
            strokeColor: "#999",
            pointColor: "rgba(20,20,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            //data: [70,70,70,57,57,57,66,66,66,64,64,64,54,54,54,60,60,60,66,66,66,67,67,67,69,69,69,69,74,74,74,74,60,60,60,48,48,48,35,35,35,34,34,34,27,27,27,27,27,27,27,27,27,27,27,27,27,35,35,35,35,29,29,29,41,41,41,41,44,44,44,53,53,53,69,69,69,70,70,70,80,80,80,75,75,75,63,63,63,60,60,60,53,53,53,69,69,69,78,78]
          
            //data: [70,70,70,57,57,57,66,66,66,64]
            //data: [age]
            //data: [1,2,3,4,5,6]
            data: thinkingArr
          },
       {
        label: "Patience",
        fillColor: "rgba(51,187,05,0.2)",
        strokeColor: "#698898",
        pointColor: "rgba(51,187,05,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        //data: [50,50,50,51,51,51,66,66,66,56,56,56,54,54,54,51,51,51,40,40,40,48,48,48,53,53,53,53,53,53,53,53,60,60,60,57,57,57,57,57,57,54,54,54,43,43,43,43,43,43,43,43,43,43,43,43,43,61,61,61,61,53,53,53,50,50,50,50,64,64,64,69,69,69,74,74,74,64,64,64,57,57,57,54,54,54,50,50,50,54,54,54,75,75,75,63,63,63,56]
      
        //data: [50,50,50,51,51,51,66,66,66,56]
        //data: [fname]
        //data: [1,2,3,4,5,6]
        data: patienceArr
      },
      {
          label: "Visual",
          fillColor: "rgba(232,187,20,0.2)",
          strokeColor: "#ef6da1",
          pointColor: "rgba(232,187,20,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(151,187,205,1)",
          //data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,0,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,42,0,0,57,0,46,0,0,0,57,0,0,0,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      
          //data: [0,0,0,0,0,0,0,0,0,0]
          //data: [lname]
          //data: [1,2,3,4,5,6]
          data: visualArr 
        },
		{
            label: "Thinking2",
            fillColor: "rgba(201,20,220,0.2)",
            strokeColor: "#999",
            pointColor: "rgba(201,40,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            //data: [70,70,70,57,57,57,66,66,66,64,64,64,54,54,54,60,60,60,66,66,66,67,67,67,69,69,69,69,74,74,74,74,60,60,60,48,48,48,35,35,35,34,34,34,27,27,27,27,27,27,27,27,27,27,27,27,27,35,35,35,35,29,29,29,41,41,41,41,44,44,44,53,53,53,69,69,69,70,70,70,80,80,80,75,75,75,63,63,63,60,60,60,53,53,53,69,69,69,78,78]
          
            //data: [70,70,70,57,57,57,66,66,66,64]
            //data: [age]
            //data: [1,2,3,4,5,6]
            data: thinkingArr2
          },
       {
        label: "Patience2",
        fillColor: "rgba(151,187,05,0.2)",
        strokeColor: "#698800",
        pointColor: "rgba(151,187,05,1)",
        pointStrokeColor: "#fff",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(151,187,205,1)",
        //data: [50,50,50,51,51,51,66,66,66,56,56,56,54,54,54,51,51,51,40,40,40,48,48,48,53,53,53,53,53,53,53,53,60,60,60,57,57,57,57,57,57,54,54,54,43,43,43,43,43,43,43,43,43,43,43,43,43,61,61,61,61,53,53,53,50,50,50,50,64,64,64,69,69,69,74,74,74,64,64,64,57,57,57,54,54,54,50,50,50,54,54,54,75,75,75,63,63,63,56]
      
        //data: [50,50,50,51,51,51,66,66,66,56]
        //data: [fname]
        //data: [1,2,3,4,5,6]
        data: patienceArr2
      },
		 {
          label: "Visual2",
          fillColor: "rgba(121,187,201,0.2)",
          strokeColor: "#ef6da1",
          pointColor: "rgba(121,187,201,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(15,187,205,1)",
          //data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,0,66,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,42,0,0,57,0,46,0,0,0,57,0,0,0,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
          //data: [0,0,0,0,0,0,0,0,0,0]
          //data: [lname]
          //data: [1,2,3,4,5,6]
          data: visualArr2
		  //data: [50,50,50,51,51,51,66,66,66,56,56,56,54,54,54,51,51,51,40,40,40,48,48,48,53,53,53,53,53,53,53,53,60,60,60,57,57,57,57,57,57,54,54,54,43,43,43,43,43,43,43,43,43,43,43,43,43,61,61,61,61,53,53,53,50,50,50,50,64,64,64,69,69,69,74,74,74,64,64,64,57,57,57,54,54,54,50,50,50,54,54,54,75,75,75,63,63,63,56]
		  
        }
    ]
  };
	
	//Plot graph
	//plotGraph();
	if(LoadTime != "FIRSTLOAD")
	{
		console.log("Not First Load:: "+LoadTime);
		// Get the context of the canvas element we want to select
		var ctx = document.getElementById("myChart").getContext("2d");

		// Instantiate a new chart using 'data' (defined below)
		var myChart = new Chart(ctx).Line(data);
var canvas =  document.getElementById("myChart");
canvas.onclick = function (evt) {


       var activePoints = myChart.getPointsAtEvent(evt);
        var value = activePoints[0].label;
     
       //alert ("hi"+value);

//$('#screenshot').html("<img  id='myImg' src='images/Screenshots/"+value+".png' height='180' width='280'>");
//<img id="myImg" src='images/Screenshots/10.png' width="280" height="180">

$("#myImg").attr("src",'images/Screenshots/'+value+'.png')
$("#myImg2").attr("src",'images/Screenshots2/'+value+'.png')


}
      

	}
	else
	{
		console.log("FIRSTLOAD of graph:: "+LoadTime);

	} 

 /* // Get the context of the canvas element we want to select
  var ctx = document.getElementById("myChart").getContext("2d");

  // Instantiate a new chart using 'data' (defined below)
  var myChart = new Chart(ctx).Line(data);
  */
}
