import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import '../css/contact.css'
import { socialLinks } from '../constants'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Contact = (props) => {
  const [userMsg, setUserMsg] = useState({
    name: '',
    message: '',
    email: '',
  });
  const [isValid, setIsValid] = useState(false);
  const [isNotEmpty, setIsNotEmpty] = useState(false);


  useGSAP(() => {
    gsap.fromTo('#contact-header', {
      opacity: 0,
      x: -100,
    }, {
      opacity: 1,
      x: 0,
      ease: 'back.inOut',
      duration:.5,
      delay: .4
    })

    gsap.fromTo('.contact-div', {
      opacity: 0,
      y: -90,
    }, {
      opacity: 1,
      y: 0,
      delay: 1.2,
      stagger: .4,
      ease: 'bounce.out'
    })
  })

  const validateEmailAndMessage = (email, message) => {
    const pattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    setIsValid(pattern.test(email));
    if(message != ''){
      setIsNotEmpty(true);
    }
  };

  useEffect(() => {
    validateEmailAndMessage(userMsg.email, userMsg.message);
    console.log(isValid, isNotEmpty);
  }, [userMsg.email]);

  const [isLoading, setIsLoading] = useState(false);
  const handleOnChange = (e) => {
    setUserMsg({
      ...userMsg, [e.target.name]: e.target.value
    })
  }

  const handleOnSubmit = (e) => { 
    e.preventDefault();
    validateEmailAndMessage(userMsg.email, userMsg.message);
    console.log(isValid, isNotEmpty);
    if(isValid && isNotEmpty){
      setIsLoading(true);
      console.log("the btn is pressed");

      emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          form_name: userMsg.name,
          to_name: "Kaif",
          form_email: userMsg.email,
          to_email: 'mdkaifsard564773@gmail.com',
          message: userMsg.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      ).then(() => {
        setIsLoading(false);
        props.showAlert("the email has been sent", 'success');

        setUserMsg({
          name: '',
          message: '',
          email: '',
        });
      }).catch((error) => {
        setIsLoading(false);
        props.showAlert(error, 'warning');
      })
    }
    else{
      props.showAlert('Enter a valid Email', 'warning');
    }
  }
  return (
    <section className=' pt-24 relative flex flex-col justify-center items-center h-full'>
        <h1 className='head-text blue-gradient_text text-4xl font-semibold' id='contact-header'>Get in touch</h1>
        <div className='flex flex-wrap gap-10 mt-auto justify-center items-center'>
          {
            socialLinks.map((link, index) => (
              <div key={index} className='contact-div btn-back flex flex-col p-10 gap-4 h-fit justify-center items-center rounded-xl'>
                <div className='block-container w-12 h-12 flex flex-row'>
                  <div className={`w-12 h-12 btn-back rounded-xl ${link.theme}`}/>
                    <div className='w-12 h-12 btn-front rounded-xl flex justify-center items-center'>
                      <img src={link.iconUrl} alt={link.name} className='w-1/2 h-1/2'/>
                    </div>
                </div>
                <h3>
                  <Link 
                  className='font-semibold text-blue-500/70'
                  rel="noopener noreferrer"
                  to={link.link}
                  >
                    {link.name}
                  </Link>
                </h3>
              </div>
            ))
          }
        </div>
        <h1 className='sm:text-3xl text-xl blue-gradient_text font-semibold font-sans'>Send me an Email:</h1>
        <form className='bg-slate-300/20 shadow shadow-gray-900 flex flex-col p-10 rounded-2xl text-lg font-sans font-bold mt-4 mb-10 md:w-[40%] w-[90%]'>
        <div className='flex flex-col gap-2 w-auto'>
            <label className='blue-gradient_text text-slim' htmlFor="email">Name:</label>
            <input
              className='form-control'
              id="name"
              name="name"
              value={userMsg.name}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='blue-gradient_text' htmlFor="email">Email:</label>
            <input
              className='form-control'
              type="email"
              id="email"
              name="email"
              value={userMsg.email}
              onChange={handleOnChange}
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='blue-gradient_text' htmlFor="message">Message:</label>
            <textarea
              className='form-control'
              id="message"
              name="message"
              value={userMsg.message}
              onChange={handleOnChange}
              required
            />
          </div>
          <button disabled={userMsg.email === ''?1:0} className='bg-gradient-to-r from-blue-300 to-blue-600 hover:from-blue-600 hover:to-blue-300 hover:cursor-pointer shadow text-white px-3 py-2 text-center text-lg font-medium w-fit mx-auto mt-2 rounded-full' onClick={handleOnSubmit}>Send</button>
        </form>
    </section>
  )
}

export default Contact
