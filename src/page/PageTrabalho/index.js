import { useState,useEffect, Fragment } from 'react'

//ICON REACT
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillStar} from 'react-icons/ai'

//IMPORT CSS
import './style.css'

//IMPORT COMPONENTS
import Aside from '../../component/Aside'
import CardInfo from '../../component/CardsInfo'
import Footer from '../../component/Footer'
import CardPergunta from '../../component/CardPergunta'
import Modal from '../../component/Modal'



// IMPORT ICONS
import languageImage from'../../assets/languageImage.png'
import userImg from '../../assets/userImg.png'
import doi from '../../assets/doi.png'
import download from '../../assets/download.png'
import criar from '../../assets/criar.png'
import iconBold from '../../assets/iconBold.png'
import iconItalic from '../../assets/iconItalic.png'
import iconMao from '../../assets/iconMao.png'
import iconQA from '../../assets/iconQA.png'
import iconPessoa from '../../assets/iconPessoa.png'

function idAleatorio(){
    return Math.floor((Math.random()*100000)+1)
}


const PERGUNTA_DEFAULT=[
    {
        assunto:'Assunto da pergunta aparece aqui',
        content:`Comecinho da pergunta aparece aqui resente relato inscreve-se
        no campo da análise da dimensão e impacto de processo
        formativo situado impacto de processo formativo processo...`,
        like:1,
        verResposta:1,
        resposta:[0],
        id:idAleatorio()
    },
    {
        
            assunto:'Assunto da pergunta aparece aqui',
            content:`Comecinho da pergunta aparece aqui resente relato inscreve-se
            no campo da análise da dimensão e impacto de processo
            formativo situado impacto de processo formativo processo...`,
            like:4,
            verResposta:4,
            resposta:[0],
            id:'1100001042211412414'
        
    }

  
]

