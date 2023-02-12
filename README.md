# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Responsive Design

### What I learned

```css
@media only screen and (max-width:400px)  {
  .container{
    flex-direction:column-reverse;
    justify-content: center;
    align-items: center;
  }
  .left{
    width:100%;
    margin: 20px auto 0 auto;
  }
  .right{
      width:90%;
      margin: 0 auto 0 auto;
  }
  .bill,.tip,.people{
    width:100%;
  }
  #people,#bill-amount{
    width:100%;
  }
}
```
```js
for(let i=0;i<5;i++){
  groupBtn[i].addEventListener('click',function(){
    var val=groupBtn[i].value;
    valueArray[1]=parseInt(val.slice(0,val.length-1));
    main();
  });
}

valueArray[1]=parseInt(val.slice(0,val.length-1));
```

### Useful resources

- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) - This website help me to make this project responsive.
- [w3schools](https://www.w3schools.com/js/js_events.asp) - This website help me to learning the event handler in js.


## Author

- Frontend Mentor - [@aman-abesec](https://www.frontendmentor.io/profile/aman-abesec)
