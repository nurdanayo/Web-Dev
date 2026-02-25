import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<Product>();

  likeProduct() {
    this.product.likes++;
  }

  onRemove() {
    this.remove.emit(this.product);
  }

  getStars(rating: number) {
    return Array(5).fill(0).map((_, i) => i < Math.round(rating));
  }

  shareViaWhatsApp(link: string) {
    window.open(`https://api.whatsapp.com/send?text=Check this product: ${encodeURIComponent(link)}`, '_blank');
  }

  shareViaTelegram(link: string) {
    window.open(`https://telegram.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
