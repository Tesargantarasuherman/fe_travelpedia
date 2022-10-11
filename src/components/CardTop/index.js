import React from 'react'
import './index.css'

export default function CardTop() {
    return (
        <div className="container-card-top-plan-trips">
            <div className="body-card-top-plan-trips">
                <div className="content-top-card-top-plan-trips">
                    <button className='button-content-top-card-top-plan-trips'>lorem</button>
                    <span className="lnr lnr-heart" style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}></span>
                </div>
                <div className="content-bottom-card-top-plan-trips">
                    <p className='title-content-bottom-card-top-plan-trips'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80" alt="" srcset="" className='img-card-top-plan-trips' />
        </div>
    )
}