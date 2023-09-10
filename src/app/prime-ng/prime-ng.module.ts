import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
// import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
   // MenuModule,
   ButtonModule,
   CardModule,
   FieldsetModule,
   MenubarModule,
   PanelModule,
  ]
})
export class PrimeNgModule { }
