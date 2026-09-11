import "./HomeHero.css"
import { Link } from 'react-router-dom'

const HomeHero = () => {
    return (
        <section className="homeHero">

            <div className="homeHeroText">

                <span className="homeHeroTag">
                    ✦ TAROT READING
                </span>

                <h1>
                    Discover What
                    <span>The Cards Reveal</span>
                </h1>

                <p>
                    Explore your questions, emotions and possibilities
                    through a personalized tarot reading.
                </p>

                <Link to="/reading-setup">
                    <button className="homeHeroButton">
                        Start Reading →
                    </button>
                </Link>

            </div>

            <div className="homeHeroCard">

                <div className="homeHeroGlow"></div>

                <Link to="/reading-setup">
                    <img
                        src="/cards/00-card-back.jpg"
                        alt="Tarot card"
                    />
                </Link>
                
            </div>

        </section>
    )
}

export default HomeHero
