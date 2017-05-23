import React, { Component } from 'react';
import VehicleAddForm from '../components/VehicleAddForm';
import { ServerMethodAddVehicle } from '../constants/Constants';
import { Redirect } from 'react-router-dom';


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

    this.processForm = this.processForm.bind(this);
    this.changeVehicle = this.changeVehicle.bind(this);
    this.changeMaterialUIField = this.changeMaterialUIField.bind(this);
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
          onSubmit={this.processForm}
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