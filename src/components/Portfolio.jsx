import { portfolioList } from "../data/DataPortfolio";
import { Link } from "react-router-dom";
import "../styles/Portfolio.css";
function Portfolio() {
  return (
    <section id="portfolio">
      <div className="wrapper">
        <h3>Portfolio</h3>
        <div className="grid">
          {portfolioList.map((item) => {
            return (
              <div className="item" key={item.id}>
                <Link to={`/portfolio/${item.id}`}>
                  <img src={item.image} />
                </Link>

                <button onClick={() => window.open(`/portfolio/${item.id}`, "_blank")} className="btn-buka">
                  See
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
