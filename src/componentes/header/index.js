import Logo from '../../componentes/logo'
import Opcoes from '../../componentes/opcoes'
import Icones from '../../componentes/icones'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: white;
    display: flex;
    justify-content: center;
`

function Header() {
    return(
    <HeaderContainer>
        <Logo/>
        <Opcoes/>
        <Icones/>
    </HeaderContainer>
    )
}

export default Header