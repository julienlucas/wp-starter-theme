# Wordpress Starter Theme

## Work in progress

The perfect simple starter theme for me.
Lightweight starter WP with SCSS+SMACSS/ES6/Gulp/Bootstrap (or Foundation).

Extra features:

* Owl Carousel JS. The best slider imo: lightweight, rich functionalities, and good looking when animated.
* Some usefull includes, like a good pagination.php for Wordpress.
* Some functions in functions.php, like thumbnails support and words excerpt limitation.

Nothing more. Just the indissential (contraction of essential and indispential).

## Installation

Unzip the file in `/wp-content/themes`

Want to use Bootstrap 3 or 4, or Foundation? Just change the 2 urls of .css and .js file in header.php.

### Gulp Installation

## Optimized for production with Gulp Tasks

* Optimise images
* Optimise and minify scripts with webpack
* Optimise and minify styles
* Can create font icons

## How the starter works

### Works with SCSS + SMACSS
To organize your Sass project with SMACSS organisation. Inspired by SMACSS from Jonathan Snook. To know more, go to : http://smacss.com

You can use it with any framework like Bootstrap or Foundation.

The SCSS files are located in `/scss`.

SMACSS is a method for practical structuring, easy maintenability and scalabilty of Styles
* Layouts
* Modules

### Works with JavaScript

The JavaScript files are located in `/js`.
Add your custom JS and jQuery functions in `/js/custom-functions.js`

**You can use the ES6 syntaxe** Babel convert it in ES5 for you via webpack.

### Working with Images

The Image files are located in `/images`

Accepted file formats : - jpg - png - gif - svg

### Working with Fonts

The font files are located in `/fonts`

### Working with Icons

The font files are located in `/icons`
You can add .svg icons and than create a font icon using the gulp tasks 'icons'.

### Working with Favicon

Multiples favicon sizes prepared for desktop and mobiles
The favicons files are located in `/favicon`
