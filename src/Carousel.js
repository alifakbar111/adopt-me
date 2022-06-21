/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };
  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };
  handleIndexClick(event) {
    this.setState({
      active: +event.target.dataset.index,
    });
  }
  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.length &&
            images.map((photo, index) => (
              <img
                onClick={this.handleIndexClick}
                key={photo}
                src={photo}
                className={index === active ? "active" : ""}
                alt="animal thumbnail"
                data-index={index}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
