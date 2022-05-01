import './style.css'

import { Link } from 'react-router-dom'

import logoMenu from '../../assets/logoMenu.png'
import rectangle from '../../assets/rectangle.png'
import { useState } from 'react'




const menus=[
    {
        isActive:false,
        name: 'Apresentacao'
    },
    {
    isActive:false,
    name: 'Comitês'
    },
    {
        isActive:false,
        name:'Eixos Tematico'
        },
        {
            isActive:true,
            name: 'Trabahos'
            },
           
             {
                 isActive:false,
                name:'Contato'
            }
]


export default function Aside({show=true}){
    const[menuState,setMenuState]=useState(menus)
    
    
function handleActive(index){
   const activeMenu= menuState.map((item,indice)=> index===indice?{...item,isActive:true}
   :{...item,isActive:false})
     
   setMenuState(activeMenu)
    
}
   
    return(
        <>

      
          <aside className={`${show?'block':'none'}`}   >
       
       <div className="texto-aside">
           <h2>Scala 2019</h2>
       </div>
       <div className="logo-aside">
         <img src={logoMenu} alt="Scala 2019"></img>
       
       </div>
       
      
       <nav className='menu'>

         {menuState.map((item,index)=>{
             return(
                 <div key={index}  onClick={()=>handleActive(index)}  
                 className={` wrapper-menu ${item.isActive?'active':''}`}>
                     {item.isActive&&(
                         <img className='retangle' src={rectangle}></img>
                     )}
                <a 
                className="link ">
                   {item.name}</a>
                 </div>
             )
         })}
           
       </nav>
   </aside>
        
        
        
        
        </>
    )
}