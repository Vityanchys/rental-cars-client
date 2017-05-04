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
  processForm(event) {
    event.preventDefault();

    // create a string for an HTTP body message
    const registrationNumber = encodeURIComponent(this.state.vehicle.registrationNumber);
    const brand = encodeURIComponent(this.state.vehicle.brand);
    const model = encodeURIComponent(this.state.vehicle.model);
    const year = encodeURIComponent(this.state.vehicle.year);
    const maintenanceDate = encodeURIComponent(this.state.vehicle.maintenanceDate);
    const gearboxType = encodeURIComponent(this.state.vehicle.gearboxType);
    const engineVolume = encodeURIComponent(this.state.vehicle.engineVolume);
    const bodyType = encodeURIComponent(this.state.vehicle.bodyType);
    const passengersCapacity = encodeURIComponent(this.state.vehicle.passengersCapacity);
    const loadCapacity = encodeURIComponent(this.state.vehicle.loadCapacity);
    const vehicleType = encodeURIComponent(this.state.vehicle.vehicleType);
    const pricePerDay = encodeURIComponent(this.state.vehicle.pricePerDay);
    const pricePerHour = encodeURIComponent(this.state.vehicle.pricePerHour);

    const formData = `registrationNumber=${registrationNumber}&brand=${brand}&model=${model}&year=${year}&maintenanceDate=${maintenanceDate}&gearboxType=${gearboxType}&engineVolume=${engineVolume}&bodyType=${bodyType}&passengersCapacity=${passengersCapacity}&loadCapacity=${loadCapacity}&vehicleType=${vehicleType}&pricePerDay=${pricePerDay}&pricePerHour=${pricePerHour}&`;

    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', ServerMethodAddVehicle);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success
        this.setState({
          errors: {},
          complete: true,
          id: xhr.response.id
        });

      } else {
        // failure
        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
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