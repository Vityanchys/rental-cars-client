import React from 'react';
import VehiclePage from '../components/VehiclePage';
import { CircularProgress } from 'material-ui';

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

    handleDeleteCar = async (event) => {
    event.preventDefault();
    console.log('onDelete');

    let response = await VehiclesAPI.deleteVehicle(this.state.vehicle.id);

    console.log('sdfasf', response);

  }

  render() {
    if (!this.state.loaded) {
      return         <CircularProgress />
    }

    return <VehiclePage
      vehicle={this.state.vehicle}
      onDelete={this.handleDeleteCar}
      id={this.state.vehicle.id} />;
  }
}

export default VehicleRoute;
