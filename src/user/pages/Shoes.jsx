import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import Footer from './Footer'
import ShoesCard from '../../components/ShoesCard'
import { shoeslist } from '../../data/shoes'

function Shoes() {
    let [category, setCategory] = useState("All Categories")

    
    let [filteredshoes,setFilteredshoes] = useState(shoeslist) 
    let json = shoeslist.filter((shoe)=>shoe.category == category)

    useEffect(()=>{
        setFilteredshoes(json)
    },[category])
    return (
        <>
        {console.log("hii")}
            <div className="wrapper">
                <Header category = {category} setCategory = {setCategory}/>
                <Breadcrumb title="Shoes" />
                <div className="content-wraper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">


                                <div className="shop-products-wrapper">
                                    <div className="tab-content">
                                        <div id="grid-view" className="tab-pane fade active show" role="tabpanel">
                                            <div className="shop-product-area">
                                                <div className="row">


                                                    {category == "All Categories" ?shoeslist.map((shoe) => (
                                                        <ShoesCard key={shoe.id} id={shoe.id} title={shoe.title} category={shoe.category} price={shoe.price} image={shoe.image} />
                                                    )):filteredshoes.map((shoe) => (
                                                        <ShoesCard key={shoe.id} id={shoe.id} title={shoe.title} category={shoe.category} price={shoe.price} image={shoe.image} />
                                                    ))}

                                                 

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <Footer />


            </div>
        </>
    )
}

export default Shoes