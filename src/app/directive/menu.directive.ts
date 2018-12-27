import {Directive, HostListener} from '@angular/core';
import {ElectronService} from '../providers/electron.service';

import * as html2canvas from 'html2canvas';
import PopupOptions = Electron.PopupOptions;
declare var window;
@Directive({
  selector: '[appMenu]'
})
export class MenuDirective {

  constructor(
    private electronService: ElectronService
  ) { }
  @HostListener('mouseup', ['$event']) onMouse(event) {
    if (event.button !== 2) {
      return;
    }
    const imgData = event.target.toDataURL();
    const {remote} = window.require('electron')
    const {Menu, MenuItem} = remote
    const menu = new Menu()
    menu.append(new MenuItem({label: '保存',
      click() {
        const base64Img = imgData;
        const oA = document.createElement('a');
        oA.href = base64Img;
        oA.download = '导出图片';
        // 创建虚拟鼠标事件
        let event = document.createEvent('MouseEvents');
        // 虚拟鼠标事件初始化
        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        // 虚拟鼠标事件触发
        oA.dispatchEvent(event);
      }
    }))
    menu.append(new MenuItem({label: '删除',
        click() {
          event.target.height = event.target.height
        }
      })
    )

    menu.popup({ window: remote.getCurrentWindow() })
  }
}
