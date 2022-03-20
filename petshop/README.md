# Petshop

<details>
  <summary>Angular</summary>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

</details>

<details>
  <summary>Organizing the Project</summary>
  
Folders
  [+] New
  [m] Move

```ps
src/app/
    navbar/
    pages/							[+]
        account/					[+]
            login-page/				[m]
            pets-page/				[m]
            reset-password-page/	[m]
            signup-page/			[m]

        store/						[+]
            cart-page/				[m]
            products-page/			[m]
```

Delete from the pages and navbar in /app
*specs
*css (empty) < adjust \*ts

```
src/app/
    app.module.ts	<	adjust the imports
```

wt

```ps
  ng build
```

</details>

<details>
  <summary>Master Pages</summary>

```
src/app/
    app.component.html			Delete
    app.component.ts
    app-routing.module.ts
    pages/
        master/					Create Folder
            frame.page.ts		Create File
```

app.component.ts

```ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'					< change TemplateUrl to Template
})
export class AppComponent {
                                                                < remove title
}
```

app-routing.module.ts

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';

const routes: Routes = [
  {
    path: 'login',								<
    component: LoginPageComponent				<
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

frame.page.ts

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-frame-page',
    template: '<app-navbar></app-navbar><router-outlet></router-outlet>'			<
})
export class FramePageComponent {
}
```

</details>

<details>
    <summary>Setup Routes</summary>
  
```  
src/app/
    app.module.ts
    app-routing.module.ts
```
  
app.module.ts
```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';

