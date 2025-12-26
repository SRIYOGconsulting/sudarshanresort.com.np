import React from 'react'
import { Check } from 'lucide-react'
import SudarshanAbout from "/images/about/SudarshanAbout.webp"
import web1 from "/images/about/promoting/1.webp"
import web2 from "/images/about/promoting/2.webp"
import web3 from "/images/about/promoting/3.webp"
import SeoHelmet from '../components/SeoHelmet'
import Herosection from '../components/Herosection'

const About = () => {
    const aboutFeature=[
    {img:"/images/about/feature/car.webp",
      h3:"Free WiFi Access",},
        {img:"/images/about/feature/utensils.webp",
      h3:"Restaurant & Food Service",},
        {img:"/images/about/feature/car.webp",
      h3:"Free Parking",},
  ]
  const promoting=[
      {img: web1},
      {img: web2},
      {img: web3},
    ]
  return (
    <div>
        <SeoHelmet
                title="About | Sudarshan Resort"
                description="Get in touch with Sudarshan Resort for reservations, inquiries, or any assistance. We are here to make your stay memorable."
                image="/images/contact/whatsapplogo.webp"
                url="https://sudarshanresort.com/about"
              />
            <Herosection h1="About" tab="Home" p="About" bg="/images/background/1.webp"/>
      <div>
              <h1>About Us</h1>
              <div >
                <div >
                <p >Welcome to Sudarshan Park and Resort, your ultimate destination for relaxation and cultural immersion in Nepali style. Nestled in the heart of lush greenery, our resort offers a serene escape where you can enjoy authentic Nepali cuisine, comfortable accommodations, and vibrant cultural experiences. </p>
                  <p >
                  At Sudarshan Park and Resort, we take pride in serving the finest traditional Nepali dishes at affordable prices.</p>
                  </div>
                <img src={SudarshanAbout}  alt="aboutimg" />
              </div>
            </div>

      {/* promoting tourism */}
            <div >
                    <h1>"Promoting Tourism"</h1>
                    <div >
                    {promoting.map((promote,index)=>(
                      <img key={index} src={promote.img} alt="" />
                    ))}
                    </div>
                  </div>

            {/* feaatures */}
            <div >
        <div>
        <img src="/images/about/feature/1.webp" alt="" />
        </div>
        
        <div >
        <div >
          <h1>Features</h1>
          <div ></div>
          </div>
          
        <div >
          <div >
            <ul >
              <div>
              <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>In Room Dinning</p>
              </li>
              
               <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>Transport Service</p>
              </li>
              
               <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>Facilities for the Disable</p>
              </li>
              </div>
              
              <div>
               <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>Pet Friendly Accomodation</p>
              </li>
               <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>Check In : 1.00 pm</p>
              </li>
               <li>
              <Check color="#00ff33" strokeWidth={3} />
              <p>Check out : 11.00 am</p>
              </li>
              </div>
            </ul>
          </div>
          
            <div ></div>
          <div >
            {aboutFeature.map((item,index)=>(
              <div key={index}>
                <div >
                <img src={item.img} alt="img" />
                <h3>{item.h3}</h3>
                
            </div>
          
          
            </div>
            ))}
          
          </div>
          
        </div>
        </div>
      </div>

    </div>
  )
}

export default About
