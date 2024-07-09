import React, { useState } from 'react';
import './Feedback.css'; // Import the CSS file for the Feedback component

const Feedback = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [feedback, setFeedback] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle feedback submission logic here
        console.log(`Feedback: ${feedback}`);
        console.log(`Rating: ${rating} stars`);

        // Reset feedback form after submission
        setFeedback('');
        setRating(0);
        setHover(0);
    };

    return (
        <div className="feedback-container">
            <h2>Feedback and Ratings</h2>
            <form onSubmit={handleSubmit}>
                <div className="rating">
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button
                                type="button"
                                key={index}
                                className={index <= (hover || rating) ? "on" : "off"}
                                onClick={() => setRating(index)}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)}
                            >
                                <span className="star">&#9733;</span>
                            </button>
                        );
                    })}
                </div>
                <textarea
                    className="feedback-textarea"
                    placeholder="Write your feedback here..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                />
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
};

export default Feedback;
