﻿import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html"
})
export class StoreComponent {

    public selectedCategory: any = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: ProductRepository, private cart: Cart) { }

    get products(): Product[] {
        //return this.repository.getProducts();
        //return this.repository.getProducts(this.selectedCategory);
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }
    get categories(): string[] {
        return this.repository.getCategories();
    }
    public changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }
   public changePage(newPage: number) {
        this.selectedPage = newPage;
    }
   public changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
   }
   get pageCount(): number {
       return Math.ceil(this.repository
           .getProducts(this.selectedCategory).length / this.productsPerPage)
   }
  //public  get pageNumbers(): number[] {
  //      return Array(Math.ceil(this.repository
  //          .getProducts(this.selectedCategory).length / this.productsPerPage))
  //          .fill(0).map((x, i) => i + 1);
  //  }
   addProductToCart(product: Product) {
       this.cart.addLine(product);
   }
}