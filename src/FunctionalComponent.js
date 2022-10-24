import React, { useContext } from 'react'
import './FunctionalComponent.css'
import {ThemeContext} from './App'

function FunctionalComponent() {

    const darkTheme = useContext(ThemeContext)

    const style = {
        'height': '150px',
        'width': '150px',
        'borderRadius': '1rem',
        'backgroundColor': darkTheme ? '#111' : '#444',
        'color': darkTheme ? 'white' : 'cyan',
        'textAlign': 'center',
        'padding': '2.5rem'
    }
    return (
        <div className='container'>
            <div style={style}> Function Theme
            </div>
        </div>
    )
}

export default FunctionalComponent
