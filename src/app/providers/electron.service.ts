import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer } from 'electron';
import { desktopCapturer } from 'electron';
import * as childProcess from 'child_process';
declare var window;
@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  childProcess: typeof childProcess;
  desktopCapturer: typeof desktopCapturer;
  constructor() {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.childProcess = window.require('child_process');
      this.desktopCapturer = window.require('electron').desktopCapturer
    }
  }

  isElectron = () => {
    return window && window.process && window.process.type;
  }

}
