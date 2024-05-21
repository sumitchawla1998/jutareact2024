import React from 'react'

function Breadcrumb({ title }) {
    return (
        <>
            <div className="breadcrumb-area bg-gray">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="breadcrumb-list">
                                <li className="breadcrumb-item"><a href="">User</a></li>
                                <li className="breadcrumb-item active">{title}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Breadcrumb