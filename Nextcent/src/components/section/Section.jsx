import React from 'react'

import "./section.css"
import Image01 from "../../assets/Img-section01.svg"

// logo clients
import Logo01 from "../../assets/group-logo_clients/Logo01.svg"
import Logo02 from "../../assets/group-logo_clients/Logo02.svg"
import Logo03 from "../../assets/group-logo_clients/Logo03.svg"
import Logo04 from "../../assets/group-logo_clients/Logo04.svg"
import Logo05 from "../../assets/group-logo_clients/Logo05.svg"
import Logo06 from "../../assets/group-logo_clients/Logo06.svg"
import Logo07 from "../../assets/group-logo_clients/Logo07.svg"

// logo comunnity
import IconClub from "../../assets/icon-comunnity/icon-club.svg"
import IconMembership from "../../assets/icon-comunnity/icon-membership.svg"
import IconNational from "../../assets/icon-comunnity/icon-national.svg"

// other
import Rafiki from "../../assets/rafiki.svg"

import Button from '../button/Button'

const Section = () => {
  return (
    <div className="container-section">

      <div className='main-section'>
          <div>
              <h1>Lessons and insights <br/><span className='text-different'>from 8 years</span></h1>
              <p>When to grow business as a photographer: site or social media?</p>
              <Button name={"Register"}/>
          </div>
          <div>
              <img className="image01" src={Image01} alt="#"/>
          </div>
        </div>

      <div className="client-section">
        <h2>Our Clients</h2>
        <p>We have been working with some Fortune 500+ clients</p>
        <div>
          <ul className="logos">
            <li><img src={Logo01} className="logo-clients" alt="#" /></li>
            <li><img src={Logo02} className="logo-clients" alt="#" /></li>
            <li><img src={Logo03} className="logo-clients" alt="#" /></li>
            <li><img src={Logo04} className="logo-clients" alt="#" /></li>
            <li><img src={Logo05} className="logo-clients" alt="#" /></li>
            <li><img src={Logo06} className="logo-clients" alt="#" /></li>
            <li><img src={Logo07} className="logo-clients" alt="#" /></li>
          </ul>
        </div>
        <h2>Manage your entire community <br/>in a single system</h2>
        <p>Who is Nextcent suitable for?</p>

        <div className='community'>
            <div className="member-ship">
              <img src={IconMembership} alt="any" />
              <h1>Membership Organisations</h1>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="member-ship">
              <img src={IconNational} alt="any" />
              <h1>Membership Organisations</h1>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
            <div className="member-ship">
              <img src={IconClub} alt="any" />
              <h1>Membership Organisations</h1>
              <p>Our membership management software provides full automation of membership renewals and payments</p>
            </div>
        </div>
        <div className='section02'>
          <img src={Rafiki} className ="rafiki" alt="#"/>
          <div>
            <h2>The unseen of speding three years at Pixelgrade</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <Button name={"Learn more"}/>
          </div>
        </div>
        <div className="section03">
          <div>
            <h2>Helping a local <br/>business reinvent itself</h2>
            <p>We reached here with our hard work and dedication</p>
          </div>
          <div className='group-help'>
            <div>
              <img src="#" alt="#" />
              <div>
                <h2>2,245,341</h2>
                <p>Members</p>
              </div>
            </div>

            <div>
              <img src="#" alt=" #" />
              <div>
                <h2>46,328</h2>
                <p>clubs</p>
              </div>
            </div>

            <div>
              <img src="#" alt=" #" />
              <div>
                <h2>828,867</h2>
                <p>Event Bookings</p>
              </div>
            </div>

            <div>
              <img src="#" alt=" #" />
              <div>
                <h2>1,926,436</h2>
                <p>Payments</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section