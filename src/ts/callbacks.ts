import GameObject from "./objects/object";

export function start(): void {}

export function tick(t: number, objects?: GameObject[]): void {
	console.log(t)
}
