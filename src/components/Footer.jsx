import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
   <div className='d-flex justify-content-center align-items-center mt-5 bg-light'>
    <div className='footer d-flex align-item-center justify-content-evenly mt-5'>
      <div className='website'style={{width:"400px"}}>
        <h5><i class="fa-solid fa-cart-shopping"></i>E Kart</h5>
        <p style={{textAlign:"justify"}}>Ekart logistics or Ekart courier is an Indian courier delivery services company, headquartered in Bangalore, Karnataka. A subsidiary of electronic commerce company Flipkart Pvt. Ltd., it is run by Instakart services Pvt. Ltd.</p>
      </div>
      <div className='links d-flex flex-column ms-5'>
        <h4>Links</h4>
        <Link to='/'style={{textDecoration:'none',color:"black"}}>Home</Link>
        <Link to='/cart'style={{textDecoration:'none',color:"black"}}>Cart</Link>
        <Link to='/wishlist'style={{textDecoration:'none',color:"black"}}>Wishlist</Link>
        </div>
        <div className='guides d-flex flex-column ms-5'>
        <h4>Guides</h4>
        <Link to='https://react.dev/' target='_blank'style={{textDecoration:'none',color:"black"}}>React</Link>
        <Link to='https://react-bootstrap.netlify.app/'style={{textDecoration:'none',color:"black"}}>React Bootstrap</Link>
        <Link to='https://bootswatch.com/'style={{textDecoration:'none',color:"black"}}>Boots Watch</Link>
      </div>
      <div className='contactus ms-5'>
        <h4>Contact Us</h4>
        <div className='d-flex'>
          <input type="text" className='form-control' placeholder='enter your email'/>
          <button className='btn btn-warning ms-3'>Subscribe</button>
        </div>
        <div className='d-flex-justify-content-evenly align-items-center mt-3'>
       <Link><i class="fa-brands fa-instagram fa-2x ms-5 "></i></Link>
         <Link><i class="fa-brands fa-twitter fa-2x ms-5"></i></Link>   
         <Link><i class="fa-brands fa-facebook fa-2x ms-5"></i></Link>   
         <Link><i class="fa-brands fa-linkedin fa-2x ms-5"></i></Link>    
       
        </div>
      </div>
      </div>
      </div>

   <p className='mt-5 text-center'>Copyright &copy;2023 E Kart. Built with React</p>
   </>
  )
}

export default Footer