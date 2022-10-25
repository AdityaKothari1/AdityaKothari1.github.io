import styles from "./Home.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdAlternateEmail } from "react-icons/md"
import {HiOutlineDocumentDownload} from "react-icons/hi"
import React from 'react'
import { Box, Heading, Highlight, Tooltip } from "@chakra-ui/react"
import Aditya_Sharma_Resume from "../Assets/Aditya_Sharma_Resume.pdf"
import profilepic from "../Assets/profilepic.png"
import  Typical from "react-typical"
function Home() {
  return (
    <div name="home" className={styles.About} >

         <div className={styles.name} >
           <div className={styles.headname}>
                    <Heading as='h1' size="3xl">
                <Heading  as='h1' size="3xl" color='white'>
                  <Highlight  query='Aditya Sharma'    styles={{ py: '1', fontWeight: 'bold',color:"rgb(18,188,181)" }}>
                      Hi,I am Aditya Sharma 
                  </Highlight>
                      </Heading>
                  <Box style={{paddingTop:"10px"}}>
                  <Heading  as='h1' size="2xl" color='white' styles={{ py: '1',fontWeight: 'bold',marginTop:"50px" }}>
                    A <Typical loop={Infinity}
                      wrapper="b"
                      steps={[
                        "FullStack Developer",
                         3000,
                        "JavaScript Developer",
                        3000,
                        "React Developer",
                         3000
                      ]}
                    
                    />
                  </Heading>
                  </Box>
                    </Heading>
             </div>
             {/* <div className={styles.info}>
              <p className="text-gray-900">
              Passionate Full stack developer with hands-on experience
              developing websites using front-end skills like React, Redux, Html,
               CSS, and JavaScript and looking to enhance React, CSS further
               HTML, and JS skills as a future full stack developer.              </p>
             </div> */}
             <div className={styles.icon}>
                  <div> 
                  <Tooltip label='Github' fontSize='md' bg='gray.300' fontWeight="bold" color='black'>
                    <a href="https://github.com/AdityaKothari1"> <FaGithub className={styles.resume} size={50}/></a>
                     </Tooltip>
                  </div>
                  <div>
                  <Tooltip label='Linkedin' fontSize='md' bg='gray.300' fontWeight="bold" color='black'>

                    <a href="https://www.linkedin.com/in/aditya-sharma-078731186/"> <FaLinkedin className={styles.resume} size={50}/></a>
                    
                    </Tooltip>
                        
                         </div>
                  
                  <div>
                  <Tooltip label='Email' fontSize='md' bg='gray.300' fontWeight="bold" color='black'>
                    <a href="mailto:adityakothari7062@gmail.com" >< MdAlternateEmail className={styles.resume} size={50}/></a>
                    </Tooltip>
                  </div>
                   <div>
                      <Tooltip label='Resume' fontSize='md' bg='gray.300' fontWeight="bold" color='black'>

                    <a href={Aditya_Sharma_Resume} download><HiOutlineDocumentDownload className={styles.resume} size={50}/></a>   
                      </Tooltip>
                   </div>
                 
             </div>
         </div>
         
         <div className={styles.mypic}>
             <img src={profilepic} alt="" />
         </div>
    </div>
  )
}

export default Home