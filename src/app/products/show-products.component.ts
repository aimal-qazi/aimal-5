import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css'],
})
export class ShowProductsComponent implements OnInit {
  showAddProduct: boolean = false;
  showAddCategory: boolean = false;
  showAddVendor: boolean = false;
  showProduct: boolean = false;
  showCategory: boolean = false;
  showVendor: boolean = false;
  productVendor: boolean = false;
  productCategory: boolean = false;
  productCheap: boolean = false;
  delProductId: boolean = false;
  delProductName: boolean = false;
  buttonDisable: boolean = false;

  Products: any[] = [];
  Category: any[] = [];
  Vendor: any[] = [];

  productForm!: FormGroup;
  categoryForm!: FormGroup;
  vendorForm!: FormGroup;
  productByVendor!: FormGroup;
  productByCategory!: FormGroup;
  productByCheap!: FormGroup;
  productDelById!: FormGroup;
  productDelByName!: FormGroup;

  proDelId: any;
  proDelName: any;
  proVendor: any;
  proCategory: any;
  proCheap: any;

  toggleAddProduct() {
    this.showAddProduct = true;
    this.buttonDisable = this.showAddProduct;
  }
  toggleAddCategory() {
    this.showAddCategory = true;
    this.buttonDisable = this.showAddCategory;
  }
  toggleAddVendor() {
    this.showAddVendor = true;
    this.buttonDisable = this.showAddVendor;
  }
  toggleShowProduct() {
    this.showProduct = true;
    this.buttonDisable = this.showProduct;
  }
  toggleShowCategory() {
    this.showCategory = true;
    this.buttonDisable = this.showCategory;
  }
  toggleShowVendor() {
    this.showVendor = true;
    this.buttonDisable = this.showVendor;
  }
  toggleShowProDelId() {
    this.delProductId = true;
    this.buttonDisable = this.delProductId;
  }
  toggleShowProDelName() {
    this.delProductName = true;
    this.buttonDisable = this.delProductName;
  }
  toggleProductVendor() {
    this.productVendor = true;
    this.buttonDisable = this.productVendor;
  }
  toggleProductCategory() {
    this.productCategory = true;
    this.buttonDisable = this.productCategory;
  }
  toggleProductCheap() {
    this.productCheap = true;
    this.buttonDisable = this.productCheap;
  }

  constructor() {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      vendorId: new FormControl('', Validators.required),
      categoryId: new FormControl('', Validators.required),
    });
    this.categoryForm = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
    });
    this.vendorForm = new FormGroup({
      id: new FormControl('', Validators.required),
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
    });
    this.productByVendor = new FormGroup({
      ven: new FormControl(''),
    });
    this.productByCategory = new FormGroup({
      cat: new FormControl(''),
    });
    this.productByCheap = new FormGroup({
      cheap: new FormControl(''),
    });
    this.productDelById = new FormGroup({
      pId: new FormControl(''),
    });
    this.productDelByName = new FormGroup({
      pName: new FormControl(''),
    });
  }

  onProductForm() {
    let productData = this.productForm.getRawValue();
    if (
      this.Products.find((i) => i.id == productData.id) ||
      this.Products.find((i) => i.name == productData.name)
    ) {
      alert('This data is already taken');
    } else {
      alert(`${productData.name} is successfully created`);
      this.Products.push(productData);
      this.showAddProduct = false;
      this.buttonDisable = false;
      this.productForm.reset();
    }
  }
  onCategoryForm() {
    let categoryData = this.categoryForm.getRawValue();
    if (
      this.Category.find((i) => i.id == categoryData.id) ||
      this.Category.find((i) => i.name == categoryData.name)
    ) {
      alert('This data is already taken');
    } else {
      alert(`${categoryData.name} is successfully created`);
      this.Category.push(categoryData);
      this.showAddCategory = false;
      this.buttonDisable = false;
      this.categoryForm.reset();
    }
  }
  onVendorForm() {
    let vendorData = this.vendorForm.getRawValue();
    if (
      this.Vendor.find((i) => i.id == vendorData.id) ||
      this.Vendor.find((i) => i.fname == vendorData.fname) ||
      this.Vendor.find((i) => i.lname == vendorData.lname)
    ) {
      alert('This data is already taken');
    } else {
      alert(`${vendorData.fname}-${vendorData.lname} is successfully created`);
      this.Vendor.push(vendorData);
      this.showAddVendor = false;
      this.buttonDisable = false;
      this.vendorForm.reset();
    }
  }

  onProductDelById() {
    let proDelById = this.productDelById.getRawValue();
    this.proDelId = proDelById.pId;
    this.productDelById.reset();
  }
  onProductDelByName() {
    let proDelByName = this.productDelByName.getRawValue();
    this.proDelName = proDelByName.pName;
    this.productDelByName.reset();
  }

  delId(index: number) {
    alert(`Product is successfully removed`);
    this.Products.splice(index, 1);
  }
  delName(index: number) {
    alert(`Product is successfully removed`);
    this.Products.splice(index, 1);
  }

  onProductByVendor() {
    let proVendorData = this.productByVendor.getRawValue();
    this.proVendor = proVendorData.ven;
    this.productByVendor.reset();
  }
  onProductByCategory() {
    let proCategoryData = this.productByCategory.getRawValue();
    this.proCategory = proCategoryData.cat;
    this.productByCategory.reset();
  }
  onProductByCheap() {
    let proCheapData = this.productByCheap.getRawValue();
    this.proCheap = proCheapData.cheap;
    this.productByCheap.reset();
  }
}
