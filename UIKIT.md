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
