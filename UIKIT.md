# UiKit

<details><summary>Yarn</summary>
<p>
  
https://yarnpkg.com/pt-br/

Getting Started

```ps
npm install -g yarn
```

hyper
	
```hyper
yarn doctor
output>	yarn run v1.22.17
```
	
</p>
</details>		

<details><summary>UiKit</summary>
<p>
	
https://getuikit.com	
	
```ps
c:\Dev\Angular\> git clone git://github.com/uikit/uikit.git	
```	
	
</p>
</details>		

<details><summary>Assets</summary>
<p>
	
https://github.com/balta-io/7187/tree/master/assets
	
</p>
</details>		

<details><summary>Editing Variables</summary>
	
c:\Dev\Angular\uikit\> 
```
code .
```
	
```
src/	
    less/				< choosen by affinity						 
        components/*						 
            variables.less						 
        themes/*						 
    scss/						 
```
						 
<details><summary>variables.less</summary>						 
<p>
	
```less
//
// Component: Variables
//
// ========================================================================


// Global variables
// ========================================================================

//
// Typography
//

@global-font-family:            'Montserrat',sans-serif;
@global-font-size:              16px;
@global-line-height:            1.5;        // 24px

@global-xxlarge-font-size:      2.625rem;   // 42px
@global-xlarge-font-size:       2rem;       // 32px
@global-large-font-size:        1.5rem;     // 24px
@global-medium-font-size:       1.25rem;    // 20px
@global-small-font-size:        0.875rem;   // 14px

//
// Colors
//

@global-color:                  #666;
@global-emphasis-color:         #333;
@global-muted-color:            #999;

@global-link-color:             #8726d3;
@global-link-hover-color:       #6f20ad;

@global-inverse-color:          #fff;

//
// Backgrounds
//

@global-background:             #fff;

@global-muted-background:       #f8f8f8;
@global-primary-background:     #ff8429;
@global-secondary-background:   #ffc84d;

@global-success-background:     #43de7f;
@global-warning-background:     #f9d84b;
@global-danger-background:      #f04141;

//
// Borders
//

@global-border-width:           1px;
@global-border:                 #e5e5e5;

//
// Box-Shadows
//

@global-small-box-shadow:       0 2px 8px rgba(0,0,0,0.08);
@global-medium-box-shadow:      0 5px 15px rgba(0,0,0,0.16);
@global-large-box-shadow:       0 14px 25px rgba(0,0,0,0.16);
@global-xlarge-box-shadow:      0 28px 50px rgba(0,0,0,0.16);

//
// Spacings
//

// Used in margin, secion, list

@global-margin:                 20px;
@global-small-margin:           10px;
@global-medium-margin:          40px;
@global-large-margin:           70px;
@global-xlarge-margin:          140px;

// Used in grid, column, container, align, card, padding

@global-gutter:                 30px;
@global-small-gutter:           15px;
@global-medium-gutter:          40px;
@global-large-gutter:           70px;

//
// Controls
//

@global-control-height:         40px;
@global-control-small-height:   30px;
@global-control-large-height:   55px;

//
// Z-index
//

@global-z-index:                1000;	
```
	
</p>	
</details>			

</details>			

<details><summary>Custom icons</summary>						 
<p>
	
https://getuikit.com/docs/icon

Copy all from

```
uikit\assets\svg		
	bruce-01.svg
	bruce-02.svg
	bruce-03.svg
	bruce-04.svg
	icon-color-dark.svg
	icon-color-light.svg
	logo-color-dark.svg
	logo-color-light.svg
```

New Folder
	
```
uikit/custom/icons
```
	
Paste	
</p>
</details>			

<details><summary>Compiling the theme</summary>
<p>
	
wt
	
```ps
yarn install
yarn compile
```	

Folder 

```	
dist/ yellowed	
```	
</p>
</details>				
	
<details><summary>Initial setup</summary>
<p>
	
Move to folder **c:\dev\angular\**

```	
ng: Angular
```	

Create a new workspace and an initial Angular application
	
wt

```ps
ng new petshop
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS
```

code c:\dev\angular\petshop

```	
src/
	index.html		
```
	
<details><summary>index.html</summary>	
	
```html	
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>Dachshop</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <link href="https://fonts.googleapis.com/css?family=Montserrat:300" rel="stylesheet">			<
  <link rel="stylesheet" href="assets/css/uikit.min.css">						<
</head>

<body>
  <app-root></app-root>

  <script src="assets/js/uikit.min.js"></script>							<
  <script src="assets/js/uikit-icons.min.js"></script>							<
</body>

</html>	
```	
	
</details>
	
Reveal in File Explorer **src/assets**
		
Copy uikit\dist\* (only *min*)

	css/*

	js/*		

Paste **src\assets**
		

Copy favicon.ico from uikit\assets and Paste to petshop\src (https://xiconeditor.com/)
		
wt 
	
```ps	
ng serve -o	
```	
	
</p>
</details>					

<details><summary>Style Navbar</summary>	
<p>	

New Component
- Generates and/or modifies files based on a schematic (component)
	
wt
```ps	
ng generate component Navbar					(src/app/navbar)
```	

```	
	app/
		app.component.html
		navbar/
			navbar.component.html			
```	
	
<details><summary>app.component.html</summary>	
<p>		
	
```html	
<app-navbar></app-navbar>
```
	
</p>	
</details>		
		
<details><summary>navbar.component.html</summary>	
<p>		
	
```html	
<div class="uk-background-primary uk-light">
    <div class="uk-container">
        <nav class="uk-navbar-container uk-navbar-transparent uk-margin" uk-navbar>
            <div class="uk-navbar-left">
                <a class="uk-navbar-item uk-logo" href="/">
                    <span class="uk-icon uk-margin-small-right" uk-icon="icon: icon-color-light; ratio: 0.15"></span>
                </a>
                <ul class="uk-navbar-nav">
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Meus Pets</a></li>
                    <li><a href="#">Consultas</a></li>
                </ul>
            </div>
            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav">
                    <li>
                        <a href="#">
                            <span class="uk-icon uk-margin-small-right" uk-icon="icon: cart"></span>
                            <span class="uk-badge">0</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="uk-icon uk-margin-small-right" uk-icon="icon: user"></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="uk-icon uk-margin-small-right" uk-icon="icon: sign-out"></span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</div>		

```
	
</p>	
</details>			

	
</p>
</details>					
	
<details><summary>Login Screen</summary>	
<p>		

wt

```ps	
ng generate component LoginPage				(src/app/login-page/)
ng generate component ResetPasswordPage		(src/app/reset-password-page/)
ng generate component SignupPage			(src/app/signup-page/)
```
	
```	
src/app/
	app.component.html
	login-page/
		login-page.component.html
```	

<details><summary>app.component.html</summary>	
<p>	

```html	
<app-login-page></app-login-page>	
```
	
</p>
</details>						
	
<details><summary>login-page.component.html</summary>	
<p>	

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
                <input class="uk-input uk-form-large" type="email" placeholder="E-mail">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-large" type="password" placeholder="Senha">
            </div>
            <div class="uk-margin uk-text-right">
                <a href="/" class="uk-button uk-button-default">Entrar</a>
            </div>
        </div>

        <p class="uk-text-center">
            <a href="/signup" class="uk-button uk-width-1-1 uk-button-large uk-button-primary uk-margin-small-bottom">
                Quero me cadastrar
            </a>
            <br>
            <a href="/reset-password" class="uk-button uk-button-link">
                Esqueci minha senha
            </a>
        </p>
    </div>
</div>	
```	
	
</p>
</details>						

</p>
</details>						

<details><summary>Password Reset Screen</summary>	
<p>	

```	
src/app/
	app.component.html
	reset-password-page/
		reset-password-page.component.html
```	
	
<details><summary>app.component.html</summary>	
<p>	

```html
<app-reset-password-page></app-reset-password-page>
```

</p>
</details>						

<details><summary>reset-password-page.component.html</summary>	
<p>	

```html
<div class="uk-flex-center" uk-grid>
    <!-- 1/3 tela + mobile -->
    <div class="uk-width-1-4@m">
        <p class="uk-text-center uk-margin-large-top uk-margin-medium-bottom">
            <span class="uk-icon" uk-icon="icon: logo-color-dark; ratio: 0.7"></span>
        </p>

        <div class="uk-card uk-card-primary uk-card-body uk-box-shadow-small">
            <h3 class="uk-card-title">Restauração de Senha</h3>
            <div class="uk-margin">
                <input class="uk-input uk-form-large" type="email" placeholder="E-mail">
            </div>
            <div class="uk-margin uk-text-right">
                <a href="/login" class="uk-button uk-button-default">Restaurar Senha</a>
            </div>
        </div>

        <p class="uk-text-center">
            <a href="/login" class="uk-button uk-button-link">
                Voltar
            </a>
        </p>
    </div>
</div>	
```    
	
</p>
</details>						

</p>
</details>						

<details><summary>Registration Screen</summary>	
<p>	

```	
src/
	index.html
	app/
		app.component.html
		signup-page/
			signup-page.component.html
```
	
<details><summary>app.component.html</summary>	
<p>	
	
```html	
<app-signup-page></app-signup-page>
```	

</p>
</details>						
	
<details><summary>signup-page.component.html</summary>	
<p>	
	
```html
<div class="uk-flex-center" uk-grid>
    <!-- 1/3 tela + mobile -->
    <div class="uk-width-1-4@m">
        <p class="uk-text-center uk-margin-large-top uk-margin-medium-bottom">
            <span class="uk-icon" uk-icon="icon: logo-color-dark; ratio: 0.7"></span>
        </p>

        <div class="uk-card uk-card-primary uk-card-body uk-box-shadow-small">
            <h3 class="uk-card-title">Cadastre-se</h3>
            <div class="uk-margin">
                <input class="uk-input uk-form-large" type="text" placeholder="Nome">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-large" type="text" placeholder="CPF">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-large" type="email" placeholder="E-mail">
            </div>
            <div class="uk-margin">
                <input class="uk-input uk-form-large" type="password" placeholder="Senha">
            </div>
            <div class="uk-margin uk-text-right">
                <a href="/login" class="uk-button uk-button-default">Cadastrar</a>
            </div>
        </div>

        <p class="uk-text-center">
            <br>
            <a href="/login" class="uk-button uk-button-link">
                Voltar
            </a>
        </p>
    </div>
</div>

```	
	
</p>
</details>						
    
<details><summary>index.html</summary>	
<p>	
    
```html
<!doctype html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <title>Dachshop</title>
        <base href="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="icon" type="image/x-icon" href="favicon.ico">

        <link href="https://fonts.googleapis.com/css?family=Montserrat:300" rel="stylesheet">
        <link rel="stylesheet" href="assets/css/uikit.min.css">
    </head>

    <body class="uk-background-muted" uk-height-viewport="expand: true">				<
        <app-root></app-root>

        <script src="assets/js/uikit.min.js"></script>
        <script src="assets/js/uikit-icons.min.js"></script>
    </body>

</html>		
```    
    
</p>
</details>		

</p>
</details>						

<details><summary>Pets Screen</summary>	
<p>	

wt	

```ps
ng generate component PetsPage
```	

```
src/app/
	app.component.html
	pets-page/
		pets-page.component.html
```		

<details><summary>app.component.html</summary>	
<p>	

```html
<app-navbar></app-navbar>
<app-pets-page></app-pets-page>
```

</p>
</details>						

<details><summary>pets-page.componen.html</summary>	
<p>	

```html
<div class="uk-container">
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
                <li class="uk-active">Meus Pets</li>
            </ul>
        </div>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li class="uk-active">
                    <a href="#">
                        <span class="uk-icon uk-margin-small-right" uk-icon="icon: plus"></span>
                        Adicionar
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>
<div class="uk-container">
    <div uk-grid>
        <div class="uk-width-1-3">
            <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <br>
                    <p class="uk-text-center"><img src="https://placehold.it/250" class="uk-border-circle" alt=""></p>
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Media Top</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <p>
                        <a href="#" class="uk-button uk-button-default">
                            <span class="uk-icon uk-margin-small-right" uk-icon="icon: pencil"></span>
                            Editar
                        </a>
                    </p>
                </div>
            </div>
        </div>
        <div class="uk-width-1-3">
            <div class="uk-card uk-card-default">
                <div class="uk-card-media-top">
                    <br>
                    <p class="uk-text-center"><img src="https://placehold.it/250" class="uk-border-circle" alt=""></p>
                </div>
                <div class="uk-card-body">
                    <h3 class="uk-card-title">Media Top</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <p>
                        <a href="#" class="uk-button uk-button-default">
                            <span class="uk-icon uk-margin-small-right" uk-icon="icon: pencil"></span>
                            Editar
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
```

</p>
</details>						
		
</p>
</details>						

<details><summary>Products Screen</summary>	
<p>	
    
wt	

```ps
ng generate component ProductsPage
```    

```
src/app/
    app.component.html
    products-page/
        products-page.componen.html
```

<details><summary>app.component.html</summary>	
<p>	    
    
```html    
<app-navbar></app-navbar>
<app-products-page></app-products-page>	
```

</p>
</details>						  

<details><summary>products-page.component.html</summary>	
<p>	
        
```html    
<div class="uk-container">
    <div class="uk-grid uk-margin-small-top">
        <div class="uk-width-1-2 uk-margin-small-bottom">
            <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
                <div class="uk-card-media-left uk-cover-container">
                    <img src="https://picsum.photos/200" alt="" uk-cover>
                </div>
                <div>
                    <div class="uk-card-body">
                        <h3 class="uk-card-title">R$ 79,90</h3>
                        <p>Shapoo para telos macios</p>
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
    
</p>
</details>						
    
</p>
</details>						    

<details><summary>Cart Screen</summary>	
<p>	
    
wt
    
```ps   
ng generate component CartPage
```    

```    
src/app/
    app.component.html
    cart-page/
        cart-page.componen.html
```
    
<details><summary>app.component.html</summary>	
<p>	    
    
```html    
<app-navbar></app-navbar>
<app-cart-page></app-cart-page>	
```    
    
</p>
</details>						    
  
<details><summary>cart-page.componen.html</summary>	
<p>	      
    
```html     
<div class="uk-container">
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <ul class="uk-navbar-nav">
                <li class="uk-active">Meu Carrinho</li>
            </ul>
        </div>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li class="uk-active">
                    <a href="#">
                        <span class="uk-icon uk-margin-small-right" uk-icon="icon: close"></span>
                        Limpar Carrinho
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>
<div class="uk-container">
    <div class="uk-grid-small" uk-grid>
        <div class="uk-width-expand" uk-leader>
            <img src="https://placehold.it/64" class="uk-align-left" alt="">
            <a href="#">Shampoo para pelos macios</a> <br>
            <strong>2 unidades</strong>
        </div>
        <div>
            <br>
            $20.90
            <a href="#" class="uk-buton uk-button-link uk-align-right">
                <span class="uk-icon" uk-icon="icon: close"></span>
            </a>
        </div>
    </div>
    <div class="uk-grid-small" uk-grid>
        <div class="uk-width-expand" uk-leader>
            <img src="https://placehold.it/64" class="uk-align-left" alt="">
            <a href="#">Shampoo para pelos macios</a> <br>
            <strong>2 unidades</strong>
        </div>
        <div>
            <br>
            $20.90
            <a href="#" class="uk-buton uk-button-link uk-align-right">
                <span class="uk-icon" uk-icon="icon: close"></span>
            </a>
        </div>
    </div>
    <div class="uk-text-right">
        <h3 class="uk-text-right">
            R$ 41,80
        </h3>
        <a href="/checkout" class="uk-button uk-button-large uk-button-primary uk-margin-small-botom">
            FINALIZAR COMPRA
        </a>
    </div>
</div>    
```

</p>
</details>						    
    
</p>
</details>						    
    
    
