import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './components/Main';
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './style/StyleSheet.css'



ReactDOM.render(<BrowserRouter><MainComponent/></BrowserRouter>, document.getElementById('root'));
