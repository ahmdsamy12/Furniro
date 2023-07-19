import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "./../../../../assets/Images.png"
import img2 from "./../../../../assets/Images (1).png"
import img3 from "./../../../../assets/Images (2).png"
import img4 from "./../../../../assets/Images (3).png"
import img5 from "./../../../../assets/Rectangle 24.png"
import "./rooms.css";

const Rooms = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div className='rooms'>
            <div className="container">
                <div className='rooms-content'>
                    <div className='rooms-box'>
                        <div className='box1-text'>
                        <h3>50+ Beautiful rooms inspiration</h3>
                        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
                        <a href="#">Explore More</a>
                        </div>
                    </div>
                    <div className='rooms-box'>
                        <img src={img5} alt="" />
                        <div className='box-text'>
                            <p>01 ----- Bed Room</p>
                            <h3>Inner Peace</h3>
                            <div className='text-a'>
                                <a href="#"><FontAwesomeIcon icon={faArrowRight} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="rooms-box">
                        <Slider {...settings}>
                            <div>
                                <img src={img1} alt="" />
                            </div>
                            <div>
                                <img src={img2} alt="" />
                            </div>
                            <div>
                                <img src={img3} alt="" />
                            </div>
                            <div>
                                <img src={img4} alt="" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms;