import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>"Welcome to RP LUXURY, where dreams of exclusive and refined living become reality. We specialize in curating a collection of the finest luxury homes, tailored for those who seek elegance, sophistication, and unparalleled comfort. Our mission is to connect you with properties that are not just homes but a statement of lifestyle and prestige.</p>
            <p>At RP LUXURY, we pride ourselves on delivering exceptional service and personalized experiences, ensuring that every detail aligns with your vision of luxury living. Discover the art of fine living with us, and let us guide you to your perfect home."</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
