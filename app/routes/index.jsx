import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './Home/Home';
import Root from './Root/Root';


/* -----------------    COMPONENT     ------------------ */

const Routes = (props) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={props.initializeData}>
      <IndexRoute component={Home} />
    </Route>    
  </Router>
);

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(Routes);
