const Header = () => {
  return (
    <>
      {" "}
      <header className="p-2 text-bg-white header">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-dark headerText">
                  #
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-dark headerText headerName">
                  Name
                </a>
              </li>
            </ul>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-dark headerText headerName">
                  Price
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-dark headerText headerName">
                  1h%
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-dark headerText headerName">
                  24h%
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-dark headerText headerName">
                  7d%
                </a>
              </li>
            </ul>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-dark headerText">
                  MarketCap
                </a>
              </li>
            </ul>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-dark headerText headerName">
                  Volume(24h)
                </a>
              </li>
            </ul>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-dark headerText">
                  Circulating Supply
                </a>
              </li>
            </ul>
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-dark headerText">
                  Last 7 Days
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <hr />
    </>
  );
};
export default Header;
