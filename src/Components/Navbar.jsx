import styles from "../Components/Navbar.module.css"
import { IoMdContact } from "react-icons/io"
import React from 'react'
import {Link} from "react-scroll"
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon }  from "@chakra-ui/icons"
import Aditya_Sharma_Resume from "../Assets/Aditya_Sharma_Resume.pdf"
import { FaHome } from "react-icons/fa"
import { HiOutlineDocumentDownload } from "react-icons/hi"
           
function Navbar() {
  return (
    <>
      <div className={styles.Nav}>
        <div>
          <img
            src="https://media-exp1.licdn.com/dms/image/D4E35AQEvCLhzSacMKQ/profile-framedphoto-shrink_400_400/0/1643304604962?e=1663434000&v=beta&t=gFNfwiP5RsqGuYLE8XnLVhHO2KbMA7oY9XhTZbSbH60"
            alt=""
          />
        </div>
        <div className={styles.links}>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          <Link to="project" smooth={true} duration={500}>
            Project
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
          <a href={Aditya_Sharma_Resume} download>Resume</a>
        </div>
      </div>
      <div className={styles.secondNav}>
        {/* <div><h1>AS</h1></div> */}
        <div className={styles.menu}>
          <Menu >
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant=""
              color="white"
    
            />
            <MenuList   >
              <Link to="home" smooth={true} duration={500}>
                {" "}
                <MenuItem h="50px" icon={<FaHome  size={15}/>}>
                  Home
                </MenuItem>
              </Link>
              <Link to="about" smooth={true} duration={500}>
                <MenuItem h="50px" icon={<AddIcon />}>
                  About
                </MenuItem>
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                {" "}
                <MenuItem h="50px" icon={<ExternalLinkIcon />}>
                  Skills
                </MenuItem>
              </Link>
              <Link to="project" smooth={true} duration={500}>
                {" "}
                <MenuItem h="50px" icon={<RepeatIcon />}>
                  Project
                </MenuItem>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <MenuItem h="50px" icon={<IoMdContact size={20} />}>
                  Contact
                </MenuItem>
              </Link>
              <a href={Aditya_Sharma_Resume} download>
              <MenuItem h="50px" icon={<HiOutlineDocumentDownload size={20}/>}>
              Resume
                </MenuItem>
                </a>
              </MenuList>
          </Menu>
        </div>
      </div>
      <div className={styles.ThirdNav}>
        {" "}
        <div className={styles.menu}>
        <Menu >
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant=""
              color="white"
    
            />
            <MenuList   >
              <Link to="home" smooth={true} duration={500}>
                {" "}
                <MenuItem h="50px" icon={<FaHome  size={15}/>}>
                  Home
                </MenuItem>
              </Link>
              <Link to="about" smooth={true} duration={500}>
                <MenuItem h="50px" icon={<AddIcon />}>
                  About
                </MenuItem>
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                {" "}
                <MenuItem h="50px" icon={<ExternalLinkIcon />}>
                  Skills
                </MenuItem>
              </Link>
              <Link to="project" smooth={true} duration={500}>
                {" "}
                <MenuItem h="50px" icon={<RepeatIcon />}>
                  Project
                </MenuItem>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <MenuItem h="50px" icon={<IoMdContact size={20} />}>
                  Contact
                </MenuItem>
              </Link>
              <a href={Aditya_Sharma_Resume} download>
              <MenuItem h="50px" icon={<HiOutlineDocumentDownload size={20}/>}>
              Resume
                </MenuItem>
                </a>
              </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default Navbar