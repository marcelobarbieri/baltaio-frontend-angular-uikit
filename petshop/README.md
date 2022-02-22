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
    *css (empty) 	< 	adjust *ts

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
        FramePageComponent										<   Add
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
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
```
                                             
</details>  
  
<!--
<details>
  <summary></summary>
</details>
-->
















