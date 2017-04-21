import React from 'react';
import VehiclePage from '../components/VehiclePage';

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

    return <VehiclePage image={this.state.vehicle.image} name={this.state.vehicle.name} cost={this.state.vehicle.cost} id={this.state.vehicle.id} />;
  }
}

export default VehicleRoute;