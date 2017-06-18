import { React, Component }  from 'react';
import { Link } from 'react-router-dom';
import { Card, RaisedButton } from 'material-ui';
import { AppBar, FlatButton } from 'material-ui';



class AboutCompanyPage extends Component {
  render() {
    return (
      <AppBar
        showMenuIconButton={false}
        title={
          <div style={{ fontSize: "small" }}>
            <div style={{ float: 'left'}}>
            <Link to="/aboutUs">
              <FlatButton label="
"  labelStyle={{ color: "white" , fontSize: 'small'}}/>
            </Link>
            </div>
            <div>
              © 2017
            </div>
          </div>
        }
      ></AppBar>
  );
  }
}

export default AboutCompanyPage;
