import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public data: any[];
  public objectKeys: any[] = [];
  public options: any[] = [];
  public useFunction: Function;

  ngOnInit() {
    this.getDataItemsTable();
    this.getDataColumnsTable();
    this.useFunction = this.functionChild.bind(this);
  }


  getDataItemsTable(){
    this.data = [
      {name: 'download', description: 'img', country: 'img-table', age: ''},
      {name: 'edit', description: 'img', country: 'btn-table', age: ''},
      {name: 'delete', description: 'img', country: 'btn-table', age: ''},
      {name: 'button', description: 'button', country: 'form-control', age: ''}
    ]
  }

  getDataColumnsTable(){
    this.objectKeys = Object.keys(this.data[0]);
    this.options = [
      {name: 'download', type: 'img', class: 'img-table', img: 'test.png'},
      {name: 'edit', type: 'img', class: 'btn-table', img: '../assets/test.png'},
      {name: 'delete', type: 'img', class: 'btn-table', img: '../assets/test.png'},
      {name: 'button', type: 'button', class: 'form-control', img: '../assets/test.png'},
    ];
  }

  functionChild(index: number, type: any, item: any, option: any){
    console.log(index);
    console.log(item);
    console.log(type);
    console.log(option);
  }
}
