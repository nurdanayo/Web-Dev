import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetailsComponent {
  product?: Product;

  constructor(route: ActivatedRoute) {
    const id = Number(route.snapshot.paramMap.get('id'));
    this.product = PRODUCTS.find(p => p.id === id);
  }

  selectedImage = '';

  setImage(img: string): void {
    this.selectedImage = img;
  }

  get mainImage(): string {
    return this.selectedImage || this.product?.images?.[0] || this.product?.image || '';
  }

  private shareText(): string {
    if (!this.product) return '';
    return `${this.product.name} — ${this.product.price} ₸\n${this.product.link}`;
  }

  whatsAppShareUrl(): string {
    return `https://wa.me/?text=${encodeURIComponent(this.shareText())}`;
  }

  telegramShareUrl(): string {
    if (!this.product) return '';
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }
}