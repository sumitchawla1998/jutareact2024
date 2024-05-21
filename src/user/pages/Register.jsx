import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from './Footer'
import Breadcrumb from '../../components/Breadcrumb'
import { auth, db } from '../../firebase/firebasconfig'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { addDoc, collection } from 'firebase/firestore'
import { success,error } from '../../utils/messages'
import { useNavigate } from 'react-router-dom'

function Register() {

    let [nm, setNm] = useState("")
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    let [mobile, setMobile] = useState("")
    
    let navigate = useNavigate()

    async function register(e) {
        e.preventDefault()

        if(nm == "" || email == "" || pwd == "" || mobile == ""){
            error("All Fields Are Required")
            return
        }


            let credentials = await createUserWithEmailAndPassword(auth, email, pwd)
            if (credentials.user != null) {
                await updateProfile(auth.currentUser, { displayName: nm })
                let colref = collection(db, "users")
                await addDoc(colref, {
                    "uid": auth.currentUser.uid,
                    "nm": nm,
                    "email": email,
                    "pwd": pwd,
                    "mobile":mobile,
                })

                success("Registration Successfull")
                navigate("/login")
            }
            else {
                error("Registration Failed")
            }
        } 

 

    return (
        <div className="wrapper login-register-page">
            <Header />

            <Breadcrumb title="Register" />

            <div className="content-wraper mt-95">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-lg-6  col-md-6 col-sm-12">
                            <div className="customer-login-register">
                                <h3>Register</h3>
                                <div className="login-Register-info">
                                    <form action="#" onSubmit={register}>
                                        <p className="coupon-input form-row-first">
                                            <label>Name <span className="required">*</span></label>
                                            <input onChange={e=>setNm(e.target.value)} type="text" name="email" />
                                        </p>

                                        <p className="coupon-input form-row-first">
                                            <label>Email <span className="required">*</span></label>
                                            <input onChange={e=>setEmail(e.target.value)} type="text" name="email" />
                                        </p>
                                        <p className="coupon-input form-row-last">
                                            <label>Password <span className="required">*</span></label>
                                            <input onChange={e=>setPwd(e.target.value)} type="password" name="password" />
                                        </p>
                                        <p className="coupon-input form-row-last">
                                            <label>Mobile <span className="required">*</span></label>
                                            <input onChange={e=>setMobile(e.target.value)} type="text" name="password" />
                                        </p>

                                        <div className="clear" />
                                        <p>
                                            <button className="button-login" type="submit">Register</button>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />


        </div>
    )
}

export default Register