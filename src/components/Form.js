import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class Form extends React.Component {
  state = {
    specificMajor: "",
    specificMajorError: "",
    desiredSalary: "",
    desiredSalaryError: "",
    specificCollege: "",
    specificCollegeError: ""
  };

    change = inmoo => {
    //  this.props.onChange({[inmoo.target.name]: inmoo.target.value });
      this.setState({
        [inmoo.target.name]: inmoo.target.value
      });
    };

    validate = () => {
      let isError = false;
        const errors = {
          specificMajorError: "",
          desiredSalaryError: "",
          specificCollegeError: ""
        };

      if (this.state.specificMajor.length < 5)  {
        isError = true;
        errors.specificMajor = "No abbreviations please";
      }
      if (this.state.specificCollege.length < 2)  {
        isError = true;
        errors.specificCollege = "Search requires more than 2 letters";
      }
      if (this.state.desiredSalary.length < 4)  {
        isError = true;
        errors.desiredSalary = "Aim higher";
      }

        this.setState({
          ...this.state,
          ...errors
        });

      return isError;
    };

    onSubmit = inmoo => {
      inmoo.preventDefault();
      const err = this.validate();
        if (!err) {
          this.props.onSubmit(this.state);
          //clear form
          this.setState ({
            specificMajor: "",
            specificMajorError: "",
            desiredSalary: "",
            desiredSalaryError: "",
            specificCollege: "",
            specificCollegeError: ""
          });
      }
    };

  render() {
    return (
      <form>
        <TextField
          name = "specificMajor"
          hintText="Engineering"
            floatingLabelText="Enter Major"
          value={this.state.specificMajor}
      onChange={inmoo =>this.change(inmoo)}
    errorText={this.state.specificMajor}
  floatingLabelFixed
    />
    <br />
        <TextField
          name = "desiredSalary"
          hintText="100,000"
            floatingLabelText="Enter Desired Salary"
           value={this.state.desiredSalary}
        onChange={inmoo =>this.change(inmoo)}
    errorText={this.state.desiredSalary}
  floatingLabelFixed
    />
    <br />
        <TextField
          name = "specificCollege"
          hintText="Yale"
            floatingLabelText="Enter College"
          value={this.state.specificCollege}
        onChange={inmoo =>this.change(inmoo)}
    errorText={this.state.specificCollege}
  floatingLabelFixed
    />
    <br />


        <RaisedButton label="Submit" onClick={inmoo => this.onSubmit(inmoo)} primary />
      </form>
    );
  }
}
