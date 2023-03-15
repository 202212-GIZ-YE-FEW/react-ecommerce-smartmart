import { FaFacebook,FaTwitter,FaGithub,FaDiscord,FaGooglePlusSquare} from "react-icons/fa";

const Footer = () => {
    return (  <>
<footer class="text-center text-lg-start bg-white text-muted">

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
 
    <div class="me-5 d-none d-lg-block">
   
    </div>
   
    
   
  </section>

  <section class="">
    <div class="container text-center text-md-start mt-5">
     
      <div class="row mt-3">
        
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3 text-secondary"></i>SmartMart
          </h6>
          <p>
           website for e-commerce online store ,every thing is available
          </p>
        </div>
       
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
         
          <h6 class="text-uppercase fw-bold mb-4">
            Categories
          </h6>
          <p>
            <a href="#!" class="text-reset">electronics</a>
          </p>
          <p>
            <a href="#!" class="text-reset">jewelery</a>
          </p>
          <p>
            <a href="#!" class="text-reset">men's clothing</a>
          </p>
          <p>
            <a href="#!" class="text-reset">women's clothing</a>
          </p>
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 class="text-uppercase fw-bold mb-4">
Jobs          </h6>
          <p>
            <a href="#!" class="text-reset">hiring</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Call HR</a>
          </p>
           
          
        </div>
       
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i class="fas fa-home me-3 text-secondary"></i> Mars</p>
          <p>
            <i class="fas fa-envelope me-3 text-secondary"></i>
            info@Smartmart.com
          </p>
          <p><i class="fas fa-phone me-3 text-secondary"></i> 12345633</p>
          
        </div>
      
      </div>
  
    </div>
  </section>
 
</footer>
</> );
}
 
export default Footer;