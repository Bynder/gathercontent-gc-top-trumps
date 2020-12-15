import React from 'react';
import cardStyles from './card.module.css';

export function Card ({name, description, mugShotUrl, altText, attributes}) {
    return (
        <div className={cardStyles.card}>
            <p>{name}</p>
            <img alt={altText} src={mugShotUrl} className={cardStyles.mugShot} />
            <div className={cardStyles.description}>
                <p>{description}</p>
            </div>

            <ul className={cardStyles.attributeList}>
                {attributes.map((attr) => (
                    <button>
                        {attr.description}: {attr.score}
                    </button>
                ))}
            </ul>
        </div>
    )
}
