import './style.css'

export default function CardInfo({titulo,children}){
    return(
        <div>
          

            <div className='title-resumo'>
            <h2>{titulo}</h2>
            
          
            {children}
            </div>

           
           
             
            
        </div>
    )
}