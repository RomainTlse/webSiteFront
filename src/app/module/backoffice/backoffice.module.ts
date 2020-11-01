import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './pages/home/home.module';
import { CvModule } from './pages/cv/cv.module';
import { CuisineModule } from './pages/cuisine/cuisine.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeModule,
    CvModule,
    CuisineModule
  ]
})
export class BackofficeModule { }
