import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css'
//import App from './App';
//import AlertEx4 from './Alerts/AlertEx4.js';
//import Badge from './Badges/Badge4.js';
//import BreadCrumb from './BreadCrumb/breadcrumb.js';
//import ButtonDropDown from './ButtonDropDown/buttondropdown.js';
//import ButtonGroup from './ButtonGroup/buttongroup.js';
//import Collapse from './Collapse/collapse.js';
//import Carousel from './Carousel/carousel.js';
//import DropDown from './DropDown/dropdown.js';
//import Form from './Form/form.js';
//import Layout from './Layout/layout.js';
//import InputGroup from './InputGroup/inputgroup.js';
//import ListGroup from './ListGroup/listgroup.js'
//import Modal  from './Modal/modal1.js'
import Navbar from './Navbar/navbar2.js'


ReactDOM.render(<Navbar />, document.getElementById('root'));
registerServiceWorker();
