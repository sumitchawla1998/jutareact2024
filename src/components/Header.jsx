import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useCartStore } from '../store/cart'
import { categories } from '../data/categories'

function Header({setCategory}) {
    let items = useCartStore((state) => state.items)
    let totalprice = useCartStore((state) => state.totalprice)

    return (

        <header>
          
            <div className="header-top bg-black">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-4">
                          
                            <div className="welcome-msg">
                                <p>Welcome to Juta.com by Ultron Technologies!</p>
                            </div>
                           
                        </div>
                        <div className="col-lg-6 col-md-8">
                           
                            <div className="full-setting-area">
                                <div className="top-dropdown">
                                    <ul>
                                        <li className="drodown-show"><span>Currency:</span> <a href="#">USD <i className="fa fa-angle-down" /></a>
                                            <ul className="open-dropdown">
                                                <li><a href="#">EUR €</a></li>
                                                <li><a href="#">USD $</a></li>
                                            </ul>
                                        </li>
                                        <li className="drodown-show"><span>Language:</span> <a href="#"><img src="/juta/img/icon/p-1.jpg" alt /> English <i className="fa fa-angle-down" /></a>
                                            <ul className="open-dropdown">
                                                <li><a href="#"><img src="/juta/img/icon/p-1.jpg" alt /> English</a></li>
                                                <li><a href="#"><img src="/juta/img/icon/p-2.jpg" alt /> Français</a></li>
                                            </ul>
                                        </li>
                                        
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
           
            <div className="header-mid-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col md-custom-12">
                          
                            <div className="logo">
                                <a href="index.html"><img src="/juta/img/logo/logo.png" alt /></a>
                            </div>
                            
                        </div>
                        <div className="col-lg-9 md-custom-12">
                          
                            <div className="shopping-cart-box">
                                <ul>
                                    <li>
                                        <Link to="/cart" >
                                            <span className="item-cart-inner">
                                                <span className="item-cont">{items.length}</span>
                                                My Cart
                                            </span>
                                            <div className="item-total">${totalprice}</div>
                                        </Link>
                                      
                                    </li>
                                </ul>
                            </div>
                           
                            <div className="searchbox">
                                <form action="#">
                                    <div className="search-form-input">
                                        <select onChange={e=>setCategory(e.target.value)} id="select" name="select" className="nice-select">
                                            <option value="All Categories">All Categories</option>
                                            { categories.map((category)=>(<option value={category}>{category}</option>)) }
                                            
                                        </select>
                                        <input type="text" placeholder="Enter your search key ... " />
                                        <button className="top-search-btn" type="submit">Search</button>
                                    </div>
                                </form>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header-bottom-area bg-black sticky-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 d-none d-lg-block">
                            
                            <div className="main-menu-area">
                                <nav>
                                    <ul>
                                        <li><NavLink  to="/">Home </NavLink>
                                           
                                        </li>
                                        <li ><NavLink to="/about">About </NavLink></li>
                                        <li ><NavLink to="/shoes">Shoes </NavLink></li>
                                        <li ><NavLink to="/login">Login </NavLink></li>
                                        <li ><NavLink to="/register">Register </NavLink></li>
                                        <li ><NavLink to="/contact">Contact </NavLink></li>
                       
                                    </ul>
                                </nav>
                            </div>
                           
                        </div>
                        <div className="col-lg-4">
                     
                            <div className="social-follow-box">
                                <div className="follow-title">
                                    <h2>Follow us:</h2>
                                </div>
                                <ul className="social-follow-list">
                                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /></a></li>
                                    <li><a href="#"><i className="fa fa-youtube" /></a></li>
                                    <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                                    <li><a href="#"><i className="fa fa-instagram" /></a></li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
           
        </header>

    )
}

export default Header