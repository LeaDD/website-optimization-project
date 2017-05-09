## Website Performance Optimization portfolio project


### Usage:

Clone the repository, navigate to the dist folder and open index.html.


### Part 1: Optimize PageSpeed Insights score for index.html

1. Minified all CSS, JavaScript and HTML using gruntjs.
2. Inlined style.css and add 'print' attribute to print.css.
3. Moved inline Javascript to end of HTML and add 'async' attribute to external sources.
4. Optimized and compressed images.

### Part 2: Optimize Frames per Second in pizza.html

1. Modified determineDx() to return only the percent of the new width rather than calculating the number of pixels.
2. Refactored the 'document.querySelectorAll' call into a variable and replaced it's usage in four places with that variable.
3. Modified the changePizzaSlices function by moving the computation of the newwidth variable outside the loop.
4. Modified updatePositions by moving the sine calculation on scroll position outside of the for loop. This eliminated the forced reflow events. Also stored the items.length property in a variable.
5. Add will-change:transform property to 'mover' class to force the background pizzas onto their own layer and reduce paint events.