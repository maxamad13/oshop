import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
@NgModule({ declarations: [ProductsComponent] })
export class ProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
