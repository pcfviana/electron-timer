const { app, BrowserWindow, ipcMain } = require('electron');


app.on('ready', () => {
    console.log('App started');

    let mainWindow = new BrowserWindow({
        width: 600,
        height: 400
    });
    
    var url = `file://${__dirname}/app/index.html`;
    mainWindow.loadURL(url);
    
});

app.on('window-all-closed', () => {
    app.quit();
});

ipcMain.on('open-window-about', () => {
    let aboutWindow = new BrowserWindow({
        width: 300,
        height: 200
    });

    var url = `file://${__dirname}/app/about.html`;
    aboutWindow.loadURL(url);
});