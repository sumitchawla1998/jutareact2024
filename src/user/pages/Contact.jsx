import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from './Footer'
import { error, success } from '../../utils/messages'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase/firebasconfig'


function Contact() {
    let [fnm, setFnm] = useState("")
    let [lnm, setLnm] = useState("")
    let [email, setEmail] = useState("")
    let [subject, setSubject] = useState("")
    let [msg, setMsg] = useState("")


    async function send(e) {
        e.preventDefault()

        if(fnm == ""|| lnm =="" || email == ""||subject==""||msg==""){
            error("All Fields Are Required")
            return
        }
        fetch("https://formsubmit.co/ajax/036686b72855453aab80c1ad8c3e0a21", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                fnm: fnm,
                lnm: lnm,
                email: email,
                subject: subject,
                msg: msg,
            })
        })
            .then(response => response.json())
            .then(data => success("Thank You for contacting us"))
            .catch(error => error("Something went wrong"));

        let colref = collection(db,"contacts")
        addDoc(colref,{
            fnm : fnm,
            lnm : lnm,
            email : email,
            subject : subject,
            msg : msg,
        })

        setFnm("")
        setLnm("")
        setEmail("")
        setSubject("")
        setMsg("")
    }


    return (
        <>
            <div className="wrapper contact-page">
               
               <Header />
                {/* breadcrumb-area start */}
                <div className="breadcrumb-area bg-gray">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="breadcrumb-list">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active">Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* breadcrumb-area end */}
                {/* content-wraper start */}
                <div className="content-wraper">
                    <div className="container-fluid  p-0">
                        <div className="row no-gutters">
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                                <div className="contact-form-inner">
                                    <h2>TELL US YOUR PROJECT</h2>
                                    <form onSubmit={send} id="contact-form" >
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6">
                                                <input onChange={e=>setFnm(e.target.value)} type="text" placeholder="First name*" name="name" />
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <input  onChange={e=>setLnm(e.target.value)} type="text" placeholder="Last name*" name="lastname" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 col-lg-6">
                                                <input type="email" placeholder="Email*" name="email"  onChange={e=>setEmail(e.target.value)} />
                                            </div>
                                            <div className="col-md-6 col-lg-6">
                                                <input type="text" placeholder="Subject*" name="subject"   onChange={e=>setSubject(e.target.value)}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <textarea placeholder="Message *" name="message"  onChange={e=>setMsg(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="contact-submit-btn">
                                            <button className="submit-btn" type="submit">Send Email</button>
                                           
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12 plr-0">
                                <div className="contact-address-area">
                                    <h2>CONTACT US</h2>
                                    <p>Connect with Juta.com: Reach Out for Inquiries, Support, and Collaborations. Let's Create Exceptional Experiences Together! Contact Us for Assistance, Feedback, or Partnership Opportunities. Your Input Matters. Get in Touch Today!</p>
                                    <ul>
                                        <li>
                                            <i className="fa fa-fax">&nbsp;</i> Address : 202,Radhaswami Swamipia, VV Nagar, Gujarat 388120</li>
                                        <li>
                                            <i className="fa fa-phone">&nbsp;</i> support@ultrontechnologies.in</li>
                                        <li>
                                            <i className="fa fa-envelope-o" />&nbsp; +91 7990456948</li>
                                    </ul>
                                    <h3>
                                        Working hours
                                    </h3>
                                    <p className="m-0"><strong>Monday – Saturday</strong>: &nbsp;08AM – 9PM</p>
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

export default Contact