import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./ReadingMain.css";

const ReadingMain = () => {
    const location = useLocation();
    const { readingType, selectedDeck } = location.state;

    const [deck, setDeck] = useState([]);
    const [pickedCards, setPickedCards] = useState([]);
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [drawingCard, setDrawingCard] = useState(null);

    useEffect(() => {
        fetch(`https://the-arcana-room.onrender.com/api/cards/${selectedDeck}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch cards");
                }

                return response.json();
            })
            .then((data) => {
                setCards(data);
                handleShuffle(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, [selectedDeck]);

    const handleShuffle = (deckToShuffle) => {
        const shuffledDeck = [...deckToShuffle];

        for (let i = shuffledDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [shuffledDeck[i], shuffledDeck[j]] = [
                shuffledDeck[j],
                shuffledDeck[i]
            ];
        }

        setDeck(shuffledDeck);
    };

    const handleClick = () => {
        if (drawingCard) {
            return;
        }

        if (pickedCards.length >= Number(readingType)) {
            alert(`You have already picked ${readingType} cards`);
            return;
        }

        if (deck.length === 0) {
            alert("No cards left. Click 'Clear All' to start a new reading.");
            return;
        }

        const pickedCard = deck[0];

        setDrawingCard(pickedCard);

        setTimeout(() => {
            setPickedCards((prev) => [...prev, pickedCard]);
            setDeck((prev) => prev.slice(1));
            setDrawingCard(null);
        }, 700);
    };

    const clearBtn = () => {
        setPickedCards([]);
        handleShuffle(cards);
    };

    if (loading) {
        return <h2 className="readingMessage">Loading cards...</h2>;
    }

    if (error) {
        return <h2 className="readingMessage">{error}</h2>;
    }

    return (
        <div className="readingMainPage">

            <section className="readingSection">

                <div className="readingTag">
                    ✦ TAROT READING
                </div>

                <h1 className="readingH">
                    READING
                </h1>

                <div className="chooseCards">

                    <div className="readingDeckInfo">
                        <span className="readingDeckLabel">
                            CURRENT DECK
                        </span>

                        <div className="readingDeckH">
                            {cards.length > 0 && cards[0].deckName}
                        </div>
                    </div>

                    <div className="coverImage">

                        <div className="cardGlow"></div>

                        <img
                            className={drawingCard ? "deckCard drawing" : "deckCard"}
                            src="/cards/00-card-back.jpg"
                            alt="Rider–Waite–Smith (RWS) Tarot Deck"
                            onClick={handleClick}
                        />

                        <span className="cardInstruction">
                            Click the card to draw
                        </span>

                        <button
                            className="shuffleBtn"
                            onClick={() => handleShuffle(deck)}
                            disabled={!!drawingCard}
                        >
                            Shuffle Deck
                        </button>

                    </div>

                </div>

            </section>

            <section className="pickingCards">

                <div className="pickedCardH">
                    PICKED CARDS
                </div>

                <div className="readingProgress">
                    {pickedCards.length} / {readingType} Cards Selected
                </div>

                {pickedCards.length > 0 && (
                    <button
                        className="clearBtn"
                        onClick={clearBtn}
                        disabled={!!drawingCard}
                    >
                        Clear All
                    </button>
                )}

                <div className="pickedcard">

                    {pickedCards.length === 0 && !drawingCard && (
                        <div className="shuffleGuide">
                            Shuffle the deck and pick cards
                        </div>
                    )}

                    {pickedCards.map((picked) => (
                        <img
                            key={picked.imageName}
                            alt={picked.name}
                            src={`/cards/${picked.imageName}`}
                        />
                    ))}

                </div>

            </section>

            {drawingCard && (
                <img
                    className="flyingCard"
                    src="/cards/00-card-back.jpg"
                    alt=""
                />
            )}

        </div>
    );
};

export default ReadingMain;