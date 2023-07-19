import { faCodeCompare, faHeartCircleBolt, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import img1 from "./../../../../assets/Images.png"
import img2 from "./../../../../assets/Images (1).png"
import img3 from "./../../../../assets/Images (2).png"
import img4 from "./../../../../assets/Images (3).png"
import img5 from "./../../../../assets/Images (4).png"
import img6 from "./../../../../assets/Images (5).png"
import img7 from "./../../../../assets/Images (6).png"
import img8 from "./../../../../assets/Images (7).png"
import "./products.css"

const Products = () => {
  return (
    <div className='products'>
        <div className="container">
            <h2>Our Products</h2>
            <div className='products-content'>
                <div className='products-box'>
                    <img src={img1} alt="" />
                    <h3>Syltherine</h3>
                    <p>Stylish cafe chair</p>
                    <p className='p-second'>Rp 2.500.000 <span>Rp 3.500.000</span></p>
                    <div className='box-hover'>
                        <a href="#">Add to cart</a>
                        <div className='box-act'>
                            <a href="#"><FontAwesomeIcon icon={faShare} /> Share</a>
                            <a href="#"><FontAwesomeIcon icon={faCodeCompare} /> Compare</a>
                            <a href="#"><FontAwesomeIcon icon={faHeartCircleBolt}/> Like</a>
                        </div>
                    </div>
                </div>
                <div className='products-box'>
                    <img src={img2} alt="" />
                    <h3>Syltherine</h3>
                    <p>Stylish cafe chair</p>
                    <p className='p-second'>Rp 2.500.000 <span>Rp 3.500.000</span></p>
                    <div className='box-hover'>
                        <a href="#">Add to cart</a>
                        <div className='box-act'>
                            <a href="#"><FontAwesomeIcon icon={faShare} /> Share</a>
                            <a href="#"><FontAwesomeIcon icon={faCodeCompare} /> Compare</a>
                            <a href="#"><FontAwesomeIcon icon={faHeartCircleBolt}/> Like</a>
                        </div>
                    </div>
                </div><div className='products-box'>
                    <img src={img3} alt="" />
                    <h3>Syltherine</h3>
                    <p>Stylish cafe chair</p>
                    <p className='p-second'>Rp 2.500.000 <span>Rp 3.500.000</span></p>
                    <div className='box-hover'>
                        <a href="#">Add to cart</a>
                        <div className='box-act'>
                            <a href="#"><FontAwesomeIcon icon={faShare} /> Share</a>
                            <a href="#"><FontAwesomeIcon icon={faCodeCompare} /> Compare</a>
                            <a href="#"><FontAwesomeIcon icon={faHeartCircleBolt}/> Like</a>
                        </div>
                    </div>
                </div><div className='products-box'>
                    <img src={img4} alt="" />
                    <h3>Syltherine</h3>
                    <p>Stylish cafe chair</p>
                    <p className='p-second'>Rp 2.500.000 <span>Rp 3.500.000</span></p>
                    <div className='box-hover'>
                        <a href="#">Add to cart</a>
                        <div className='box-act'>
                            <a href="#"><FontAwesomeIcon icon={faShare} /> Share</a>
                            <a href="#"><FontAwesomeIcon icon={faCodeCompare} /> Compare</a>
                            <a href="#"><FontAwesomeIcon icon={faHeartCircleBolt}/> Like</a>
                        </div>
                    </div>
                </div><div className='products-box'>
                    <img src={img5} alt="" />
                    <h3>Syltherine</h3>
                    <p>Stylish cafe chair</p>
                    <p className='p-second'>Rp 2.500.000 <span>Rp 3.500.000</span></p>
                    <div className='box-hover'>
                        <a href="#">Add to cart</a>
                        <div className='box-act'>
                            <a href="#"><FontAwesomeIcon icon={faShare} /> Share</a>
                            <a href="#"><FontAwesomeIcon icon={faCodeCompare} /> Compare</a>
                            <a href="#"><FontAwesomeIcon icon={faHeartCircleBolt}/> Like</a>
                        </div>
                    </div>
                </div><div className='products-box'>
                    <img src={img6} alt="" />
                    <h3>Syltherine</h3>
                    <p>Stylish cafe chair</p>
                    <p className='p-second'>Rp 2.500.000 <span>Rp 3.500.000</span></p>
                    <div className='box-hover'>
                        <a href="#">Add to cart</a>
                        <div className='box-act'>
                            <a href="#"><FontAwesomeIcon icon={faShare} /> Share</a>
                            <a href="#"><FontAwesomeIcon icon={faCodeCompare} /> Compare</a>
                            <a href="#"><FontAwesomeIcon icon={faHeartCircleBolt}/> Like</a>
                        </div>
                    </div>
                </div><div className='products-box'>
                    <img src={img7} alt="" />
                    <h3>Syltherine</h3>
                    <p>Stylish cafe chair</p>
                    <p className='p-second'>Rp 2.500.000 <span>Rp 3.500.000</span></p>
                    <div className='box-hover'>
                        <a href="#">Add to cart</a>
                        <div className='box-act'>
                            <a href="#"><FontAwesomeIcon icon={faShare} /> Share</a>
                            <a href="#"><FontAwesomeIcon icon={faCodeCompare} /> Compare</a>
                            <a href="#"><FontAwesomeIcon icon={faHeartCircleBolt}/> Like</a>
                        </div>
                    </div>
                </div><div className='products-box'>
                    <img src={img8} alt="" />
                    <h3>Syltherine</h3>
                    <p>Stylish cafe chair</p>
                    <p className='p-second'>Rp 2.500.000 <span>Rp 3.500.000</span></p>
                    <div className='box-hover'>
                        <a href="#">Add to cart</a>
                        <div className='box-act'>
                            <a href="#"><FontAwesomeIcon icon={faShare} /> Share</a>
                            <a href="#"><FontAwesomeIcon icon={faCodeCompare} /> Compare</a>
                            <a href="#"><FontAwesomeIcon icon={faHeartCircleBolt}/> Like</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='products-btn'>
                <a href="#">Show More</a>
            </div>
        </div>
    </div>
  )
}

export default Products;