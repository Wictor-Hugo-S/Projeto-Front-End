import {FiX} from 'react-icons/fi'
import './style.css'
export default function Modal({detail,close}){


    return(
        <>
        
    

            {detail}
        
        
        
             <div className='button-close-modal'>
                    <button  onClick={close} className='close'> 
                         <FiX size={23} color="FFF"> </FiX>
                  
                    </button>
               
                    </div>  
           

            
        
        </>
    )
}