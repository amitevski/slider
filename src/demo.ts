import {Slider} from './slider';

let images = [
  'http://placekitten.com/g/600/350',
  'http://placebear.com/g/600/350',
  'http://lorempixel.com/600/350/?3',
  'http://lorempixel.com/600/350/?4',
   'http://lorempixel.com/600/350/?5'
];
let elements = document.getElementsByClassName('slider');

new Slider(elements[0], images);