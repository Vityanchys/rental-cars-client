import React from 'react';
import InputMask from 'react-input-mask';
import { SelectField, MenuItem, IconButton, TextField } from 'material-ui';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import { red500 } from 'material-ui/styles/colors';

const SearchPanel = ({
  currentSearchParams,
  searchParams,
  onSearchPanelChange
}) => (
    <div className='searchPanel'>

      {
        //Марка
      }
      <SelectField
        floatingLabelText="Марка"
        floatingLabelFixed={false}
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
          hintText={searchParams.minYear}
          style={{ width: "130px" }}
          onChange={(event) => {
            onSearchPanelChange("minYear", event.target.value);
          }}
        >
        <InputMask
          mask="9999"
          name="year"
          value={currentSearchParams.minYear  || ""}
          maskChar={null}
        />
        </TextField>
        <TextField
          value={currentSearchParams.maxYear || ""}
          hintText={searchParams.maxYear}
          style={{ width: "130px" }}
          onChange={(event) => {
            onSearchPanelChange("maxYear", event.target.value);
          }}
        >
        <InputMask
          mask="9999"
          name="year"
          value={currentSearchParams.maxYear  || ""}
          maskChar={null}
        />
        </TextField>
      </div>
      {
        //
      }

      {
        // Тип КПП
      }
      <br />
      <div className='searchPanelSelect' style={{ float: 'left' }}>
      <SelectField
        floatingLabelText="Тип КПП"
        floatingLabelFixed={false}
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
        // Тип Кузова
      }
      <br />
      <div className='searchPanelSelect' style={{ float: 'left' }}>
      <SelectField
        floatingLabelText="Тип Кузова"
        floatingLabelFixed={false}
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
      <div className='searchPanelItem' style={{ float: 'left' }}>
      <p style={{ height: '5px', marginBottom: '-5px', marginTop: '-3px' }}>Цена за час, USD:</p>
        <TextField
          floatingLabelText="От"
          hintText={searchParams.minPricePerHour}
          style={{ width: "130px" }}
          onChange={(event) => {
            onSearchPanelChange("minPricePerHour", event.target.value);
          }}  >
            <InputMask
              mask="9999"
              name="year"
              value={currentSearchParams.minPricePerHour  || ""}
              maskChar={null}
            />
        </TextField>
        <TextField
        floatingLabelText="До"
          hintText={searchParams.maxPricePerHour}
          style={{ width: "130px" }}
          onChange={(event) => {
            onSearchPanelChange("maxPricePerHour", event.target.value);
          }}    >
            <InputMask
              mask="9.999"
              name="year"
              value={currentSearchParams.maxPricePerHour  || ""}
              maskChar={null}
            />
        </TextField>
      </div>

      {
        //
      }

      {
        //Цена за день
      }
      <br />
      <div className='searchPanelItem' style={{ float: "left" }}>
      <p style={{ height: '5px', marginBottom: '-5px', marginTop: '-3px' }}>Цена за день, USD:</p>
          <TextField
            floatingLabelText="От"
            hintText={searchParams.minPricePerDay}
            style={{ width: "130px" }}
            onChange={(event) => {
              onSearchPanelChange("minPricePerDay", event.target.value);
            }}
            >
              <InputMask
                mask="9999"
                name="year"
                value={currentSearchParams.minPricePerDay  || ""}
                maskChar={null}
              />
          </TextField>
          <TextField
          floatingLabelText="До"
            value={currentSearchParams.maxPricePerDay || ""}
            hintText={searchParams.maxPricePerDay}
            style={{ width: "130px" }}
            onChange={(event) => {
              onSearchPanelChange("maxPricePerDay", event.target.value);
            }}
          >
            <InputMask
              mask="9999"
              name="year"
              value={currentSearchParams.maxPricePerDay  || ""}
              maskChar={null}
            />
        </TextField>
      </div>

      {
        //
      }


      {
        // Тип Т/С
      }
      <br />
      <div className='searchPanelSelect' style={{ float: 'left' }}>
      <SelectField
        floatingLabelText="Тип Т/С"
        floatingLabelFixed={false}
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
);

export default SearchPanel;
