import { useState, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import "./CardsLibrary.css";

const CardsLibrary = () => {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showDeck, setShowDeck] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        fetch("https://the-arcana-room.onrender.com/api/cards/rider-waite")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch cards");
                }

                return response.json();
            })
            .then((data) => {
                setCards(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const showRiderDeck = () => {
        setShowDeck((prev) => !prev);
    };

    if (loading) {
        return <h2 className="libraryMessage">Loading cards...</h2>;
    }

    if (error) {
        return <h2 className="libraryMessage">{error}</h2>;
    }

    return (
        <>
            <Helmet>
                <title>The Arcana Room | Cards Library</title>
            </Helmet>

            <div className="deckSelection">

                <div className="libraryHeader">
                    <span className="libraryTag">
                        ✦ THE ARCANA ROOM
                    </span>

                    <h1 className="libraryH">
                        CARDS LIBRARY
                    </h1>

                    <p className="libraryIntro">
                        Explore the complete Rider–Waite–Smith tarot deck
                        and discover the symbolism behind each card.
                    </p>
                </div>

                <div
                    className="riderWaiteSection"
                    onClick={showRiderDeck}
                >
                    <div className="deckInfo">

                        <span className="deckLabel">
                            TAROT DECK
                        </span>

                        <div className="deckH">
                            Rider–Waite–Smith (RWS) Tarot Deck
                        </div>

                    </div>

                    <button className="arrowBtn">
                        {showDeck
                            ? <FaChevronUp />
                            : <FaChevronDown />
                        }
                    </button>

                </div>

                {showDeck && (
                    <div className="cardsImage">

                        {cards.map((card) => (
                            <div
                                className="cardTag"
                                key={card.imageName}
                            >
                                <img
                                    src={`/cards/${card.imageName}`}
                                    alt={card.name}
                                />

                                <p>
                                    {card.name}
                                </p>
                            </div>
                        ))}

                    </div>
                )}

            </div>
        </>
    );
};

export default CardsLibrary;