@NgModule({
declarations: [
AppComponent,
NavbarComponent,
LoginPageComponent,
ResetPasswordPageComponent,
SignupPageComponent,
PetsPageComponent,
ProductsPageComponent,
CartPageComponent,
FramePageComponent < Add
],
imports: [
BrowserModule,
AppRoutingModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

````

app-routing.module.ts

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';

const routes: Routes = [
    {
        path: '',
        component: FramePageComponent,
        children: [
            { path: '', component: ProductsPageComponent },
            { path: 'cart', component: CartPageComponent }
        ]
    },
    {
        path: 'account',
        component: FramePageComponent,
        children: [
            { path: 'pets', component: PetsPageComponent }
        ]
    },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'reset-password', component: ResetPasswordPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
````

</details>  
  
<details>
  <summary>Active Link</summary>

Highlights the triggered link

```
src/app/
    navbar/
        navbar.component.html
    pages/
        account/
            login-page/
                login-page.component.html
```

navbar.component.html

```html
<div class="uk-background-primary uk-light">
  <div class="uk-container">
    <nav class="uk-navbar-container uk-navbar-transparent uk-margin" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="/">
          <span
            class="uk-icon uk-margin-small-right"
            uk-icon="icon: icon-color-light; ratio: 0.15"
          ></span>
        </a>
        <ul class="uk-navbar-nav">
          <li>
            <a [routerLink]="['/']" routerLinkActive="uk-text-bold">Produtos</a>
          </li>
          <
          <li>
            <a [routerLink]="['/account/pets']" routerLinkActive="uk-text-bold"
              >Meus Pets</a
            >
          </li>
          <
          <li><a href="#">Consultas</a></li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a [routerLink]="['/cart']" routerLinkActive="uk-text-bold">
              <
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: cart"
              ></span>
              <span class="uk-badge">0</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: user"
              ></span>
            </a>
          </li>
          <li>
            <a href="#">
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: sign-out"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
```

login-page.component.html

```html
<div class="uk-flex-center" uk-grid>
  <!-- 1/3 tela + mobile -->
  <div class="uk-width-1-4@m">
    <p class="uk-text-center uk-margin-large-top uk-margin-medium-bottom">
      <span class="uk-icon" uk-icon="icon: logo-color-dark; ratio: 0.7"></span>
    </p>

    <div class="uk-card uk-card-primary uk-card-body uk-box-shadow-small">
      <h3 class="uk-card-title">Autentique-se</h3>
      <div class="uk-margin">
        <input
          class="uk-input uk-form-large"
          type="email"
          placeholder="E-mail"
        />
      </div>
      <div class="uk-margin">
        <input
          class="uk-input uk-form-large"
          type="password"
          placeholder="Senha"
        />
      </div>
      <div class="uk-margin uk-text-right">
        <a href="/" class="uk-button uk-button-default">Entrar</a>
      </div>
    </div>

    <p class="uk-text-center">
      <a
        [routerLink]="['/signup']"
        <
        class="uk-button uk-width-1-1 uk-button-large uk-button-primary uk-margin-small-bottom"
      >
        Quero me cadastrar
      </a>
      <br />
      <a [routerLink]="['/reset-password']" class="uk-button uk-button-link">
        < Esqueci minha senha
      </a>
    </p>
  </div>
</div>
```

</details>  
  
<details>
    <summary>Setup Backend</summary>
    
https://mockon.com
    
wt
```ps    
Set-ExecutionPolicy Bypass -Scope Process -Force; iwr https://community.chocolatey.org/install.ps1 -UseBasicParsing | iex
choco install mockoon --version=1.4.0
```
    
> Mockoon
    
Tools/ Import all environment from files (7181.mockon.1.4.0.json)
    
Start Server

> Postman

New Workspace: PetStore

GET localhost:3000/v1/products SEND

</details>

<details>
    <summary>Services</summary>

```
src/app/
    pages/
        store/
            products-page/
                products-page.component.ts
    services/                                   < New Folder
        data.service.ts                         < New File
    app.module.ts
```

app.module.ts

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';             < Import

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginPageComponent,
        ResetPasswordPageComponent,
        SignupPageComponent,
        PetsPageComponent,
        ProductsPageComponent,
        CartPageComponent,
        FramePageComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,               < Import
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

data.service.ts

```ts
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<any[]>("http://localhost:3000/v1/products");
  }
}
```

products-page.component.ts

```ts
import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/services/data.service";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
})
export class ProductsPageComponent implements OnInit {
  constructor(data: DataService) {}

  ngOnInit(): void {}
}
```

</details>

<details>
  <summary>Assynchronous Lists</summary>

```
tsconfig.json
src/app/
    pages/store/products-page/
        products-page.component.html
        products-page.component.ts
```

tsconfig.json

```json
/* To learn more about this file see: https://angular.io/config/tsconfig. */
{
    "compileOnSave": false,
    "compilerOptions": {
        "baseUrl": "./",
        "outDir": "./dist/out-tsc",
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "noImplicitReturns": true,
        "noFallthroughCasesInSwitch": true,
        "sourceMap": true,
        "declaration": false,
        "downlevelIteration": true,
        "experimentalDecorators": true,
        "moduleResolution": "node",
        "importHelpers": true,
        "target": "es2017",
        "module": "es2020",
        "lib": [
        "es2018",
        "dom"
        ],
        "strictPropertyInitialization": false               <
    },
    "angularCompilerOptions": {
        "enableI18nLegacyMessageIdFormat": false,
        "strictInjectionParameters": true,
        "strictInputAccessModifiers": true,
        "strictTemplates": true
    }
}
```

products-page.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';                            <
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-products-page',
    templateUrl: './products-page.component.html',
})
export class ProductsPageComponent implements OnInit {

    public products$: Observable<any[]>;                      <

    constructor(private data: DataService) {                  <
    }

    ngOnInit(): void {
        this.products$ = this.data.getProducts();             <
    }
}
```

products-page.component.html

```html
<div class="uk-container">
  <div class="uk-grid uk-margin-small-top">
    <div
      class="uk-width-1-2 uk-margin-small-bottom"
      *ngFor="let product of products$ | async"
    >
      <div
        class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
        uk-grid
      >
        <div class="uk-card-media-left uk-cover-container">
          <img src="{{ product.images[0] }}" alt="" uk-cover /> <
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title">{{ product.price }}</h3>
            <
            <p>{{ product.title }}</p>
            <
            <button class="uk-button uk-button-default">
              <span class="uk-icon uk-margin-small-right"></span>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

</details>

<details>
  <summary>Creating a Component</summary>

wt

```ps
    ng generate component components/store/product-card
```

```
src/
    app/
        app.module.ts
        components/
            shared/
            store/
                product-card/
                    product-card.component.ts
                    product.card.component.html
    pages/
        store/
            products-page/
                products-page.component.html
```

Move **src/app/navbar/** to **/src/app/components/shared/**

app.module.ts

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';                   <
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginPageComponent,
        ResetPasswordPageComponent,
        SignupPageComponent,
        PetsPageComponent,
        ProductsPageComponent,
        CartPageComponent,
        FramePageComponent,
        ProductCardComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

product-card.component.ts

```ts
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-card",
  templateUrl: "./product-card.component.html",
})
export class ProductCardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
```

product.card.component.html

```html
<p>product-card works!</p>
```

products-page.component.html

```html
<div class="uk-container">
  <div class="uk-grid uk-margin-small-top">
    <div
      class="uk-width-1-2 uk-margin-small-bottom"
      *ngFor="let product of products$ | async"
    >
      <app-product-card></app-product-card>
    </div>
  </div>
</div>
```

</details>

<details>
    <summary>Sending Data to the Component</summary>

```
src/
    app/
        components/
            store/
                product-card/
                    product-card.component.html
                    product-card.component.ts
        pages/
            store/
                products-page/
                    products-page.component.html
```

product-card.component.ts

```ts
import { Component, Input, OnInit } from '@angular/core';               <

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent implements OnInit {

    @Input() product: any;                                              <

    constructor() { }

    ngOnInit(): void {
    }

}
```

product-card.component.html

```html
<div
  class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
  uk-grid
>
  <div class="uk-card-media-left uk-cover-container">
    <img src="{{ product.images[0] }}" alt="" uk-cover />
  </div>
  <div>
    <div class="uk-card-body">
      <h3 class="uk-card-title">{{ product.price }}</h3>
      <p>{{ product.title }}</p>
      <button class="uk-button uk-button-default">
        <span class="uk-icon uk-margin-small-right"></span>
        Adicionar
      </button>
    </div>
  </div>
</div>
```

products-page.component.html

```html
<div class="uk-container">
  <div class="uk-grid uk-margin-small-top">
    <div
      class="uk-width-1-2 uk-margin-small-bottom"
      *ngFor="let product of products$ | async"
    >
      <app-product-card [product]="product"></app-product-card> <
    </div>
  </div>
</div>
```

</details>

<details>
    <summary>Creating the Product´s Model</summary>

```
src/app/models/
    product.model.ts
```

product.model.ts

```ts
export class Product {
  public _id: string;
  public title: string;
  public category: string;
  public description: string;
  public price: number;
  public image: string;
}
```

</details>

<details>
    <summary>Using the Model</summary>

```
src/app/
    components/
        store/product-card/
            product-card.component.ts
            product-card.component.html
        pages/
            store/
                products-page/
                    products-page.component.ts
    services/
        data.service.ts
```

data.service.ts

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';                              <

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>('http://localhost:3000/v1/products');   <
    }
}
```

products-page.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';                         <
import { DataService } from 'src/app/services/data.service';

@Component({
selector: 'app-products-page',
templateUrl: './products-page.component.html',
})
export class ProductsPageComponent implements OnInit {

    public products$: Observable<Product[]>;                                    <

    constructor(private data: DataService) {
    }

    ngOnInit(): void {
        this.products$ = this.data.getProducts();
    }
}
```

product-card.component.ts

```ts
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';                         <

@Component({
    selector: 'app-product-card',
    templateUrl: './product-card.component.html'
})
export class ProductCardComponent implements OnInit {

    @Input() product: Product;                                                  <

    constructor() { }

    ngOnInit(): void {
    }
}
```

product-card.component.html

```html
<div
  class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin"
  uk-grid
>
  <div class="uk-card-media-left uk-cover-container">
    <img src="{{ product.image[0] }}" alt="" uk-cover />
  </div>
  <div>
    <div class="uk-card-body">
      <h3 class="uk-card-title">{{ product.price }}</h3>
      <p>{{ product.title }}</p>
      <button class="uk-button uk-button-default">
        <span class="uk-icon uk-margin-small-right"></span>
        Adicionar
      </button>
    </div>
  </div>
</div>
```

</details>

<details>
    <summary>Adjusting the Product Grid</summary>

```
src/app/
    components/store/product-card/
        product-card.component.html
    pages/store/products-page/
        products-page.component.html
```

product-card.component.html

```html
<div class="uk-card uk-card-default">
  <
  <div class="uk-card-media-top uk-text-center">
    <
    <img
      src="{{ product.image[0] }}"
      height="150"
      width="150"
      class="uk-margin-small-top uk-border-circle"
      alt=""
    />
    <
  </div>
  <div>
    <div class="uk-card-body">
      <h3 class="uk-card-title">{{ product.price }}</h3>
      <p style="height:50px;">{{ product.title }}</p>
      <
      <button class="uk-button uk-button-default">
        <span class="uk-icon uk-margin-small-right"></span>
        Adicionar
      </button>
    </div>
  </div>
</div>
```

products-page.component.html

```html
<div class="uk-container">
  <div class="uk-grid uk-margin-small-top">
    <div
      class="uk-width-1-3 uk-margin-small-bottom"
      *ngFor="let product of products$ | async"
    >
      <
      <app-product-card [product]="product"></app-product-card>
    </div>
  </div>
</div>
```

</details>

<details>
  <summary>Coin Pipe</summary>

```
src/app/
    components/store/product-card/
        product-card.component.html
```

product-card.component.html

```html
<div class="uk-card uk-card-default">
  <div class="uk-card-media-top uk-text-center">
    <img
      src="{{ product.image[0] }}"
      height="150"
      width="150"
      class="uk-margin-small-top uk-border-circle"
      alt=""
    />
  </div>
  <div>
    <div class="uk-card-body">
      <h3 class="uk-card-title">
        {{ (product.price / 100) | currency: 'BRL' }}
      </h3>
      <
      <p style="height:50px;">{{ product.title }}</p>
      <button class="uk-button uk-button-default">
        <span class="uk-icon uk-margin-small-right"></span>
        Adicionar
      </button>
    </div>
  </div>
</div>
```

</details>

<details>
  <summary>Changing the Data Service</summary>

```
src/app/services/
    data.service.ts
```

data.service.ts

```ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public url = 'http://localhost:3000/v1';                                        <

    constructor(private http: HttpClient) { }

    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`);                    <
    }

    authenticate(data) {                                                            <
        return this.http.post(`${this.url}/accounts/authenticate`, data);           <
    }                                                                               <
}
```

</details>

<details>
  <summary>Login Screen</summary>

```
src/app/
    pages/account/
        login-page/
            login-page.component.ts
            login-page.component.html
    app.module.ts
```

login-page.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

    public form: FormGroup;

    constructor(
        private service: DataService,                       <
        private fb: FormBuilder                             <
    ) {
        this.form = this.fb.group({                         <
        username: ['', Validators.compose([                 <
            Validators.minLength(11),                       <
            Validators.maxLength(11),                       <
            Validators.required                             <
        ])],                                                <
        password: ['', Validators.compose([                 <
            Validators.minLength(6),                        <
            Validators.maxLength(20),                       <
            Validators.required                             <
        ])]                                                 <
        });                                                 <
    }

    ngOnInit(): void {
    }
}
```

login-page.component.html

```html
<div class="uk-flex-center" uk-grid>
  <!-- 1/3 tela + mobile -->
  <div class="uk-width-1-4@m">
    <p class="uk-text-center uk-margin-large-top uk-margin-medium-bottom">
      <span class="uk-icon" uk-icon="icon: logo-color-dark; ratio: 0.7"></span>
    </p>

    <form [formGroup]="form">
      <
      <div class="uk-card uk-card-primary uk-card-body uk-box-shadow-small">
        <h3 class="uk-card-title">Autentique-se</h3>
        <div class="uk-margin">
          <input
            class="uk-input uk-form-large"
            formControlName="username"
            type="text"
            placeholder="CPF"
          />
        </div>
        <div class="uk-margin">
          <input
            class="uk-input uk-form-large"
            formControlName="password"
            type="password"
            placeholder="Senha"
          />
        </div>
        <div class="uk-margin uk-text-right">
          <button class="uk-button uk-button-default" [disabled]="form.invalid">
            Entrar
          </button>
          <
        </div>
      </div>
    </form>
    <

    <p class="uk-text-center">
      <a
        [routerLink]="['/signup']"
        class="uk-button uk-width-1-1 uk-button-large uk-button-primary uk-margin-small-bottom"
      >
        Quero me cadastrar
      </a>
      <br />
      <a [routerLink]="['/reset-password']" class="uk-button uk-button-link">
        Esqueci minha senha
      </a>
    </p>
  </div>
</div>
```

app.module.ts

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';                                                                   <

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginPageComponent,
        ResetPasswordPageComponent,
        SignupPageComponent,
        PetsPageComponent,
        ProductsPageComponent,
        CartPageComponent,
        FramePageComponent,
        ProductCardComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,                                                                                            <
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

</details>

<details>
  <summary>Additional Styles</summary>

```
src/app/
    pages/account/login-page/
        login-page.component.html
        login-page.component.ts
    styles.css
```

login-page.component.html

```html
<div class="uk-flex-center" uk-grid>
  <!-- 1/3 tela + mobile -->
  <div class="uk-width-1-4@m">
    <p class="uk-text-center uk-margin-large-top uk-margin-medium-bottom">
      <span class="uk-icon" uk-icon="icon: logo-color-dark; ratio: 0.7"></span>
    </p>

    <form [formGroup]="form">
      <div class="uk-card uk-card-primary uk-card-body uk-box-shadow-small">
        <h3 class="uk-card-title">Autentique-se</h3>
        <div class="uk-margin">
          <input
            class="uk-input uk-form-large"
            formControlName="username"
            type="text"
            placeholder="CPF"
            [ngClass]=" {'uk-form-danger': ( !form.controls.username.valid &&                                   <
                        !form.controls.username.pristine)}"
          />
          <
        </div>
        <div class="uk-margin">
          <input
            class="uk-input uk-form-large"
            formControlName="password"
            type="password"
            placeholder="Senha"
            [ngClass]=" {'uk-form-danger': ( !form.controls.password.valid &&                                   <
                        !form.controls.password.pristine)}"
          />
          <
        </div>
        <div class="uk-margin uk-text-right">
          <button class="uk-button uk-button-default" [disabled]="form.invalid">
            Entrar
          </button>
          <
        </div>
      </div>
    </form>

    <p class="uk-text-center">
      <a
        [routerLink]="['/signup']"
        class="uk-button uk-width-1-1 uk-button-large uk-button-primary uk-margin-small-bottom"
      >
        Quero me cadastrar
      </a>
      <br />
      <a [routerLink]="['/reset-password']" class="uk-button uk-button-link">
        Esqueci minha senha
      </a>
    </p>
  </div>
</div>
```

styles.css

```css
.uk-form-danger {
  border: 2px solid #ff0000 !important;
}
button:disabled {
  background-color: rgba(0, 0, 0, 0.2) !important;
}
```

</details>

<details>
  <summary>Storing the Token</summary>

```
src/app/pages/account/login-page/
    login-page.component.ts
    login-page.component.html
```

login-page.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

    public form: FormGroup;

    constructor(
        private service: DataService,
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
        username: ['', Validators.compose([
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.required
        ])],
        password: ['', Validators.compose([
            Validators.minLength(6),
            Validators.maxLength(20),
            Validators.required
        ])]
        });
    }

    ngOnInit(): void {
    }

    submit() {                                                          <
        this
        .service
        .authenticate(this.form.value)
        .subscribe(
            (data: any) => {
                console.log(data);
                localStorage.setItem('petshop.item', data.token);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
```

login-page.component.html

```html
<div class="uk-flex-center" uk-grid>
  <!-- 1/3 tela + mobile -->
  <div class="uk-width-1-4@m">
    <p class="uk-text-center uk-margin-large-top uk-margin-medium-bottom">
      <span class="uk-icon" uk-icon="icon: logo-color-dark; ratio: 0.7"></span>
    </p>

    <form [formGroup]="form">
      <div class="uk-card uk-card-primary uk-card-body uk-box-shadow-small">
        <h3 class="uk-card-title">Autentique-se</h3>
        <div class="uk-margin">
          <input
            class="uk-input uk-form-large"
            formControlName="username"
            type="text"
            placeholder="CPF"
            [ngClass]=" {'uk-form-danger': ( !form.controls.username.valid &&
                        !form.controls.username.pristine)}"
          />
        </div>
        <div class="uk-margin">
          <input
            class="uk-input uk-form-large"
            formControlName="password"
            type="password"
            placeholder="Senha"
            [ngClass]=" {'uk-form-danger': ( !form.controls.password.valid &&
                        !form.controls.password.pristine)}"
          />
        </div>
        <div class="uk-margin uk-text-right">
          <button
            class="uk-button uk-button-default"
            [disabled]="form.invalid"
            (click)="submit()"
          >
            Entrar
          </button>
          <
        </div>
      </div>
    </form>

    <p class="uk-text-center">
      <a
        [routerLink]="['/signup']"
        class="uk-button uk-width-1-1 uk-button-large uk-button-primary uk-margin-small-bottom"
      >
        Quero me cadastrar
      </a>
      <br />
      <a [routerLink]="['/reset-password']" class="uk-button uk-button-link">
        Esqueci minha senha
      </a>
    </p>
  </div>
</div>
```

</details>

<details>
  <summary>Refresh Token</summary>

```
src/app/
    pages/
        account/
            login-page/
                login-page.component.ts
    services/
        data.service.ts
```

data.service.ts

```ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public url = 'http://localhost:3000/v1';

    constructor(private http: HttpClient) { }

    public composeHeaders() {                                                                   <
        const token = localStorage.getItem('petshop.token') || '';                              <
        //const headers = new HttpHeaders().set('x-access-token',token);                        <
        const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);              <
        return headers;                                                                         <
    }

    getProducts() {
        return this.http.get<Product[]>(`${this.url}/products`);
    }

    authenticate(data: any) {                                                                   <
        return this.http.post(`${this.url}/accounts/authenticate`, data);                       <
    }                                                                                           <

    refreshToken(data: any) {                                                                   <
        return this.http.post(                                                                  <
            `${this.url}/accounts/refresh-token`,                                               <
            null,                                                                               <
            { headers: this.composeHeaders() }                                                  <
        );                                                                                      <
    }
}
```

login-page.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

    public form: FormGroup;

    constructor(
        private service: DataService,
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
        username: ['', Validators.compose([
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.required
        ])],
        password: ['', Validators.compose([
            Validators.minLength(6),
            Validators.maxLength(20),
            Validators.required
        ])]
        });
    }

    ngOnInit(): void {
        const token = localStorage.getItem('petshop.token');                <
        if (token) {                                                        <
        console.log('Autenticando...');                                     <
        this                                                                <
            .service                                                        <
            .refreshToken(null)                                             <
            .subscribe(                                                     <
            (data: any) => {                                                <
                console.log(data);                                          <
                localStorage.setItem('petshop.token', data.token);          <
            },                                                              <
            (err) => {                                                      <
                localStorage.clear;                                         <
            }                                                               <
            );                                                              <
        }
    }

    submit() {
        this
        .service
        .authenticate(this.form.value)
        .subscribe(
            (data: any) => {
                console.log(data);
                localStorage.setItem('petshop.token', data.token);
            },
            (err) => {
                console.log(err);
            }
        );
    }
}
```

</details>

<details>
  <summary>Add Loading</summary>

wt

```ps
ng g c components/shared/loading
```

```
src/app/
    components/shared/
        loading/
            loading.component.html
    pages/
        account/
            login-page/
                login-page.component.html
                login-page.component.ts
```

loading.component.html

```html
<div class="uk-width-1-1 uk-text-center">
  <br /><br />
  <br /><br />
  <div uk-spinner="ratio: 3"></div>
  <br /><br />
  <br /><br />
  <br /><br />
  <br /><br />
</div>
```

login-page.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

public form: FormGroup;
public busy = false;                                                                <

constructor(
    private service: DataService,
    private fb: FormBuilder
) {
    this.form = this.fb.group({
        username: ['', Validators.compose([
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.required
        ])],
        password: ['', Validators.compose([
            Validators.minLength(6),
            Validators.maxLength(20),
            Validators.required
        ])]
    });
}

ngOnInit(): void {
    const token = localStorage.getItem('petshop.token');
    if (token) {
        this.busy = true;                                                           <
        this
            .service
            .refreshToken(null)
            .subscribe(
            (data: any) => {
                console.log(data);
                localStorage.setItem('petshop.token', data.token);
                this.busy = false;                                                  <
            },
            (err) => {
                localStorage.clear;
                this.busy = false;                                                  <
            }
            );
    }
}

submit() {
    this.busy = true;                                                               <
    this
        .service
        .authenticate(this.form.value)
        .subscribe(
            (data: any) => {
                console.log(data);
                localStorage.setItem('petshop.token', data.token);
                this.busy = false;                                                  <
            },
            (err) => {
                console.log(err);
                this.busy = false;                                                  <
            }
        );
    }
}
```

login-page.component.html

```html
<div class="uk-flex-center" uk-grid>
  <!-- 1/3 tela + mobile -->
  <div class="uk-width-1-4@m">
    <p class="uk-text-center uk-margin-large-top uk-margin-medium-bottom">
      <span class="uk-icon" uk-icon="icon: logo-color-dark; ratio: 0.7"></span>
    </p>

    <app-loading *ngIf="busy"></app-loading> <

    <form [formGroup]="form" *ngIf="!busy">
      <
      <div class="uk-card uk-card-primary uk-card-body uk-box-shadow-small">
        <h3 class="uk-card-title">Autentique-se</h3>
        <div class="uk-margin">
          <input
            class="uk-input uk-form-large"
            formControlName="username"
            type="text"
            placeholder="CPF"
            [ngClass]=" {'uk-form-danger': ( !form.controls.username.valid &&
                        !form.controls.username.pristine)}"
          />
        </div>
        <div class="uk-margin">
          <input
            class="uk-input uk-form-large"
            formControlName="password"
            type="password"
            placeholder="Senha"
            [ngClass]=" {'uk-form-danger': ( !form.controls.password.valid &&
                        !form.controls.password.pristine)}"
          />
        </div>
        <div class="uk-margin uk-text-right">
          <button
            class="uk-button uk-button-default"
            [disabled]="form.invalid"
            (click)="submit()"
          >
            Entrar
          </button>
        </div>
      </div>
    </form>

    <p class="uk-text-center" *ngIf="!busy">
      <
      <a
        [routerLink]="['/signup']"
        class="uk-button uk-width-1-1 uk-button-large uk-button-primary uk-margin-small-bottom"
      >
        Quero me cadastrar
      </a>
      <br />
      <a [routerLink]="['/reset-password']" class="uk-button uk-button-link">
        Esqueci minha senha
      </a>
    </p>
  </div>
</div>
```

</details>

<details>
  <summary>Mask Directive</summary>

```
src/app/
    directives/
        mask.directive.ts
    app.module.ts
    pages/account/
        login-page/
            login-page.component.ts
            login-page.component.html
```

mask.directive.ts

```ts
import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  selector: "[mask]",
})
export class MaskDirective {
  @Input("mask") mask: string;

  constructor(private element: ElementRef) {}

  @HostListener("input", ["$event"]) onInputChange(event: any) {
    if (event.inputType == "deleteContentBackward") return;

    const initalValue = this.element.nativeElement.value;
    initalValue.replace(/[^0-9]*/g, "");
    if (initalValue !== this.element.nativeElement.value) {
      event.stopPropagation();
    }

    this.element.nativeElement.value = this.format(this.mask, initalValue);
  }

  format(mask: string, value: any): string {
    let text = "";
    let data = value;
    let c, m, i, x;

    for (i = 0, x = 1; x && i < mask.length; ++i) {
      c = data.charAt(i);
      m = mask.charAt(i);

      switch (mask.charAt(i)) {
        case "#":
          if (/\d/.test(c)) {
            text += c;
          } else {
            x = 0;
          }
          break;

        case "A":
          if (/[a-z]/i.test(c)) {
            text += c;
          } else {
            x = 0;
          }
          break;

        case "N":
          if (/[a-z0-9]/i.test(c)) {
            text += c;
          } else {
            x = 0;
          }
          break;

        case "X":
          text += c;
          break;

        default:
          text += m;
          break;
      }
    }
    return text;
  }
}
```

app.module.ts

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MaskDirective } from './directives/mask.directive';                                        <

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginPageComponent,
        ResetPasswordPageComponent,
        SignupPageComponent,
        PetsPageComponent,
        ProductsPageComponent,
        CartPageComponent,
        FramePageComponent,
        ProductCardComponent,
        LoadingComponent,
        MaskDirective                                                                               <
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

login-page.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

    public form: FormGroup;
    public busy = false;

    constructor(
        private service: DataService,
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
        username: ['', Validators.compose([
            Validators.minLength(14),                       <
            Validators.maxLength(14),                       <
            Validators.required
        ])],
        password: ['', Validators.compose([
            Validators.minLength(6),
            Validators.maxLength(20),
            Validators.required
        ])]
        });
    }

    ngOnInit(): void {
        const token = localStorage.getItem('petshop.token');
        if (token) {
        this.busy = true;
        this
            .service
            .refreshToken(null)
            .subscribe(
            (data: any) => {
                console.log(data);
                localStorage.setItem('petshop.token', data.token);
                this.busy = false;
            },
            (err) => {
                localStorage.clear;
                this.busy = false;
            }
            );
        }
    }

    submit() {
        this.busy = true;
        this
        .service
        .authenticate(this.form.value)
        .subscribe(
            (data: any) => {
            console.log(data);
            localStorage.setItem('petshop.token', data.token);
            this.busy = false;
            },
            (err) => {
            console.log(err);
            this.busy = false;
            }
        );
    }
}
```

