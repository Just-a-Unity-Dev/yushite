import { Color, ObjectType } from "./types";
import { objects } from "./objects/object"

const canvas = document.querySelector("canvas")
let t = 0;

function render() {
	let ctx = canvas.getContext('2d');

	ctx.translate(canvas.width / 2, canvas.height / 2);
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.imageSmoothingEnabled = false;

	objects.forEach(function(v, i, a) {
		if (v.objType == ObjectType.square) {
			if (v.color != null) {
				ctx.fillStyle = v.color.toString();
			} else ctx.fillStyle = Color.black;
			ctx.fillRect(v.position.x, v.position.y, v.scale.x, v.scale.y);
		}
		ctx.fillStyle = Color.white;
	}, false)
}

function update(): void {
	objects.forEach(function(v, i, a) {
		v.callback(t, objects)
	}, false)
	render();

	t++;
}

function start(): void {
	update();
	setTimeout(start, 50);
}

start();
