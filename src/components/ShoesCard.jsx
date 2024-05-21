import React from 'react'
import { Link } from 'react-router-dom'

function ShoesCard({id,title,category,price,image}) {
    return (
        
            <div className="col-xl-3 col-lg-3 laptop-5 col-md-4 col-sm-6 mt-40">
               <Link to={"/shoes/"+id}>
                <div className="single-product-wrap">
                    <div className="product-image">
                        <a href="">
                            <img className="primary-image" src={image} alt />
                        </a>
                        <div className="label-product">-10% off</div>
                    </div>
                    <div className="product_desc">
                        <div className="product_desc_info">
                            <div className="rating-box">
                                <ul className="rating">
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li><i className="fa fa-star" /></li>
                                    <li className="no-star"><i className="fa fa-star" /></li>
                                    <li className="no-star"><i className="fa fa-star" /></li>
                                </ul>
                            </div>
                            <h4><a className="product_name" href="single-product.html">{title}</a></h4>
                            <div className="manufacturer"><a href="single-product.html">{category}</a></div>
                            <div className="price-box">
                                <span className="new-price">${price}</span>
                                <span className="old-price">${price +0.1 * price }</span>
                            </div>
                        </div>
                       
                    </div>
                </div>
                </Link>
            </div>
        
    )
}

export default ShoesCard