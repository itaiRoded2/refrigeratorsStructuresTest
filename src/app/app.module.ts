import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './components/top-nav-bar/top-nav-bar.component';
import { TheTaskComponent } from './components/the-task/the-task.component';
import { ConfigOptionsComponent } from './components/config-options/config-options.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    TheTaskComponent,
    ConfigOptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
