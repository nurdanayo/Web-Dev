import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { Product } from './product.model';

export interface Category {
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.components.css']
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategory: Category | null = null;

  constructor() {
    this.initializeCategories();
  }

  initializeCategories() {
    this.categories = [
      {
        name: 'Electronics',
        products: [
          {
            name: 'Apple iPhone 13 128GB Black',
            description: 'Experience the power of Apple with the iPhone 13 128GB in sleek black.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
            likes: 0
          },
          {
            name: 'Xiaomi Redmi 13C 8GB/256GB Black',
            description: 'Affordable performance with Xiaomi Redmi 13C.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000',
            likes: 0
          },
          {
            name: 'Samsung Galaxy A55 5G 8GB/256GB Dark Blue',
            description: 'Sleek and powerful Samsung Galaxy A55 5G.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h21/h36/85428899414046.png?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/samsung-galaxy-a55-5g-8-gb-256-gb-temno-sinii-117420207/?c=750000000',
            likes: 0
          },
          {
            name: 'Realme Note 50 3GB/64GB Black',
            description: 'Realme Note 50, perfect for daily use.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hcb/h7e/85063476838430.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/realme-note-50-3-gb-64-gb-chernyi-116346407/?c=750000000',
            likes: 0
          },
          {
            name: 'Google Pixel 9 12GB/128GB Black',
            description: 'Google Pixel 9 with premium performance and camera.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/hd7/86895780560926.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/google-pixel-9-12-gb-128-gb-chernyi-122709568/?c=750000000',
            likes: 0
          }
        ]
      },
      {
        name: 'Books',
        products: [
          {
            name: 'The Great Gatsby',
            description: 'Classic novel by F. Scott Fitzgerald.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h7d/h81/69207464476702.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/fitsdzheral-d-f-s-he-great-gatsby-108970868/?c=750000000',
            likes: 0
          },
          {
            name: '1984',
            description: 'Dystopian classic by George Orwell.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h9d/he9/64668965011486.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/oruell-dzh-1984-106313333/?c=750000000',
            likes: 0
          },
          {
            name: 'To Kill a Mockingbird',
            description: 'A novel by Harper Lee.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h73/hdf/63803491581982.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/lee-h-to-kill-a-mockingbird-26017968/?c=750000000',
            likes: 0
          },
          {
            name: 'Moby Dick',
            description: 'Epic tale by Herman Melville.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h83/h84/86256033234974.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/moby-dick-120304978/?c=750000000',
            likes: 0
          },
          {
            name: 'Harry Potter and the Philosopher\'s Stone',
            description: 'The first book in the Harry Potter series by J.K. Rowling.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h27/63781830295582.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/rowling-j-k-harry-potter-and-the-philosopher-s-stone-26018202/?c=750000000',
            likes: 0
          }
        ]
      },
      {
        name: 'Clothing',
        products: [
          {
            name: 'Men\'s Casual Shirt',
            description: 'Comfortable and stylish casual shirt.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p73/p37/8546287.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/futbolka-carhartt-wip-contact-sheet-t-shirt-men-s-white-belyi-s-130104141/?c=750000000',
            likes: 0
          },
          {
            name: 'Women\'s Summer Dress',
            description: 'Light and breezy summer dress.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p07/p45/25987203.png?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/vechernee-plat-e-dress-womens-fashion-wear-8760-temno-sinii-m-135044844/?c=750000000',
            likes: 0
          },
          {
            name: 'Kids\' T-Shirt',
            description: 'Colorful T-shirt for kids.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/p70/p71/21642233.jpeg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/futbolka-zara-disney-t-shirt-belyi-110-133824565/?c=750000000',
            likes: 0
          },
          {
            name: 'Unisex Hoodie',
            description: 'Cozy and trendy hoodie for everyone.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h7f/hc3/87197061152798.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/hudi-who-a-u-hudi-whoau-uniseks-seryi-m-123872832/?c=750000000',
            likes: 0
          },
          {
            name: 'Men\'s Jeans',
            description: 'Classic denim jeans for men.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/ha0/h7c/82863283896350.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/dzhinsy-zauzhennye-s-8503-2-goluboi-30-112587699/?c=750000000',
            likes: 0
          }
        ]
      },
      {
        name: 'Toys',
        products: [
          {
            name: 'LEGO Classic Bricks',
            description: 'Creative LEGO building bricks.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/pcb/pf6/23047142.jpeg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/bricks-lego-bricks-animals-detalei-164-sht-131378652/?c=750000000',
            likes: 0
          },
          {
            name: 'Remote Control Car',
            description: 'Exciting RC car for kids.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hdf/he5/85994053664798.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/mashinka-drift-car-nissan-na-radioupravlenii-405663864-119304731/?c=750000000',
            likes: 0
          },
          {
            name: 'Stuffed Animal Bear',
            description: 'Soft and cuddly stuffed bear.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/h4b/h9a/64414719967262.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/carte-blanche-mjagkaja-igrushka-teddy-bear-v-krasnoi-kofte-000061-vysota-20-sm-103500090/?c=750000000',
            likes: 0
          },
          {
            name: 'Puzzle Game',
            description: 'Challenging puzzle game for all ages.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hdf/hf7/85519923839006.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/qb56-37-detalei-106717755/?c=750000000',
            likes: 0
          },
          {
            name: 'Action Figure',
            description: 'Collectible action figure for kids.',
            images: ['https://resources.cdn-kaspi.kz/img/m/p/hd7/he6/86904548753438.jpg?format=gallery-medium'],
            rating: this.randomRating(),
            kaspiLink: 'https://kaspi.kz/shop/p/figurka-minions-min-ony-nabor-iz-12-figur-minions-7-sm-12-sht-122741626/?c=750000000',
            likes: 0
          }
        ]
      }
    ];
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }

  removeProduct(product: Product) {
    if (this.selectedCategory) {
      this.selectedCategory.products = this.selectedCategory.products.filter(p => p !== product);
    }
  }

  randomRating(): number {
    return parseFloat((2 + Math.random() * 3).toFixed(1));
  }
}