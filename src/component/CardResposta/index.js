import './style.css'
import { Fragment, useEffect } from 'react'


export default function CardResposta ({nome,resposta}){
    
return(
    <Fragment>                       
          <div 
          style={{backgroundColor:`${resposta.color}`}} 
          className=' topico-resposta '>                          
            <div className='wrapper-resposta'>
                <div className='author-resposta'>
                  <p>{resposta.name}</p>
                </div>
                <div className='author-icon'>
                    <p>{resposta.autor}</p>
                    {resposta.img && <img src={ resposta.img}></img> }  
                  </div>
              </div>
                                                         
              <div className='conteudo-resposta'>
                <p>{resposta.content}</p>
              </div>
          </div>
                            
    </Fragment>
)
   

}