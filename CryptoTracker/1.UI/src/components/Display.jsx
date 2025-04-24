import { useEffect, useState } from "react";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const Display = ({ item }) => {
  const [liveData, setLiveData] = useState(item);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) => ({
        ...prev,
        price: `$${(Math.random() * 999940.5).toFixed(2)}`,
        oneH: `${(Math.random() * 2 - 1).toFixed(2)}%`,
        oneD: `${(Math.random() * 5 - 1).toFixed(2)}%`,
        sevenD: `${(Math.random() * 15 - 2).toFixed(2)}%`,
        market: `$${(Math.random() * 500_000_000_000).toFixed(0)}`,
        volume: `$${(Math.random() * 100_000_000_000).toFixed(0)}`,
        volumeSmall: `${(Math.random() * 900).toFixed(2)}K BTC`,
        supply: `${(Math.random() * 100).toFixed(2)}M ${item.short}`,
      }));
    }, 1500);

    return () => clearInterval(interval);
  }, [item.short]);

  const getColorAndIcon = (val) => {
    const num = parseFloat(val.replace("%", ""));
    const color = num < 0 ? "red" : "green";
    const Icon = num < 0 ? FaCaretDown : FaCaretUp;
    return { color, Icon };
  };

  return (
    <>
      <div className="p-2 text-bg-white ">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </div>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <div className="nav-link headerText px-2 text-dark text">
                  {liveData.id}
                </div>
              </li>
              <li>
                <div className="nav-link headerText px-2 text-dark text">
                  <img className="smallLogo" src={liveData.image} alt="" />
                   <span> {liveData.name} </span>
                  <span className="shortName"> {liveData.short} </span>
                </div>
              </li>
            </ul>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <div
                  className={`nav-link headerText px-2 ${
                    parseFloat(liveData.price.replace(/[$,]/g, "")) > 100000
                      ? "red"
                      : "black"
                  }`}
                >
                  {liveData.price}
                </div>
              </li>

              <li>
                {(() => {
                  const { color, Icon } = getColorAndIcon(liveData.oneH);
                  return (
                    <div className={`nav-link headerText px-2 ${color}`}>
                      <Icon />
                      {liveData.oneH}
                    </div>
                  );
                })()}
              </li>

              <li>
                {(() => {
                  const { color, Icon } = getColorAndIcon(liveData.oneD);
                  return (
                    <div className={`nav-link headerText px-2 ${color}`}>
                      <Icon />
                      {liveData.oneD}
                    </div>
                  );
                })()}
              </li>

              <li>
                {(() => {
                  const { color, Icon } = getColorAndIcon(liveData.sevenD);
                  return (
                    <div className={`nav-link headerText px-2 ${color}`}>
                      <Icon />
                      {liveData.sevenD}
                    </div>
                  );
                })()}
              </li>
            </ul>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <div className="nav-link headerText px-2 text-dark text">
                  {liveData.market}
                </div>
              </li>
            </ul>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <div className="nav-link headerText px-2 text-dark text">
                  {liveData.volume}
                  <div className="volumeSmall">{liveData.volumeSmall}</div>
                </div>
              </li>
            </ul>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <div className="nav-link headerText px-2 text-dark text">
                  {liveData.supply}
                </div>
              </li>
            </ul>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <div className="nav-link px-2 text-dark image">
                  <img src="/graph.webp" alt="hello" />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Display;

