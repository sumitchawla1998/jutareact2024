import React, { useState } from 'react'
import { error, success } from '../utils/messages'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase/firebasconfig'

function Newsletter() {
    let [email, setEmail] = useState("")

    async function submit(e) {
        e.preventDefault()

        if (email == "") {
            error("All Fields Are Required!")
            return
        }
        let colref = collection(db, "newsletter")
        await addDoc(colref, {
            "email": email,
        })

        success("Thank You For Newsletter Signup")
        setEmail("")

    }
    
  return (
    <>
          <div className="newsletter-area ptb-95">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="newsletter-inner text-center newsletter-bg">
                                    <h4 className="text">Join our</h4>
                                    <h2>Newsletters now!</h2>
                                    <p className="desc">Subscribe to the Juta mailing list to receive updates on new arrivals, offers and other discount information.</p>
                                    <form onSubmit={submit}  className="newletter-input popup-subscribe-form validate" target="_blank" noValidate>
                                        <input value={email} onChange={e=>setEmail(e.target.value)} id="mc-email" type="email" autoComplete="off" placeholder="Your email address" />
                                        <button id="mc-submit" type="submit" className="btn btn-primary"><span>Subscribe !</span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Newsletter