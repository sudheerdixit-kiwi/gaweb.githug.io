import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {
  products : Product[] = []

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    console.log('NG ON IT');
    this.productService.all().subscribe(
      (products) => {
        this.products = products;
      }
    )
  }
  productDel(id: number): void{
    this.productService.delete(id).subscribe(
      () => {
        this.products = this.products.filter(
          p => p.id !== id
        );
      }
    )
    alert('Want to delete?')
  }

}
