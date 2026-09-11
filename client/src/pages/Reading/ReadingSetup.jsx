import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReadingSetup.css";

const ReadingSetup = () => {
    const navigate = useNavigate();

    const [readingType, setReadingType] = useState("");
    const [selectedDeck, setSelectedDeck] = useState("");

    const startReading = () => {
        navigate("/reading/main", {
            state: {
                readingType,
                selectedDeck,
            },
        });
    };

    return (
        <div className="readingSetupPage">

            <div className="readingSetupCard">

                <span className="readingSetupTag">
                    ✦ TAROT READING
                </span>

                <h1 className="readingSetupHeading">
                    Begin Your Reading
                </h1>

                <p className="readingSetupText">
                    Choose your reading type and deck to begin your journey.
                </p>

                <div className="readingSetupForm">

                    <label>READING TYPE</label>

                    <select
                        value={readingType}
                        onChange={(e) => setReadingType(e.target.value)}
                    >
                        <option value="" disabled hidden>
                            Select Reading Type
                        </option>

                        <option value="3">
                            3 Card Reading
                        </option>

                        <option value="5">
                            5 Card Reading
                        </option>

                        <option value="unlimited">
                            Unlimited
                        </option>
                    </select>

                    <label>DECK</label>

                    <select
                        value={selectedDeck}
                        onChange={(e) => setSelectedDeck(e.target.value)}
                    >
                        <option value="" disabled hidden>
                            Select Deck
                        </option>

                        <option value="rider-waite">
                            Rider–Waite–Smith (RWS)
                        </option>
                    </select>

                    {readingType && selectedDeck && (
                        <button
                            className="readingSetupButton"
                            onClick={startReading}
                        >
                            Start Reading →
                        </button>
                    )}

                </div>

            </div>

        </div>
    );
};

export default ReadingSetup;