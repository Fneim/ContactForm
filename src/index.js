import React from 'react';
import { render } from 'react-dom';
import {Grid} from "@material-ui/core";
import ContactForm from "./ContactForm";
import { Signup, Login } from './Authentication';
import "./main.css";

const App = () => (
  <Grid container spacing={8} className="contentContainer">
    <ContactForm xs={12} md={12} lg={12}/>
  </Grid>
);

render(<App />, document.getElementById('root'));
