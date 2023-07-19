import img1 from './../../../../assets/Image-living room.png';
import img2 from './../../../../assets/Mask Group (1).png';
import img3 from './../../../../assets/Mask Group.png';
import "./range.css";


const Range = () => {
    return (
        <div className='range'>
            <div className='container'>
                <div className='range-text'>
                    <h2>Browse The Range</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='range-content'>
                    <div className='range-box'>
                        <img src={img3} alt="" />
                        <h3>Dining</h3>
                    </div>
                    <div className='range-box'>
                        <img src={img2} alt="" />
                        <h3>Living</h3>
                    </div><div className='range-box'>
                        <img src={img1} alt="" />
                        <h3>Bedroom</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Range;