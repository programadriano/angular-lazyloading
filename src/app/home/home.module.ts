import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './products/products.component';

import { ProductsService } from '../services/products.service';
import { HttpUtilService } from '../services/http-util.service';

@NgModule({
  imports: [CommonModule, HomeRoutingModule],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductsComponent
  ],
  providers: [ProductsService, HttpUtilService]
})
export class HomeModule {}
