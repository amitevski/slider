import { TouchHandler } from './touch-handler';

const ANIMATION_TIME = 300;

export /**
 * Slider
 */
class Slider {

  currentSlide: number = 0;
  totalSlides: number = 0;
  imageContainer: Element;
  imageElements: any[] = [];
  counterElement: Element;
  touchHandler: TouchHandler;

  constructor(private element: Element, private images: string[]) {
    this.totalSlides = this.images.length;
    this.addImageContainer();
    this.images.map( this.addImage.bind(this) );
    // this.imageElements[this.currentSlide].style.display = 'block';
    this.showImage(this.imageElements[this.currentSlide]);
    this.addCounter();
    this.addArrows();
    this.setupTouchListeners();
  }

  /**
   * go to next image
   */
  next() {
    this.gotoImage(this.currentSlide+1);
  }

  /**
   * go to previous image
   */
  prev() {
    this.gotoImage(this.currentSlide-1);
  }

  private showImage(imgEl: any) {
    setTimeout( () => {
      imgEl.style.display = 'block';
    }, ANIMATION_TIME);
    setTimeout( () => {
      imgEl.style.opacity = '1';
    }, ANIMATION_TIME)*2;
  }

  private hideImage(imgEl: any) {
    imgEl.style.opacity = '0';
    setTimeout( () => {
      imgEl.style.display = 'none';
    }, ANIMATION_TIME);
  }

  /**
   * go to given image number
   */
  private gotoImage(n: number) {
    /**
     * if given number doesnt exist goto to end/beginning of images
     * update counter
     */
    this.hideImage(this.imageElements[this.currentSlide]);
    // this.imageElements[this.currentSlide].style.display = 'none';
    if (n > this.imageElements.length-1) {
      this.currentSlide = 0;
    } else if (n < 0) {
      this.currentSlide = this.imageElements.length - 1;
    } else {
      this.currentSlide = n;
    }

    // this.imageElements[this.currentSlide].style.display = 'block';
    this.showImage(this.imageElements[this.currentSlide]);
    this.updateCounter();
  }

  /**
   * update counter element to display currently displayed image number
   */
  private updateCounter() {
    this.counterElement.innerHTML = `${this.currentSlide+1} / ${this.totalSlides}`;
  }


  /**
   * add image container
   */
  private addImageContainer() {
    this.imageContainer = document.createElement('div');
    this.imageContainer.className = 'slider-container';
    this.element.appendChild(this.imageContainer);
  }

  /**
   * add an image to the element
   */
  private addImage(imageSrc: string) {
    let img = new Image();
    img.src = imageSrc;
    let imageSlide = document.createElement('div');
    imageSlide.className = 'slider-img';
    imageSlide.appendChild(img);
    imageSlide.style.opacity = '0';
    imageSlide.style.display = 'none';
    this.imageElements.push(imageSlide);
    this.imageContainer.appendChild(imageSlide);
  }

  /**
   * add a counter to the element
   */
  private addCounter() {
    this.counterElement = document.createElement('div');
    this.counterElement.className = 'slider-counter';
    this.updateCounter();
    this.element.appendChild(this.counterElement);
  }

  /**
   * add prev/next arrows
   */
  private addArrows() {
    let prevImg = '❮',
      nextImg = '❯';
    let nextButton = document.createElement('a');
    nextButton.className = 'slider-next';
    nextButton.href = '#';
    nextButton.innerText = nextImg;
    nextButton.onclick = this.next.bind(this);
    let prevButton = document.createElement('a');
    prevButton.className = 'slider-prev';
    prevButton.href = '#';
    prevButton.innerText = prevImg;
    prevButton.onclick = this.prev.bind(this);
    this.imageContainer.appendChild(prevButton);
    this.imageContainer.appendChild(nextButton);
  }

  /**
   * setup touch event listeners
   */
  private setupTouchListeners() {
    this.touchHandler = new TouchHandler(this.imageContainer, this.prev.bind(this), this.next.bind(this));
  }
}
