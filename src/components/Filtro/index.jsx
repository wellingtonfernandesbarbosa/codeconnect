import './styles.css';

export default function Filtro() {
  return(
    <div className='container-filtro'>
      <ul>
        <li>Front-end</li>
        <li>React</li>
        <li>Acessibilidade</li>
      </ul>
      <button className='botao_limpar'>Limpar tudo</button>
    </div>
  )
}
