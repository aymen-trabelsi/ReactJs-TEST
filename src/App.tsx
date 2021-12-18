import React, {useEffect, useState} from 'react';
import './styles/global.scss';
import PageHeader from '@components/pageHeader';
import Card       from "@components/card";
import PartnerCategory from "@domains/entities/PartnerCategory";
import Partner from "@domains/entities/Partner";
// @ts-ignore
import image from "./loading.svg"
import di from './di';

function App() {


    const [partners, setPartners]   = useState<Partner[]>([]);
    const [categries, setCategries] = useState<PartnerCategory[]>([]);
    const [Ploaded, setPloades] = useState<boolean>(false);
    const [Cloaded, setCloades] = useState<boolean>(false);




    useEffect(() => {
        var categories : PartnerCategory [] = [];
        var parteners : Partner [] = [];
        di.partnerCategory.getPartnersCategries().then(data => {
            data.map(dt => {
                let ins = new PartnerCategory({partnerCategoryID : dt.id,nameKeyPC : dt.nameKey, namePC : dt.name})
                categories.push(ins);
            })
            setCloades(true);
            setCategries(categories);
        })

        di.partner.getPartners().then(data => {
            data.map(dt => {
                    let ins = new Partner({
                        partnerID: dt.id,
                        namePAR: dt.name,
                        desc: dt.desc,
                        logoUrlPAR: dt.logoUrl,
                        mobileImageUrlPAR: dt.mobileImageUrl,
                        imageUrlPAR: dt.imageUrl,
                        urlPAR: dt.url,
                        partnerCategories: dt.partnerCategories,
                        backgroundUrlPAR : dt.backgroundUrl,
                        })
                parteners.push(ins);
            })
            setPloades(true);
            setPartners(parteners)
        })

    }, [])




    return (

    <div className="App">
        {
             !Cloaded ?
                <PageHeader loaded={true} categries={categries} /> :
                <PageHeader loaded={false} categries={categries} />
        }
        <div >
            {   !Ploaded ?  <img src={image}/> :
            partners.map((partner, id) => (
                        <div className="container">
                            {/*<Card  key={partner.id} partner={partner}/>*/}
                            <span className="item"> {partner.desc} --</span>
                        </div>

                ))
            }
        </div>
    </div>
  );
}

export default App;