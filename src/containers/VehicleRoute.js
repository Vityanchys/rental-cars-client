import React from 'react';
import Vehicle from '../components/Vehicle';

import VehiclesAPI from '../services/api/VehiclesAPI';

class VehicleRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
  }

  componentDidMount() {
    VehiclesAPI.getVehicle(this.props.match.params.id).then(
      vehicle => {
        this.setState({
          loaded: true,
          vehicle: vehicle
        });
      });
  }

  render() {
    if (!this.state.loaded) {
      return <div>Not loaded</div>;
    }

    return <Vehicle name={this.vehicle.name} cost={this.vehicle.cost} />;
  }
}

export default VehicleRoute;