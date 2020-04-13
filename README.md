## Index

- [Intro](#intro)
- [Installation](#installation)
- [Examples](#examples)
- [Note](#note)
- [About Stylecraft](#about-stylecraft)

## Intro

This is a pure CSS framework. Depending on your use case you're going to need to use your Javascript framework of choice to manipulate class names in DOM to get the desired effects.

## Installation

Use as a node module:

```
npm install stylecraft --save
```

Later in your project:

```
import "stylecraft/dist/stylecraft.css"
```

## Examples

[Live demo](http://stylecraft.iding.ir)

[Live demo](http://realestate-map-redux.iding.ir) - [Github](https://github.com/iding-ir/realestate-map-redux)

## Note

This framework is in alpha state. Not remotely completed. I cretaed it for personal use, made it reusable and decided to make it public. I will keep using it in my future projects and will improve it over time.

When I started the project, I decided to use native css features such as CSS Variables and Mask instead of using css preprocessor and font icons for the advantages that I believe they prodive. Since v0.2 I started using SCSS, but used both CSS and SASS variables for different purposes.

## About Stylecraft

Necessity is the mother of invention. Starting from Nov 16th 2019, the Iranian regime [shut down the internet](https://netblocks.org/reports/internet-disrupted-in-iran-amid-fuel-protests-in-multiple-cities-pA25L18b) of the whole country for more than a week.

During that time, other than my regular work, I was developing [Lazy Poker](https://github.com/iding-ir/lazy-poker) and [Mapcraft](https://github.com/iding-ir/mapcraft), and later decided to test Mapcraft with a new project.

Under the influence of [Finn.no](https://kart.finn.no/?tab=iad&ztr=1&searchKey=search_id_realestate_lettings&PROPERTY_TYPE=6&keyword=bergen) I started to develop [Realestate Map](https://github.com/iding-ir/realestate-map).

The problem was that I wanted to make it with a new css framework, but there was no internet connection, so I thought I create a new one.
