import styles from "./Project.module.css"

import React from 'react'
import PharmEasy from "../Assets/PharmEasy.png"
import Modesens  from "../Assets/Modesens.png"
import Sephora from "../Assets/Sephora.png"
import Indeed from "../Assets/indeed.png"
import { Box, Button, Link } from "@chakra-ui/react"
import GitHubCalendar from 'react-github-calendar';
import { AiOutlineHtml5 } from "react-icons/ai"
 import {DiCss3} from "react-icons/di"
 import {IoLogoJavascript} from "react-icons/io"
 import {GrReactjs } from "react-icons/gr"
import ReactTooltip from "react-tooltip"
import Stats from "./Stats"
function Project() {
  return (
    <>
    <div name="project"  className={styles.Project}>
      <div >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-100"  style={{fontSize:"50px",textAlign:"center",marginTop:"-55px"}}>Project</h2>
  
        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0" style={{marginTop:"60px"}}>
          <div class="group relative" style={{border:"0px solid red",backgroundColor:"lightblue",padding:"10px",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src={PharmEasy} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center"/>
            </div>
            <h3 class="mt-6 text-sm text-black-800" style={{fontWeight:"bold"}}>
              <a href="https://roaring-creponne-d99230.netlify.app/">
                <span class="absolute inset-0"></span>
               PharmEasy Clone
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-600">PharmEasy is an Indian e-pharmacy company that sells medicines, diagnostics and telehealth online.</p>
            <div style={{display:"flex",gap:"5%",marginTop:"20px",marginLeft:"20px"}}>
                <AiOutlineHtml5 size={30}/>
                <DiCss3 size={30}/>
                <IoLogoJavascript size={28}/>
              </div>
            
            
             <div style={{display:"flex",gap:"5%",marginTop:"20px"}}>
              <a href="https://github.com/AdityaKothari1/PharmEasy-Clone">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">View Code</Button>
             </a>
             <a href="https://roaring-creponne-d99230.netlify.app/">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">Deploy</Button>
             </a>
             </div>
              
          </div>
  
          <div class="group relative" style={{border:"0px solid red",backgroundColor:"lightblue",padding:"10px",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src={Modesens} alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center"/>
            </div>
            <h3 class="mt-6 text-sm text-black-800" style={{fontWeight:"bold"}}>
              <a href="https://gleaming-phoenix-771d5c.netlify.app">
                <span class="absolute inset-0"></span>
                MODESENS Clone
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-600">ModeSens is a fashion technology company revolutionizing the way people shop online using a tech-forward approach</p>
            <div style={{display:"flex",gap:"5%",marginTop:"20px",marginLeft:"20px"}}>
                <AiOutlineHtml5 size={30}/>
                <DiCss3 size={30}/>
                <IoLogoJavascript size={28}/>
              </div>
           
           
            <div style={{display:"flex",gap:"5%",marginTop:"20px"}}>
                <a href="https://github.com/AdityaKothari1/legal-soap-4645">
                <Button  colorScheme='gray' variant='outline' marginLeft="20%">View Code</Button>
                </a>
                <a href="https://gleaming-phoenix-771d5c.netlify.app/">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">Deploy</Button>
                </a>
             </div>
          </div>
  
          <div class="group relative" style={{border:"0px solid red",backgroundColor:"lightblue",padding:"10px",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src={Sephora}alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center"/>
            </div>
            <h3 class="mt-6 text-sm text-black-800" style={{fontWeight:"bold"}}>
              <a href="https://sephoraclone.vercel.app/">
                <span class="absolute inset-0"></span>
                Sephora Clone
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-600">Sephora offers beauty products including cosmetics, skincare, body, fragrance, nail color, beauty tools, body lotions and haircare</p>
            <div style={{display:"flex",gap:"5%",marginTop:"20px",marginLeft:"20px"}}>
                <AiOutlineHtml5 size={30}/>
                <DiCss3 size={30}/>
                <IoLogoJavascript size={28}/>
                <GrReactjs size={28}/>
              </div>
            <div style={{display:"flex",gap:"5%",marginTop:"20px"}}>
              <a href="https://github.com/AdityaKothari1/gorgeous-hole-2479">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">View Code</Button>
              </a>
                <a href="https://sephoraclone.vercel.app/">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">Deploy</Button>
                </a>
             </div>
          </div>
          <div class="group relative" style={{border:"0px solid red",marginTop:"20px",backgroundColor:"lightblue",padding:"10px",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src={Indeed}alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center"/>
            </div>
            <h3 class="mt-6 text-sm text-black-800" style={{fontWeight:"bold"}}>
              <a href="https://indeedproject.vercel.app/">
                <span class="absolute inset-0"></span>
                Indeed Clone
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-600">Indeed is an worldwide employment website for job listings. With Indeed, you can search millions of jobs online to find the next step in your career</p>
            <div style={{display:"flex",gap:"5%",marginTop:"20px",marginLeft:"20px"}}>
                <AiOutlineHtml5 size={30}/>
                <DiCss3 size={30}/>
                <IoLogoJavascript size={28}/>
                <GrReactjs size={28}/>
              </div>
            <div style={{display:"flex",gap:"5%",marginTop:"20px"}}>
              <a href="https://github.com/AdityaKothari1/nifty-deer-6877">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">View Code</Button>
              </a>
                <a href="https://indeedproject.vercel.app/">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">Deploy</Button>
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div>
                        <div className='sm:text-center pb-8 pl-4 '>
                              <p className='text-4xl font-bold inline  text-center text-gray-100'>My Github contribution  </p>
                          </div>
                          <br />
                          <div style={{width:"fit-content",margin:"auto",paddingBottom:"30px",paddingLeft:"10px",paddingRight:"10px",color:"white"}}>

                          <GitHubCalendar  username="Adityakothari1" ><ReactTooltip delayShow={20} html /></GitHubCalendar>
                          </div>
                          <Stats/>
                         
       </div>

  
  </>
  )
}

export default Project