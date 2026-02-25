import { Component } from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from '@angular/common';

interface Product {
  images: string[];
  name: string;
  description: string;
  rating: number;
  kaspiLink: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  imports: [
    NgClass,
    NgForOf,
    NgOptimizedImage
  ],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf7/h44/86597112987678.png?format=gallery-large'],
      name: 'Google Pixel 7 Pro 12/512 White',
      description: 'Flagship smartphone with Tensor G2 chip and 120Hz display',
      rating: 4.7,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-512-gb-belyi-107402585/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/he7/ha2/63603323338782.jpg?format=gallery-large'],
      name: 'Google Pixel 7 Pro 12/512 Gray',
      description: 'Premium Android phone with 50MP camera system',
      rating: 4.6,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-512-gb-seryi-110050273/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/he7/ha2/63603323338782.jpg?format=gallery-large'],
      name: 'Google Pixel 7 Pro 12/128 Gray',
      description: 'Powerful mobile device with LTPO OLED display',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-pro-12-gb-128-gb-seryi-107066184/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf7/h44/86597112987678.png?format=gallery-large'],
      name: 'Google Pixel 7 8/128 White',
      description: 'Compact flagship with advanced AI features',
      rating: 4.4,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-belyi-106971867/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=gallery-large'],
      name: 'Google Pixel 9 12/256 Black',
      description: 'Latest model with Tensor G4 processor',
      rating: 4.9,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-9-12-gb-256-gb-chernyi-122384541/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hd3/hbc/86037206695966.png?format=gallery-large'],
      name: 'Google Pixel 7 8/128 Green',
      description: 'Eco-friendly smartphone with IP68 rating',
      rating: 4.3,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7-8-gb-128-gb-zelenyi-106971462/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hcd/ha6/86895779708958.png?format=gallery-large'],
      name: 'Google Pixel 9 12/128 Gold',
      description: 'Luxury edition with ceramic back panel',
      rating: 4.8,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-9-12-gb-128-gb-zolotistyi-122709533/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h26/h67/63603038289950.jpg?format=gallery-large'],
      name: 'Google Pixel 8a 8/128 Black',
      description: 'Affordable flagship with 120Hz OLED',
      rating: 4.6,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-8a-8-gb-128-gb-chernyi-119270938/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h3a/hb5/86896485400606.png?format=gallery-large'],
      name: 'Google Pixel 9 Pro XL 16/256',
      description: 'Ultra-premium phablet with 6.8" display',
      rating: 4.9,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-9-pro-xl-16-gb-256-gb-chernyi-122710862/?c=750000000'
    },
    {
      images: ['https://resources.cdn-kaspi.kz/img/m/p/hf7/h44/86597112987678.png?format=gallery-large'],
      name: 'Google Pixel 7a 8/128 White',
      description: 'Mid-range champion with flagship camera',
      rating: 4.5,
      kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-7a-8-gb-128-gb-belyi-110489778/?c=750000000'
    }
  ];
  array1: Product[] = this.products.slice(0,5);
  array2: Product[] = this.products.slice(5,10);
  shareViaWhatsApp(link: string) {
    window.open(`https://api.whatsapp.com/send?text=Check this Google Pixel: ${encodeURIComponent(link)}`, '_blank');
  }

  shareViaTelegram(link: string) {
    window.open(`https://telegram.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }

  getStars(rating: number) {
    return Array(5).fill(0).map((_, i) => i < rating);
  }



  
}