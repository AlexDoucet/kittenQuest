import { Component, Input } from '@angular/core';
import { Kitten } from './kitten.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  toAdoptKitten : Kitten[] = [

    new Kitten('Oscar', 'Angora', '24/11/2020','https://www.cesaretfelix.com/images/dossiers/2019-10/mini/angora-turque-104247-650-325.jpg' ),

    new Kitten('Nino', 'British', '24/02/2018','https://www.zooplus.fr/magazine/wp-content/uploads/2018/07/british-shorthair-768x500.jpg' ),

    new Kitten('Louis', 'Bombay', '24/05/2021','https://www.assuropoil.fr/wp-content/uploads/bombay-race-chat.jpg' ),

    ]

  adoptedKittens : Kitten[] = [];


  title: any;

  constructor(){
    // console.log(this.kitten1);
  }

  sendToList(event:Kitten){

this.toAdoptKitten.push(event);
  }

  adoptKitten(event:number) : void{

    this.adoptedKittens.push(this.toAdoptKitten[event]);
    this.toAdoptKitten.splice(event,1);

  }





}
