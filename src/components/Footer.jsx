import React from 'react'
import logo from '../assets/images/logo.svg';
import { FooterCard } from './FooterCard';
const data = [{
    title: 'Features',
    links: ['Link Shortening', 'Branded Links', 'Analytics']
},
{
    title: 'Resources',
    links: ['Blog', 'Developers', 'Support']
},
{
    title: 'Company',
    links: ['About', 'Our Team', 'Careers', 'Contact']
}
]
export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container footer__content'>
                <img src={logo} alt="Logo" />
                <ul >
                    {
                        data.map((doc, i) => {
                            return <FooterCard key={i} title={doc.title} links={doc.links} />
                        })
                    }
                </ul>
            </div>
        </footer>
    )
}