export default function PageTrabalho() {

    
    //MENU REPONSIVO
    const[resize,setResize]=useState(false)
    const[tamanho,setTamanho]=useState({windowWidth : window.innerWidth})
    const[isOpen,setIsOpen]=useState(true)
    const[menu,setMenu]=useState(true)
    // PEGAR INPUT ASSUNTO
    const[assunto,setAssunto]=useState('')
    const[conteudo,setConteudo]=useState('')

    //MUDAR TEXTO
    const[texto,setTexto]=useState(false)
    const[fontItalic,setFontItalic]=useState(false)
    const[fontBold,setFontBold]=useState(false)
    
    //OBJETO DE PERGUNTAS 
    const[perguntas, setPerguntas]=useState(PERGUNTA_DEFAULT)
    //CRIAR NOVO TOPICO
    const [novoTopico,setNovoTopico]=useState(false)
    //TOPICO ENVIADO
    const[topicoEnviado,setTopicoEnviado]=useState(false)

    //ABRIRMODAL
    const [modalIsOpen,setModalIsOpen]=useState(false)
    //CONTEUDO PARA O MODAL
    const [detail,setDetail]=useState()

    //ABRIR MENU
    function handleMenu(){
        setMenu(!menu)
        setIsOpen(!isOpen)
        openModal()
        
    
    }

    //PEGAR O TAMANHO DA RESOLUCAO ATUAL
const handleResize=(e)=>{
    setTamanho({windowWidth:window.innerWidth })
}

useEffect(()=>{
    window.addEventListener('resize',handleResize)

    },[])


useEffect(()=>{ 
  if(tamanho.windowWidth<=780 && resize===false){
     
      setMenu(false)
      setResize(true)   
  }

 },[tamanho])


 //carregar novo texto mudando seu estado
 function handleTexto(){
setTexto(!texto)
    
 }

//verificando se Novo topico criado e o topico enviado estão true

useEffect(()=>{
    if(novoTopico===true&&topicoEnviado===true){

        setTopicoEnviado(false)
    }
  
},[novoTopico])

//abrindo motal
function openModal() {
  
    setModalIsOpen(true);
  }

  //fechando modal
  function togglePostModal(){
  setModalIsOpen(!modalIsOpen)
  setMenu(!menu)
  
          
}
//funcao para mostrar a parte de criar um topico
 function handleCriarTopico(){
     setNovoTopico(true)
 }

 //enviando topico
 function handleEnviarTopico(e){
     e.preventDefault()
     setTopicoEnviado(!topicoEnviado)
     const newPergunta={
        assunto,
         content:conteudo,
         like:0,
         resposta:[],
         id:idAleatorio()
         
     }

     const clonePerguntas=[...perguntas]
   
     clonePerguntas.unshift(newPergunta)
   
     

     setPerguntas(clonePerguntas)
    setNovoTopico(false)
    setAssunto('')
    setConteudo('')
 }
//italic
 function handleItalic(){
     setFontItalic(!fontItalic)   
 }
 //bold
 function handleBold(){
    setFontBold(!fontBold)  
}

//EXCLUIR CARD PERGUNTA
function handleExcluir (id){
    const filtroExcluid=perguntas.filter(item=>item.id!=id)
    setPerguntas(filtroExcluid)
    
}

    return(
    <>
                     
    <main>
        
        <Aside/>   
        
        
            <header className='cabecalho'>
               
         
                    <div style={{zIndex:'999',opacity:'1'}} className='menu-mobile  modal-menu-mobile'>
                        <GiHamburgerMenu size={25} color="black"  onClick={handleMenu}></GiHamburgerMenu>
                    
                        {menu&&(
                             
                         <>
                             {modalIsOpen? ( 
                                 
                                <Modal  detail={<Aside show={isOpen}/>} 
                               close={togglePostModal}
                                   >  
                                </Modal>     
                              
                                
                                   ):''}
                                    
                                 
                                   </>
                                   
                        
                        )}
                        </div>
                       
                    
                      
          
            <div className='container'>
                
                <div className={` ${modalIsOpen?'box-cabecalho modal':'box-cabecalho'}`}>
                  
                    <div className='texto-header'>
                        <div className='text-header-1'>
                            <p>Anais do Simpósio Latino Americano de Ciências de Alimentos </p>
                        </div>
                        <div className='text-header-2'>
                         <p>Anais do 13º Simpósio Latino Americano de Ciência de Alimentos </p>
                        </div>
                        <div className='text-header-3'>
                            <p>ISSN: 1234-5678</p>
                        </div>
                    </div>
                    <div className='language'>
                        <div className='icon-language'>
                            <img src={languageImage} alt='logo Language'></img>
                        </div>
                       <div className='select-language'> 
                           <select>
                                <option>PT,BR</option>
                                <option>PT,PT</option>
                                <option>EN,US</option>
                                <option>EN,EN</option>
                            </select>
                        </div>
                    </div>
                    <div className='usuario'>
                        <div className='title'>
                            <p>Bem vindo!</p>
                            <a className="email" href="mailto:alguem12@galoascience.com">alguem12@galoascience.com</a>
                        </div>
                        <div className='img-user'>
                            <img src={userImg} alt="image do usuário"></img> 
                            <p>2</p>
                        </div>
                    </div>
                
                
                </div>
                </div>
            </header>

            <section className={`${modalIsOpen?'modal content':'content'}`}>
                <div className='container'>
                    <div className='conteudo-principal'>
                        <div className='title-principal'>
                            <p>
                                Análise sensorial de preparações funcionais desenvolvidas para escolares entre 09 e 
                                <br/> 15 anos, do município de Campinas/SP 
                            </p>
                        </div>
                        <div></div>

                        <div className='botoes-info'>
                            <button type='button'> <img src={download}></img>Download</button>
                            <button type='button'><AiFillStar size={15}/></button>
                            <button type='button'><img src={doi} style={{width:'15px',height:'15px'}} ></img></button>
                                <div className='citar-trabalho'>
                                    <a>Como citar esse trabalho</a>
                                </div>
                        </div>
                    </div>
                        

                   
                <div className='box-conteudo'>
                        <div className='box-video'>
                            <iframe className='video-content' 
                                src="https://www.youtube.com/embed/NcKp6dXNUxk" title="Video TEste" 
                                allowfullscreen>
                            </iframe>
                        </div>
                        
                        <div className='detalhe-conteudo'>
                                <div className='title-detalhe'>
                                    <h2>Detalhes</h2>
                                </div>
                            <div className='detalhe-descricao'>
                                    <div className='detalhe-info'>
                                        <p> Tipo de Apresentação:<strong>  Pôster</strong> </p>
                                        <p> Eixo temático:<strong>  Alimentação e saúde (AS)</strong> </p>
                                        <p>Palavras-chaves: <strong> funcionais, alimentação escolar.</strong> </p>
                                    </div>
                                <div className='detalhe-autor'>
                                    <p>  <strong style={{fontWeight:'900'}}>Autores:</strong>
                                    Galileo Galilei¹
                                    <br/>
                                    Berta Lange de Morretes²
                                    <br/>
                                    Isaac Newton³
                                    <br/>
                                    Cesar Lattes¹
                                    <br/>
                                    Stephen Hawking⁴
                                    </p>

                                </div>
                                <div className='detalhe-universidades'>
                                    <p>
                                        ¹Universidade Estadual de Campinas
                                        <br/>
                                        ²Universidade de São Paulo
                                        <br/>
                                        ³Instituto Nacional de Pesquisas Espaciais
                                        <br/>
                                        ⁴Universidade Federal do Rio de Janeiro
                                        <br/>
                                        <br/>
                                        <br/>
                                        It is a long established fact that a reader will be distracted by the readable content 
                                        of a page when looking at its layout. The point of using Lorem Ipsum is that it has
                                        a more-or-less normal distribution of letters, 
                                        as opposed to using 'Content here, content here', making it look like readable English.
                                  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className='content-resumo'>
                    <CardInfo titulo="Resumo">
                        <p >Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Ducimus totam sequi dignissimos eius illo laboriosam velit dolores quod ab repudiandae repellendus, 
                        exercitationem minus natus officia, illum quos fuga praesentium aliquam! Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. Assumenda amet reiciendis voluptas, nesciunt quod iste voluptatibus harum quaerat debitis quidem libero! Nesciunt molestias perspiciatis suscipit est error facere sint incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, accusamus. 
                        Deleniti ullam omnis quis reiciendis officiis fuga dignissimos dolore temporibus facere praesentium ut, 
                        iure facilis excepturi nam repudiandae error libero? Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Similique reprehenderit nisi iure aut, 
                        deleniti asperiores laudantium inventore tenetur tempora necessitatibus natus porro  <buton className={`${texto?'none':'close-texto'}`} onClick={handleTexto}><i>...</i> ver mais</buton></p>
                            {texto?(
                                <Fragment>
                                        <p  className='texto-none'>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus totam sequi dignissimos eius illo laboriosam velit dolores quod ab repudiandae repellendus, exercitationem minus natus officia, illum quos fuga praesentium aliquam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda amet reiciendis voluptas, nesciunt quod iste voluptatibus harum quaerat debitis quidem libero! Nesciunt molestias perspiciatis suscipit est error facere sint incidunt. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, accusamus. Deleniti ullam omnis quis reiciendis officiis fuga dignissimos dolore temporibus facere praesentium ut, iure facilis excepturi nam repudiandae error libero? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, veritatis quam cupiditate accusamus distinctio assumenda amet sunt repellat, repudiandae at omnis commodi quidem? Ut molestias ipsa doloribus, voluptatum soluta accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta sunt aut ad itaque, commodi fugiat ullam, delectus nihil veniam architecto minima enim fuga? Excepturi, sequi reprehenderit commodi ipsa dolorum tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi provident harum maiores nemo impedit reiciendis aliquid, voluptas qui facilis autem quisquam quia dignissimos illo. Consequatur corrupti praesentium magnam est. 
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, natus ipsum quae nulla itaque illo corporis. Aspernatur temporibus sit vitae molestiae illo placeat, molestias laboriosam, inventore cupiditate quidem porro dolorem.
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, odit voluptate! Harum fugiat blanditiis nostrum inventore enim quibusdam natus pariatur sit soluta quis,
                                        obcaecati velit repellat maiores debitis ducimus suscipit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                        A doloremque modi delectus expedita ipsam saepe! Aperiam labore sunt nisi eum? Obcaecati nisi voluptates voluptas. 
                                        Ex expedita nemo repellat explicabo non. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Hic corporis, animi voluptas sunt vero earum impedit eveniet? Voluptas in porro ipsa dolore, non error autem dicta debitis, 
                                        voluptates voluptatibus neque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptatem fugit. 
                                        Fugiat obcaecati, provident ex officia harum enim impedit quam suscipit est pariatur recusandae esse quasi eaque iusto, veniam sint! <buton className="close-texto" onClick={handleTexto}> ver menos</buton> </p>
                                </Fragment>
                            ):null}
                    </CardInfo>
                </div>

                <div className='content-discussoes'>
                    <CardInfo 
                        titulo="Discussões">
                        {topicoEnviado&&(
                            <>
                                <div className={`${novoTopico?'none':'topico-enviado'}`}>
                                    <div className='title-topico-enviado'>
                                        <h1>Seu tópico foi enviado com sucesso! :D</h1>
                                    </div>

                                    <div className='descricao-topico-enviado'>
                                        <p>Agradecemos por sua contribuição, uma notificação será enviada ao seu email assim que seu tópico for respondido!</p>
                                    </div>

                            
                                    <div className='button-topico-enviado'>
                                        <button onClick={handleCriarTopico} type='button'>Criar novo tópico</button>
                                    </div>
                                    <div className='separar-content'></div>

                                </div>
                      
                            </>
                        )}
                   
                        
                        {novoTopico&&(
                            <div className={`${topicoEnviado?'none':'criar-topico'}`}>
                                <label>Assunto</label>
                                <form onSubmit={handleEnviarTopico}>
                                    <input 
                                    type='name' 
                                    placeholder='Defina um tóptico sucinto para notificar os autores...' 
                                    required  
                                    value={assunto}
                                    onChange={(e)=>setAssunto(e.target.value)}
                                    >    
                                    </input>

                                    <label>Conteúdo</label>
                                    <textarea className={`${ fontItalic&&'font-style'} ${fontBold && 'font-weight-bold'}`}
                                        type='name'
                                        placeholder='Escreva o conteúdo aqui...'
                                        required
                                        value={conteudo}
                                        onChange={(e)=>setConteudo(e.target.value)}
                                        >
                                    </textarea>
                                    <div className='estilo-texto'>
                                        <div className='italic-bold'>  
                                            <img onClick={handleBold} src={iconBold}></img>
                                            <img onClick={handleItalic} src={iconItalic}></img>
                                        </div> 
                                        <button className='enviar-topico'  type='submit'>Enviar</button>
                                    </div>
                                </form>
                            <div style={{ marginTop:'20px'}} className='separar-content'></div>
                         
                        </div>
                        
                    )}
                
                        <div className={`${novoTopico||topicoEnviado?'none':'autores-sugestoes'}`}>
                            <p>Compartilhe suas ideias ou dúvidas com os autores!</p>
                            <div className='icons-dicas'>
                                <img  src={iconMao}></img> 
                                <img  src={iconQA}></img> 
                                <img  src={iconPessoa}></img> 
                            </div>
                            <div  className='texto-sugestoes'>
                                <p>
                                    Sabia que o maior estímulo no desenvolvimento científico e cultural é a curiosidade? 
                                    <br/>
                                    Deixe seus questionamentos ou sugestões para o autor!
                                </p>
                            </div>
                            <div className='button-topico'>
                                <button onClick={handleCriarTopico} type='button'> <img style={{width:'12px'}} src={criar}></img>Criar Tópico</button>
                            </div>
                            <div className='separar-content'></div>

                        </div>
                            <div className='box-container'>
                                {perguntas.map((item,index)=>{
                                    return(
                                        <div key={item.id}>
                                            <CardPergunta handleExcluir={handleExcluir}  pergunta={item}/>
                                        </div>
                                     )
                                 })}

                            </div>
                  </CardInfo>
                </div>
              
                    <div className='separar-content'></div>

               
        </div>
        <footer>
                    <Footer/>
                            
                </footer>
            
              
            </section>
            
         
           
                
    </main>
    </>
    )
    
}