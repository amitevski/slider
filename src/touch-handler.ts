
const MIN_DISTANCE = 30;

export /**
 * TouchHandler
 * 
 * calls given leftHandler if it detects a left swipe
 * calls given rightHandler if it detects a right swipe
 */
class TouchHandler {

  startX: number;
  endX: number;

  constructor(private element: Element, private leftHandler: Function, private rightHandler: Function) {
    this.element.addEventListener('touchstart', this.onTouchStart.bind(this), false);
    this.element.addEventListener('touchend', this.onTouchEnd.bind(this), false);
  }

  private onTouchStart(e: any) {
    if (!e.pageX) {
      return;
    }
    this.startX = e.pageX;
  }

  private onTouchEnd(e: any) {
    if (!e.pageX || !this.startX) {
      return;
    }
    let diff = e.pageX - this.startX;
    if (diff > 0 && diff > MIN_DISTANCE) {
      //left swipe
      this.leftHandler();
    } else if ( diff < 0 && diff < -30) {
      // right swipe
      this.rightHandler();
    }
    this.startX = null;
  }
}
