import React from 'react';
import { Redirect } from 'react-router-dom';
import VehiclePage from '../components/VehiclePage';
import { CircularProgress, Dialog, FlatButton } from 'material-ui';

import VehiclesAPI from '../services/api/VehiclesAPI';

class VehicleRoute extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, openDeleteDialog: false };

  }

  componentDidMount() {
    VehiclesAPI.getVehicle(this.props.match.params.id).then(
      vehicle => {
        this.setState({
          loaded: true,
          vehicle: vehicle,
          deleted: false
        });
      });
  }

  handleDeleteCar = () => {
    this.setState({ openDeleteDialog: true })

    //let response = await VehiclesAPI.deleteVehicle(this.state.vehicle.id);
  }

  deleteCar = async () => {
    this.setState({ openDeleteDialog: false });
    let response = await VehiclesAPI.deleteVehicle(this.state.vehicle.id);
    if (response.status === 200) {
      this.setState({ deleted: true, });
      this.props.onMessage("Транспортное средство успешно удалено.");
    } else {
      this.props.onMessage("Ошибка удаления.");
    }
  }


  handleOpen = () => {
    this.setState({ openDeleteDialog: true });
  };

  handleClose = () => {
    this.setState({ openDeleteDialog: false });
  };

  render() {
    if (this.state.deleted) {
      return <Redirect to="/" />
    }
    if (!this.state.loaded) {
      return <CircularProgress />
    }

    return (
      <div>
        <Dialog
          title="Подтверждение удаления"
          actions={
            <div>
              <FlatButton
                label="Отмена"
                primary={true}
                onTouchTap={this.handleClose}
              />
              <FlatButton
                label="Удалить"
                primary={true}
                onTouchTap={this.deleteCar}
              />
            </div>
          }
          modal={false}
          open={this.state.openDeleteDialog}
          onRequestClose={this.handleClose}
        >
          Действительно удалить данное транспортное средство?
        </Dialog>
        <VehiclePage
          vehicle={this.state.vehicle}
          onDelete={this.handleDeleteCar}
          id={this.state.vehicle.id} />;
      </div >
    )
  }
}

export default VehicleRoute;
