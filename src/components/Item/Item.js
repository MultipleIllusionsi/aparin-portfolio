import { MathUtils } from "../../utils/utils";

class Item {
  constructor(el, winsize, docScroll) {
    this.winsize = winsize;
    this.docScroll = docScroll;
    // the .item element
    this.DOM = { el };
    // the inner image
    this.DOM.image = this.DOM.el.querySelector("#itemImg");
    this.renderedStyles = {
      // here we define which property will change as we scroll the page and the items is inside the viewport
      // in this case we will be translating the image on the y-axis
      // we interpolate between the previous and current value to achieve a smooth effect
      innerTranslationY: {
        // interpolated value
        previous: 0,
        // current value
        current: 0,
        // amount to interpolate
        ease: 0.1,
        // the maximum value to translate the image is set in a CSS variable (--overflow)

        maxValue: parseInt(
          getComputedStyle(this.DOM.image).getPropertyValue("--overflow"),
          10
        ),
        // current value setter
        // the value of the translation will be:
        // when the item's top value (relative to the viewport) equals the window's height (items just came into the viewport) the translation = minimum value (- maximum value)
        // when the item's top value (relative to the viewport) equals "-item's height" (item just exited the viewport) the translation = maximum value
        setValue: () => {
          const maxValue = this.renderedStyles.innerTranslationY.maxValue;
          const minValue = -1 * maxValue;
          return Math.max(
            Math.min(
              MathUtils.map(
                this.props.top - this.docScroll,
                winsize.height,
                -1 * this.props.height,
                minValue,
                maxValue
              ),
              maxValue
            ),
            minValue
          );
        },
      },
    };
    // set the initial values
    this.update();
    // use the IntersectionObserver API to check when the element is inside the viewport
    // only then the element translation will be updated
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => (this.isVisible = entry.intersectionRatio > 0)
      );
    });
    this.observer.observe(this.DOM.el);
    // init/bind events
    this.initEvents();
  }

  // FUNCTIONS

  update() {
    // gets the item's height and top (relative to the document)
    this.getSize();
    // sets the initial value (no interpolation)
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[
        key
      ].previous = this.renderedStyles[key].setValue();
    }
    // translate the image
    this.layout();
  }

  getSize() {
    const rect = this.DOM.el.getBoundingClientRect();
    this.props = {
      // item's height
      height: rect.height,
      // offset top relative to the document
      top: this.docScroll + rect.top,
    };
  }

  initEvents() {
    window.addEventListener("resize", () => this.resize());
  }

  resize() {
    // on resize rest sizes and update the translation value
    this.update();
  }

  render() {
    // update the current and interpolated values
    for (const key in this.renderedStyles) {
      this.renderedStyles[key].current = this.renderedStyles[key].setValue();
      this.renderedStyles[key].previous = MathUtils.lerp(
        this.renderedStyles[key].previous,
        this.renderedStyles[key].current,
        this.renderedStyles[key].ease
      );
    }
    // and translates the image
    this.layout();
  }

  layout() {
    // translates the image
    this.DOM.image.style.transform = `translate3d(0,${this.renderedStyles.innerTranslationY.previous}px,0)`;
  }
}

export default Item;
