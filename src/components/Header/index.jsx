import { ThemeColor } from '../ThemeColor'
import { HeaderComponent, HeaderContainer, HeaderFlex } from './style'

export function Header() {
    return (
        <HeaderComponent>
            <HeaderContainer>
                <HeaderFlex>
                    <h1>Dev Front End</h1>
                    <ThemeColor />
                </HeaderFlex>
            </HeaderContainer>
        </HeaderComponent>
    )
}