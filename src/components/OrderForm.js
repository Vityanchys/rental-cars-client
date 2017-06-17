import React from 'react';
import { DatePicker, RaisedButton } from 'material-ui';

const OrderForm = ({
  orderDateTime,
  returnDateTime,
  onChange,
  onSubmit
 }) => {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
        <DatePicker
          floatingLabelText="Дата заказа"
          value={orderDateTime}
          onChange={(event, date) => {
            onChange("orderDateTime", date);
          }}
        />
        <DatePicker
          floatingLabelText="Дата возврата"
          value={returnDateTime}
          onChange={(event, date) => {
            onChange("returnDateTime", date);
          }}
        />
      </div>
      <RaisedButton label="Заказать" onClick={onSubmit} />
    </div>
  )
}
//

export default OrderForm;
