// routing 
import { useNavigate } from 'react-router-dom'
export  default function Title(){
    const navigate = useNavigate();
    return <div>
        <div style={{background: "black", color: "azure", padding:"2px", margin:"2px" }} >
            <h1>
           Hey!, Inesh Reddy.
           </h1><br />
           <button onClick={()=>{navigate("/")}} >Landing page</button>
           <button onClick={()=>{navigate("/dashboard")}} > Dashboard Page</button>
       </div>
    </div>
    // Ugly Solution: 
    // return <div>
    //     <div style={{background: "black", color: "azure", padding:"2px", margin:"2px" }} >
    //         <h1>
    //         Hey!, Inesh Reddy.
    //         </h1><br />
    //         <button onClick={()=>{window.location.href="/"}} >Landing page</button>
    //         <button onClick={()=>{window.location.href="/dashboard"}} > Dashboard Page</button>
    //     </div>

    // </div>
    
}