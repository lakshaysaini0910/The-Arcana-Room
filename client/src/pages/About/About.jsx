import "./About.css";

const About = () => {
    return (
        <div className="aboutPage">

            <section className="aboutS1">
                <div className="aboutContainer">

                    <span className="aboutTag">✦ THE ARCANA ROOM</span>

                    <h1 className="aboutH">ABOUT</h1>

                    <p>
                        Tarot Reading is a modern web application that brings the
                        traditional Rider–Waite–Smith tarot deck into a digital
                        experience. Users can shuffle the deck, perform different
                        types of readings, and explore every card in an intuitive
                        and responsive interface.
                    </p>

                </div>
            </section>

            <section className="aboutS2">
                <div className="aboutContainer">

                    <h2 className="aboutS2H">FEATURES</h2>

                    <div className="aboutS2Content">

                        <div className="aboutFeature">
                            <span className="aboutFeatureIcon">✦</span>
                            <div>
                                <h3 className="aboutS2SubH">Random Card Shuffle</h3>
                                <p>
                                    Every reading begins with a fully randomized deck,
                                    ensuring that each card draw is unique. This creates a
                                    fresh experience every time you perform a reading,
                                    closely resembling the process of shuffling a physical
                                    tarot deck.
                                </p>
                            </div>
                        </div>

                        <div className="aboutFeature">
                            <span className="aboutFeatureIcon">☽</span>
                            <div>
                                <h3 className="aboutS2SubH">Multiple Reading Types</h3>
                                <p>
                                    The application offers a variety of tarot reading
                                    spreads, allowing users to choose a reading that best
                                    suits their question or situation. Each spread is
                                    designed to provide a structured and meaningful tarot
                                    experience.
                                </p>
                            </div>
                        </div>

                        <div className="aboutFeature">
                            <span className="aboutFeatureIcon">✧</span>
                            <div>
                                <h3 className="aboutS2SubH">Card Library</h3>
                                <p>
                                    Explore the complete Rider–Waite–Smith tarot deck
                                    through the Card Library. Browse all 78 cards, view
                                    their artwork, and become familiar with the symbolism
                                    and structure of both the Major and Minor Arcana.
                                </p>
                            </div>
                        </div>

                        <div className="aboutFeature">
                            <span className="aboutFeatureIcon">◇</span>
                            <div>
                                <h3 className="aboutS2SubH">Responsive Design</h3>
                                <p>
                                    Built with a responsive layout, the application adapts
                                    seamlessly to desktops, tablets, and mobile devices.
                                    The interface is designed to provide a smooth and
                                    consistent user experience across different screen
                                    sizes.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            <section className="aboutS3">
                <div className="aboutContainer">

                    <h2 className="aboutS3H">TECHNOLOGIES USED</h2>

                    <div className="aboutS3Content">
                        This application is built using the <strong>MERN Stack</strong>,
                        combining modern frontend and backend technologies to
                        deliver a fast, responsive, and scalable web experience.
                    </div>

                    <ul className="aboutS3Points">

                        <li>
                            <strong>React:</strong> React is used to build a
                            dynamic and responsive user interface using reusable
                            components. It enables smooth navigation and efficient
                            rendering, creating a fast and interactive user
                            experience.
                        </li>

                        <li>
                            <strong>Node.js:</strong> Node.js powers the backend
                            server by running JavaScript outside the browser. It
                            handles client requests efficiently and supports
                            scalable application performance.
                        </li>

                        <li>
                            <strong>Express.js:</strong> Express.js manages
                            server-side routing, API endpoints, and backend logic.
                            Its lightweight framework simplifies request handling
                            and communication between the frontend and database.
                        </li>

                        <li>
                            <strong>MongoDB:</strong> MongoDB stores tarot card
                            data and other application information in a flexible
                            NoSQL database. Its document-based structure makes data
                            management efficient and scalable.
                        </li>

                    </ul>

                </div>
            </section>

        </div>
    );
};

export default About;