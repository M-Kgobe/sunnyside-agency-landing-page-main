# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](.\resources\images\screenshot.png)

### Challenges

I encountered a challenge when I tried to add something extra in my JS.

I basically tried to modify the navigation menu such that when you click outside of it, it automatically closes, on a half screen desktop site, it works just fine, But then i took it a step further to devtools, thats when the menu button did not work any more.

this is the code I added in the 
```js 
navActive()
``` 
of my navigation bar

```js
document.onclick = function (e) {
    if (e.target.id !== 'nav-links' && e.target.id !== 'hamburger') {
        navLinks.classList.remove("nav-active");
        hamburger.classList.remove("close");
    }
}
```
send help😭🚶🏽‍♂️

## Author

- Website - coming soon...
- Frontend Mentor - [@M-Kgobe](https://www.frontendmentor.io/profile/M-Kgobe)
- Twitter - [@M_kgobe](https://www.twitter.com/M_kgobe)