login-page.component.html

```html
<div class="uk-flex-center" uk-grid>
  <!-- 1/3 tela + mobile -->
  <div class="uk-width-1-4@m">
    <p class="uk-text-center uk-margin-large-top uk-margin-medium-bottom">
      <span class="uk-icon" uk-icon="icon: logo-color-dark; ratio: 0.7"></span>
    </p>

    <app-loading *ngIf="busy"></app-loading>

    <form [formGroup]="form" *ngIf="!busy">
      <div class="uk-card uk-card-primary uk-card-body uk-box-shadow-small">
        <h3 class="uk-card-title">Autentique-se</h3>
        <div class="uk-margin">
          <input
            class="uk-input uk-form-large"
            formControlName="username"
            type="text"
            placeholder="CPF"
            mask="###.###.###-##"
            [ngClass]=" {'uk-form-danger': ( !form.controls.username.valid &&             <
                        !form.controls.username.pristine)}"
          />
        </div>
        <div class="uk-margin">
          <input
            class="uk-input uk-form-large"
            formControlName="password"
            type="password"
            placeholder="Senha"
            [ngClass]=" {'uk-form-danger': ( !form.controls.password.valid &&
                        !form.controls.password.pristine)}"
          />
        </div>
        <div class="uk-margin uk-text-right">
          <button
            class="uk-button uk-button-default"
            [disabled]="form.invalid"
            (click)="submit()"
          >
            Entrar
          </button>
        </div>
      </div>
    </form>

    <p class="uk-text-center" *ngIf="!busy">
      <a
        [routerLink]="['/signup']"
        class="uk-button uk-width-1-1 uk-button-large uk-button-primary uk-margin-small-bottom"
      >
        Quero me cadastrar
      </a>
      <br />
      <a [routerLink]="['/reset-password']" class="uk-button uk-button-link">
        Esqueci minha senha
      </a>
    </p>
  </div>
</div>
```

