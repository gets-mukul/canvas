var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = "white" //change color of the rectangle
c.fillRect(100, 100, 100, 100); // fillrect (x, y, width, heigth)
c.fillStyle = "while";
c.fillRect(400, 100, 100, 100);
c.fillStyle = "black";
c.fillRect(250, 300, 100, 100);

// Drawing a line

c.beginPath();
c.moveTo(80, 80); //moveTo(x, y)
c.lineTo(220, 80);
c.moveTo(380, 80);
c.lineTo(520, 80);
c.strokeStyle = "brown"; // change the color of the line
c.stroke(); //use to display line

//Arc /circle

c.beginPath();
c.arc(300, 250, 30, 0, Math.PI * 2, false);
c.strokeStyle = "red";
c.stroke();

//creating  multiple circles using for loops

for (var i = 0; i < 10; i++) {
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc(x, y, 30, 0, Math.PI * 2, false);
	c.strokeStyle = "white";
	c.stroke();

}

c.clearRect(0, 0, innerWidth, innerHeight); //clear the canvas

// moving circle animation





function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {

		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = "blue";
		c.stroke();
		c.fill();
	}

	this.update = function() {
		if ((this.x + this.radius) > innerWidth || (this.x - this.radius) < 0) {
			this.dx = -this.dx;
		}
		if ((this.y + this.radius) > innerHeight || (this.y - this.radius) < 0) {
			this.dy = -this.dy;
		}
		this.x = this.x + this.dx;
		this.y = this.y + this.dy;
		this.draw();
	}

}


var circleArray = []; 

for(var i=0; i<100; i++){
	var x = Math.random() * innerWidth;
	var y = Math.random() * innerHeight;
	var dx = (Math.random() - 0.5) * 10;
	var dy = (Math.random() - 0.5) * 10;
	var radius = 30;
	circleArray.push(new Circle(x, y, dx, dy, radius));
}




function animation() {
	requestAnimationFrame(animation);
	c.clearRect(0, 0, innerWidth, innerHeight); //clear the canvas
	
	for(var i=0; i<circleArray.length; i++){
		circleArray[i].update();
	}

}

animation();

//working with multiple circles

