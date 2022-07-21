/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component, MouseEvent } from "react";

interface IProps {
  images: string[]
}
 
class Carousel extends Component<IProps> {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  handleIndexClick = (event: MouseEvent<HTMLElement>): void => {
    if (!(event.target instanceof HTMLElement)) {
      return;
    }
    if (event.target.dataset.index) {
      this.setState({
        active: +event.target.dataset.index,
      });
    }
  };
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="max-w-2xl mx-auto py-6 px-4 lg:max-w-5xl lg:grid lg:grid-cols-2">
        <img src={images[active]} alt="animal" className="pr-5 w-full h-full" />
        <div className="grid grid-cols-2 gap-y-6 gap-x-6">
          {images.length &&
            images.map((photo, index) => (
              <div
                key={photo}
                className="relative w-full aspect-square bg-gray-200 rounded-lg overflow-hidden hover:opacity-75"
              >
                <img
                  onClick={this.handleIndexClick}
                  src={photo}
                  className={index === active ? "active" : ""}
                  alt="animal thumbnail"
                  data-index={index}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
