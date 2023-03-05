import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CONSTANTS from '../../constants';
import CustomerDashboard from '../../components/CustomerDashboard/CustomerDashboard';
import CreatorDashboard from '../../components/CreatorDashboard/CreatorDashboard';
import Header from '../../components/Header/Header';

const Dashboard = (props) => {
  const { role, history, dataForContest } = props;
  console.log(props)
  
  // обработка случая, когда свойство role отсутствует, происходит перенаправление на страницу авторизации
  if (!role ) {
    return <Redirect to="/login" />; 
  }

  return (
    <div>
      <Header />
      {
        role === CONSTANTS.CUSTOMER
          ? <CustomerDashboard history={history} match={props.match} />
          : <CreatorDashboard history={history} match={props.match} />
      }
    </div>
  );
};

const mapStateToProps = (state) => state.userStore.data;

export default connect(mapStateToProps)(Dashboard);
