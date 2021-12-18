import React from 'react';
// @ts-ignore
import css from './_card.module.scss';
import Partner from "@domains/entities/Partner";


const Card = (props: {partner : Partner}) => {
    let url = "https://recette2.lepotcommuntest.fr"
    const divStyle = {
        color: 'blue',
        backgroundImage: 'url(' + url + props.partner.backgroundUrl + ')',
    };
    return (
        <div >
            <div className={css.card}   style={divStyle}>
                <img src={url + props.partner.logoUrl}/>
            </div>
        </div>
    )
}

export default Card;