import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Comp1Component } from './comp-1/comp-1.component';
import { CoursesService } from './AlltheServices/courses.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SummaryPipePipe } from './AllthePipes/summary-pipe.pipe';
import { SecondcomponentComponent } from './AlltheComponents/Component-2/secondcomponent/secondcomponent.component';


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    SummaryPipePipe,
    SecondcomponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
