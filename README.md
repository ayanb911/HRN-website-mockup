# HRN Website mockup

This repository contains a single page mockup of [HRN](http://hrn.io), made by [Ayan Banerjee](https://www.linkedin.com/in/abanerjee911/).

You can find all the extra requirements (ex. time spent on project, customized IDE etc.) in the "Working on the Project" section of this file.

## Getting Started

Instructions to help you get this project set up and running

## Prerequisites

Things you'd need pre-installed:

```
Node js
```

## Get it running

```
Install Gulp via npm
```
npm packages required to run gulp- 
```
sass, autoprefixer, browser-sync, uglify, rename, if, cssnano, imagemin
```

Fire up index.html in a browser. (**The dist folder has minified versions of everything**)

## Working on the project

**NOTE**

I do not know how to use Adobe Illustrator, hence I was not able to use all images provided in the test file. Exporting to PSD (which I know), resulted in the loss of layers. Hence, I used images that were available in the test site provided. 

I did not ask Mr. Bottyan about this matter, since I had previously mailed him regarding some issues but had not received any reply. 

**Time Taken**

I had received the project on 20th May, 2017 (Tuesday), but I could only start working on it properly 2 days later due to some unavoidable circumstances (my commit dates confirm it).

_1st June_

    Project setup - gulp, npm, gitignore
    Icons/Images added
    FIxed Header structure added
    Reset css added

_2nd June_

    HTML structure added for whole page
    Top two sections designed- fixed header, header banner
    "Your future" section partially designed

_3rd June_

    Animations added in icons
    Grid layout partially designed
    Js code added for animations, code cleaned and commented
    Responsive design done partially

_4th June_

    Responsiveness for tablets, mobile and 4k screens done
    Margin, animation issues solved
    Hover menu for desktop completed
    
_5th June_

    Code is checked and commented
    Glitch effect on hover of logo done
    Font sizes are made sure to scale properly
    Issues fixed
    
_6th June_

    Grid resizing js added
    Code commented, issues fixed



## Bonus Extra Requirements
```
Usage of Git
```
I use bitbucket for all my work projects, but decided to use Github for this.

```
Tools
```
Gulp scripts: you can check out my gulpfile.js, I use it for everything from automatic browser reloads to renaming my minified css, js and image files with a .min.

Editor: I use PhpStorm IDE with either a Darcula or a Material design theme.
```
Extra Transitions
```
I have tried to keep everything perfect, except some changes -
 
1. On desktop, when you hover over "MORE" in the menu, the floating menu slides in from the left instead of right. Since most people are right handed, majority of them would be more suited to things coming in from the right side instead of the left. 

2. The tooltip arrow that appears when the "Future of Work" section icons scale up, is made with after instead of it being a background image.

3. The Hamburger to cross transition animation is altered because I wanted it to be faster. Same for the entry time of the menu links when the menu links slides in; they are faster.

4. The body has a padding top equal to the height of the fixed header - this allows the whole header background to be seen.
