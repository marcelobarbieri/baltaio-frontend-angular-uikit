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
  <summary>Creatomg a Component</summary>

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

Move src/app/navbar/ to /src/app/components/shared/

app.module.ts

```ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';                                          <
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

<!--
<details>
  <summary></summary>
</details>
-->
