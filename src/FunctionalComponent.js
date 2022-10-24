import React from 'react'
import './FunctionalComponent.css'
import { useTheme, useUpdateTheme } from './ThemeContext'

function FunctionalComponent() {

    const darkTheme = useTheme()
    const toggleTheme = useUpdateTheme()
    const style = {
        'height': '150px',
        'width': '150px',
        'border-radius': '1rem',
        'backgroundColor': darkTheme ? '#111' : '#444',
        'color': darkTheme ? 'white' : 'cyan',
        ' text-align': 'center',
        'padding': '2.5rem'
    }
    return (
        <div className='container'>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <div style={style}> Function Theme
            </div>
        </div>
    )
}

export default FunctionalComponent
