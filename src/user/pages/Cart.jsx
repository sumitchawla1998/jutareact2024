import React from 'react'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import Footer from './Footer'
import { useCartStore } from '../../store/cart'
import { useUserStore } from '../../store/user'
import { useNavigate } from 'react-router-dom'

function Cart() {
    let items = useCartStore((state) => state.items)
    let updatecart = useCartStore((state) => state.updatecart)
    let removeitem = useCartStore((state) => state.removeitem)
    let totalprice = useCartStore((state) => state.totalprice)
    let isloggedin = useUserStore((state) => state.isloggedin)

    let navigate = useNavigate()


    function placeorder() {
    
        if (isloggedin) {
            navigate("/checkout")
        }
        else {
            navigate("/userlogin")
            error("Please Sign In To Place Order!")
        }
    }

    return (
        <>
            <div className="wrapper cart-page">
                <Header />

                <Breadcrumb title="Cart" />

                <div className="content-wraper mt-95">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <form action="#" className="cart-table">
                                    <div className="table-content table-responsive">
                                        <table className="table">
                                            <thead>
                                           
                                                <tr>
                                                    <th className="plantmore-product-remove">remove</th>
                                                    <th className="plantmore-product-thumbnail">images</th>
                                                    <th className="cart-product-name">Product</th>
                                                    <th className="plantmore-product-price">Unit Price</th>
                                                    <th className="plantmore-product-quantity">Quantity</th>
                                                    <th className="plantmore-product-subtotal">Total</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                            {items && items.map((cartitem,index)=>(
                                                <tr>
                                                    <td className="plantmore-product-remove"><a onClick={()=>removeitem(index)}><i className="fa fa-times" /></a></td>
                                                    <td className="plantmore-product-thumbnail"><a href="#"><img src={cartitem.image} width={100} alt /></a></td>
                                                    <td className="plantmore-product-name"><a href="#">{cartitem.title}</a></td>
                                                    <td className="plantmore-product-price"><span className="amount" >${cartitem.price}</span></td>
                                                    <td className="plantmore-product-quantity">
                                                        <input value={cartitem.quantity} type="number" onChange={(e)=>{ updatecart(index,Number(e.target.value))}} />
                                                    </td>
                                                    <td className="product-subtotal"><span className="amount">${cartitem.tprice}</span></td>
                                                </tr>
                                                
                                            ))} 
                                            </tbody>
                                        </table>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-5 ml-auto">
                                            <div className="cart-page-total">
                                                <h2>Cart totals</h2>
                                                <ul>
                                                    <li>Subtotal <span>${totalprice}</span></li>
                                                    <li>Total <span>${totalprice}</span></li>
                                                </ul>
                                                <a className='text-white' onClick={placeorder}>Proceed to checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        </>
    )
}

export default Cart