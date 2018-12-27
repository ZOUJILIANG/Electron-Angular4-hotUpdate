import { Component, Inject, OnInit } from '@angular/core';
import { ToasterConfig } from 'angular2-toaster';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  public env: string;

  public toasterconfig: ToasterConfig = new ToasterConfig({
    tapToDismiss: false,
    showCloseButton: true,
    timeout: 3000,
    positionClass: 'toast-top-center',
    preventDuplicates: true
  });

  constructor(
    @Inject('IEnvironment')
    public environment: any) {
    this.env = this.environment.env;
  }

  ngOnInit() {
  }
}
