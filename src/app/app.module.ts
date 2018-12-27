import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ToasterModule, ToasterService } from 'angular2-toaster';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {Kao1kaoComponent} from './components/home/kao1kao/kao1kao.component';
import {VideoComponent} from './components/home/video/video.component';
import {DesktopComponent} from './components/home/desktop/desktop.component';
import {BsDropdownModule, TabsModule} from 'ngx-bootstrap';
import {ElectronService} from './providers/electron.service';
import { EnvironmentModule } from 'c-cwm';
import {LoaddingModule} from 'c-cui';
import {ApiProviders} from '../ApiProvider';
import {environment} from '../environments/environment';
import {MenuDirective} from './directive/menu.directive';

export function toasterServiceFactory(toasterService: ToasterService) {
  return toasterService;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VideoComponent,
    MenuDirective,
    DesktopComponent,
    Kao1kaoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LoaddingModule,
    ToasterModule,
    EnvironmentModule.forRoot(environment),
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ApiProviders,
    ElectronService,
    {
      provide: 'toasterService',
      useFactory: toasterServiceFactory,
      deps: [ToasterService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
