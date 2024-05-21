import React from 'react'
import Footer from './Footer'
import Header from '../../components/Header'
import Breadcrumb from '../../components/Breadcrumb'

function About() {
    return (
        <>
            <div className="wrapper about-page">
                <Header />

                <Breadcrumb title="About" />

                <div className="content-wraper mt-95">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-6">
                                <div className="about-us-img">
                                    <img alt src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-info-wrapper">
                                    <h2>Our company - Juta.</h2>
                                    <p>At Juta, we're not just selling shoes – we're curating experiences. With a passion for fashion and an eye for quality, we've become the go-to destination for footwear aficionados worldwide. Our online store offers a meticulously curated collection of shoes that blend comfort, craftsmanship, and contemporary style.</p>
                                    <p>From sleek sneakers to elegant heels, rugged boots to casual flats, we cater to every taste and occasion. Whether you're stepping out for a casual day or dressing to impress at a special event, Juta has the perfect pair to elevate your look.</p>
                                    <p>At Juta, customer satisfaction is our top priority. We offer seamless online shopping experiences, hassle-free returns, and responsive customer support to ensure your journey with us is nothing short of delightful.</p>
                                    <div className="read-more-btn">
                                        <a href="">read more</a>
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

export default About