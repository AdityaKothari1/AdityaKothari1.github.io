import styles from "./Project.module.css"

import React from 'react'
import PharmEasy from "../Assets/PharmEasy.png"
import Modesens  from "../Assets/Modesens.png"
import Sephora from "../Assets/Sephora.png"
import { Box, Button, Link } from "@chakra-ui/react"

function Project() {
  return (
    <div name="project"  className={styles.Project}>
      <div >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 class="text-2xl font-bold text-gray-900"  style={{fontSize:"50px",textAlign:"center",marginTop:"-55px"}}>Project</h2>
  
        <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0" style={{marginTop:"60px"}}>
          <div class="group relative" style={{border:"0px solid red",backgroundColor:"#F59E0B",padding:"10px",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src={PharmEasy} alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center"/>
            </div>
            <h3 class="mt-6 text-sm text-black-800" style={{fontWeight:"bold"}}>
              <a href="https://roaring-creponne-d99230.netlify.app/">
                <span class="absolute inset-0"></span>
               PharmEasy Clone
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
             <div style={{display:"flex",gap:"5%",marginTop:"20px"}}>
              <a href="https://github.com/AdityaKothari1/PharmEasy-Clone">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">View Code</Button>
             </a>
             <a href="https://roaring-creponne-d99230.netlify.app/">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">Deploy</Button>
             </a>
             </div>
          </div>
  
          <div class="group relative" style={{border:"0px solid red",backgroundColor:"#F59E0B",padding:"10px",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src={Modesens} alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center"/>
            </div>
            <h3 class="mt-6 text-sm text-black-800" style={{fontWeight:"bold"}}>
              <a href="https://gleaming-phoenix-771d5c.netlify.app">
                <span class="absolute inset-0"></span>
                MODESENS Clone
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
            <div style={{display:"flex",gap:"5%",marginTop:"20px"}}>
                <a href="https://github.com/AdityaKothari1/legal-soap-4645">
                <Button  colorScheme='gray' variant='outline' marginLeft="20%">View Code</Button>
                </a>
                <a href="https://gleaming-phoenix-771d5c.netlify.app/">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">Deploy</Button>
                </a>
             </div>
          </div>
  
          <div class="group relative" style={{border:"0px solid red",backgroundColor:"#F59E0B",padding:"10px",borderRadius:"5px",boxShadow:"rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"}}>
            <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
              <img src={Sephora}alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center"/>
            </div>
            <h3 class="mt-6 text-sm text-black-800" style={{fontWeight:"bold"}}>
              <a href="https://sephoraclone.vercel.app/">
                <span class="absolute inset-0"></span>
                Sephora Clone
              </a>
            </h3>
            <p class="text-base font-semibold text-gray-900">Daily commute essentials</p>
            <div style={{display:"flex",gap:"5%",marginTop:"20px"}}>
              <a href="https://github.com/AdityaKothari1/gorgeous-hole-2479">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">View Code</Button>
              </a>
                <a href="https://sephoraclone.vercel.app/">
                <Button colorScheme='gray' variant='outline' marginLeft="20%">Deploy</Button>
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  </div></div>
  )
}

export default Project