//Para passar a img em react, importa-se a imagem
import Header from './componentes/header';
import styled from 'styled-components';
//Com styled components é possível excluir o css de containers passando a estilização para a página principal
//É possível exportar um componente já estilizado usando styled(componente)
import Pesquisa from './componentes/pesquisa';
import Lancamentos from './componentes/lancamentos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`
//Para criar um estilo global é necessário ir em index.js e importar { createGlobaStyle }

function App() {
//No HTML a classe é definida por class, no react é por className
//Tags sem filhos podem ser usados como <tag/>
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <Lancamentos/>
    </AppContainer>
  );
}
//Sempre que houver um import, também é necessário um export
export default App
