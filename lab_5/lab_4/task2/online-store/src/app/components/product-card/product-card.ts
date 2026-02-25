import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent {

  shareText(): string {
    return `${this.product.name} — ${this.product.price} ₸\n${this.product.link}`;
  }

  shareWhatsAppUrl(): string {
    return `https://wa.me/?text=${encodeURIComponent(this.shareText())}`;
  }

  shareTelegramUrl(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }

  @Input() product!: Product;

  selectedImage = '';

  setImage(img: string): void {
    this.selectedImage = img;
  }

  get mainImage(): string {
    return this.selectedImage || this.product.images?.[0] || this.product.image;
  }
}