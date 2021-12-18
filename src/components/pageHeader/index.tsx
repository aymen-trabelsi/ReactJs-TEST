import React from "react";
// @ts-ignore
import css from "./_pageHeader.module.scss";
import FilterCard from "@components/filterCard";
// @ts-ignore
import image from "../../loading.svg";
import PartnerCategory from "@domains/entities/PartnerCategory";


const PageHeader = (props: { loaded: boolean; categries: PartnerCategory[]; }) => {
  return (
    <div className={css.pageHeader}>
        {props.loaded ?
          <img src={image} />
        :
        props.categries.map((categrie) => (
                  <FilterCard key={categrie.nameKey}  text={categrie.name}/>
            )
        )}

    </div>
  );
};

export default PageHeader;
