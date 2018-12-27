const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const url = require('url');
const {dialog} = require('electron');

// 引入自动更新模块
const { autoUpdater } = require('electron-updater');
const feedUrl = "http://192.168.1.148:8001/win64/"; // 更新包位置

// app.commandLine.appendSwitch('no-proxy-server')
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\');
}

// 运行环境判断
var args = process.argv.slice(1);

dev = args.some(function (val) { return val === '--dev'; });

// 设置调试环境和运行环境 的渲染进程路径
const winURL = dev ? 'http://localhost:4200' :
  `file://${__dirname}/dist/index.html`;

// 保持一个对于 window 对象的全局引用，如果你不这样做，
// 当 JavaScript 对象被垃圾回收， window 会被自动地关闭
let win, webContents

function createWindow() {
  // 创建浏览器窗口。
  win = new BrowserWindow({
    width: 1400,
    height: 800,
    backgroundColor: '#ffffff',
    webPreferences: { webSecurity: false }, //解决跨域问题
  })

  // load the dist folder from Angular
  win.loadURL(winURL);

  webContents = win.webContents;
  // 然后加载应用的 index.html。
  // win.loadURL(url.format({
  //   pathname: path.join(__dirname, 'dist/index.html'),
  //   protocol: 'file:',
  //   slashes: true
  // }));

  // 打开开发者工具 打包到生产环境请注掉。
   win.webContents.openDevTools()
  win.on('close', function(e) {
    e.preventDefault();
    dialog.showMessageBox(
      {
        type: 'warning',
        title: '警告',
        message: '你确定要退出程序吗？这可能不会导致任何问题[笑脸]',
        buttons: ['取消', '确认']
      },
      function(data) {
        if (data === 1) {
          win.destroy();
        }
      })
  })

  // 当 window 被关闭，这个事件会被触发。
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  });
}

// 主进程监听渲染进程传来的信息
ipcMain.on('update', (e, arg) => {
  console.log("update");
  checkForUpdates();
});

let checkForUpdates = () => {
  let messages={
    error:'检查更新出错',
    checking:'正在检查更新……',
    updateAva:'检测到新版本，正在下载……',
    updateNotAva:'现在使用的就是最新版本，不用更新',
  };
  // 配置安装包远端服务器
  console.log(feedUrl)
  autoUpdater.setFeedURL(feedUrl);

  // 下面是自动更新的整个生命周期所发生的事件
  autoUpdater.on('error', function(message) {
    sendUpdateMessage('error', messages.error);
  });
  autoUpdater.on('checking-for-update', function(message) {
    sendUpdateMessage('checking-for-update', messages.checking);
  });
  autoUpdater.on('update-available', function(message) {
    sendUpdateMessage('update-available', messages.updateAva);
  });
  autoUpdater.on('update-not-available', function(message) {
    sendUpdateMessage('update-not-available', messages.updateNotAva);
  });

  // 更新下载进度事件
  autoUpdater.on('download-progress', function(progressObj) {
    sendUpdateMessage('downloadProgress', progressObj);
  });
  // 更新下载完成事件
  autoUpdater.on('update-downloaded', function(event, releaseNotes, releaseName, releaseDate, updateUrl, quitAndUpdate) {
    sendUpdateMessage('isUpdateNow');
    ipcMain.on('updateNow', (e, arg) => {
      autoUpdater.quitAndInstall();
    });
  });

  //执行自动更新检查
  autoUpdater.checkForUpdates();
};

// 主进程主动发送消息给渲染进程函数
function sendUpdateMessage(message, data) {
  webContents.send('message', { message, data });
}
// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow);

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow();
  }
});

// 在这文件，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。

ipcMain.on('window-close', function () {
  win.close();
})
