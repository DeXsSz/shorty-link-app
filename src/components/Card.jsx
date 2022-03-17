import React from 'react'

export const Card = ({ title, icon, desc }) => {
    return (
        <div className="card">
            <div className='card__icon'>
                <img src={icon} alt="" />
            </div>

            <h3>
                {title}
            </h3>
            <p>
                {desc}
            </p>
        </div>
    )
}
