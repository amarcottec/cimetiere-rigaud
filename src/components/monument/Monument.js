import React, { Component } from "react";
import "./Monument.scss";
import imgCarte from "../../images/carte-cimetiere.jpg";
import Title from "../Title";
import ImageMapper from "react-image-mapper";
import { MAP } from "../../imageMapData";



export default class Monument extends Component {
   
  constructor(props){
       super(props);
       this.state = 
       {  
          width : 0
       };
       this.updateWindowDimension = this.updateWindowDimension.bind(this);
   }
   

   componentDidMount() {
    this.updateWindowDimension();
    window.addEventListener('resize', this.updateWindowDimension);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimension);
  }
   
   updateWindowDimension(){
       this.setState({width: window.innerWidth})
   }
    
  getInitialState() {
    return { hoveredArea: null, msg: null, moveMsg: null, numberClick: 0 };
  }

  clicked(area) {
    let imgNumber  = Math.floor(Math.random() * 370)
    this.props.history.push("/monument/" + imgNumber.toString());
  }

  enterArea(area) {
		this.setState({
			hoveredArea: area
		});
  }
  
	leaveArea(area) {
		this.setState({
			hoveredArea: null
		});
  }
  
  getTipPosition(area) {
    console.log(area);

    return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
	}

  
  render() {
    
    const width = this.state.width;
   
    
    return (
      <>
        <section className="filter-container">
          <Title title="Photo des monuments funéraires" />
        </section>
        <article className="monument">
          <div  className="img-container">
            <ImageMapper
              src={imgCarte}
              alt="monument"
              map={MAP}
              onClick={(area) => this.clicked(area)}
              onMouseEnter={area => this.enterArea(area)}
							onMouseLeave={area => this.leaveArea(area)}
              lineWidth={3}
              width={width}
              imgWidth={3600}
            />
          </div>
        </article>
      </>
    );
  }
}

export const MemoixzedMonument = React.memo(Monument);
