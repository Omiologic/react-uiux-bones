import React, { Component } from 'react';
import { connect } from 'react-redux';

require('./Root.stylesheet.scss');
const RootComponent = (props) => (
  <div id="app">
  	{ props.children && React.cloneElement(props.children) }
	</div>
)

export default RootComponent;
