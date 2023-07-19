import React from 'react'
import img1 from "./../../../../assets/Rectangle 36.png"
import img2 from "./../../../../assets/Rectangle 37.png"
import img3 from "./../../../../assets/Rectangle 38.png"
import img4 from "./../../../../assets/Rectangle 39.png"
import img5 from "./../../../../assets/Rectangle 40.png"
import img6 from "./../../../../assets/Rectangle 41.png"
import img7 from "./../../../../assets/Rectangle 44.png"
import img8 from "./../../../../assets/Rectangle 43.png"
import img9 from "./../../../../assets/Rectangle 45.png"
import "./gallery.css";
import { motion } from "framer-motion";


const Gallery = () => {
    return (
        <div className="gallery">
            <div className="container">
                <div className='gallery-text'>
                    <p>Share your setup with</p>
                    <h2>#FuniroFurniture</h2>
                </div>
                <div className='gallery-content'>
                    <motion.div className="gallery-box" whileHover={{ scale: .8, rotate: 360 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -360,
                            borderRadius: "100%"
                        }}>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </motion.div>
                    <motion.div className="gallery-box" whileHover={{ scale: .8, rotate: 360 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -360,
                            borderRadius: "100%"
                        }}>
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                    </motion.div>
                    <motion.div className="gallery-box midle" whileHover={{ scale: .8, rotate: 360 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -360,
                            borderRadius: "100%"
                        }}>
                        <img src={img5} alt="" />
                    </motion.div>
                    <motion.div className="gallery-box" whileHover={{ scale: .8, rotate: 360 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -360,
                            borderRadius: "100%"
                        }}>
                        <img src={img6} alt="" />
                        <img src={img7} alt="" />
                    </motion.div>
                    <motion.div className="gallery-box" whileHover={{ scale: .8, rotate: 360 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -360,
                            borderRadius: "100%"
                        }}>
                        <img src={img8} alt="" />
                        <img src={img9} alt="" />
                    </motion.div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Gallery;