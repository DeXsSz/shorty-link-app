import axios from 'axios';
import React from 'react'

export const Form = ({ input, setInput, setShorts }) => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (input.trim().length === 0) return

        try {
            const { data } = await axios.get(`https://api.shrtco.de/v2/shorten?url=${input}`)
            const obj = await {
                link: input,
                shortLink: await data.result.full_short_link
            }
            setShorts((data) => [...data, obj])
            setInput('')
        } catch (error) {
            setInput('')
        }
    }
    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className="form-campo">
                <input type="text" placeholder='Shorten a link here...' value={input} onChange={(e) => setInput(e.target.value)} />
                <button type='submit' className='btn btn-cyan'>Shorten It!</button>
            </div>
        </form>
    )
}
