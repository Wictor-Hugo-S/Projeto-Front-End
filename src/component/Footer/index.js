import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import logoFooter from '../../assets/logoFooter.png'
import './style.css'



export default function Footer(){

    return(
        <Fragment>
           
          
               <div className='container'>
                   <div className='footer-content'>
                        <div className='icon-footer'>
                             <img src={logoFooter}></img>

                             <div  className='saiba-mais'>
                                <a target='_blank' href="https://galoa.com.br/"> Saiba mais</a>
                             </div>
                        </div>
                         
                             <div className='footer-descricao'>
                                 <p>
                                    <strong>Preservar a memória do evento e ampliar o acesso ao conhecimento científico</strong> gerado em eventos 
                                    é a razão de ser da plataforma Galoá Proceedings.

                                 </p>
                                 <p>
                                 Os trabalhos publicados aqui têm maior alcance e ficam disponíveis para toda a comunidade científica, 
                                 mantendo acesso o debate científico fomentado pelos encontros e aumentando o impacto do evento.
                                 </p>
                             </div>

                    </div>
               </div>
          
        </Fragment>
    )

}