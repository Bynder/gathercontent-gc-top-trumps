import React from 'react';
import cardStyles from './card.module.css';
import {JamStat} from "../JamStat";

export function Card ({name, description, mugShotUrl, altText, attributes}) {
    return (
        <div className={cardStyles.card}>
           <div className={cardStyles.mugShotContainer}>
               <img alt={altText} src={mugShotUrl} className={cardStyles.mugShot} />
               <p className={cardStyles.name}>{name}</p>
           </div>
            <div className={cardStyles.description}>
                <p>{description}</p>
            </div>

            <ul className={cardStyles.attributeList}>
                {attributes.map((attr) => (
                    <JamStat stat={attr.description} value={attr.score} />
                ))}
            </ul>
        </div>
    )
}
