import React from 'react'
import styles from "./skill.module.css"
import { Box, Divider, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import Redux  from "../Assets/Redux.png"
function Skills() {
  return (

    <div name="skills" style={{ backgroundColor:"#7393B3"}}>
    <div className={styles.skill} >
        <Heading className='heading' textAlign="center" fontWeight="bold" fontSize="40px" marginTop="10px" >SKILLS</Heading>
      <SimpleGrid columns={[2, 3, 6]} spacing='20px' marginTop="20px" >
         <Box className={styles.shadow} border={"0px"}
         boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
         w="80%" marginLeft="20px" padding="15px" borderRadius="5px">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/1024px-HTML5_Badge.svg.png" alt="" />
        <Divider marginTop="5px"/>
       <Text className={styles.text}>HTML</Text>    
     </Box>
         <Box border={"0px"} className={styles.shadow}
                  boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
          w="80%" marginLeft="20px" padding="15px" borderRadius="5px">
          
         <img src="https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png" alt=""  width="90%"/>
        <Divider marginTop="5px"/>
       <Text className={styles.text} >CSS</Text>   
  </Box>
         <Box border={"0px"} className={styles.shadow}
          w="80%" marginLeft="20px" padding="15px" borderRadius="5px"          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
>
         <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="" />
        <Divider marginTop="5px"/>
       <Text className={styles.text}>JavaScript</Text>   
  </Box>
         <Box className={styles.shadow} border={"0px"} w="80%" marginLeft="20px" padding="15px" borderRadius="5px"          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
>
         <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="" />
        <Divider marginTop="5px"/>
       <Text className={styles.text}>React</Text>   
  </Box>
  <Box className={styles.shadow} border={"0px"} w="80%" marginLeft="20px" padding="15px" borderRadius="5px"          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
>
         <img src={Redux} alt="" />
        <Divider marginTop="5px"/>
       <Text className={styles.text}>Redux</Text>   
  </Box>
  <Box className={styles.shadow} border={"0px"} w="80%" marginLeft="20px" padding="15px" borderRadius="5px"          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
>
         <img src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4" alt="" />
        <Divider marginTop="5px"/>
       <Text className={styles.text}>Chakra Ui</Text>   
  </Box>
  <Box className={styles.shadow} border={"0px"} w="80%" marginLeft="20px" padding="15px" borderRadius="5px"          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
>
         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAsVBMVEX/bDf/////azb/aTP/Zy///fz/+vj/bDX/ajH/Yib/ZSz/bTn/7Ob/Yyn/Zi3/9vL/XyD/59//WhL/iWP/39X/z8D/8ev/6uP/1Mf/gFX/UwD/tp//vKj/xrX/ay3/2c3/mHj/wa3/p4r/c0L/sJf/hVf/e0f/ek3/q5H/t6H/j2z/oIL/i13/g1P/czn/aSf/lHL/glz+k2n/eED/ZR3/b0H/Wxv+mHP/d0v/nH7/jmPJTvzWAAASzklEQVR4nNWde3uqOBCHQ7gEiNwUqNaKFe+1iq09Wvv9P9gm3riIiBrA/f2xzz7ds+fwnkxmkslkArhiJRluze46b4PZ5m8+6mMAAO7/Dv82/uDN6Vo115AK/gJQ3G9tWN1O2/+eLwIl8DwZEYG96L/Knhco3mr+7U87XatAzKII7Z7fGI6QLssnrjQRUkFGo+HHpGcV9CXsCSXXbn/LdNR4CDPgQkHIkxH9Qd9Ty2U/mIwJRcvxP5GXOW4XMMl4eujTdyyR7ScxJXR7y/lCvwPvKIT0xXzZc1l+FDNCqdb5DKhl3o13GEtiscFnp8bMXBkRGk1/7t0/dkkhb+Q3DTafxoRQav+tdHZ8O0Z99ddmwvg4oWTPiHU+apzngsRaZ/bjxvooodT0FzJgz7djBLLsO48yPkhoL1cyW/OMC8mr7251hFLzMyjAPOOCcjB8aBwfIOz6DL1nlpA3a1ZAaPijQu0zJnk1u3sVcCehO/U8viw+Iuh5g1qJhGL3ryQDDYW8YfOu6XgPoeGv5JL5qO401dsJJcfzinag6YJe0Ll9GG8mtHyEqgEENDzO7KIJu+PyPGgq4sgplNCdeA9vjx4U781uc6o3EVrlu9AUeZ83WeothM2hXjXdTvK8Uwih5AdlxvgsoWCb36fmJnR9pWqwiIL8kzEvYe37CWZgKIg+8+ZXcxLaReziHxFEPzn3G/kIndFTjSAVRKt8/iYXYW/1dIBEaNFmRCi2f57LQo+CP4Mc+fHrhGJ78ZyABHGRA/E64eBpASmi/zChOAieF5AgBv61UbxC+MQmutd1Q71C+OyAO8RHCHtP6kWjgj/T+wk7q+cHpKOYGfqzCO1KEk63S+5nJf4zCGtBdQmZ24R+Xu4hdP+eYbGNAeR5HuDsXyX/Xd5MXSSUZtWPIOKVet2UPfpPPmtpDNHs4pb4IqEflAZy6bNVoeU7L+TTxRdn0hK0jL9xEvlvJXSqBsSC0nAiOW7XeTeFjF8fXMoyXiC05hW7UazIncQxvtTpZyCi+YVNfzoh8TLlwaQJKo2UMgX7X4ahyn/ppxrphL5XHkyasDJLAbQaAshI93npUzGVsFtx4hebHymu0RgrWFUyUrZeauYmjdCaV5wYVftpX0UAzXd3qV383/hx2lRMIZT8iichL6QMxktDwXRy1szLf/2ynzL0KYROpadLRNrsfMsntcgINujKZWBe/B+RnBIyzgmNoGJA+O/85OWFAr7vvI/buhwzUHDuoM4IRb+iE96TtPdzwAYdwcPXty/PROCdD/8ZYbfqPSGun233xJOJ7r4wo/QYrs6mcJKw8lgP4DppabXQRKmMRsbSRv5Mxv0k4VvFsR4AYZEEjJioQ6foLOsUzEsmwhOEUvWHvNpn/JOiJurUf2vUm2ZtF72ECSQIZ5UPIVA2l03Uqa+nHNdbZxHK2yxCe1T9Ma8S+8Laxz7QH8ZTMcl/7dWzCPlRPGsTI6x8NUMVG0NxGPWiHIfWm2tjCOT4fj9G2K3eRsmidBh+kNEwsRZ6Uc5dm+1r85BshmMRI0b4V7mbIRJQ+EHWPwTMXjiik7VOnOk2I+RToWEUKkpoV5252AnWIxFt+gohPi02bf71XeKMr2tzKeimE4rLJ5iFZE2z7kW+r63y/OkHxmRC6JtXy7Lk6PYyQtgdVZ4+3EldRtaW4lRF/Dq6ZRAHV4w0sXYLCcXJUwwh+T4cNTKx/Yp4PoLojrNSbntFN4ohobWo1s9AXhD29qe9x9x9zFA5bnJ5f3gS8uwUwkmVoQLzitIft/qqyWMAldhGNm6oLxl7/FDyLIWwSkBkKttmzXVr9iBYQyDwsbVl1FClj6uzcKdAOiN8q27jy2v9SPKwjSHQWvE90MlQjW0OGwW0YLqdJJQ+KvMzmjIJZ43b8fsQYOUjdl52NFRppuR0FvKfkSCsLFTA+rAbRofml6LuvU08M0gMFfL47d3M6w3DgHEgFCfVFMciDUdzFoO6wKuqoKoQ62b8CskUQGjmm4M76ceAcSB055WECmguI3k1sVcnIWPbcTozRcC8Oe7Z4ejaWbmLFKFRLUbYrGJJioXXdjTy9VQo1HcXYyRHJjyC2l9Om5brWs32ex/eOAZeJ0ZYya5Ca8X2qoM61PvHIbUxnY68vq7vtM46Hk0XmkcJpQqGEK630YlGTVT/DZEPRdeYLAAg/eftCtwIYQUnvnw9fsjwpkK9HvGfTmaqIoeg14sQvpceDNV+/IhhUkfqbzRAWPVH/wh5GRK+DMtOQCm/sbMJ8Y0AjmM/aj46hoDfn3vvCJ2SM/l43Yif9L2pSK3Hf5RnC5EtuHCOhOKg3HAP15P4OR810cTpZhM87t33QZ8Sut+lTkNeiddLppgo120x+EtHuzMMSvhS6t6XN99iMBxZVatmvDCty6sM/iQkWwfCTpmxQucThYQ7E40D9sguV3jU0YDDKQ0l3JRnpFgbxw/4xGkdJE10oPFAHTJwfujvQFjefRGciBLERDViorFNhDhZQ1yfddaP/3FI3hPWHvbLuaW0EsUS1ERbMcCXxhrz6/bVxHYuBfaO0Ckrf4GVZTw5QU1Ua8XCBC1JEPQpZ/VZLELowo0QDsrKQdWXicNLYqJaEBtBu6UBQSH7njcWQwhkf0dYUjIfKomjS86vJ1NOHUXHKiamVcuR9s0huSERwtpnKYRImcQLQaR20kTFjilg5Yv6ojc2voEfWoTQLqWKDb4m77a0NaB5sRFsqzxeD3ehUWYyhACOuoTQKeNaDK8mSyT8OtK+ooDSRx1BZb/j8bNPeXMLog4hfCvBSKGQWKlRE1W+oiuZ2nINoLZfkmdWyt4kvc2BMvKI/GsvMYJtDSlydARfvjTMv7Z3liy9M3GkVLIvAaPwNRsWYLKOa0ZMNFbmbNc1rB9Tp1MGy5mD5G8DuEW7UswnAaUBMdFGNA52sIDV/mHFmlVBeqvQ3AW1oq9pC6/Jos+BBhQQHcG2QKKEcggcUkYV8M1Cqxp4eaBVZQ6RwUlWC85IHIyaqOS/QqB9HH+SUSF7hzwL2Az/xs51Dnhmoi49MFtvj27H0ZmGZ6ULmkW2u8DCa/LiHDXRRWQEjS8FwfrpXNvg2cT6owIHFLnBx2GW/iCRmmi0FqTbVzAfRkvji7FJeW+gwIJSLCSvPu5NNBIHnb6KBfPkikRfYbOYOckbgAL3Tnw9OYLERM1+xEQdjUQJNfS1U4X1ClL2waywcAi1xAiK27iJSoM1Itv+cHvhvDJfIqMN2BQXLIRGbOtATdT8CH8kzUhoV75Ct9r9x36Xg/5AUZ11+LWOlQjP3kRH4QgaWxPi9UcI6I5VxpMQ0DpF8FkIIdZ/m/QaT2iCOxNdhoB2y8T8OrJplJDGHhCgMSjkAH/nRXcFzMcshTQhJhpJRNl9DfBaJL1vLK/Uxd6pPhgXQIiFnRd1v8yjoYoTBZjjcASbJErwkdpYEigLWlv1QQEL7zDQN5S9rxTf1zETndZJlIDRWLJkt2NKfAz4ZU4YCfTucmeo0mRNrw6eZty0zuNYmQJ1s4WJ+RgeTPQwu6i7+ZjpwAyz3aKvQWzGsmxTrbCYReYh498xvhaVxJGAdQWoYcmoMV4DqHxE+GidCeOvCNVn7UsjJmpYzel22Ccfj9XwRoFF3A9QYnUYvQIB0QgMmRKeTJS+UdLnNVXffbx+Cv32L804xXKnHcYt+WMi8ZBtNRQ/tgzLmc21+loRDnVamOYoDtPOeRWwAHtREyVuh+UXJETWNGzXpfLSb8mmqUa6kWB1/KXuQ7/4JvBknsbyNp1CAQH6Zr234FUh3oUEqz8vFjFNGvp9lUSJn9hpWkco9kyB7C0KPlvDuzN6gyJ+fZOgp8T3G8WaKNjtD6eFEuLDGb3V0IGgYrh+d0s0UUCLFUCnSEJ8OqO3xoQFCfGbFD22ebU0eb1ic238r12znfbsb4VovSgPEwWlxZ/raU6x+VL420KaaSoa9ScEUdDC9Y74VmCgP0npgpdCe0RAgYcIQV4z13XTJIjhkm56e9nvHfKsQs8tIC+omqbj36/toGcbjsljQdvnwMVZGSO4O7dwi0ljkJUasU7c+pjQRwAPq9KeQBHpKJItfyklLmjoFnZ+aI79XrfmGrHT+56JMDVUuoEq5E9NSt4YRZ0Ba9vUpps7Q9Wby3VJhWaCLxV0jr/eXnhvixgq4OXSKnblaUG1GObwYgu8ngwKegArRbQtJiiij4LyntH2PrNvB2Pxu3qa2idjwmjS6UzGJOfDlkzED18IIfNL6tG8aFJSQynz4oP8IRZQmxjNiybVxKzPB7PlTdjXl+Lo6VJSb6CAs5cMQXp/jdYI/zD8Tc3+xRGUJgwLZfKJ9qZlW+eNtbR2gHvZLUblePmFaEMmSsjsXhdO5CgiEh250LKWVKENx/a+BVbQpZdDxYnAtookl4Iex/TODNbSeo7uZC3WFVwVR4vjnRk2955wvBgvOoC9fhHHu1e179nK7O4aVuQLIygtVRZXfG6XvqssZ3X/EMdLmqMuBpR3YyWmyP1DBndICWB6W3TXr2gA94X6R0Ju++hE1IL0Eex+Ma9yyi1530PzeJf7oe/AyV4kBxnbenUvtUHPiRA+dh8fJ+4uHeV8mVV2njq0qDn0VHikMgonrtcdJG15vaIZuNPu8iHHoi8GTt4A3RtoR87daaUYHdvQH3ub3H3YjZM3QHeyP5SqXOhBaB7vbXJ30MfJe/S73639r6R86GXpx4tkYY+hu0Iijrd62E9AJ1hX3iQUjhI9hsjS6p6QiPXkvV4ypd+rNlCqsLHgqddX745cBtbPTNQY8JUbKKDB8FQcH/Zru/1myXkpvjHQysrXX5EnnhPenHI7K8U3Ol+0Zd4zKPISxP19E7Hwmuhl0VBZ9HpgIYSsFEJxcJOvSZio1BxWuAZNSp6k9b68LWBg4V/kQpPYnd3SS61ohaEiTnhTzi12oclawmdwoCfJ0R6vUUIr/+KUj3Tl6jbqxRXA3qUgOn9ivaDzR309PD+z13m7NZYl1OAuEdo5u+pDiPRTC9RZMbcI7heKtYKOE+ZzpyQOYh7Xj29llHnimUuJ12YSffXH190pCRPdJll6HrtAXOkBX7oy++rTp6yu+USyFiXz2FF0qOwN1S7wIsE98mZcFiF3bWFzDPT2r4rr+5dqvcq3SlEhT8omvFKMSU10/wstrB0MdfhEsZ5ei+WyCY1l1hnR3kQPc7avQIUucB/vjsdQ5+/Lnb0VlFV8El+L1hoKeCWG2q0u6XsmuDp7dPX8RavBRWcTmuhe7pcCtAFXY9LSiYlgyvt554TiRWfDywkLqH2YUJtwy2fZNOV7s4usMy8h8qO/v40/eOs0beulVnMNyZhpoD77qOB4N1U5310jK5sLr8hiXtMU06RVzTLqj1uN5WwmIKw9CyDM+3Ye5w6vLN4gfaNX0HVVe4KsWih+nnbCl/qGpVX9u1Z3CHmpj1env0PafoZHg24VLfHKTWhsnifnkle3vSVbVps6hpKHN70H/CwvI92gIPUh2QxCrl31Y523SUmfhFmEF6PiMyo9El4h5Ipv5MZMUP6+XNR6mZAzFvL/ZBRRcKHe7Aph9Q+s5xQapZyz5yLkmlW/K5tLaJWy3s5JyDk/z+9Q4U8vkyGbkOtV/FTZdcFFMjFzG6H4Vkb/1gcEF9PUK2S5CTmx/fPMiPAn2bz3ZkKyuHliQ4WLwdXvv05IDPVZEa+baC5CTuw9qaGin7frgHkIOa6zesI1KkSrs0fY7ybkmkV0BHtQaJQZ6G8k5CzvydaoUPaylmq3E3LupthuvDcKyZvLu4n7CDlj8ky7/sDPC5ifkGyJg2fZasje1Th/DyHHdT+fIwOnf6YmRhkQci/LJ0gVI+87/fIKC0LOGFTtU4kPHVy6IceCkOPsYaU+FaFWziBxNyFXm6DKFjgQLQYZGRlGhJzYXFRUfcF7i2Z+H3o/Ie3FOaoibsijSUYzCqaEZDZ+eyWbKiQu9NYZ+AghZ/TKNVVioL3bXOijhLR/wKjQHlpRoTsN9DFCYqqTRTnTUfYm9xnoo4ScaG8CuWhb5eXg277dg7IhJLK2xdoqsc/3CyefJRESWx2sivKrxH8uJt1Hxo8JISdag0URxsrLHppYj/KxIKTqbEYeW6+D9NGy9zgex4qQk+zBp8dsRiLkDSfdu+NDXIwIibG63Y1HrPXRKQmJ8wy+my6T8aNiRkglNmfDlf7AUCJZXw23DqPR24spIZHbbG9WCoG8dSwhwQsW34PmTRv4HGJNSGTUOrORGXgyz+frzUYMU/a8n9Wm98LOOE8qgHAnMpbvn/OVp8tyRlIAIWKX8mL+uRw4N29tc6ooQirXdnqD7d98oSuBRzxtVGTQAiVAo8/N5M2xa+yH7qQiCalEw6292F2C6m++/4at8Xg8H35+b2a7UuOXZIPTAvQfa7NoBAvurW4AAAAASUVORK5CYII=" alt="" />
        <Divider marginTop="5px"/>
       <Text className={styles.text}>PostMen</Text>   
  </Box>
  <Box className={styles.shadow} border={"0px"} w="80%" marginLeft="20px" padding="15px" borderRadius="5px"          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png" alt="" />
        <Divider marginTop="5px"/>
       <Text className={styles.text} >Tailwind</Text>   
  </Box>
  <Box className={styles.shadow} border={"0px"} w="80%" marginLeft="20px" padding="15px" borderRadius="5px"          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
>
         <img src="https://seeklogo.com/images/G/github-logo-5F384D0265-seeklogo.com.png" alt="" />
        <Divider marginTop="5px"/>
       <Text className={styles.text} >Github</Text>   
  </Box>
 

  <Box className={styles.shadow} border={"0px"} w="80%" marginLeft="20px" padding="15px" borderRadius="5px"          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
>
         <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="" />
        <Divider marginTop="5px"/>
       <Text className={styles.text} >Node JS</Text>   
  </Box>
  <Box className={styles.shadow} border={"0px"} w="80%" marginLeft="20px" padding="15px" borderRadius="5px"          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
>
         <img src="https://www.kindpng.com/picc/m/385-3850482_mongodb-logo-png-transparent-png.png" alt="" />
        <Divider marginTop="5px"/>
       <Text className={styles.text} >Mongo DB</Text>   
  </Box>
  <Box className={styles.shadow} border={"0px"} w="80%" marginLeft="20px" padding="15px" borderRadius="5px"          boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"
>
  <img src="https://www.mementotech.in/assets/images/icons/express.png" alt="" />
        <Divider marginTop="20px"/>
       <Text className={styles.text} >Express Js</Text>   
  </Box>
</SimpleGrid>
    </div>
    </div>
  )
}

export default Skills