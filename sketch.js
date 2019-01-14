var row = 20
var col = 20
var boxes;

function setup() {
	createCanvas(400, 400);
	boxes = new Mybox(0, 0);
}

function draw() {
	background(255);
	DrawGrid();
	boxes.draw(row, col);
}

function DrawGrid() {
	var inc_row = height / row;
	for (var i = inc_row; i < height; i += inc_row) {
		stroke(0);
		line(0, i, width, i);
	}
	var inc_col = width / col;
	for (var i = inc_col; i < height; i += inc_col) {
		stroke(0);
		line(i, 0, i, height);
	}
}

function keyPressed(){
	if(keyCode == DOWN_ARROW)
		boxes.move(0, 1);
	if(keyCode == UP_ARROW)
		boxes.move(0, -1);
	if(keyCode == LEFT_ARROW)
		boxes.move(-1, 0);
	if(keyCode == RIGHT_ARROW)
		boxes.move(1, 0);
}