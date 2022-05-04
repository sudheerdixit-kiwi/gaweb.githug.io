import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.sass']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder, 
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      title: '',
      image: ''
    })
    this.id = this.route.snapshot.params['id'];
    this.productService.get(this.id).subscribe(
      product => this.form.patchValue(product) 
    )
  }

  ngOnInit(): void {
  }
  submit(): void{
    this.productService.update(this.id, this.form.getRawValue()).subscribe(
      () => {
        this.router.navigate(['/admin/products'])
      }
    )
  }
}
