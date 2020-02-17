import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Datee extends React.Component {
    state = {
      startDate: new Date()
    };
   
    handleChange = date => {
      this.setState({
        startDate: date
      });
    };
   
    render() {
      return (
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          
        />
      );
    }
  }
  export default Datee;