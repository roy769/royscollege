import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './components/Form';
import Table from './components/Table';

injectTapEventPlugin();

class App extends Component {

  state = {
    data: []
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            onSubmit={submission =>
              this.setState ({
                data: [...this.state.data, submission]
              })}
          />
            <Table
              data = {[this.state.data]}
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
                  }
                ]}
              />
            </div>
          </MuiThemeProvider>
        );
      }
    }

export default App;
