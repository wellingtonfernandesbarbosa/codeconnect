import { useEffect, useState } from 'react'
import './App.css'

import BarraDePesquisa from './components/BarraDePesquisa'
import Card from './components/Card'
import Filtro from './components/Filtro'
import Ordenacao from './components/Ordenacao'
import Sidebar from './components/Sidebar'

function App() {
  const API = 'https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes';

  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(API).then(res => res.json()).then(dados => setDados(dados))
  }, [])

  return (
    <div className='container'>
      <Sidebar />
      <div className='container-conteudo'>
        <BarraDePesquisa />
        <Filtro />
        <Ordenacao />
        <ul className='lista-cards'>
          {dados ? dados.map((item, index) => (
            <li key={index}>
              <Card
                id={item.id}
                imagemURL={item.imagem_capa}
                titulo={item.titulo}
                resumo={item.resumo}
                linhasDeCodigo={item.linhas_de_codigo}
                compartilhamentos={item.compartilhamentos}
                comentarios={item.comentarios}
                usuario={item.usuario}
              />
            </li>
          )) : null}
        </ul>
      </div>
    </div>
  )
}

export default App
