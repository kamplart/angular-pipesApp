import { Component } from '@angular/core';
import { interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})


export class UncommonPageComponent {


  // i18n Select

  public estadoName: boolean = true;

  public name: string = 'Camilo';
  public name1: string = this.name;
  public name2: string = 'Carolina';
  public gender: 'Masculino'|'Femenino' = 'Masculino';
  public invitationMap = {
    Masculino: 'invitarlo',
    Femenino: 'invitarla'
  }

  changeClient(miEstado:boolean):void {

    this.name = miEstado ? this.name2 : this.name1;
    this.gender = miEstado ? 'Femenino' : 'Masculino';
    this.estadoName = !miEstado;

  }

  // i18nPlural
  public clients: string[] = ['Camilo','Maria','Fernando', 'Hernando', 'Eduardo', 'Melissa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 personas esperando.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void {
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Camilo',
    age: 36,
    address: 'La Calera, Colombia',
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(800).pipe(
    tap( value => console.log('tap:', value ) ),
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve( 'Tenemos data en la promesa.' );
      //console.log( 'Tenemos data en la promesa.' );
      this.person.name = this.name2
    }, 3500);
  })

}
