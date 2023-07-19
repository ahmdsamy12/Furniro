import "./footer.css";

const FooterApp = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul className='footer-content'>
          <li className='footer-box'>
            <h3>Funiro.</h3>
            <p>400 University Drive Suite 200 Coral Gables,FL 33134 USA</p>
          </li>
          <li className="footer-box">
            <p>Links</p>
            <a href="">Home</a>
            <a href="">Shop</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </li>
          <li className='footer-box'>
            <p>Help</p>
            <a href="">Payment Options</a>
            <a href="">Returns</a>
            <a href="">Privacy Policies</a>
          </li>
          <li className='footer-box'>
            <p>Newsletter</p>
            <form>
              <input type="email" placeholder='Enter Your Email' />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </li>
        </ul>
        <hr />
        <p>2023 furino. All rights reverved</p>
      </div>
    </div>
  )
}

export default FooterApp;