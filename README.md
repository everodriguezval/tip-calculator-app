# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

## Screenshots

### Desktop version

![image](https://user-images.githubusercontent.com/107844763/229934482-d43bf286-5c7b-4047-8f60-b8e89314c8f2.png)

### Mobile version

![image](https://user-images.githubusercontent.com/107844763/229938850-158c8827-167e-4545-86fd-dd9af4429113.png)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

## My process

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

Check it out below:

```html 🎉
<header>
   <img src="./images/logo.svg" alt="calculator logo displaying the name of the app splitter">
</header>
```
```css 🎉
@media screen and (min-width: 992px) {
    header img {
        margin: 4rem auto;
    }

    main {
        display: flex;
        justify-content: space-between;
        gap: 3rem;
        border-radius: 20px;
    }
```
```js 🎉
function getTipNumber(e) {
    let tipPercentage = e.target.value;
    if (tipPercentage != 0) {
        tipNumber = Number(tipPercentage.substring(0, tipPercentage.length - 1));       
        console.log(tipNumber);
        tipCalculation();
    } else {
        customTip.addEventListener('input', (e) => {
            tipNumber = Number(e.target.value);
            tipCalculation();           
        });       
    }  
}

```

## Author

- Website - Evelyn Valenzuela (https://evelynvalenzuela.com/)
- Frontend Mentor - Oliver Cadman (https://github.com/OliverCadman)


## Acknowledgments

I just want to say thanks to Oli for finding this really fun challenge and to the whole Xander team for encouraging us to improve as developers!
