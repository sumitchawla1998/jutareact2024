import React, { useState } from 'react'
import Footer from './Footer'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import { useParams } from 'react-router-dom'
import { shoeslist } from '../../data/shoes'
import { useCartStore } from '../../store/cart'

function ShoesDetails() {
    let { id } = useParams()

    let shoes = shoeslist.find((shoes) => shoes.id == id)

    console.log(shoes)

    let [size,setSize] = useState(9)
    let [color,setColor] =  useState("White")

  
    let updateitems = useCartStore((state) => state.updateitems)
  
  
    function addtocart(e) {
      e.preventDefault()
   
      let item = { ...shoes, size: size, color: color, quantity: 1, tprice: shoes.price }
      updateitems(item)
    }

    return (
        <>
            <div className="wrapper single-product-page">
                <Header />
                <Breadcrumb title="Shoes Details" />
                <div className="content-wraper mt-95">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <div className="row single-product-area">
                                    <div className="col-xl-4  col-lg-6 offset-xl-1 col-md-5 col-sm-12">
                                        <div className="single-product-tab">
                                            <div className="zoomWrapper">
                                                <div id="img-1" className="zoomWrapper single-zoom">
                                                    <a href="#">
                                                        <img id="zoom1" src={shoes.image}  data-zoom-image="img/product/lg-product-1.jpg" alt="big-1" />
                                                    </a>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-7 col-lg-6 col-md-7 col-sm-12">
                    
                                        <div className="quick-view-content">
                                            <div className="product-info">
                                                <h2>{shoes.title}</h2>
                                                <div className="rating-box">
                                                    <ul className="rating">
                                                        <li><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star" /></li>
                                                        <li><i className="fa fa-star" /></li>
                                                    </ul>
                                                </div>
                                                <div className="price-box">
                                                    <span className="new-price">${shoes.price}</span>
                                                    <span className="old-price">${shoes.price +0.1 * shoes.price }</span>
                                                </div>
                                                <p>Discover comfort and style with our premium shoes collection.</p>
                                                <div className="modal-size">
                                                    <h4>Size</h4>
                                                    <select value={size} onChange={e=>setSize(e.target.value)}>
                                                        <option title="S" value={10} >10</option>
                                                        <option title="S" value={9}>9</option>
                                                        <option title="M" value={8}>8</option>
                                                        <option title="L" value={7}>7</option>
                                                    </select>
                                                </div>
                                                <div className="modal-size">
                                                    <h4>Color</h4>
                                                    <select style={{width:100}} value={color} onChange={e=>setColor(e.target.value)}>
                                                        <option value="Red">Red</option>
                                                        <option value="Green">Green</option>
                                                        <option value="Blue">Blue</option>
                                                        <option value="Purple">Purple</option>
                                                    </select>
                                                </div>
                                                
                                                <div className="quick-add-to-cart mt-3" style={{marginLeft:-12}}>
                                                    <button onClick={addtocart} type='button' className="add-to-cart" >Add to cart</button>
                                                </div>
                                                <div className="instock">
                                                    <p>In stock </p>
                                                </div>
                                                <div className="social-sharing">
                                                    <h3>Share</h3>
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                                        <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                                        <li><a href="#"><i className="fa fa-pinterest" /></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-info-review">
                            <div className="row">
                                <div className="col">
                                    <div className="product-info-detailed">
                                        <div className="discription-tab-menu">
                                            <ul role="tablist" className="nav">
                                                <li className="active"><a href="#description" data-bs-toggle="tab" className="active show">Description</a></li>
                                                
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="discription-content">
                                        <div className="tab-content">
                                            <div className="tab-pane fade in active show" id="description">
                                                <div className="description-content">
                                                    <p>Discover comfort and style with our premium shoes collection. From sleek sneakers to elegant heels, each pair is crafted with precision and quality materials to ensure durability and a perfect fit. Elevate your footwear game and step into confidence with our versatile and fashionable designs/Indulge in the epitome of footwear sophistication with our diverse range of shoes meticulously designed to complement every occasion. Whether you're navigating city streets in trendy sneakers or exuding elegance in classic heels, our collection offers unparalleled comfort and style. Each pair is expertly crafted using premium materials, ensuring durability without compromising on aesthetics. From the boardroom to the dance floor, our shoes are tailored to meet the demands of modern life, providing you with the confidence to stride with grace and poise. Elevate your ensemble and make a statement with our timeless designs that effortlessly blend fashion and function.</p>
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

export default ShoesDetails