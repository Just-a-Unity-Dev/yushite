// uyhhhhh
const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
	const win = new BrowserWindow({
		width: 1920,
		height: 1080,
		icon: "./public/favicon.png"
	})

	win.loadFile('./public/index.html')
}

app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})