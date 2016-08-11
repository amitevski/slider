

export /**
 * Slider
 */
class Slider {

  currentSlide: number = 0;
  totalSlides: number = 0;
  imageContainer: Element;

  constructor(private element: Element, private images: string[]) {
    this.totalSlides = this.images.length;
    this.addImageContainer();
    this.images.forEach( this.addImage );
    this.addCounter();
    this.addArrows();
  }

  /**
   * go to next image
   */
  next() {
  }

  /**
   * go to previous image
   */
  prev() {
  }

  /**
   * go to given image number
   */
  private gotoImage(n: number) {
    /**
     * if given number doesnt exist goto to end/beginning of images
     * update counter
     */
  }

  /**
   * update counter element to display currently displayed image number
   */
  private updateCounter() {

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

  }

  /**
   * add a counter to the element
   */
  private addCounter() {

  }

  /**
   * add prev/next arrows
   */
  private addArrows() {
    let prevImg = '❮',
      nextImg = '❯';
  }

  /**
   * setup touch event listeners
   */
  private setupTouchListeners() {

  }
}