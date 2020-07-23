import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  people: any[] = [
    {
      "name": "Douglas  Pace"
    },
    {
      "name": "Mcleod  Mueller"
    },
    {
      "name": "Day  Meyers"
    },
    {
      "name": "Aguirre  Ellis"
    },
    {
      "name": "Cook  Tyson"
    }
  ];
  numeri = 10;
  public choose ='';
  aniket: boolean = false;
  title = 'Aniket';

  setValue(drp: any){
    // alert(drp.target.value);
    this.choose = drp.target.value;
      }

  aniketTest(){
    this.aniket = !this.aniket;
  }

  checked(aniket: boolean){
this.aniket = !this.aniket;
  }

}
