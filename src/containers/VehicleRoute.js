import React from 'react';
import VehiclePage from '../components/VehiclePage';
import { CircularProgress } from 'material-ui';

import VehiclesAPI from '../services/api/VehiclesAPI';

class VehicleRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };

    this.onSubmit = this.onSubmit.bind(this);
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

  async onSubmit(event) {
    event.preventDefault();
    console.log('submit');

    let response = await VehiclesAPI.delete(this.state.vehicle.id);

    console.log(response);

  }

  render() {
    if (!this.state.loaded) {
      return         <CircularProgress />
    }

    return <VehiclePage
      vehicle={this.state.vehicle}
      id={this.state.vehicle.id} />;
  }
}

export default VehicleRoute;
