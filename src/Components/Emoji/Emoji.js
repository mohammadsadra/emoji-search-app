import React from 'react';
import './Emoji.css'; // Import the CSS file for styles

function EmojiCard({ emoji, title }) {
    return (
        <div className="emoji-card">
            <div className="emoji">{emoji}</div>
            <div className="description">{title}</div>
        </div>
    );
}

export default EmojiCard;
