export type Vector = {
	x: number
};

export type Vector2 = {
	x: number,
	y: number
};

export type Transform = {
	position: Vector2,
	rotation: Vector,
	scale: Vector2	
};

export enum Color {
	red = "#f00",
	orange = "#ffa500",
	yellow = "#ffff00",
	dark_green = "#060",
	green = "#0a0",
	lime = "#0f0",
	dark_blue = "#060",
	blue = "#0f0",
	light_blue = "#7dd3e2",
	purple = "#404",
	black = "#000",
	white = "#fff",

	yellowish_gray = "#C2B280",
	cloudy_blue = "#d4f1f9"
}

export enum ObjectType {
	square
};