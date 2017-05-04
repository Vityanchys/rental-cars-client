import React, { Component } from 'react';
import VehiclesRoute from './VehiclesRoute';
import { CircularProgress } from 'material-ui';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  render() {
    if (this.state.loaded) {
      return (
        <div>
          <VehiclesRoute />
        </div>
      );
    } else {
      return (
        <CircularProgress />
      );
    }
  }
}

export default HomePage;