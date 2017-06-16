import React, { Component } from 'react';
import Vehicles from '../components/Vehicles';
import { CircularProgress } from 'material-ui';
import VehiclesAPI from '../services/api/VehiclesAPI';
import Pagination from 'material-ui-pagination';

//
import { SelectField, MenuItem, IconButton, TextField } from 'material-ui';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import { red500 } from 'material-ui/styles/colors';

const SearchPanel = ({
  currentSearchParams,
  searchParams,
  onSearchPanelChange
}) => (
    <div style={{ float: "left", marginLeft: "50px", marginTop: "20px", position: "fixed" }}>

      {
        //Марка
      }
      <SelectField
        floatingLabelText="Марка"
        floatingLabelFixed={true}
        value={currentSearchParams.mark}
        onChange={
          (event, key, payload) => {
            onSearchPanelChange("mark", payload);
          }} >
        {
          searchParams.marks.map(mark => {
            return <MenuItem key={mark} value={mark} primaryText={mark} />
          })
        }
      </SelectField>
      <IconButton
        onClick={() => { onSearchPanelChange("mark", null) }}
      >
        <ClearIcon
          hoverColor={red500}
        />
      </IconButton>

      {
        //
      }

      {
        //Год
      }
      <br />
      <div style={{ float: "left" }}>
        <TextField
          value={currentSearchParams.minYear || ""}
          hintText={searchParams.minYear}
          style={{ width: "130px" }}
          onChange={(event) => {
            onSearchPanelChange("minYear", event.target.value);
          }}
        />
        <TextField
          value={currentSearchParams.maxYear || ""}
          hintText={searchParams.maxYear}
          style={{ width: "130px" }}
          onChange={(event) => {
            onSearchPanelChange("maxYear", event.target.value);
          }}
        />
      </div>
      {
        //
      }

      {
        // Тип КПП
      }
      <br />
      <div style={{ float: 'left' }}>
      <SelectField
        floatingLabelText="Тип КПП"
        floatingLabelFixed={true}
        value={currentSearchParams.gearboxType}
        onChange={
          (event, key, payload) => {
            onSearchPanelChange("gearboxType", payload);
          }} >
        {
          searchParams.gearboxTypes.map(gearboxType => {
            return <MenuItem key={gearboxType} value={gearboxType} primaryText={gearboxType} />
          })
        }
        </SelectField>
        <IconButton
          onClick={() => { onSearchPanelChange("gearboxType", null) }}
        >
          <ClearIcon
            hoverColor={red500}
          />
        </IconButton>
      </div>
      {
        //
      }

      {
        // Тип КПП
      }
      <br />
      <div style={{ float: 'left' }}>
      <SelectField
        floatingLabelText="Тип Кузова"
        floatingLabelFixed={true}
          value={currentSearchParams.bodyType}
        onChange={
          (event, key, payload) => {
            onSearchPanelChange("bodyType", payload);
          }} >
        {
          searchParams.bodyTypes.map(bodyType => {
            return <MenuItem key={bodyType} value={bodyType} primaryText={bodyType} />
          })
        }
        </SelectField>
        <IconButton
          onClick={() => { onSearchPanelChange("bodyType", null) }}
        >
          <ClearIcon
            hoverColor={red500}
          />
        </IconButton>
      </div>

      {
        //
      }


      {
        //Цена за час
      }
      <br />
      <div style={{ float: "left" }}>
      Цена за час
      <br />
        <TextField
          floatingLabelText="От"
          value={currentSearchParams.minPricePerHour || ""}
          hintText={searchParams.minPricePerHour}
          style={{ width: "130px" }}
          onChange={(event) => {
            onSearchPanelChange("minPricePerHour", event.target.value);
          }}
        />
        <TextField
        floatingLabelText="До"
          value={currentSearchParams.maxPricePerHour || ""}
          hintText={searchParams.maxPricePerHour}
          style={{ width: "130px" }}
          onChange={(event) => {
            onSearchPanelChange("maxPricePerHour", event.target.value);
          }}
        />
      </div>

      {
        //
      }

      {
        //Цена за день
      }
      <br />
      <div style={{ float: "left" }}>
      Цена за день
      <br />
        <TextField
          floatingLabelText="От"
          value={currentSearchParams.minPricePerDay || ""}
          hintText={searchParams.minPricePerDay}
          style={{ width: "130px" }}
          onChange={(event) => {
            onSearchPanelChange("minPricePerDay", event.target.value);
          }}
        />
        <TextField
        floatingLabelText="До"
          value={currentSearchParams.maxPricePerDay || ""}
          hintText={searchParams.maxPricePerDay}
          style={{ width: "130px" }}
          onChange={(event) => {
            onSearchPanelChange("maxPricePerDay", event.target.value);
          }}
        />
      </div>

      {
        //
      }


      {
        // Тип КПП
      }
      <br />
      <div style={{ float: 'left' }}>
      <SelectField
        floatingLabelText="Тип Т/С"
        floatingLabelFixed={true}
        value={currentSearchParams.type}
        onChange={
          (event, key, payload) => {
            onSearchPanelChange("type", payload);
          }} >
        {
          searchParams.types.map(type => {
            return <MenuItem key={type} value={type} primaryText={type} />
          })
        }
        </SelectField>
        <IconButton
          onClick={() => { onSearchPanelChange("type", null) }}
        >
          <ClearIcon
            hoverColor={red500}
          />
        </IconButton>
      </div>

    </div>
  )
//

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
      pages: 0
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
      bodyTypes : [],
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

  render() {
    if (this.state.loaded) {
      this.scrollUp();
      return (
        <div>
          <SearchPanel
            currentSearchParams={this.state.currentSearchParams}
            searchParams={this.state.searchParams}
            onSearchPanelChange={this.handleSearchPanelChange}
          />
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
