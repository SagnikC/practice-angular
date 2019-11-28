import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//router module used for setting up the application level route
//import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogCreateComponent } from './blog-create/blog-create.component';
import { BlogEditComponent } from './blog-edit/blog-edit.component';

@NgModule({
  declarations: [
    ],
  imports: [
    BrowserModule,

    //routerModule forRoot method to declare the possible routes in the application
    /*RouterModule.forRoot([
      {path: 'home', component: HomeComponent}
    ]),*/

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
