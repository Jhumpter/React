import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
  cursor: pointer;
`
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

function Icones() {
    const icones = [perfil, sacola]
    return(
        <IconesContainer>
          {icones.map((icone)=>(<Icone><img src={icone} alt='Ícone'></img></Icone>))}
        </IconesContainer>
    )
}

export default Icones