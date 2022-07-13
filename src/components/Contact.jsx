import React from 'react'
import MiracleForm from './MiracleForm'
import PrayerRequest from './PrayerRequest'


function Contact() {
  return (
    <>
    <div className="contact-container">
        <h2>Share your miracle with us and let people be inspired</h2>
        <div className="contact">
            <PrayerRequest />
            <div className='contact-details'>
                <h2>The Miracle Network</h2>
                <p>A miracle is much more than religion. Its an act of God that shows love, humbleness, faith, and much more. <span>But Jesus looked at them and said, “With man this is impossible, but with God all things are possible.”</span></p>
                
            </div>
            <MiracleForm />
        </div>
    </div>
    </>
  )
}

export default Contact
