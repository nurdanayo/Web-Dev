import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model'; 
import { ProductListComponent } from '../components/product-list/product-list';
import { PRODUCTS } from '../data/products';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

  products: Product[] = PRODUCTS;     

  query = '';

  get filteredProducts(): Product[] {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.products;

    return this.products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

}


