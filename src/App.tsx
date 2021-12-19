import React, {useEffect, useState} from 'react';
import './styles/global.scss';
import PageHeader from '@components/pageHeader';
import Card       from "@components/card";
import PartnerCategory from "@domains/entities/PartnerCategory";
import Partner from "@domains/entities/Partner";
import image from "./styles/loading.svg"
import di from './di';

function App() {


    const [partners, setPartners]   = useState<Partner[]>([]);
    const [filtredPartners, setFiltredPartners]   = useState<Partner[]>([]);
    const [categries, setCategries] = useState<PartnerCategory[]>([]);
    const [Ploaded, setPloades] = useState<boolean>(false);
    const [Cloaded, setCloades] = useState<boolean>(false);


    const [filtre, setFilter] = useState<number[]>([]);

    function handleAdd (id : number) {
        var newflt =  filtre.filter (element => {
            return element !== id
        })
        newflt.push(id);
        setFilter(newflt);
    }
    function handleRemove (id : number) {
        var newflt =  filtre.filter (element => {
            return element !== id
        })
        setFilter(newflt);
    }
    useEffect(() => {
            if(filtre.length === 0){
                setFiltredPartners(partners);
            }
    }, [filtre]);


    useEffect(() => {
        var categories : PartnerCategory [] = [];
        var parteners : Partner [] = [];
        let ins = new PartnerCategory({partnerCategoryID : 0, nameKeyPC : "  Tous  ", namePC : "categories"});
        categories.push(ins);
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

    const divStyle  = {
        marginTop : "3vh"
    }

    return (


    <div className="App">
        {   !Cloaded    ?
            <PageHeader addFilter={(id: number) => {handleAdd(id);}}
                        removeFilter={(id: number) => {handleRemove(id);}}
                        loaded={true} categries={categries} />
                    :
            <PageHeader addFilter={(id: number) => {handleAdd(id);}}
                        removeFilter={(id: number) => {handleRemove(id);}}
                        loaded={false} categries={categries} />
        }
        <div>
        {   !Ploaded    ?
                <div className="loading">
                    <img alt="loading" src={image}/>
                </div>
                        :
                <div className="row" style={divStyle} >
                    {partners.map((partner, id) => (
                        <Card key={partner.id} partner={partner}/>
                        ))
                    }
                </div>
        }
        </div>
    </div>
  );
}
export default App;