import { Component, OnInit } from '@angular/core';

import { Products } from '../../model/products';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Products[];

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productsService
      .getAll()
      .subscribe(this.cbSuccess.bind(this), this.cbError.bind(this));
  }

  /**
   * Handle Success
   * @param response
   */
  cbSuccess(response) {
    this.products = Object.assign(response.body);
  }

  /**
   * Handler Error
   * @param error
   */
  cbError(error) {
    console.log('ERROR', error);
  }
}
