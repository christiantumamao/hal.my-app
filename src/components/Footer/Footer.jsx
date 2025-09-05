import "./Footer.css";

function Footer(){

  return(
    <footer className="footer">
      <div className="footer-top">
        <div className="socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
        </div>
        <div className="con-info">
          <p>urdaneta city</p>
          <p>
             <i className="fas fa-phone"></i>09277043559
               &nbsp; | &nbsp; 
             <i className="fas fa-envelope"></i> info@gmail.com
          </p>
        </div>
        <div className="footer-logo">
          <h2>F/zone</h2>
        </div>
      </div>
      <div className="bottom">
      <p>&copy; {new Date().getFullYear()} F3 Zone</p>
      </div>
      
    </footer>
  );

}

export default Footer;