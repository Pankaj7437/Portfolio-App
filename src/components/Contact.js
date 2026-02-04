import {useRef} from 'react'
import './Contact.css'
import LinkedIn from '../assets/linkedin.svg'
import GitHub from '../assets/github.svg'
import Insta from '../assets/instagram.svg'
// import Facebook from '../assets/facebook.svg'
import emailjs from '@emailjs/browser'

function Contact() {
    const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7k0pxkc', 'template_ud9aloe', form.current, {
        publicKey: 'sflPvWlg2FA82oHJ2',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
        <section id='contact' data-aos="fade-up">
            <div id='social'>
                <h1 className='socialTitle'>Socials</h1>
                <p className='socialDesc'>Here you can connect with me on my social media</p>

                <div className='socialImgs' data-aos="fade-right">
                    <a href='https://www.linkedin.com/in/pankaj-sharma-811077323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img src={LinkedIn} alt='LinkedIn' className='socialImg'/></a>
                    <a href='https://github.com/Pankaj7437'><img src={GitHub} alt='Github' className='socialImg'/></a>
                    <a href='https://www.instagram.com/dj.pnkj?igsh=aHp2bHJ0czlrZHJy'><img src={Insta} alt='Insta' className='socialImg'/></a>
                    {/* <a href='#'><img src={Facebook} alt='Facebook' className='socialImg'/></a> */}
                </div>
            </div>

            <div id='contactPage'>
                <h1 id='contactTitle'>Contact</h1>
                <span className='contactDesc'>Feel free to contact me</span>


                <form className='contactForm' ref= {form} onSubmit={sendEmail} data-aos="zoom-in">
                    <input type='text' className='name' placeholder='Your Name' name='from_name' required/>
                    <input type='email' className='email' placeholder='Your Email' name='your_email' required/>
                    <textarea className='msg' placeholder='Your Message' rows='5' name='message' required></textarea>
                    <button type='submit' value='Send' className='submitBtn' onClick={() => [alert("Form Submitted!")]}>Submit</button>
                </form>
            </div>
        </section>
      
    </>
  )
}

export default Contact
