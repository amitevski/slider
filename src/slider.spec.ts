
// import {
//   describe,
//   it
// } from 'mocha';

import {
  expect
}  from 'chai';

import {Slider} from './slider';

describe('Slider', () => {
  let images = [
    'http://lorempixel.com/600/350/?1',
    'http://lorempixel.com/600/350/?2',
    'http://lorempixel.com/600/350/?3',
    'http://lorempixel.com/600/350/?4',
    'http://lorempixel.com/600/350/?5'
  ];

  let slider, dummyElement;

  beforeEach( () => {
    dummyElement = document.createElement('div');
    slider = new Slider(dummyElement, images);
  });
  
  describe('Slide Init', () => {
    it('should set right number of total slides', () => {
      expect(slider.totalSlides).to.eql(5);
    });
  });
  describe('next', () => {
    it('should go to next image if its not the last', () => {
      expect(slider.currentSlide).to.eql(0);
      slider.next();
      expect(slider.currentSlide).to.eql(1);
    });
    it('should go to first image if its the last', () => {
      slider.currentSlide = 4;
      slider.next();
      expect(slider.currentSlide).to.eql(0);
    });
  });
  describe('prev', () => {
    it('should go to previous image if its not the first', () => {
      slider.currentSlide = 2;
      slider.prev();
      expect(slider.currentSlide).to.eql(1);
    });
    it('should go to last image if its the first', () => {
      expect(slider.currentSlide).to.eql(0);
      slider.prev();
      expect(slider.currentSlide).to.eql(4);
    });
  });
});