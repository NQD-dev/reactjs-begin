import React from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

class OuterClickExample extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { isOpen: false };
      this.toggleContainer = React.createRef();
  
      this.onClickHandler = this.onClickHandler.bind(this);
      this.onClickOutsideHandler = this.onClickOutsideHandler.bind(this);
    }
  
    componentDidMount() {
      window.addEventListener('click', this.onClickOutsideHandler);
      console.log("a");
    }
  
    componentWillUnmount() {
      window.removeEventListener('click', this.onClickOutsideHandler);
      console.log("b");
    }
  
    onClickHandler() {
      this.setState(currentState => ({
        isOpen: !currentState.isOpen
      }));
    }
  
    onClickOutsideHandler(event) {
      if (this.state.isOpen && !this.toggleContainer.current.contains(event.target)) {
        this.setState({ isOpen: false });
      }
    }
  
    render() {
      return (
        <div ref={this.toggleContainer}>
          <button onClick={this.onClickHandler}>Select an option</button>
          {this.state.isOpen && (
            <ul>
              <li>Option 1</li>
              <li>Option 2</li>
              <li>Option 3</li>
            </ul>
          )}
          <Router>
              
            <Route path="/">
                <Home/>
            </Route>
           
          </Router>
        </div>
      );
    }
  }

  function Home() {
    return <h2>Home</h2>;
  }
  

  export default OuterClickExample