import React, { useState } from 'react'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import Footer from './Footer'
import { useCartStore } from '../../store/cart'
import { useUserStore } from '../../store/user'
import { db } from '../../firebase/firebasconfig'
import { addDoc, collection } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'
import { error, success } from '../../utils/messages'
function Checkout() {

    let [nm, setNm] = useState("")
    let [company, setCompany] = useState("")
    let [city, setCity] = useState("")
    let [street, setStreet] = useState("")
    let [state, setState] = useState("")
    let [zip, setZip] = useState("")
    let [phone, setPhone] = useState("")
    let [email, setEmail] = useState("")
    let [notes, setNotes] = useState("")
  
    let items = useCartStore((state) => state.items)
    let totalprice = useCartStore((state) => state.totalprice)
    let user = useUserStore((state) => state.user)
    let navigate = useNavigate()
  
    async function checkout(e) {
      e.preventDefault()
      if (fnm == "" || lnm == "" || company == "" || city == "" || address == "" || mobile == "" || email == "" || notes == "") {
        error("All Fields Are Required")
        return
      }
      let colref = collection(db, "orders")
      let docref = await addDoc(colref, {
        "uid": user.uid,
        "cust": user.displayName,
        "items": items,
        "size": items.length,
        "totalprice": totalprice,
        "fnm": fnm,
        "lnm": lnm,
        "city": city,
        "mobile": mobile,
        "address": address,
        "notes": notes,
        "status": "Placed"
  
      })
  
      success("Order Placed")
      navigate("/myorders")
    }

    return (
        <>
            <div className="wrapper checkout-page">
                <Header />
                <Breadcrumb title="Checkout" />
                <div className="content-wraper mt-95">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-xl-10 offset-xl-1">
                                {/* coupon-area start */}
                                <div className="coupon-area mb-60">
                                    <div className="coupon-accordion">
                                        <h3>Returning customer? <Link to="/login"><span id="showlogin" className="coupon">Click here to login</span></Link></h3>
                                        
                                    </div>
                                    <div className="coupon-accordion">
                                        <h3>Have a coupon? <span id="showcoupon" className="coupon">Click here to enter your code</span></h3>
                                        <div id="checkout-coupon" className="coupon-content">
                                            <div className="coupon-info">
                                                <form action="#">
                                                    <p className="checkout-coupon">
                                                        <input type="text" placeholder="Coupon code" />
                                                        <button value="Apply coupon" name="apply_coupon" className="button-apply-coupon" type="submit">Apply coupon</button>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* coupon-area end */}
                            </div>
                        </div>
                        {/* checkout-area start */}
                        <div className="checkout-area">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-6 offset-xl-1 col-xl-5 col-sm-12">
                                            <form action="#" onSubmit={checkout}>
                                                <div className="checkbox-form">
                                                    <h3 className="shoping-checkboxt-title">Billing Details</h3>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <p className="single-form-row">
                                                                <label>Name <span className="required">*</span></label>
                                                                <input value={nm} onChange={e=>setNm(e.target.value)} type="text" name="First name" />
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <p className="single-form-row">
                                                                <label>Email <span className="required">*</span></label>
                                                                <input value={email} onChange={e=>setEmail(e.target.value)} type="text" name="Last name " />
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <p className="single-form-row">
                                                                <label>Company name</label>
                                                                <input value={company} onChange={e=>setCompany(e.target.value)} type="text" name="email" />
                                                            </p>
                                                        </div>
                                                        
                                                        <div className="col-lg-12">
                                                            <p className="single-form-row">
                                                                <label>Street address <span className="required">*</span></label>
                                                                <input value={street} onChange={e=>setStreet(e.target.value)} type="text" name="address" placeholder="House number and street name" />
                                                            </p>
                                                        </div>
                                                        
                                                        <div className="col-lg-12">
                                                            <p className="single-form-row">
                                                                <label>Town / City <span className="required">*</span></label>
                                                                <input value={city} onChange={e=>setCity(e.target.value)} type="text" name="address" />
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <p className="single-form-row">
                                                                <label>State</label>
                                                                <input value={state} onChange={e=>setState(e.target.value)} type="text" name="address" />
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <p className="single-form-row">
                                                                <label>Postcode / ZIP <span className="required">*</span></label>
                                                                <input value={zip} onChange={e=>setZip(e.target.value)} type="text" name="address" />
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-12">
                                                            <p className="single-form-row">
                                                                <label>Phone</label>
                                                                <input value={phone} onChange={e=>setPhone(e.target.value)} type="text" name="address" />
                                                            </p>
                                                        </div>
                                                        
                                                        
                                                        
                                                        <div className="col-lg-12">
                                                            <p className="single-form-row m-0">
                                                                <label>Order notes</label>
                                                                <textarea value={notes} onChange={e=>setNotes(e.target.value)} cols={5} rows={2} className="checkout-mess" placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-lg-6  col-xl-5 col-sm-12">
                                            <div className="checkout-review-order">
                                                <form action="#">
                                                    <h3 className="shoping-checkboxt-title">Your order</h3>
                                                    <table className="checkout-review-order-table">
                                                        <thead>
                                                            <tr>
                                                                <th className="t-product-name">Product</th>
                                                                <th className="product-total">Total</th>
                                                            </tr>
                                                        </thead>
                                                       
                                                        <tfoot>
                                                            <tr className="cart-subtotal">
                                                                <th>Subtotal</th>
                                                                <td><span>${totalprice}</span></td>
                                                            </tr>
                                                            <tr className="shipping">
                                                                <th>Shipping</th>
                                                                <td>Free shipping</td>
                                                            </tr>
                                                            <tr className="order-total">
                                                                <th>Total</th>
                                                                <td><strong><span>${totalprice}</span></strong></td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>
                                                    <div className="checkout-payment">
                                                        <div className="payment_methods">
                                                            <p><label>COD Checkout <a href="#"></a></label></p>
                                                            <p>Pay via Cash on Delivery.</p>
                                                        </div>
                                                        <button className="button-continue-payment" type="submit">Checkout</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* checkout-area end */}
                    </div>
                </div>
                <Footer />

            </div>


        </>
    )
}

export default Checkout