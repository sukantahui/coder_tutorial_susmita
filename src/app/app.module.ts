import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PythonHomeComponent } from './pages/python-home/python-home.component';
import { PythonIntroductionComponent } from './pages/python-home/python-introduction/python-introduction.component';
import { PythonDataTypeComponent } from './pages/python-home/python-data-type/python-data-type.component';
import { PythonNumberComponent } from './pages/python-home/python-number/python-number.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PythonHomeComponent,
    PythonIntroductionComponent,
    PythonDataTypeComponent,
    PythonNumberComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
