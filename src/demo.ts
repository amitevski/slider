import {Slider} from './slider';

let images = [
  'http://lorempixel.com/600/350/?1',
  'http://lorempixel.com/600/350/?2',
  'http://lorempixel.com/600/350/?3',
  'http://lorempixel.com/600/350/?4',
   'http://lorempixel.com/600/350/?5'
];
let elements = document.getElementsByClassName('slider');

new Slider(elements[0], images);