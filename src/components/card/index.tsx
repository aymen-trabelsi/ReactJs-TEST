import React, {useState} from 'react';
import Partner from "@domains/entities/Partner";
import css from './_card.module.scss'

const Card = (props: {partner : Partner}) => {

    const [showParams, setShowParams] = useState<boolean>(false);
    let url = "https://recette2.lepotcommuntest.fr"

    const cardStyle  = {
        marginBottom : "4px",
        marginRight : "4px",
        backgroundImage: 'url(' + url + props.partner.backgroundUrl + ')',
        width : "33vw",
        height : "27vh",

    }
    const contentCard  = {
        marginTop : "4vh",
        marginLeft : "2vh"

    }


    function show( ){setShowParams(true)};
    function hide( ){setShowParams(false)};


    return (

        <div style={cardStyle} className={css.parent}>
        { ! showParams ?
                        <div  onMouseEnter={show} onMouseLeave={hide}>
                            <div>
                            <img alt={props.partner.name} className={css.logoStyle} src={url + props.partner.logoUrl}/>
                            </div>
                          </div>
                        :
                        <div className={css.card}  onMouseEnter={show} onMouseLeave={hide}>
                             <div className="row" style={contentCard} >
                                <div className="col-md-2"><img alt={props.partner.name} className={css.smallLogoStyle} src={url + props.partner.logoUrl}/></div>
                                <div className="col-md-1"/>
                                <div className="col-md-8" >
                                    <p className={css.text}>{props.partner.desc}</p>
                                    <a target="_blank" rel="noreferrer" href={props.partner.url}>
                                        <button className={css.button} > Choisir  </button>
                                    </a>
                                </div>
                             </div>
                        </div>
        }
        </div>
     )
}

export default Card;