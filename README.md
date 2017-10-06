# Wordpress Starter Theme

## Work in progress

The perfect simple starter theme for me.
Lightweight starter WP with SCSS + SMACSS/ES6/Gulp/Bootstrap (or Foundation).

Extra features:

* Owl Carousel JS. The best slider imo: lightweight, rich functionalities, and good looking when animated.
* Some usefull includes, like a good pagination.php for Wordpress.
* Some functions in functions.php, like thumbnails support, word excerpt limitation

Nothing more. Just the essential.

## Installation

Unzip the file in `/wp-content/themes`

### Gulp Installation

## Optimized for production with Gulp Tasks

* Optimise images
* Optimise and minify scripts with webpack
* Optimise and minify styles
* Create font icons

## How the starter works

### Works with SCSS + SMACSS

The SCSS files are located in `/scss`.

SMACSS for practical structuring, easy maintenability and scalabilty of styles
* Layouts
* Modules

### Works with JavaScript

The Javascript files are located in `/js`.
Add your JS and jQuery functions in `/js/custom-functions.js`

**You can use the ES6 syntaxe** Babel convert it in ES5 for you via webpack.

### Working with Images

The Image files are located in `/images`

Accepted file formats : - jpg - png - gif - svg

### Working with Fonts

The font files are located in `/fonts`

### Working with Icons

The font files are located in `/icons`
You can add .svg icons and than create a font icon using the gulp tasks 'icons'.

### Working with Favicons

Multiples size available, favicons for desktop and mobiles
The font files are located in `/icons`
