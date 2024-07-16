import right from "../assets/right_img.png"
import arrow from "../assets/arrow_icon.png"
import './Mailit.css'
export const Mailit = () => {
    return(
        <div className="contact-container">
              <form action="https://api.web3forms.com/submit" method="POST" className="contact-left">
                <div className="contact-left-title">
                       <h2>Get in Touch</h2>
                       <hr></hr>
                </div>
                 <input type="hidden" name="access_key" value="09b9644d-7053-45c3-9a62-08017dcab12f"></input>
                 <input type="text" name="name" placeholder="Your Name" className="contact-inputs" required></input>  
                 <input type="email" name="email" placeholder="Your Email" className="contact-inputs" required></input>  
                 <textarea name="message" placeholder="Your Message" className="contact-inputs" required></textarea>
                 <button type="submit">Submit</button>
            
              </form>
        </div>
    )
}