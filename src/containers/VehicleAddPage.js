import React, { Component } from 'react';
import VehicleAddForm from '../components/VehicleAddForm';
import { ServerMethodAddVehicle } from '../constants/Constants';
import { Redirect } from 'react-router-dom';
import VehiclesAPI from '../services/api/VehiclesAPI';


class VehicleAddPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      vehicle: {
        registrationNumber: '',
        brand: '',
        model: '',
        year: '',
        maintenanceDate: '',
        gearboxType: '',
        engineVolume: '',
        bodyType: '',
        passengersCapacity: '',
        loadCapacity: '',
        vehicleType: '',
        pricePerDay: '',
        pricePerHour: ''
      },
      complete: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.changeVehicle = this.changeVehicle.bind(this);
    this.changeMaterialUIField = this.changeMaterialUIField.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    const vehicle = this.state.vehicle;

    const response = await VehiclesAPI.createVehicle(vehicle);

    if (response.status === 200) {
      response = await JSON.stringify(response);
      this.setState({
        errors: {},
        complete: true,
        id: response.id
      });
    } else {
      response = await JSON.stringify(response);
      const errors = response.errors ? response.errors : {};
      errors.summary = response.message;

      this.setState({
        errors
      });
    }
  }

  //@param {object} event - the JavaScript event object
  changeVehicle(event) {
    const field = event.target.name;
    const vehicle = this.state.vehicle;
    vehicle[field] = event.target.value;

    this.setState({
      vehicle
    });
  }

  //Bad solution
  changeMaterialUIField(name, payload) {
    const vehicle = this.state.vehicle;
    vehicle[name] = payload;

    this.setState({
      vehicle
    });
  }

  render() {
    if (this.state.complete) {
      return (
        <Redirect to={'vehicles/' + this.state.id} />
      );
    } else {
      return (
        <VehicleAddForm
          onSubmit={this.onSubmit}
          onChange={this.changeVehicle}
          onMaterialFieldChange={this.changeMaterialUIField} //?
          errors={this.state.errors}
          vehicle={this.state.vehicle}
        />
      );
    }
  }
}

export default VehicleAddPage;