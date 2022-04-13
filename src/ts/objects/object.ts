import { Transform, ObjectType, Vector, Vector2, Color } from "../types";

export default class GameObject {
	constructor (
		public transform: Transform,
		public objType: ObjectType,
	) {}
		
	public color: Color = Color.white
	public callback(tick: number, objects: GameObject[]) {}
	
	get position(): Vector2 {
		return this.transform.position;
	}

	get rotation(): Vector {
		return this.transform.rotation;
	}
	
	get scale(): Vector2 {
		return this.transform.scale;
	}
}

export class Sand extends GameObject {
	public color: Color = Color.yellowish_gray;
	public callback(tick: number, objects: GameObject[]): void {
		this.transform.position.y--;
		console.log(tick)
	}
}

export class Water extends GameObject {
	public color: Color = Color.cloudy_blue;
	public callback(tick: number, objects: GameObject[]): void {
		this.transform.position.y--;
	}
}

export const objects: GameObject[] = [
	new Sand(
		{
			position: {
				x: 10,
				y: 10
			},
			rotation: {
				x: 10
			},
			scale: {
				x: 5,
				y: 5
			},
		},
		ObjectType.square
	),
	new Sand(
		{
			position: {
				x: 15,
				y: 20
			},
			rotation: {
				x: 10
			},
			scale: {
				x: 5,
				y: 5
			},
		},
		ObjectType.square
	),
	new Sand(
		{
			position: {
				x: 20,
				y: 5
			},
			rotation: {
				x: 10
			},
			scale: {
				x: 5,
				y: 5
			},
		},
		ObjectType.square
	),
];