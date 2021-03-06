import React, {useEffect, useState} from "react";
import css from "./_filterCard.module.scss";

const FilterCard  = (props) => {

    const [clicked , setClicked] = useState(false)

    useEffect(()=> {
        let exist : boolean = false;
        props.filters.map(id => {
            if (id == props.id){
                exist = true;
            }
        })
        if(exist) setClicked(true)
        else setClicked(false)

    },[props])

    useEffect(() => {
        if(localStorage.getItem('filtres')){
            let oldFilters: number[] = [];
            JSON.parse(localStorage.getItem('filtres')).map(id => {
                oldFilters.push(parseInt(id))
            })
            oldFilters.map(id => {
                if (props.id === id) setClicked(true)
            })
        }
    },[])

    function Filter(e){
        if (!clicked){
            setClicked(true);
            props.addToFilter(e.target.id);
        }else {
            setClicked(false);
            props.removeFromFilter(e.target.id);
        }
    }

    const color = {
        backgroundColor: "#e22b76",
        color: "white",
        border: "solid 0.5px #e22b76"
    }

    return  <div onClick={Filter}>
            {
                clicked   ?
                          <input type="button"
                              id={props.id}
                              style={color}
                              className={css.filterCard}
                              value={ "  "+props.text+"  "  } />
                          :
                          <input type="button"
                              id={props.id}
                              className={css.filterCard}
                              value={ "  "+props.text+"  "  } />
            }
            </div>
    };

export default FilterCard;
