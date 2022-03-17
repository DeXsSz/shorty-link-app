import React, { useRef } from 'react'

export const Results = ({short}) => {
    const ref = useRef()
    const handleCopy = ()=>{
        navigator.clipboard.writeText(short.shortLink)
        ref.current.textContent = 'Copied!';
        ref.current.style.backgroundColor = 'hsl(257, 27%, 26%)'
        ref.current.style.transition = 'background-color .8s ease-in-out'
        setTimeout(()=>{
            ref.current.textContent = 'Copy';
        ref.current.style.backgroundColor = 'hsl(180, 66%, 49%)'

        },2000)
    }
    return (
        <div className='results'>
            <h3 className='link'>{short.link}</h3>
            <div>
                <h4 className='link-short'>{short.shortLink}</h4>
                <button className='btn btn-cyan' onClick={handleCopy} ref={ref}>Copy</button>
            </div>
        </div>
    )
}
