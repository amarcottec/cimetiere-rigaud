import React, { Component } from "react";

const MonumentContext = React.createContext();

class MonumentProvider extends Component {
    state = {
      loading: true
    };

    componentDidMount() {
        this.setState({
          loading: false
        });
      }


      render() {
        return (
          <MonumentContext.Provider value={{ ...this.state}}>
            {this.props.children}
          </MonumentContext.Provider>
        );
      }
}


const MonumentConsumer = MonumentContext.Consumer;

export { MonumentProvider, MonumentConsumer, MonumentContext };


