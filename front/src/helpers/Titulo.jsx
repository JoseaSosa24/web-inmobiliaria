import React from 'react'

export const Titulo = ({classSection, children}) => {
    return (
        <section className={'section-titulo '+classSection}>
            <h2 className='titulo'> {children} </h2>
        </section>
    )
}