</details>

<details>
  <summary>Custom Validators</summary>

```
src/app/
    validators/
        custom.validator.ts
```

custom.validator.ts

```ts
import { AbstractControl, Validators, FormControl } from "@angular/forms";

export class CustomValidator {
  constructor() {}

  static isCpf() {
    return (control: AbstractControl): Validators | null => {
      const cpf = control.value.replace(/[^0-9]*/g, "");
      if (cpf) {
        let numbers;
        let digits;
        let sum;
        let i;
        let result;
        let equalDigits;
        equalDigits = 1;
        if (cpf.length < 11) {
          return null;
        }

        for (i = 0; i < cpf.length - 1; i++) {
          if (cpf.charAt(i) !== cpf.charAt(i + 1)) {
            equalDigits = 0;
            break;
          }
        }

        if (!equalDigits) {
          numbers = cpf.substring(0, 9);
          digits = cpf.substring(9);
          sum = 0;
          for (i = 10; i > 1; i--) {
            sum += numbers.charAt(10 - i) * i;
          }

          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(0))) {
            return { cpfNotValid: true };
          }
          numbers = cpf.substring(0, 10);
          sum = 0;

          for (i = 11; i > 1; i--) {
            sum += numbers.charAt(11 - i) * i;
          }
          result = sum % 11 < 2 ? 0 : 11 - (sum % 11);

          if (result !== Number(digits.charAt(1))) {
            return { cpfNotValid: true };
          }
          return null;
        } else {
          return { cpfNotValid: true };
        }
      }
      return null;
    };
  }

  static EmailValidator(control: FormControl) {
    // tslint:disable-next-line:max-line-length
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(control.value)) {
      return { "E-mail inválido": true };
    }

    return null;
  }
}
```

