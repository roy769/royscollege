import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './components/Form';
import Table from './components/Table';

class App extends Component {

  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
        }
      });
    // console.log("App comp got: ", fields );
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form onChange={fields => this.onChange (fields) }/>
            <Table
              data = {[]}
                header = {[
                  {
                    name: "Specific Major",
                    prop: 'specificMajor',
                  },
                  {
                    name: "Desired Salary",
                    prop: 'desiredSalary',
                  },
                  {
                    name: "Specific College",
                    prop: 'specificCollege',
                  },
                ]}
              />
            </div>
          </MuiThemeProvider>
        );
      }
    }

export default App;
