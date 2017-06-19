import React, { Component } from 'react';
import Vehicles from '../components/Vehicles';
import { CircularProgress } from 'material-ui';
import VehiclesAPI from '../services/api/VehiclesAPI';
import Pagination from 'material-ui-pagination';
import SearchPanel from '../components/SearchPanel';

import { ActionSearch, ContentClear } from 'material-ui/svg-icons';
import { FloatingActionButton, Drawer, AppBar } from 'material-ui';

import Measure from 'react-measure'


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      vehicles: [], //Поле для хранения всех ТС
      currentVehicles: [],
      currentSearchParams: {//Текущие выбранные критерии поиска
        mark: null,
        minYear: null,
        maxYear: null,
        gearboxType: null,
        bodyType: null,
        minPricePerDay: null,
        maxPricePerDay: null,
        minPricePerHour: null,
        maxPricePerHour: null,
        type: null
      },
      searchParams: {}, //Все возможные критерии поиска
      page: 1,
      pages: 0,
      //панель поиска
      searchPanelDesktopOpen: false,

      dimensions: {
        width: -1,
        height: -1
      }
    }
    this.onChangePage = this.onChangePage.bind(this);
  }

  handleSearchPanelChange = (field, value) => {
    let currentSearchParams = this.state.currentSearchParams;
    currentSearchParams[field] = value;

    const currentVehicles = this.filter(this.state.vehicles, currentSearchParams);
    this.setState({ currentVehicles, currentSearchParams, pages: Math.ceil(currentVehicles.length / 3) })
    this.props.onMessage("Найденных результатов: " + currentVehicles.length)
  }

  filter = (vehicles, params) => {
    let result = [];

    vehicles.forEach(vehicle => {
      if (params.mark) {
        if (vehicle.mark.indexOf(params.mark) === -1) {
          return;
        }
      }

      if (params.minYear) {
        if (vehicle.year < params.minYear) {
          return;
        }
      }

      if (params.maxYear) {
        if (vehicle.year > params.maxYear) {
          return;
        }
      }

      if (params.gearboxType) {
        if (vehicle.gearboxType.indexOf(params.gearboxType) === -1) {
          return;
        }
      }
      if (params.bodyType) {
        if (vehicle.bodyType.indexOf(params.bodyType) === -1) {
          return;
        }
      }

      if (params.minPricePerDay) {
        if (vehicle.pricePerDay < params.minPricePerDay) {
          return;
        }
      }

      if (params.maxPricePerDay) {
        if (vehicle.pricePerDay > params.maxPricePerDay) {
          return;
        }
      }

      if (params.minPricePerHour) {
        if (vehicle.pricePerHour < params.minPricePerHour) {
          return;
        }
      }

      if (params.maxPricePerHour) {
        if (vehicle.pricePerHour > params.maxPricePerHour) {
          return;
        }
      }

      if (params.type) {
        if (vehicle.type.indexOf(params.type) === -1) {
          return;
        }
      }

      result.push(vehicle);
    });

    return result;
  }

  async componentDidMount() {
    const vehicles = await VehiclesAPI.getVehicles();

    let searchParams = {
      marks: [],
      minYear: new Date().getFullYear(),
      maxYear: 0,
      gearboxTypes: [],
      bodyTypes: [],
      minPricePerDay: vehicles[0].pricePerDay,
      maxPricePerDay: 0,
      minPricePerHour: vehicles[0].pricePerHour,
      maxPricePerHour: 0,
      types: []
    };

    vehicles.forEach(vehicle => {
      if (searchParams.marks.indexOf(vehicle.mark) === -1) {
        searchParams.marks.push(vehicle.mark);
      }

      if (vehicle.year > searchParams.maxYear) {
        searchParams.maxYear = vehicle.year;
      }

      if (vehicle.year < searchParams.minYear) {
        searchParams.minYear = vehicle.year;
      }
      if (searchParams.gearboxTypes.indexOf(vehicle.gearboxType) === -1) {
        searchParams.gearboxTypes.push(vehicle.gearboxType);
      }
      if (searchParams.bodyTypes.indexOf(vehicle.bodyType) === -1) {
        searchParams.bodyTypes.push(vehicle.bodyType);
      }
      if (vehicle.pricePerDay > searchParams.maxPricePerDay) {
        searchParams.maxPricePerDay = vehicle.pricePerDay;
      }

      if (vehicle.pricePerDay < searchParams.minPricePerDay) {
        searchParams.minPricePerDay = vehicle.pricePerDay;
      }
      if (vehicle.pricePerHour > searchParams.maxPricePerHour) {
        searchParams.maxPricePerHour = vehicle.pricePerHour;
      }

      if (vehicle.pricePerHour < searchParams.minPricePerHour) {
        searchParams.minPricePerHour = vehicle.pricePerHour;
      }
      if (searchParams.types.indexOf(vehicle.type) === -1) {
        searchParams.types.push(vehicle.type);
      }
    });

    this.setState({
      loaded: true,
      vehicles: vehicles,
      currentVehicles: vehicles,
      searchParams,
      pages: Math.ceil(vehicles.length / 3)
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

  handleSearchPanelDesktopTogle = () => this.setState({ searchPanelDesktopOpen: !this.state.searchPanelDesktopOpen });

  render() {
    const { width, height } = this.state.dimensions
    let searchPanel =
      <SearchPanel
        currentSearchParams={this.state.currentSearchParams}
        searchParams={this.state.searchParams}
        onSearchPanelChange={this.handleSearchPanelChange}
      />

    if (this.state.loaded) {
      this.scrollUp();
      return (
        <div>

          <Measure
            bounds
            onResize={(contentRect) => {
              this.setState({ dimensions: contentRect.bounds })
            }}
          >
            {({ measureRef }) =>
              <div ref={measureRef}>
                {
                  (width > 650) ?
                    <div className="search-panel-desktop">
                      <Drawer width={380} openSecondary={true} open={this.state.searchPanelDesktopOpen} >
                        <AppBar showMenuIconButton={false} title="Поиск" />
                        {searchPanel}
                      </Drawer>
                      <FloatingActionButton
                        style={{
                          margin: "0px",
                          top: "auto",
                          right: "20px",
                          bottom: "40px",
                          left: "auto",
                          position: "fixed",
                          zIndex: "66666666"
                        }}
                        onClick={this.handleSearchPanelDesktopTogle}
                        secondary={this.state.searchPanelDesktopOpen}
                      >
                        {this.state.searchPanelDesktopOpen ?
                          <ContentClear />
                          :
                          <ActionSearch />
                        }
                      </FloatingActionButton>
                    </div>
                    :
                    <div className="search-panel-mobile">
                      <Drawer width={380} docked={false} openSecondary={true} open={this.state.searchPanelDesktopOpen} >
                        {searchPanel}
                      </Drawer>
                      <FloatingActionButton
                        style={{
                          margin: "0px",
                          top: "auto",
                          right: "auto",
                          bottom: "40px",
                          left: "20px",
                          position: "fixed",
                          zIndex: "66666666"
                        }}
                        onClick={this.handleSearchPanelDesktopTogle}
                        secondary={this.state.searchPanelDesktopOpen}
                      >
                        {this.state.searchPanelDesktopOpen ?
                          <ContentClear />
                          :
                          <ActionSearch />
                        }
                      </FloatingActionButton>
                    </div>
                }
              </div>
            }
          </Measure>

          {this.state.currentVehicles ?
            <Vehicles vehicles={this.state.currentVehicles.slice(this.state.page * 3 - 3, this.state.page * 3)} />
            :
            <h2>Ничего не найдено</h2>
          }
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