login-page.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

public form: FormGroup;
public busy = false;

constructor(
    private service: DataService,
    private fb: FormBuilder
) {
    this.form = this.fb.group({
        username: ['', Validators.compose([
            Validators.minLength(14),
            Validators.maxLength(14),
            Validators.required,
            CustomValidator.isCpf()                                                 <
        ])],
        password: ['', Validators.compose([
            Validators.minLength(6),
            Validators.maxLength(20),
            Validators.required
        ])]
    });
}

ngOnInit(): void {
    const token = localStorage.getItem('petshop.token');
    if (token) {
        this.busy = true;
        this
            .service
            .refreshToken(null)
            .subscribe(
                (data: any) => {
                    console.log(data);
                    localStorage.setItem('petshop.token', data.token);
                    this.busy = false;
                },
                (err) => {
                    localStorage.clear;
                    this.busy = false;
                }
            );
    }
}

submit() {
    this.busy = true;
        this
        .service
        .authenticate(this.form.value)
        .subscribe(
            (data: any) => {
            console.log(data);
            localStorage.setItem('petshop.token', data.token);
            this.busy = false;
            },
            (err) => {
            console.log(err);
            this.busy = false;
            }
        );
    }
}
```

</details>

<details>
  <summary>Security Util</summary>

```
src/app/
    app.module.ts
    models/
        user.model.ts
    pages/
        account/
            login-page/
                login-page.component.ts
    utils/
        security.util.cs
