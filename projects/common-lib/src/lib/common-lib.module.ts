import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonLibComponent } from './common-lib.component';
import { CommonLibService } from './common-lib.service';



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
export class CommonLibModule {
  constructor(@Optional() @SkipSelf() parentModule?: CommonLibModule) {
    if (parentModule) {
      throw new Error(
        'CommonLib is already loaded. Import it in the AppModule only');
    }
  }

  // static forRoot(config: CommonLibModule): ModuleWithProviders<CommonLibModule> {
  //   return {
  //     ngModule: CommonLibModule,
  //     providers: [
  //       { provide: UserServiceConfig, useValue: config }
  //     ]
  //   };
  // }
}
