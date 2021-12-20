import React, {useEffect, useState} from 'react';
import './styles/global.scss';
import PageHeader from '@components/pageHeader';
import Card       from "@components/card";
import PartnerCategory from "@domains/entities/PartnerCategory";
import Partner from "@domains/entities/Partner";
import image from "./styles/loading.svg"
import di from './di';

function App() {


    const [partners, setPartners]                 = useState<Partner[]>([]);
    const [filtredPartners, setFiltredPartners]   = useState<Partner[]>([]);
    const [categries, setCategries]               = useState<PartnerCategory[]>([]);
    const [filtre, setFilter]   = useState<number[]>([0]);
    const [Ploaded, setPloades] = useState<boolean>(false);
    const [Cloaded, setCloades] = useState<boolean>(false);
    const [empty, setEmpty]     = useState<boolean>(false);

    function handleAdd (id : number) {
        if (id==0){
            let newflt =  filtre.filter (element => {
                return (element === id)
            })
            newflt.push(id);
            setFilter(newflt);
            localStorage.setItem('filtres',  JSON.stringify(newflt));
        }else {
            if(filtre[0] == 0 ){
                setFilter([id]);
                localStorage.setItem('filtres',  JSON.stringify([id]));
            }else {
                var newflt = filtre.filter(element => {
                    return (element !== 0)
                })
                newflt.push(id);
                setFilter(newflt);
                localStorage.setItem('filtres', JSON.stringify(newflt));
            }
        }
    }

    function handleRemove (id : number) {
        var newflt =  filtre.filter (element => {
            return element != id
        })
        setFilter(newflt);
        localStorage.setItem('filtres', JSON.stringify(newflt));
    }

    useEffect(() => {
        setEmpty(false);
        if(filtre.length === 0){
                setFiltredPartners(partners);
        }else {
            var filtred : Partner [] = [];
            partners.map(partner => {
                partner.partnerCategories.map(category => {
                    filtre.map(id => {
                        if ((id == category.partnerCategoryID)||(id == 0)){
                            filtred.push(partner)
                        }
                    })
                })
            })
            filtred = Array.from(new Set(filtred));
            setFiltredPartners(filtred)
            if (filtred.length === 0){
                setEmpty(true);
            }
        }
    }, [filtre]);


    useEffect(() => {
        setEmpty(false)
        var categories  : PartnerCategory [] = [];
        var parteners   : Partner [] = [];

        let ins = new PartnerCategory({partnerCategoryID : 0, nameKeyPC : "  Tous  ", namePC : "categories"});
        categories.push(ins);

        di.partnerCategory.getPartnersCategries().then(data => {
            data.map(dt => {
                let ins = new PartnerCategory({
                    partnerCategoryID : dt.id,
                    nameKeyPC : dt.nameKey,
                    namePC : dt.name
                    })
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
            setPartners(parteners);

            if(localStorage.getItem('filtres')){
                let oldFilters: number[] = [];
                // @ts-ignore
                JSON.parse(localStorage.getItem('filtres')).map(id => {
                    oldFilters.push(parseInt(id))
                })
                if(oldFilters.length === 0){
                    setFiltredPartners(parteners);
                }else {
                    var filtred : Partner [] = [];
                    parteners.map(partner => {
                        partner.partnerCategories.map(category => {
                            oldFilters.map((id : number) => {
                                if (category.partnerCategoryID === (id)){
                                    filtred.push(partner)
                                }
                            })
                        })
                    })
                    filtred = Array.from(new Set(filtred));
                    setFilter(oldFilters);
                    setFiltredPartners(filtred);
                }
            }
        })
    }, [])

    const divStyle  = { marginTop : "3vh" }

    return (
            <div>
                {   !Cloaded    ?
                    <PageHeader addFilter={(id: number) => {handleAdd(id);}}
                                removeFilter={(id: number) => {handleRemove(id);}}
                                loaded={true} categries={categries}
                                filters={filtre} />
                            :
                    <PageHeader addFilter={(id: number) => {handleAdd(id);}}
                                removeFilter={(id: number) => {handleRemove(id);}}
                                loaded={false} categries={categries}
                                filters={filtre} />
                }
                <div  className="App">
                {   !Ploaded    ?
                        <div className="loading">
                            <img alt="loading" src={image}/>
                        </div>
                                :
                        <div className="row" style={divStyle} >
                            {filtredPartners.map((partner, id) => (
                                    <Card key={partner.id} partner={partner}/>
                                ))
                            }
                        </div>
                }
                    {
                        empty &&     <div className="notFound">
                                        <span> Ooops...</span>
                                        <br/> Aucun PARTENAIRE trouvé pour cette catégorie
                                        <br/> Essayez-en un autre
                                    </div>
                    }
                </div>
            </div>
    );
}
export default App;