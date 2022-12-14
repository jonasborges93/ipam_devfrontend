import { useState } from 'react'
import { ThemeItem } from './style'
export function ThemeColor() {
    const [isChecked, setIsChecked] = useState(true)

    const handleChange = () => {
        setIsChecked(!isChecked)
    }

    return (
        <ThemeItem>
            <label htmlFor="light">
                <input 
                    type="radio" 
                    name="themecolor" 
                    id="light" 
                    checked={isChecked} 
                    onChange={handleChange} 
                />
                <i className="uil uil-sun"></i>
            </label>
            <label htmlFor="dark">
                <input 
                    type="radio" 
                    name="themecolor" 
                    id="dark" 
                    checked={!isChecked} 
                    onChange={handleChange} 
                />
                <i className="uil uil-moon"></i>
            </label>
        </ThemeItem>
    )
}