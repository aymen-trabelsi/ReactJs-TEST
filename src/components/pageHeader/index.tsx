import React  from "react";
import css from "./_pageHeader.module.scss";
import FilterCard from "@components/filterCard";
import image from "../../styles/loading.svg";
import PartnerCategory from "@domains/entities/PartnerCategory";


const PageHeader = (props: { addFilter : Function;
                             removeFilter : Function;
                             loaded: boolean;
                             categries: PartnerCategory[];
                             filters : number[]; }) => {
    return (
        <div className={css.pageHeader}>
            {   props.loaded ?
                                <img alt="loading" src={image} />
                             :
                              <div className="flex-container">
                                  { props.categries.map((categrie) => (
                                          <div className="flex-item" key={categrie.nameKey}>
                                              <FilterCard addToFilter={(id: number) => {props.addFilter(id);}}
                                                          removeFromFilter={(id: number) => {props.removeFilter(id);}}
                                                          id={categrie.id} text={categrie.name}
                                                          filters={props.filters}/>
                                          </div>
                                      )
                                  )}
                            </div>
          }
      </div>
    );
};
export default PageHeader;
