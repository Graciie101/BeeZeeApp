import React, {FC} from 'react';
import Layout from 'components/global/layout';
import './styles.scss';
import { DatePicker } from 'antd';


//import * from 'react-form';
interface IProps {
  
};

export const BookUsNow: FC<IProps> = () =>  (
  <Layout>
    <div className = "booking-page">
  <div className="container">
  <form action="/action_page.php">
    <div className="row">
      <div className="col-25">
        <label htmlFor="fname">First Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="lname">Last Name</label>
      </div>
      <div className="col-75">
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="email">Email Address</label>
      </div>
      <div className="col-75">
        <input type="text" id="email" name="yourEmailAdress" placeholder="Your email address.."/>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="country">Location</label>
      </div>
      <div className="col-75">
        <select id="location" name="yourLocation">
          <option value="fort-hare">University of Fort Hare</option>
          <option value="alice">Alice Town</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="deco">Deco Option</label>
      </div>
      <div className="col-75">
        <select id="deco" name="yourDeco">
          <option value="pinklyCute">Pinkly Cute</option>
          <option value="romanticallyRed">Romantically Red</option>
          <option value="blueishSwagg">Blueish Swagg</option>
          <option value="prettyYellow">Pretty Yellow</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="subject">Preferable Deco Description</label>
      </div>
      <div className="col-75">
        <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>
      </div>
    </div>
    <div className="row">
      <div className="col-25">
        <label htmlFor="co">  <table>Time</table></label>
      </div>
      <div className="col-75">
        <select id="time" name="time">
          <option value="8am-12pm">8am-12am</option>
          <option value="1pm-4pm">1pm-4pm</option>
          <option value="5pm-8pm">5pm-8pm</option>
          <option value="5pm-8pm">8pm-7am</option>
        </select>
      </div>
    </div>
    <div className="row">
      <div className = "col-25">
        <label htmlFor="date">Date of Interest</label>
      </div>
    <div className = "col-75">
    <input type="date" {...DatePicker}/>
    </div>
    </div>
    <div className="row">
      <input type="submit" value="Submit"/>
    </div> 
  </form>
 </div>
 </div>
 </Layout>
);


export default BookUsNow;