```

security.util.ts

```ts
import { User } from "src/app/models/user.model";

export class Security {
  public static set(user: User, token: string) {
    const data = JSON.stringify(user);

    localStorage.setItem("petshopuser", btoa(data));
    localStorage.setItem("petshoptoken", token);
  }

  public static setUser(user: User) {
    const data = JSON.stringify(user);
    localStorage.setItem("petshopuser", btoa(data));
  }

  public static setToken(token: string) {
    localStorage.setItem("petshoptoken", token);
  }

  public static getUser(): User | null {
    const data = localStorage.getItem("petshopuser");
    if (data) {
      return JSON.parse(atob(data));
    } else {
      return null;
    }
  }

  public static getToken(): string | null {
    const data = localStorage.getItem("petshoptoken");
    if (data) {
      return data;
    } else {
      return null;
    }
  }

  public static hasToken(): boolean {
    if (this.getToken()) return true;
    else return false;
  }

  public static clear() {
    localStorage.removeItem("petshopuser");
    localStorage.removeItem("petshoptoken");
  }
}
```

user.model.ts

```ts
export class User {
  constructor(
    public _id: string,
    public name: string,
    public document: string,
    public email: string
  ) {}
}
```

login-page.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';
import { CustomValidator } from 'src/app/validators/custom.validator';
import { User } from "src/app/models/user.model";
import { Security } from "src/app/utils/security.util";                             <


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
    public form: FormGroup;
    public busy = false;

    constructor(
        private router: Router,
        private service: DataService,
        private fb: FormBuilder
    ) {
        this.form = this.fb.group({
        username: ['', Validators.compose([
            Validators.minLength(14),
            Validators.maxLength(14),
            Validators.required,
            CustomValidator.isCpf()
        ])],
        password: ['', Validators.compose([
            Validators.minLength(6),
            Validators.maxLength(20),
            Validators.required
        ])]
        });
    }

    ngOnInit(): void {
        const token = Security.getToken();                                          <
        if (token) {
            this.busy = true;
            this
                .service
                .refreshToken(null)
                .subscribe(
                    (data: any) => {
                        this.busy = false;
                        this.setUser(data.customer, data.token);                    <
                    },
                    (err) => {
                        localStorage.clear;
                        this.busy = false;
                    }
                );

        }
    }

    submit() {
        this.busy = true;
        this
            .service
            .authenticate(this.form.value)
            .subscribe(
                (data: any) => {
                    this.busy = false;
                    this.setUser(data.customer, data.token);                        <
                },
                (err) => {
                    console.log(err);
                    this.busy = false;
                }
            );

    }

    setUser(user: User, token: string) {
        Security.set(user, token);                                                  <
        this.router.navigate(['/']);
    }
}
```

app.module.ts

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { LoginPageComponent } from "./pages/account/login-page/login-page.component";
import { PetsPageComponent } from "./pages/account/pets-page/pets-page.component";
import { ResetPasswordPageComponent } from "./pages/account/reset-password-page/reset-password-page.component";
import { SignupPageComponent } from "./pages/account/signup-page/signup-page.component";
import { FramePageComponent } from "./pages/master/frame.page";
import { CartPageComponent } from "./pages/store/cart-page/cart-page.component";
import { ProductsPageComponent } from "./pages/store/products-page/products-page.component";
import { ProductCardComponent } from "./components/store/product-card/product-card.component";
import { ReactiveFormsModule } from "@angular/forms";
import { LoadingComponent } from "./components/shared/loading/loading.component";
import { MaskDirective } from "./directives/mask.directive";
import { CustomValidator } from "./validators/custom.validator";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductsPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent,
    LoadingComponent,
    MaskDirective,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

