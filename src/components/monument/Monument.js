import React, { Component } from "react";
import "./Monument.scss";
import imgCarte from "../../images/carte-cimetiere.jpg";
import Title from "../Title";
import ImageMapper from "react-image-mapper";
import { MAP } from "../../imageMapData";

export default class Monument extends Component {
  
  getInitialState() {
    return { hoveredArea: null, msg: null, moveMsg: null };
  }

  clicked(area) {
    this.props.history.push("/monument/" + area.name);
  }

  render() {
    return (
      <>
        <section className="filter-container">
          <Title title="Photo des monuments funéraires" />
        </section>
        <article className="monument">
          <div className="img-container">
            <ImageMapper
              src={imgCarte}
              alt="monument"
              map={MAP}
              onClick={(area) => this.clicked(area)}
              lineWidth={3}
              width={1500}
              imgWidth={3600}
              strokeColor={"gray"}
              href="http://localhost:3000/monument/{slug}"
            />
          </div>
        </article>
      </>
    );
  }
}

export const MemoixzedMonument = React.memo(Monument);
