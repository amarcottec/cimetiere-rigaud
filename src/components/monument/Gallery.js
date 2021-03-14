
import React from "react";

class Gallery extends React.Component {


    constructor(props){
        super(props);
    }

  renderImage(imageUrl, index) {
    return (
      <div>
        <img src={imageUrl} key={index} alt='' />
      </div>
    );
  }

  render() {
    return (
      <div className="gallery">
        <div className="images">
          {this.props.imageUrls.map((imageUrl, index) => (this.renderImage(imageUrl, index)))}
        </div>
      </div>
    );
  }
}

export default Gallery;