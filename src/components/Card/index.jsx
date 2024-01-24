/* eslint-disable react/prop-types */ 
import './styles.css';
import Code from './assets/code.svg';
import Chat from './assets/chat.svg';
import Share from './assets/share.svg';


export default function Card({
  imagemURL,
  titulo,
  resumo,
  linhasDeCodigo,
  compartilhamentos,
  comentarios,
  usuario,
}){

  return(
    <article className='card'>
      <div className="card__imagem">
        <img src={imagemURL} alt="Imagem do post" />
      </div>
      <div className='card__conteudo'>
        <div className="conteudo__texto">
          <h3>{titulo}</h3>
          <p>{resumo}</p>
        </div>
        <div className="card__rodape">
          <ul>
            <li><img src={Code} alt="codigos" />{linhasDeCodigo}</li>
            <li><img src={Share} alt="compartilhamentos" />{compartilhamentos}</li>
            <li><img src={Chat} alt="comentarios" />{comentarios}</li>
          </ul>
          <div className="rodape__usuario">
            <img src={usuario.imagem} alt="Imagem do usuário" />@{usuario.nome}</div>
        </div>
      </div>
    </article>
  )
}
