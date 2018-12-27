import {AfterViewInit, Component, ElementRef, Inject, OnInit, Renderer2} from '@angular/core';
import {ElectronService} from '../../providers/electron.service';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {ToasterService} from 'angular2-toaster';
import swal from 'sweetalert2';
import {SwalUtil} from '../../config/swal-util';
declare var window;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit , AfterViewInit {
  public email;
  public password;
  public showLoadding = false;
  public tips = '';
  public downloadPercent = '';

  constructor(
    private electronService: ElectronService,
    private http: Http,
    @Inject ('toasterService') private toasterService: ToasterService,
    private route: Router
  ) {
  }

  ngAfterViewInit() {
  }

  ngOnInit() {

  }
  checkUpdate() {
    this.electronService.ipcRenderer.send('update');
    this.electronService.ipcRenderer.on('message', (event, {message, data}) => {
      console.log(data)
      switch (message) {
        case 'downloadProgress' :
          this.showLoadding = true;
          break;
        case 'update-not-available' :
          SwalUtil.swalError(data);
          break;
        case 'isUpdateNow' :
          this.showLoadding = false;
          swal({
            title: '是否现在安装更新？',
            text: '',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            confirmButtonColor: 'rgb(221, 107, 85)'
          }).then(() => {
              this.electronService.ipcRenderer.send('updateNow')
            },
            dismiss => {}
          )
          break;
      }
    });
  }
  login(event) {
    const fs = window.require('fs');
    console.log(fs)
    this.http.get('assets/data.json').subscribe(result => {
      console.log(result['_body'])
    })
    this.route.navigate(['home'])
    // window.location.href = 'http://www.baidu.com';
  }
  toastr(type, body) {
    const toast = {
      type: type,
      body: body
    };
    this.toasterService.pop(toast);
  }
}
