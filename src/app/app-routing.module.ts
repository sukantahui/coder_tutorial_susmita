import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PythonDataTypeComponent } from './pages/python-home/python-data-type/python-data-type.component';
import { PythonHomeComponent } from './pages/python-home/python-home.component';
import { PythonIntroductionComponent } from './pages/python-home/python-introduction/python-introduction.component';
import { PythonNumberComponent } from './pages/python-home/python-number/python-number.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { 
    path: 'python', component: PythonHomeComponent,
    children: [
      {path: '', component: PythonIntroductionComponent},
      {path: 'dataType', component: PythonDataTypeComponent},
      {path: 'pythonNumber', component: PythonNumberComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
