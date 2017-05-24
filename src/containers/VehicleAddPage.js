import React, { Component } from 'react';
import VehicleAddForm from '../components/VehicleAddForm';
import { Redirect } from 'react-router-dom';
import VehiclesAPI from '../services/api/VehiclesAPI';
import Validate from "../services/Validate";
import { Snackbar } from 'material-ui';

function convertVehicle(vehicle) {
  let newVehicle = Object.assign({}, vehicle);
  newVehicle.lastTI = newVehicle.lastTI.getTime();
  return newVehicle;
}

class VehicleAddPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errors: {},
      vehicle: {
        registrationNumber: '',
        mark: '',
        model: '',
        year: '',
        lastTI: '',
        gearboxType: '',
        engineVolume: '',
        bodyType: '',
        capacity: '',
        carryingCapacity: '',
        pricePerDay: '',
        pricePerHour: '',
        type: 'null', //?
        image: 'null', //will be fixed
        status: 'null'
      },
      complete: false,
      snackbar: false,
      snackbarMessage: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.changeVehicle = this.changeVehicle.bind(this);
    this.handleImageLoad = this.handleImageLoad.bind(this);
    this.changeMaterialUIField = this.changeMaterialUIField.bind(this);
        this.handleRequestCloseSnackbar = this.handleRequestCloseSnackbar.bind(this);
    this.handleSnackbarMessage = this.handleSnackbarMessage.bind(this);
  }

  handleRequestCloseSnackbar() {
    this.setState({
      snackbar: false,
      snackbarMessage: ""
    });
  };

  handleSnackbarMessage(message) {
    this.setState({
      snackbar: true,
      snackbarMessage: message
    });
  }

  async onSubmit(event) {
    event.preventDefault();

    const vehicle = this.state.vehicle;

    const checkResult = await Validate.checkVehicle(vehicle);
    if (!checkResult.success) {
      this.setState({ errors: checkResult.errors });
      return;
    }

    let response = await VehiclesAPI.createVehicle(convertVehicle(vehicle));

    if (response.status === 200) {
      response = await response.json();
      this.setState({
        errors: {},
        complete: true,
      });
    } else {
      response = response.json();
      const errors = response.errors ? response.errors : {};
      errors.summary = response.message;

      this.setState({
        errors
      });
    }
  }

  handleImageLoad(event) {
    const file = event.target.files[0];
    const vehicle = this.state.vehicle;
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      vehicle.image = reader.result;
      this.setState({ vehicle, snackbar:true, snackbarMessage:"Изображение загружено" });
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
        <Redirect to='/' />
      );
    } else {
      return (
        <div>
          <Snackbar
            open={this.state.snackbar}
            message={this.state.snackbarMessage}
            autoHideDuration={4000}
            onRequestClose={this.handleRequestCloseSnackbar}
          />
          <VehicleAddForm
            onSubmit={this.onSubmit}
            onChange={this.changeVehicle}
            handleImageLoad={this.handleImageLoad}
            onMaterialFieldChange={this.changeMaterialUIField} //?
            errors={this.state.errors}
            vehicle={this.state.vehicle}
          />
        </div>
      );
    }
  }
}

export default VehicleAddPage;