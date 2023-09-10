import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
// import { MenuModule } from 'primeng/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MenubarModule
  ]
})
export class PrimeNgModule { }
