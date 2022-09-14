import React from 'react'
import styles from "./contact.module.css"
const Contact = () => {
  return (
    <div name='contact' className='w-full h-[650px] bg-[#9CA3AF] flex justify-center items-center p-4 pt-10 pb-10'>
        <form method='POST' action='https://getform.io/f/ee0ad374-9fd9-42cf-8a45-7df27def9f5e' className='flex flex-col max-w-[600px] w-full mt-8' >
            <div className='pb-4'>
                <p className={styles.Contact}>Contact</p>
                <p className='text-gray-900 py-4' style={{textAlign:"center",fontSize:"20px"}}>Connect with me via Email and call</p>
                <p style={{fontSize:"18px"}}>Email :- adityakothari7062@gmail.com</p>
                <p style={{fontSize:"18px"}}>contact:-     +91-7976915124</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'style={{borderRadius:"5px"}} />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='E-mail' name='email'style={{borderRadius:"5px"}} />
            <textarea className='bg-[#ccd6f6]' name='message' cols='30' rows='6' placeholder='Message' style={{borderRadius:"5px"}}></textarea>
            <button className='text-black border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center' style={{borderRadius:"5px"}}>Get In Touch</button>
        </form>

    </div>
  )
}

export default Contact