import { faClock, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainHead from '../../components/mainHeadPage/MainHead';
import MainFoot from '../../components/main-Foot/MainFoot';
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
        <MainHead tiltle='Contact' para='Contact'/>
        <div className="container">
            <div className='contact-text'>
                <h2>Get In Touch With Us</h2>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>
            <div className='contact-content'>
                <div className='contact-box'>
                    <div className="box-info">
                        <FontAwesomeIcon icon={faLocation} />
                        <div className='info-text'>
                            <h3>Address</h3>
                            <p>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                    </div>
                    <div className="box-info">
                        <FontAwesomeIcon icon={faPhone} />
                        <div className="info-text">
                            <h3>Phone</h3>
                            <p>Mobile: +(84) 546-6789 <br /> Hotline: +(84) 456-6789</p>
                        </div>
                    </div>
                    <div className="box-info">
                        <FontAwesomeIcon icon={faClock} />
                        <div className="info-text">
                            <h3>Working Time</h3>
                            <p>Monday-Friday: 9:00 - 22:00 <br /> Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>
                </div>
                <div className="contact-box">
                    <form>
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder='Abc'/>
                        <br />
                        <label htmlFor="email">Email Address</label>
                        <input type="email"  id="email"  placeholder='Abc@def.com'/>
                        <br />
                        <label htmlFor="sub">Subject</label>
                        <input type="text" id="sub" placeholder='This is an optional'/>
                        <br />
                        <label htmlFor="msg">Massage</label>
                        <textarea id="msg" >Hi! i’d like to ask about</textarea>
                        <br />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <MainFoot />
    </div>
  )
}

export default Contact;