import './style.css'
import { Link } from 'react-router-dom'

import {ImBin} from 'react-icons/im'
import info from '../../assets/info.png'
import favoritar from '../../assets/favoritar.png'

import author from '../../assets/author.png'
import { Fragment, useEffect, useState } from 'react'
import CardResposta from '../CardResposta'

import cooAuthor from '../../assets/cooAuthor.png'



const RESPOSTA_DEFAULT=[
    {
       name:'Adriano da Silva',
        content:`Resposta do autor é aqui. 
        Relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo resente 
        relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo.`,
        isActive:true,
        color:'#F8F8F8',
        img:cooAuthor,
        autor:'Autor'
    },
    {
        
            name:'',
            content:`Consegui entender melhor agora! Parece que a variação da análise da dimensão e 
            impacto de processo formativo situado impacto de processo formativo.
            Obrigada pela resposta, muito interessante o seu trabalho! `,
            isActive:false,
            color: 'white',
            img:null,
            autor:''    
    },

    {
        name:'Camila Ferreira Andrade',
        content:`Também ínteressante lembrar que o relato inscreve-se no campo da análise da dimensão e impacto de processo formativo situado impacto de processo formativo processo 
        resente relato inscreve-se no campo da análise da dimensão e
         impacto de processo formativo situado impacto de processo formativo processo.
        Situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e 
        impacto de processo formativo situado impacto de processo formativo processo. `,
        isActive:true,
        color:'#F8F8F8',
        img:cooAuthor,
        autor:'Cooautor'
},
{
    name:'Ana Carolina',
    content: ` Resposta do autor é aqui. Relato inscreve-se no campo da análise da dimensão e 
    impacto de processo formativo situado impacto de processo formativo processo resente relato inscreve-se no campo da análise da dimensão e 
    impacto de processo formativo situado impacto de processo formativo processo.`,
    isActive:true,
    color:'#F8F8F8',
    img:cooAuthor,
    autor:'Cooautor'
}
    
]

   
const handleNome=[
    'Wictor Hugo Barbosa',
    'Carlos Henrique Santos',
    'Eduarado Maia Souza',
    'Vinicius Brenner Souza ',
    'Luan Cavalcante Lima'
]



export default function CardPergunta({handleExcluir,pergunta}){
    const[resposta,setResposta]=useState([...RESPOSTA_DEFAULT])
    const [contador,setContador]=useState(pergunta.like)
    const[name,setName]=useState('')
    const[verResposta,setVerResposta]=useState(false)
    
    const[verLixeira,setVerLixeira]=useState(false)

 
useEffect(()=>{
    const numberSort = Math.floor(Math.random()*5)
    setName(handleNome[numberSort])
    

   const nameSortido= resposta.map((item,index)=>{
     
      return item.name===''? {...item,name : handleNome[numberSort]}
        :{...item}
    })
    
 
setResposta(nameSortido)


},[])

    function handleContador() {
        setContador(contador+1)
    }

    function handleResposta(){
        if(pergunta.verResposta>1){
            setVerResposta(!verResposta)
        }
    }

    function handleLixeira(){
        setVerLixeira(!verLixeira)
    }

    

    return(
        <>
             <div className='container-feedback'> 
                <div className='feedback-autores'>
                        <div className={`${pergunta.resposta.length===0 ?'wrapper-feedback':'none'}`}>
                            <div className='mod-feedback'>
                                       <div className='icon-author'>
                                           <img src={author}></img>
                                       </div>
                                    <div className='title-feedback'>
                                       <p>Aguardando feedback dos autores </p>
                                   </div>
                                   <div className='editar-feedback'>
                                       <Link className='link-edit' to="/">Editar Tópico</Link>
                                   </div>
                            
                               </div>
                        </div>
                        <div className='wrapper-questions'>
                             <div className='box-feedback'>
                                    <div class="topico-principal">
                                         <p class="topico-assunto">{pergunta.assunto}</p>
                                        <p class="topico-name-autor">{name}</p>
                                    </div>
                                    <p class="topico-conteudo"> {pergunta.content}</p>
                             </div>
                        </div>
                        {pergunta.resposta.length&&(
                            <>
                                <div className='topico-adicionais'>
                                        {verLixeira&&(
                                            <div className='excluir'>
                                                <p className='tooltip'>< ImBin  onClick={()=>handleExcluir(pergunta.id)}/>
                                                    <p style={{left:'18px'}} className='tooltiptext'>Excluir</p>
                                                </p> 
                                            </div>
                                        )}
                                        <div className={`${verLixeira?'animation-lixeira':'mais-info'}`}>
                                            <p className='tooltip'><img onClick={handleLixeira} src={info}></img>
                                                <p style={{left:'5px'}} className='tooltiptext'>Mais info</p>
                                            </p> 
                                        </div>
                                        <div className='favoritar '>
                                            <p className='tooltip'> <img onClick={handleContador} src={favoritar}></img>
                                                <p className='tooltiptext'>Clique aqui para dá Like</p>
                                            </p>
                                        </div>
                                        <div className='likes'>
                                            <a >{contador} like</a>
                                        </div>
                                        <div    className='resposta'>
                                            <button button onClick={handleResposta} type='button'> {pergunta.verResposta} Ver resposta</button>
                                        </div>
                     
                       
                                    </div>

                  
                                {verResposta && (
                                    <>
                                        <div style={{width:'100%',borderBottom: '1px solid #E7E7E7',zIndex:'9999',marginTop:'10px',marginBottom:'5px'}} className='separar-content'></div>
                                        <div className='box-resposta'>
                                            {resposta.map((item,index)=>{
                                                return(
                                                    <div key={index}>
                                                        <CardResposta resposta={item} nome={name}/>
                                                    </div>
                                                )
                                            })}
                               
                                        </div>
                                     </>
                         
                                )}

                            </>
                        )}
               </div>
            </div>
        </>
    )
}