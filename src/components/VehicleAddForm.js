import React from 'react';
import InputMask from 'react-input-mask';

import { Card, TextField, RaisedButton, Divider, DatePicker, SelectField, MenuItem } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const VehicleAddForm = ({
  onSubmit,
  onChange,
  onMaterialFieldChange, //?
  errors,
  vehicle
}) => (
    <Card>
      <form action="/" onSubmit={onSubmit}>

        <h2 className="card-heading">Добавление Т/С</h2>
        <Divider />

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div style={{float: "left", width: "50%"}}>
          <div>
            <TextField
              floatingLabelText="Регистрационный номер"
              floatingLabelFixed={true}
              errorText={errors.registrationNumber}
            >
              <InputMask
                mask="9999 aa-9"
                name="registrationNumber"
                onChange={onChange}
                value={vehicle.registrationNumber}
              />
            </TextField>
          </div>

          <div>
            <TextField
              floatingLabelText="Марка"
              floatingLabelFixed={true}
              name="brand"
              errorText={errors.brand}
              onChange={onChange}
              value={vehicle.brand}
            />
          </div>

          <div>
            <TextField
              floatingLabelText="Модель"
              floatingLabelFixed={true}
              name="model"
              errorText={errors.model}
              onChange={onChange}
              value={vehicle.model}
            />
          </div>

          <div>
            <TextField
              floatingLabelText="Год выпуска"
              floatingLabelFixed={true}
              errorText={errors.year}
            >
              <InputMask
                mask="9999"
                name="year"
                value={vehicle.year}
                onChange={onChange}
                maskChar={null}
              />
            </TextField>
          </div>

          <div>
            <DatePicker
              floatingLabelText="Дата Т/О"
              floatingLabelFixed={true}
              value={vehicle.maintenanceDate}
              errorText={errors.maintenanceDate}
              onChange={
                (empt, payload) => {
                  name = "maintenanceDate"
                  onMaterialFieldChange(name, payload)
                }}
            />
          </div>

          <div>
            <SelectField
              floatingLabelText="Тип КПП"
              floatingLabelFixed={true}
              value={vehicle.gearboxType}
              errorText={errors.gearboxType}
              onChange={
                (event, key, payload) => {
                  name = "gearboxType"
                  onMaterialFieldChange(name, payload)
                }} >
              <MenuItem value="Авто" primaryText="Авто" />
              <MenuItem value="Ручная" primaryText="Ручная" />
            </SelectField>
          </div>
        </div>

        <div style={{float: "right", width: "50%"}}>
          <div>
            <TextField
              floatingLabelText="Объём двигателя"
              floatingLabelFixed={true}
              name="engineVolume"
              errorText={errors.engineVolume}
              onChange={onChange}
              value={vehicle.engineVolume}
            />
          </div>

          <div>
            <SelectField
              floatingLabelText="Тип кузова"
              floatingLabelFixed={true}
              value={vehicle.bodyType}
              errorText={errors.bodyType}
              onChange={
                (event, key, payload) => {
                  name = "bodyType"
                  onMaterialFieldChange(name, payload)
                }} >
              <MenuItem value="Седан" primaryText="Седан" />
              <MenuItem value="Хэтчбэк" primaryText="Хэтчбэк" />
              <MenuItem value="Универсал" primaryText="Универсал" />
              <MenuItem value="Пикап" primaryText="Пикап" />
              <MenuItem value="Купе" primaryText="Купе" />
              <MenuItem value="Кабриолет" primaryText="Кабриолет" />
            </SelectField>
          </div>

          <div>
            <TextField
              floatingLabelText="Пассажировместимость"
              floatingLabelFixed={true}
              name="passengersCapacity"
              errorText={errors.passengersCapacity}
              onChange={onChange}
              value={vehicle.passengersCapacity}
            />
          </div>

          <div>
            <TextField
              floatingLabelText="Грузоподъёмность"
              floatingLabelFixed={true}
              name="loadCapacity"
              errorText={errors.loadCapacity}
              onChange={onChange}
              value={vehicle.loadCapacity}
            />
          </div>

          <div>
            <TextField
              floatingLabelText="Цена за сутки"
              floatingLabelFixed={true}
              name="pricePerDay"
              errorText={errors.pricePerDay}
              onChange={onChange}
              value={vehicle.pricePerDay}
            />
          </div>

          <div>
            <TextField
              floatingLabelText="Цена за час"
              floatingLabelFixed={true}
              name="pricePerHour"
              errorText={errors.pricePerHour}
              onChange={onChange}
              value={vehicle.pricePerHour}
            />
          </div>
        </div>

        <RaisedButton type="submit" label="Добавить" primary />

      </form>
    </Card>
  );

export default VehicleAddForm;