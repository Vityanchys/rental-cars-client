import  React, { Component }  from 'react';



class Contacts extends Component {
  render() {
    return (
      <div className='aboutCompany'>
        <h2>Контакты</h2>
        <div className='contacts'>
          Email: rental.cars@gmail.com
          <br />
          Телефон тех. поддержки: +3752910110213
          <br />
          Телефон для справок: +375291233212
          <br />
          Телефон по поводу сотрудничества и рекламы: +375293211232
        </div>
      </div>
  );
  }
}

export default Contacts;
