import styled from "styled-components";
import Input from "../input";
import { useState } from "react";
//Assim que cria-se um estado no react
import { livros } from "./dadosLivros";

const PesquisaContainer = styled.section`
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

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`


function Pesquisa() {
    /*Para criar um estado cria-se uma constante com colchetes, em que o primeiro elemento é o nome do estado e o segundo é a função que vai 'setar' o estado (que muda o valor dele), utilizando como nome por conveniência setEstado. Essa const vai ser = useState(valor_inicial). Depois é só colocar o set no lugar que é modificado*/ 
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder="Encontre a sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    //Guardando o texto da pesquisa em uma variável
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    //Usando .fiter, que mantém na lista apenas os itens que sejam de acordo com o filtro. Como parâmetro, passando o índice nome e o .includes para saber se inclui o elemento passado como parâmetro
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            { livrosPesquisados.map( livro => (
                <Resultado>
                    <img src={livro.src} alt={livro.nome}/>
                    <p>{livro.nome}</p>
                </Resultado>
                
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa