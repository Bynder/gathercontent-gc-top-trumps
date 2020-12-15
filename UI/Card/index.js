import React from 'react';
import cardStyles from './card.module.css';

export function Card () {
    return (
        <div className={cardStyles.card}>
            <img></img>
            <p>Description</p>
            <ul>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
            </ul>
        </div>
    )
}