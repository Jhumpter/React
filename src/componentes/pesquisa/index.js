import styled from "styled-components";
import Input from "../input";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
/*input tem o atributo onBlur, uma função chamada sempre que o usuário escreve algo no campo e sai dele em seguida.
O blur é um evento. E, quando lidamos com eventos, podemos manipular os dados com o parâmetro evento, que traz consigo evento.target.value, que representa o elemento escrito no input.*/

function Pesquisa() {
    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input 
                placeholder="Encontre a sua próxima leitura"
                onBlur={evento => console.log(evento.target.value)}
            />
        </PesquisaContainer>
    )
}

export default Pesquisa