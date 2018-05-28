import { Component, OnInit, NgModule } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})


export class MyformComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
  }

  myData: Array<any>;

  constructor(private http:Http) {
    
    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .map(response => response.json())
      .subscribe(res => this.myData = res);

  }
  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
   ];

   foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
