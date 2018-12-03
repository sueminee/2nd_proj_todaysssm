import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Modal, Stack, Scene, Actions } from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';
import Login from './routes/Login';
import Signup from './routes/Signup';
import TermsOfService from './routes/TermsOfService';
import PrivacyPolicy from './routes/PrivacyPolicy';
import ForgotPassword from './routes/ForgotPassword';
import SuccessPage from './routes/SuccessPage';
import ErrorPage from './routes/ErrorPage';
import Missions from './routes/Missions';
import MissionDetail from './routes/MissionDetail';
import Delivery from './routes/Delivery';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
  }

  async componentWillMount() {
    SplashScreen.hide();
    // let res = await AsyncStorage.getItem('token');
    // this.setState({
    //   token: res
    // })
  }

  render() {
    return (
      <Router>
        <Modal hideNavBar={true}>
          <Stack hideNavBar={true} initial={!this.state.token}>
            <Scene key='login' component={Login} />
            <Scene key='signup' component={Signup} />
            <Scene key='termsOfService' component={TermsOfService} />
            <Scene key='privacyPolicy' component={PrivacyPolicy} />
            <Scene key='forgotPassword' component={ForgotPassword} />
            <Scene key='successPage' component={SuccessPage} />
            <Scene key='errorPage' component={ErrorPage} />
          </Stack>
          <Stack hideNavBar={true} panHandlers={null} initial={this.state.token}>
            <Scene key='missions' component={Missions} />
            <Scene key='missionDetail' component={MissionDetail} />
            <Scene key='delivery' component={Delivery} />
          </Stack>
        </Modal>
      </Router>
    );
  }
}
