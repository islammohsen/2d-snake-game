function Mybox(x, y) {
	this.x = x;
	this.y = y;
	this.draw = function(row, col) {
		var inc_row = height / row;
		var inc_col = width / col;
		fill(255, 0, 0);
		rect(this.x * inc_row, this.y * inc_col, inc_row, inc_col);
	}
	this.move = function(x, y){
		this.x += x;
		this.y += y;
	}
}