import React from 'react'
import iconWorking from '../assets/images/illustration-working.svg'
import { Form } from './Form'
export const HeaderMain = ({input, setInput, setShorts}) => {
    return (
        <div className='headerMain container'>
            <div className='header__content'>
                <h1>More than just shorter links</h1>

                <p>Build your brand’s recognition and get detailed insights
                    on how your links are performing.
                </p>

                <button className='btn btn-getStarted'>Get Started</button>
            </div>
            <div className='header__img'>
                <img src={iconWorking} alt="" />
            </div>
            <Form input={input} setInput={setInput} setShorts={setShorts}/>
        </div>
    )
}