</details>

<details>
  <summary>Display Logged Users</summary>

```
src/app/components/shared/
    navbar/
        navbar.component.html
        navbar.component.ts
```

navbar.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';                       <
import { Security } from 'src/app/utils/security.util';                 <

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    public user: User | null;                                           <

    constructor() { }

    ngOnInit(): void {
        this.user = Security.getUser();                                 <
    }
}
```

navbar.component.html

```html
<div class="uk-background-primary uk-light">
  <div class="uk-container">
    <nav class="uk-navbar-container uk-navbar-transparent uk-margin" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="/">
          <span
            class="uk-icon uk-margin-small-right"
            uk-icon="icon: icon-color-light; ratio: 0.15"
          ></span>
        </a>
        <ul class="uk-navbar-nav">
          <li>
            <a [routerLink]="['/']" routerLinkActive="uk-text-bold">Produtos</a>
          </li>
          <li>
            <a [routerLink]="['/account/pets']" routerLinkActive="uk-text-bold"
              >Meus Pets</a
            >
          </li>
          <li><a href="#">Consultas</a></li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a [routerLink]="['/cart']" routerLinkActive="uk-text-bold">
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: cart"
              ></span>
              <span class="uk-badge">0</span>
            </a>
          </li>
          <li>
            <a href="/account">
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: user"
              ></span>
              {{ user?.name }} <
            </a>
          </li>
          <li>
            <a href="/login">
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: sign-out"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
```

</details>

<details>
  <summary>Logout</summary>

```
src/app/components/shared/
    navbar/
        navbar.component.html
        navbar.component.ts
```

navbar.component.ts

```ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { Security } from 'src/app/utils/security.util';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

    public user: User | null;

    constructor(private router: Router) { }                     <

    ngOnInit(): void {
        this.user = Security.getUser();
    }

    logout() {                                                  <
        Security.clear();                                       <
        this.router.navigate(['/login']);                       <
    }                                                           <

}
```

navbar.component.html

```html
<div class="uk-background-primary uk-light">
  <div class="uk-container">
    <nav class="uk-navbar-container uk-navbar-transparent uk-margin" uk-navbar>
      <div class="uk-navbar-left">
        <a class="uk-navbar-item uk-logo" href="/">
          <span
            class="uk-icon uk-margin-small-right"
            uk-icon="icon: icon-color-light; ratio: 0.15"
          ></span>
        </a>
        <ul class="uk-navbar-nav">
          <li>
            <a [routerLink]="['/']" routerLinkActive="uk-text-bold">Produtos</a>
          </li>
          <li>
            <a [routerLink]="['/account/pets']" routerLinkActive="uk-text-bold"
              >Meus Pets</a
            >
          </li>
          <li><a href="#">Consultas</a></li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a [routerLink]="['/cart']" routerLinkActive="uk-text-bold">
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: cart"
              ></span>
              <span class="uk-badge">0</span>
            </a>
          </li>
          <li>
            <a href="/account">
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: user"
              ></span>
              {{ user?.name }}
            </a>
          </li>
          <li>
            <a (click)="logout()">
              <
              <span
                class="uk-icon uk-margin-small-right"
                uk-icon="icon: sign-out"
              ></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</div>
```

</details>

<details>
  <summary>Auth Service</summary>

```
src/app/services/
    auth.service.ts
```

auth.service.ts

```ts
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Security } from "../utils/security.util";

@Injectable()
export class AuthService implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const token = Security.getToken();
    if (!token) {
      this.router.navigate(["/login"]);
      return false;
    }
    return true;
  }
}
```

</details>

<details>
  <summary>Route Guard</summary>

```
src/app/
    app.module.ts
    app-routing.module.ts
```

app.module.ts

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { MaskDirective } from './directives/mask.directive';
import { CustomValidator } from './validators/custom.validator';
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginPageComponent,
        ResetPasswordPageComponent,
        SignupPageComponent,
        PetsPageComponent,
        ProductsPageComponent,
        CartPageComponent,
        FramePageComponent,
        ProductCardComponent,
        LoadingComponent,
        MaskDirective,

    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [DataService, AuthService],                      <
    bootstrap: [AppComponent]
})
export class AppModule { }
```

app-routing.module.ts

```ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/account/login-page/login-page.component';
import { PetsPageComponent } from './pages/account/pets-page/pets-page.component';
import { ResetPasswordPageComponent } from './pages/account/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './pages/account/signup-page/signup-page.component';
import { FramePageComponent } from './pages/master/frame.page';
import { CartPageComponent } from './pages/store/cart-page/cart-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
    {
        path: '',
        component: FramePageComponent,
        children: [
        { path: '', component: ProductsPageComponent, canActivate: [AuthService] },                 <
        { path: 'cart', component: CartPageComponent, canActivate: [AuthService] }                  <
        ]
    },
    {
        path: 'account',
        component: FramePageComponent,
        children: [
        { path: 'pets', component: PetsPageComponent }
        ]
    },
    { path: 'login', component: LoginPageComponent },
    { path: 'signup', component: SignupPageComponent },
    { path: 'reset-password', component: ResetPasswordPageComponent }

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
```

</details>

<details>
  <summary>Toastr</summary>

https://www.npmjs.com/package/ngx-toastr

```ps
npm install ngx-toastr --save
npm install @angular/animations --save
```

> New file:

```
src/assets/css/toastr.css
```

> Update de index.html to add de stylesheet:

src/index.html

```html
<link rel="stylesheet" href="assets/css/toastr.css" />
```

> Update de app.module.ts to add de imports:

src/app/app.module.ts

```ts
...
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
...
@NgModule({
  imports: [
    ...
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  ...
```

</details>

<details>
  <summary>Customer Maintenance - Part 1</summary>

```
src/app/
  pages/account/signup-page
    signup-page.component.ts
  services/
    data.service.ts
```

signup-page.component.ts

- adding properties, dependency injection, constructor content and creating submit method

