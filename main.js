
const {app,BrowserWindow, Menu,remote}=require('electron');
const url=require('url');
const path=require('path');

let win;

app.on('ready',()=>{
win=new BrowserWindow({
    height:410,width:250,resizable:false,frame:false,
    transparent:true,
    webPreferences:{
        nodeIntegration:true,
        contextIsolation:false,
        enableRemoteModule: true,
    }
});
win.loadURL(url.format({
    pathname:path.resolve(__dirname,'index.html'),
    protocol:'file',
    slashes:true
}))



});



