import React from 'react'
import "./introduction.scss"

const Introduction = () => {
  return (
    <section className='introduction'>
      <div>
        <h1>Hi, I am <span>Anna Bondarets</span>, frontend developer and web designer</h1>
        <h2>I make <span>responsive websites</span> in which creativity meets convenience</h2>
        <div className='introduction--links'>
          <a href="mailto:ann.bondarets22@gmail.com"><img src="/public/icons/email.svg" alt="Icon for email" /></a>
          <a href="https://www.linkedin.com/in/anna-bondarets/"><img src="/public/icons/linkedin.svg" alt="Icon for LinkedIn" /></a>
          <a href="https://github.com/Alice221299"><img src="/public/icons/github.svg" alt="Icon for GitHub" className='links--github'/></a>
        </div>
      </div>
      <div>
        <figure className='introduction--profile-image'>
          <img src="/public/images/profile.png" alt="My profile image" />
        </figure>
      </div>
    </section>
  )
}

export default Introduction