```ts
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { CustomValidator } from "src/app/validators/custom.validator";
import { DataService } from "src/app/services/data.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-signup-page",
  templateUrl: "./signup-page.component.html",
})
export class SignupPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      name: [
        "",
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(80),
          Validators.required,
        ]),
      ],
      document: [
        "",
        Validators.compose([
          Validators.minLength(14),
          Validators.maxLength(14),
          Validators.required,
          CustomValidator.isCpf(),
        ]),
      ],
      email: [
        "",
        Validators.compose([
          Validators.minLength(5),
          Validators.maxLength(120),
          Validators.required,
          CustomValidator.EmailValidator,
        ]),
      ],
      password: [
        "",
        Validators.compose([
          Validators.minLength(6),
          Validators.maxLength(20),
          Validators.required,
        ]),
      ],
    });
  }

  ngOnInit(): void {}

  submit() {
    this.busy = true;
    this.service.create(this.form.value).subscribe(
      (data: any) => {
        this.busy = false;
        this.toastr.success(data.message, "Bem-vindo!");
        this.router.navigate(["/login"]);
      },
      (err) => {
        console.log(err);
        this.busy = false;
      }
    );
  }
}
```

data.service.ts

- adding the method create

```ts
...
    create(data: any) {
        return this.http.post(`${this.url}/accounts`,data);
    }
}
```

</details>

<details>
  <summary>Customer Maintenance - Part 2</summary>

```
src/app/
  pages/account/signup-page
    signup-page.component.html
```

signup-page.component.html

- adding app-loading, formGroup, busy, inputs and submit button

```html
<div class="uk-flex-center" uk-grid>
  <!-- 1/3 tela + mobile -->
  <div class="uk-width-1-4@m">
    <p class="uk-text-center uk-margin-large-top uk-margin-medium-bottom">
      <span class="uk-icon" uk-icon="icon: logo-color-dark; ratio: 0.7"></span>
    </p>

    <app-loading *ngIf="busy"></app-loading>

    <div>
      <form [formGroup]="form" *ngIf="!busy">
        <div class="uk-card uk-card-primary uk-card-body uk-box-shadow-small">
          <h3 class="uk-card-title">Cadastre-se</h3>
          <div class="uk-margin">
            <input
              class="uk-input uk-form-large"
              type="text"
              placeholder="Nome"
              formControlName="name"
              [ngClass]="{'uk-form-danger' : (!form.controls.name.valid && !form.controls.name.pristine)}"
            />
          </div>
          <div class="uk-margin">
            <input
              class="uk-input uk-form-large"
              type="text"
              placeholder="CPF"
              mask="###.###.###-##"
              formControlName="document"
              [ngClass]="{'uk-form-danger' : (!form.controls.document.valid && !form.controls.document.pristine)}"
            />
          </div>
          <div class="uk-margin">
            <input
              class="uk-input uk-form-large"
              type="email"
              placeholder="E-mail"
              formControlName="email"
              [ngClass]="{'uk-form-danger' : (!form.controls.email.valid && !form.controls.email.pristine)}"
            />
          </div>
          <div class="uk-margin">
            <input
              class="uk-input uk-form-large"
              type="password"
              placeholder="Senha"
              formControlName="password"
              [ngClass]="{'uk-form-danger' : (!form.controls.password.valid && !form.controls.password.pristine)}"
            />
          </div>
          <div class="uk-margin uk-text-right">
            <button
              class="uk-button uk-button-default"
              [disabled]="form.invalid"
              (click)="submit()"
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>

    <p class="uk-text-center" *ngIf="!busy">
      <a [routerLink]="['/login']" class="uk-button uk-button-link">Cancelar</a>
    </p>
  </div>
</div>
```

</details>

<details>
  <summary>Password Reset</summary>

```ps
src/app/
  pages/account/reset-password-page/
    reset-password-page.component.html
    reset-password-page.component.ts
  services/
    data.service.ts
```

reset-password-page.component.ts

```ts
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";
import { CustomValidator } from "src/app/validators/custom.validator";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-reset-password-page",
  templateUrl: "./reset-password-page.component.html",
})
export class ResetPasswordPageComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    private router: Router,
    private service: DataService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({
      document: [
        "",
        Validators.compose([
          Validators.minLength(14),
          Validators.maxLength(14),
          Validators.required,
          CustomValidator.isCpf(),
        ]),
      ],
    });
  }

  ngOnInit(): void {}

  submit() {
    this.busy = true;
    this.service.resetPassword(this.form.value).subscribe(
      (data: any) => {
        this.busy = false;
        this.toastr.success(data.message, "Senha Restaurada");
        this.router.navigate(["/login"]);
      },
      (err: any) => {
        console.log(err);
        this.busy = false;
      }
    );
  }
}
```

data.service.ts

```ts
...

resetPassword(data: any) {
        return this.http.post(`${this.url}/accounts/reset-password`, data);
    }
}
```

Mockoon

POST /accounts/reset-password

```json
{
  "message": "Uma nova senha foi gerada e enviada para seu e-mail!"
}
```

reset-password-page.component.html

```html
<div class="uk-flex-center" uk-grid>
  <div class="uk-width-1-3@m">
    <p class="uk-text-center uk-margin-large-top uk-margin-medium-bottom">
      <span
        class="uk-icon uk-margin-small-right"
        uk-icon="icon: logo-color-dark; ratio: 0.7"
      ></span>
    </p>

    <app-loading *ngIf="busy"></app-loading>

    <form [formGroup]="form" *ngIf="!busy">
      <div class="uk-card uk-card-primary uk-card-body uk-box-shadow-small">
        <h3 class="uk-card-title">Restauração de Senha</h3>
        <div class="uk-margin">
          <input
            class="uk-input uk-form-large"
            formControlName="document"
            type="text"
            placeholder="CPF"
            mask="###.###.###-##"
            [ngClass]="{'uk-form-danger': (!form.controls.document.valid && !form.controls.document.pristine) }"
          />
        </div>
        <div class="uk-margin uk-text-right">
          <button
            class="uk-button uk-button-default"
            [disabled]="form.invalid"
            (click)="submit()"
          >
            Restaurar
          </button>
        </div>
      </div>
    </form>

    <p class="uk-text-center" *ngIf="!busy">
      <a [routerLink]="['/login']" class="uk-button uk-button-link">Cancelar</a>
    </p>
  </div>
</div>
```

</details>

> View Commit to:

- Sending Token
- Edit Profile - Part 1
- Edit Profile - Part 2
- Cart Models
- Cart Util
- Adding Items to the Cart
- Manipulating the Cart
- Viewing the Cart
- Displaying Empty Cart
