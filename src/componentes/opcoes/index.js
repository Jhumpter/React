import styled from "styled-components"

const OpcoesContainer = styled.ul`
  display:flex;
`
const Opcao = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`

function Opcoes() {
    const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']
    return(
        <OpcoesContainer>
          {//A função .map passa por cada elemento da lista
          textoOpcoes.map((texto) => (<Opcao><p>{texto}</p></Opcao>))
          //texto representa cada elemento da lista
          }
        </OpcoesContainer>
        )
}

export default Opcoes