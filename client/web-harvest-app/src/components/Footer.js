import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/*  Remove the container if you want to extend the Footer to full width.*/}
      
        {/* Footer  */}
        <footer
          className="text-center text-lg-start text-dark"
          style={{ backgroundColor: '#ECEFF1' }}
        >
          {/* Section: Social mediLink  */}
          <section
            className="d-flex justify-content-between p-4 text-white"
            style={{ backgroundColor: '#21D192' }}
          >
            {/*  Left  */}
            <div className="me-5">
              <span>Get connected with us on social networks:</span>
            </div>
            {/* Left  */}

            {/* Right */}
            <div>
              <Link to="" className="text-white me-4">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-google"></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link to="" className="text-white me-4">
                <i className="fab fa-github"></i>
              </Link>
            </div>
            {/* Right  */}
          </section>
          {/* <!-- Section: Social media --> */}

          {/* <!-- Section: Links  --> */}
          <section className="">
            <div className="container text-center text-md-start mt-5">
              {/* <!-- Grid row --> */}
              <div className="row mt-3">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  {/* <!-- Content --> */}
                  <h6 className="text-uppercase fw-bold">WebHarvest - Local Farmer's Online Market</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p>
                     WebHarvest connects local farmers to online markets, promoting fresh, sustainable produce, fostering community support, and enhancing access to farm-fresh goods.
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Products</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style=  {{ width:'60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p>
                    <Link to="#!" className="text-dark">
                      Best Deals
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      New Arrivals
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Best Sellers
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Deals of the Day
                    </Link>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Useful links</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style= {{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p>
                    <Link to="#!" className="text-dark">
                      Home
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Buy Product
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      About Us
                    </Link>
                  </p>
                  <p>
                    <Link to="#!" className="text-dark">
                      Help
                    </Link>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  {/* <!-- Links --> */}
                  <h6 className="text-uppercase fw-bold">Contact</h6>
                  <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }}
                  />
                  <p>
                    <i className="fas fa-home mr-3"></i> IT Branch, IIT Kaman.
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-3"></i> logic.lords@mail.com
                  </p>
                  <p>
                    <i className="fas fa-phone mr-3"></i> 212173314
                  </p>
                  <p>
                    <i className="fas fa-print mr-3"></i> 6969696969
                  </p>
                </div>
                {/* <!-- Grid column --> */}
              </div>
              {/* <!-- Grid row --> */}
            </div>
          </section>
          {/* <!-- Section: Links  --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3"
            style= {{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
          >
            © 2023 No copyright reserved.
            <Link className="text-dark" to="">
              Logic-lords.com
            </Link>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      
    </>
  );
}

export default Footer;
