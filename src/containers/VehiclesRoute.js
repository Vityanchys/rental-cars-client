import React from 'react';
import Vehicles from '../components/Vehicles';

import VehiclesAPI from '../services/api/VehiclesAPI';

class VehiclesRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    VehiclesAPI.getVehicles().then(
      vehicles => {
        this.setState({
          loaded: true,
          vehicles: vehicles
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      return <div>Not loaded</div>;
    }

    return <Vehicles vehicles={this.state.vehicles} />;
  }
}

export default VehiclesRoute;