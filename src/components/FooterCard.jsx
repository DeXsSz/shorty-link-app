import React from 'react'

export const FooterCard = ({ title, links }) => {
    return (
        <li className='footer__card'>
            <p className='footer__title'>
                {title}
            </p>
            {links.map((link, i)=>{
                return <li key={i}>{link}</li>
            })}
        </li>

    )
}
