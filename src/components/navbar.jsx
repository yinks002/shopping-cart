import '../styles/navbar.css'

const Navbar = ({setShow})=>{
    return(
        <>
        <nav>
        <div className="nav_box">
            <span 
            onClick={()=>setShow(true)}
            className="my_shop">
               CARSHOP
            </span>
            <div 
            
            className="cart" onClick={()=>setShow(false)} >
                <span>
                    <i 
                   
                    className="fas fa-cart-plus"></i>
                </span>
                <span >0</span>
            </div>
        </div>
        </nav>
        
        </>



    )
}

export default Navbar;