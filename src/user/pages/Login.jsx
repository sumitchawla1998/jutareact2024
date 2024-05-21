import React, { useState } from 'react'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'
import Register from './Register'
import Footer from './Footer'
import { error, success } from '../../utils/messages'
import { useUserStore } from '../../store/user'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase/firebasconfig'
import { useNavigate } from 'react-router-dom'

function Login() {
    let [email, setEmail] = useState("")
    let [pwd, setPwd] = useState("")
    let navigate = useNavigate()

    let login = useUserStore((state) => state.login)

    async function signin(e) {
        e.preventDefault()

        if(email == "" || pwd == ""){
            error("All Fields Are Required")
            return
        }

        let credentials = await signInWithEmailAndPassword(auth, email, pwd)
        
        if(credentials.user != null){
            login(credentials.user)
            success("Login Successfull")
            navigate("/",{replace:true})
        }
        else{
            error("Please Enter Valid Username or Password")
        }

        
    }
    return (
        <>
            <div className="wrapper login-register-page">
                <Header />
               
                <Breadcrumb title = "Login"/>
               
                <div className="content-wraper mt-95">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="customer-login-register">
                                    <h3>Login</h3>
                                    <div className="login-Register-info">
                                        <form action="#" onSubmit={signin}>
                                            <p className="coupon-input form-row-first">
                                                <label>Email <span className="required">*</span></label>
                                                <input onChange={e=>setEmail(e.target.value)} type="text" name="email" />
                                            </p>
                                            <p className="coupon-input form-row-last">
                                                <label>Password <span className="required">*</span></label>
                                                <input onChange={e=>setPwd(e.target.value)} type="password" name="password" />
                                            </p>
                                            <div className="clear" />
                                            <p>
                                                <button value="Login" name="login" className="button-login" type="submit">Login</button>
                                                <label><input type="checkbox" defaultValue={1} /><span>Remember me</span></label>
                                                <a href="#" className="lost-password">Lost your password?</a>
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

        </>
    )
}

export default Login