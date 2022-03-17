import React from 'react'
import { Card } from './Card'
import recognition from '../assets/images/icon-brand-recognition.svg'
import records from '../assets/images/icon-detailed-records.svg'
import fully from '../assets/images/icon-fully-customizable.svg'
import { Results } from './Results'

export const AdvancedStatistics = ({shorts}) => {
    return (
        <section className='advannced'>

            <div className="container">
                <div className="results__content">
                    {
                        shorts? (shorts.map((short, i)=> {
                            return <Results key={i} short={short}/>
                        })): null
                    }
                </div>
                <h1>Advanced Statistics</h1>

                <p className='advannced__subtitle'>
                    Track how your links are performing across the web with our
                    advanced statistics dashboard.

                </p>

                <div className="grid-section">
                    <Card title="Brand Recognition" desc="Boost your brand recognition with each click. Generic links don’t
                mean a thing. Branded links help instil confidence in your content." icon={recognition} />
                    <Card title="Detailed Records" desc="Gain insights into who is clicking your links. Knowing when and where
                people engage with your content helps inform better decisions." icon={records} />
                    <Card title="Fully Customizable" desc="Improve brand awareness and content discoverability through customizable
                links, supercharging audience engagement." icon={fully} />
                </div>
            </div>


        </section>
    )
}
