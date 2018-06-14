import React from 'react';
import { Grid, TextField, Paper, Button} from '@material-ui/core';
import "./main.css";
import fetch from 'node-fetch';

const formStyles = {
  paddingTop:"15%"
};

const msgStyles = {
  height: "100px"
};

export default class ContactForm extends React.Component{
  render() {
    return (
      <div className="contentContainer" style={formStyles}>
        <Grid container spacing={16}>
          <Grid item xs={12} lg={12}>
            <Paper>
              <TextField id="name" type="text" placeholder="Name" />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={16} >
          <Grid item xs={12} lg={12}>
            <Paper>
              <TextField id="email" type="text" placeholder="jane@gmail.com" />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={16}>
          <Grid item xs={12} lg={12}>
            <Paper>
              <TextField id="msg" type="text" placeholder="message" />
            </Paper>
          </Grid>
        </Grid>

        <Grid container spacing={16}>
          <Grid id="btnContainer" item lg={12}>
            <Button id="submitBtn" onClick={this.props.onSubmit} >Send</Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

class ProcessForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { processed: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState = {processed: true};
    const data = new FormData(e.target);

    fetch("/submit", {
      method: "POST",
      body: data
    })
  }

  render() {
    return <ContactForm onSubmit={this.handleSubmit} />
  }
}
