import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ElectronService} from '../../../providers/electron.service';
import { DomSanitizer } from '@angular/platform-browser';
declare var navigator;
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  title = `App!`;
  constructor(
    private electronService: ElectronService,
    private element: ElementRef,
    private sanitizer: DomSanitizer,
    private route: Router
  ) { }
  ngOnInit() {
    if (navigator.mediaDevices.getUserMedia || navigator.getUserMedia) {
      // 调用用户媒体设备, 访问摄像头
      this.getUserMedia({video : {width: 480, height: 320}}, this.success, this.error);
    } else {
      alert('不支持访问用户媒体');
    }
  }
  paizhao() {
    const canvas = this.element.nativeElement.querySelector('#canvas')
    const context = canvas.getContext('2d')
    const video = this.element.nativeElement.querySelector('#video');
    context.drawImage(video, 0, 0, 480, 320);
    // this.canvasImg = context.canvas.toDataURL();
  }
  getUserMedia(constraints, success, error) {
    if (navigator.mediaDevices.getUserMedia) {
      // 最新的标准API
      navigator.mediaDevices.getUserMedia(constraints).then(success).catch(error);
    } else if (navigator.getUserMedia) {
      // 旧版API
      navigator.getUserMedia(constraints, success, error);
    }
  }
  goto(data) {
    if (data == 1) {
      // this.electronService.ipcRenderer.send('new-window', __dirname);
      this.route.navigate(['kao1kao'])
    }else {
      window.location.href = 'http://www.shushuedu.com'
    }
  }
  success(stream) {
    // 兼容webkit核心浏览器
    // let CompatibleURL = window.URL
    // 将视频流设置为video元素的源
    // video.src = CompatibleURL.createObjectURL(stream);
    // const video = this.element.nativeElement.querySelector('#video')
    const video = document.querySelector('video');
    video.srcObject = stream;
    video.play();
  }
  error(error) {
    alert(`访问用户媒体设备失败${error.name}, ${error.message}`);
  }
}
