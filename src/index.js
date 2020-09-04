import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Function component
// const App = () => {
//   // Determine current month & location
//   // Based on props (month & location), it desplay SeasonDisplay

//   // Current location - Geolocation API
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position), // success callback - get latitude
//     (err) => console.log(err) // fail callback
//   );
  
//   return (
//     <div> 
//       <SeasonDisplay />
//     </div>
//   );
// };

// Class component
class App extends React.Component {
  // constructor(props) {
  //   super(props); // referencing to the parent constructor function 
  //   this.state = { lat: null, errorMessage: '' };

  //   window.navigator.geolocation.getCurrentPosition(
  //     position => {
  //       // setState to update state - function
  //       this.setState({ lat: position.coords.latitude });

  //       // THIS IS BAD
  //       // this.state.lat = position.coords.latitiude
  //     },
  //     err => {
  //       this.setState({ errorMessage: err.message });
  //     }
  //   );

  // }

  state = { lat: null, errorMessage: ''};

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      // return <div>Latitude: {this.state.lat}</div>
      // Passing state as a prop
      return <SeasonDisplay lat={this.state.lat} />
    }

    // return <div>Loading</div>
    return <Spinner message="Please accept location request" />;
  // );
  }

  render() {
    // BAD PRACTICE TO PUT INITIALIZE REQUEST INSIDE RENDER METHOD BECAUSE IT FREQUNETLY BEING CALLED

    // window.navigator.geolocation.getCurrentPosition(
    //   position => console.log(position),
    //   err => console.log(err)
    // );

    // return (
    // <div>
    //   Latitude: {this.state.lat}
    //   <br/>
    //   Error: {this.state.errorMessage}
    // </div>
    
    return(
      <div className="border red">
        {this.renderContent()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
