//Researched and coded along with the tutorial at https://www.youtube.com/watch?v=9dtDaWi6R0g
//Will customize. 

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext('2d')

	ctx.strokeStyle = "#FFA500"
	ctx.lineWidth = 18
	ctx.lineCap = "round"
	ctx.shadowBlur = 20
	ctx.shadowColor = "#FFA500" // set to same color for "glow" effect


function degreeToRadians(degree) {
	var factor = Math.PI / 180
	return degree * factor // return number of radians
}
function renderTime() {
	var now = new Date()
	var today = now.toDateString()
	var time = now.toLocaleTimeString()
	var hours = now.getHours()
	var min = now.getMinutes()
	var seconds = now.getSeconds()
	var milliseconds = now.getMilliseconds()
	//smooth out so it's accurate
	var newSeconds = seconds + (milliseconds/1000)

	//Background
	//fill style sets the color when filling block
	//fillRect color for the canvas rectangle - cover entire canvas
	//first coordinates of rect 0, 0, bottom 500, 500
	//so that the seconds/min/hr don't overwrite at end

//create radial gradient to further "glow" effect. expects 6 arguments.
//colorStops - 2 arguments, which color at start and at end 
	gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300)
	gradient.addColorStop(0, '#C71585')
	gradient.addColorStop(1, '#000000')
	ctx.fillStyle = gradient 
	ctx.fillRect(0, 0, 500, 500)


//Hours - 

//x, y, radius, units/radians
// to measure angles to convert 
//degrees to radians
	ctx.beginPath()
	//create arc
	ctx.arc(250, 250, 200, degreeToRadians(270), degreeToRadians(hours * 15) - 90) //where on x/y axis circle will appear
	ctx.stroke()


	//Minutes
	ctx.beginPath()
	//create arc
	ctx.arc(250, 250, 170, degreeToRadians(270), degreeToRadians(min * 6) - 90) //where on x/y axis circle will appear
	ctx.stroke()

//Seconds
	ctx.beginPath()
	//create arc
	ctx.arc(250, 250, 140, degreeToRadians(270), degreeToRadians(newSeconds * 6) - 90) //where on x/y axis circle will appear
	ctx.stroke()

//Date
	ctx.font = "18px Arial bold"
	ctx.fillStyle = "#FFA500"
	ctx.fillText(today, 175, 250) //numbers are where on axis the date will appear

//Time
	ctx.font = "26px Arial bold"
	ctx.fillStyle = "#FFA500"
	ctx.fillText(time, 175, 280)

		//for converting the above into an image you can save. will convert into a longlonglong string of code that
		//browsers will interpret as image. useful for later on, for saving as an image, etc.
	// var dataURL = canvas.toDataURL()
	// document.getElementById("makeImage").src = dataURL
}

//set a timer , setInterval, update every 40 milliseconds
setInterval(renderTime, 40)



