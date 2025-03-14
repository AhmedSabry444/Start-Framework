import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
arrImgs:Images[]=[
  {img:'./images/poert1.png'},
  {img:'./images/port2.png'},
  {img:'./images/port3.png'},
  {img:'./images/poert1.png'},
  {img:'./images/port2.png'},
  {img:'./images/port3.png'},
];

modalImg!:string;
modalView:boolean =true

showModel(e:MouseEvent,img:HTMLImageElement){
if(e.target!=img){
this.modalView=true;
}
}
}
interface Images{
  img : string;
}