import { livros } from './dadosLancamento'
import styled from 'styled-components'
import { Titulo } from '../titulo'
import Card from '../card'
import livro2 from '../../imagens/livro2.png'

const LancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const LivrosLancamento = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`
//Os props servem para modificar um componente utilizando essas porps como se fossem atributos do componente
function Lancamentos() {
    return(
        <LancamentosContainer>
            <Titulo
            cor='#EB9B00'
            tamanhoFonte='36px'
            >ÚLTIMOS LANÇAMENTOS</Titulo>
            <LivrosLancamento>
                {livros.map(livro => (<img src={livro.src} alt={livro.nome}/>))}
            </LivrosLancamento>
            <Card 
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={livro2}
            />
        </LancamentosContainer>
    )
}

export default Lancamentos