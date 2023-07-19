import { faDashboard, faLadderWater, faMailBulk, faShop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./main-foot.css"

const MainFoot = () => {
  return (
    <div className="main-foot">
        <ul className="foot-content">
            <li className='foot-box'>
                <FontAwesomeIcon icon={faShop} />
                <div className='foot-text'>
                    <h3>High Quality</h3>
                    <p>crafted from top materials</p>
                </div>
            </li>
            <li className="foot-box">
                <FontAwesomeIcon icon={faLadderWater} />
                <div className="foot-text">
                    <h3>Warranty Protection</h3>
                    <p>Over 2 years</p>
                </div>
            </li>
            <li className="foot-box">
                <FontAwesomeIcon icon={faMailBulk} />
                <div className="foot-text">
                    <h3>Free Shipping</h3>
                    <p>Order over 150 $</p>
                </div>
            </li>
            <li className="foot-box">
                <FontAwesomeIcon icon={faDashboard} />
                <div className="foot-text">
                    <h3>24 / 7 Support</h3>
                    <p>Dedicated support</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default MainFoot;