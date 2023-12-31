import { Component } from '@angular/core';

@Component({
  selector: 'basic-pages',
  templateUrl: './basic-pages.component.html'
})
export class BasicPagesComponent {

  public nameLower: string = 'camilo';
  public nameUpper: string = 'CAMILO';
  public fullName: string = 'cAMilO pÉreZ';

  public customDate: Date = new Date();
}
