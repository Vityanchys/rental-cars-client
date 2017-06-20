import React from 'react';
import InputMask from 'react-input-mask';

import { Card, CardText, TextField, RaisedButton, Divider, DatePicker, SelectField, MenuItem } from 'material-ui';

const VehicleAddForm = ({
  onSubmit,
  onChange,
  handleImageLoad,
  onMaterialFieldChange, //?
  errors,
  vehicle
}) => (

    <Card className="card">
      <CardText>
        <form action="/" onSubmit={onSubmit}>

          <h2 className="card-heading">Добавление Т/С</h2>
          <Divider />
          {errors.summary && <p className="error-message">{errors.summary}</p>}

          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <div>
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
                  name="mark"
                  errorText={errors.mark}
                  onChange={onChange}
                  value={vehicle.mark}
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
                  value={vehicle.lastTI}
                  errorText={errors.lastTI}
                  onChange={
                    (empt, payload) => {
                      let name = "lastTI"
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
                      let name = "gearboxType"
                      onMaterialFieldChange(name, payload)
                    }} >
                  <MenuItem value="Авто" primaryText="Авто" />
                  <MenuItem value="Ручная" primaryText="Ручная" />
                </SelectField>
              </div>
            </div>
            <div>
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
                      let name = "bodyType"
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
                  name="capacity"
                  errorText={errors.capacity}
                  onChange={onChange}
                  value={vehicle.capacity}
                />
              </div>

              <div>
                <TextField
                  floatingLabelText="Грузоподъёмность"
                  floatingLabelFixed={true}
                  name="carryingCapacity"
                  errorText={errors.carryingCapacity}
                  onChange={onChange}
                  value={vehicle.carryingCapacity}
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

              <RaisedButton
                label="Загрузить изображение"
                labelPosition="before"
                containerElement="label"
              >
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageLoad}
                  style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    width: '100%',
                    opacity: 0
                  }} />

              </RaisedButton>
              <RaisedButton type="submit" label="Добавить" primary />
            </div>
          </div>
        </form>
      </CardText>
    </Card>
  );

export default VehicleAddForm;