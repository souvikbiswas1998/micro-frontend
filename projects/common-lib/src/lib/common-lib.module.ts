import { NgModule } from '@angular/core';
import { CommonLibComponent } from './common-lib.component';
import { CommonLibService } from './common-lib.service';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CommonLibComponent
  ],
  imports: [
    // CommonModule
  ],
  providers: [CommonLibService],
  exports: [
    CommonLibComponent
  ]
})
export class CommonLibModule { }
