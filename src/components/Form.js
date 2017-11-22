import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




export default class Form extends React.Component {
  state = {
    specificMajor: "",
    desiredSalary: "",
    specificCollege: ""
  };

    change = inmoo => {
      this.props.onChange({[inmoo.target.name]: inmoo.target.value });
      this.setState({
        [inmoo.target.name]: inmoo.target.value
      });
    };

    onSubmit = (inmoo) => {
      inmoo.preventDefault();
      // this.props.onSubmit(this.state);
      // console.log(this.state);
      this.setState ({
        specificMajor: "",
        desiredSalary: "",
        specificCollege: ""
      });
      this.props.onChange ({
        specificMajor: "",
        desiredSalary: "",
        specificCollege: ""
      });
    }

  render() {
    return (
      <form>
        <TextField
          hintText="engineering"
            floatingLabelText="Enter Major"
          value={this.state.specificMajor}
        onChange={inmoo => this.change(inmoo)}
      floatingLabelFixed={true}
    />
    <br />
        <TextField
          hintText="100,000"
            floatingLabelText="Enter Desired Salary"
          value={this.state.desiredSalary}
        onChange={inmoo => this.change(inmoo)}
      floatingLabelFixed={true}
    />
    <br />
        <TextField
          hintText="Yale"
            floatingLabelText="Enter College"
          value={this.state.specificCollege}
        onChange={inmoo => this.change(inmoo)}
      floatingLabelFixed={true}
    />
    <br />


        <RaisedButton label="Submit" onClick={inmoo => this.onSubmit(inmoo)} primary />
      </form>
    );
  }
}
