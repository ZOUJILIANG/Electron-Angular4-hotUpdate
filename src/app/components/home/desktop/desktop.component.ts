import { Component, OnInit } from '@angular/core';
import {ElectronService} from '../../../providers/electron.service';
declare var navigator;
declare var window;
@Component({
  selector: 'app-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
  public DLL;
  public strlenLength = 0;
  constructor(
    private electron: ElectronService
  ) { }
  ngOnInit() {
    try {
      // Call *.dll with ffi
       const ffi = window.require('ffi');
      // Create funtions
       this.DLL = ffi.Library('dist/assets/MyDLL.dll', {
          'Add': ['float', ['float', 'float']],
          'Hello': ['string', []],
          'StrLength': ['int', ['string']]
        })
      // Call C++ function Hello
      document.getElementById('hello').innerHTML = this.DLL.Hello()
    } catch (error) {
      console.error('ffi.Library', error);
    }
  }
   plus() {
     const inputs = document.querySelector('#plus').getElementsByTagName('input');
     const a = Number(inputs[1].value), b = Number(inputs[0].value);
    // Call C++ function Add
     const sum = this.DLL.Add(a, b);
    console.log(`${a}+${b}=${sum}`);
    inputs[2].value = sum;
  }
  // 录屏
  /*show() {
    this.electron.desktopCapturer.getSources({types: ['window', 'screen']}, (error, sources) => {
      if (error) {
        throw error
      }
      console.log(sources)
      for (let i = 0; i < sources.length; ++i) {
        if (sources[i].name === 'Made In China') {
          navigator.mediaDevices.getUserMedia(
            {
              audio: false,
              video: {
                mandatory: {
                  chromeMediaSource: 'desktop',
                  chromeMediaSourceId: sources[i].id,
                  minWidth: 1280,
                  maxWidth: 1280,
                  minHeight: 720,
                  maxHeight: 720
                }
              }
            }
          ).then((stream) => this.handleStream(stream)).catch((e) => this.handleError(e))
          return
        }
      }
    })
  }*/
  handleStream (stream) {
    const video = document.querySelector('video')
    video.srcObject = stream
    video.onloadedmetadata = (e) => video.play()
  }

  handleError (e) {
    console.log(e)
  }
}
