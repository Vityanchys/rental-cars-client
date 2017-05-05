import React, { Component } from 'react';
import Vehicles from '../components/Vehicles';
import { CircularProgress } from 'material-ui';
import VehiclesAPI from '../services/api/VehiclesAPI';
import Pagination from 'material-ui-pagination';

const SearchPanel = () => (
  <div style={{ float: "left", marginLeft: "50px", marginTop: "20px", position: "fixed" }}>
    SearchPanel to be designed
    </div>
)

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      vehicles: [],
      page: 1,
      pages: 0
    }
    this.onChangePage = this.onChangePage.bind(this);
  }

  componentDidMount() {
    VehiclesAPI.getVehicles().then(vehicles => {
      this.setState({
        loaded: true,
        vehicles: vehicles,
        pages: Math.ceil(vehicles.length / 3)
      });
    });
  }

  onChangePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  scrollUp() {
    var i = window.scrollY;
    var int = setInterval(function () {
      window.scrollTo(0, i);
      i -= 60;
      if (i < 0) clearInterval(int);
    }, 10);
  }

  render() {
    if (this.state.loaded) {
      this.scrollUp();
      return (
        <div>
          <SearchPanel />
          <Vehicles vehicles={this.state.vehicles.slice(this.state.page * 3 - 3, this.state.page * 3)} />
          {this.state.pages > 1 &&
            <Pagination
              total={this.state.pages}
              current={this.state.page}
              onChange={this.onChangePage}
              display={3}
            />
          }
        </div>
      );
    } else {
      return (
        <CircularProgress />
      );
    }
  }
}

export default HomePage;