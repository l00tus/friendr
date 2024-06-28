import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ], //aici se pun componentele
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ParentComponent
  ]
})
export class PlaygroundModule { }
