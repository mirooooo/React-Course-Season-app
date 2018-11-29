import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {};
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

export default App;

ReactDOM.render(<App />, document.querySelector("#root"));
