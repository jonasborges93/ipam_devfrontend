import { ThemeItem } from './style';

export function ThemeColor() {

    return (
        <ThemeItem>
            <input 
                type="checkbox" 
                name="darkmode-toggle" 
                id="darkmode-toggle" 
            />
            <label htmlFor="darkmode-toggle">
                <i className="uil uil-sun"></i>
                <i className="uil uil-moon"></i>
            </label>
        </ThemeItem>
    )
}