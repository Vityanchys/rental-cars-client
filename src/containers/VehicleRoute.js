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

    return <VehiclePage
      image={this.state.vehicle.image}
      mark={this.state.vehicle.mark}
      model={this.state.vehicle.model}
      year={this.state.vehicle.year}
      gearboxType={this.state.vehicle.gearboxType}
      engineVolume={this.state.vehicle.engineVolume}
      bodyType={this.state.vehicle.bodyType}
      capacity={this.state.vehicle.capacity}
      carryingCapacity={this.state.vehicle.carryingCapacity}
      pricePerHour={this.state.vehicle.pricePerHour}
      pricePerDay={this.state.vehicle.pricePerDay}
      type={this.state.vehicle.type}
      status={this.state.vehicle.status}
      id={this.state.vehicle.id} />;
  }
}

export default VehicleRoute;