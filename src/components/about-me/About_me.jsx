import React, { useState } from 'react'
import './about_me.scss'
import cv from "/public/CV.pdf"

const About_me = () => {

  const [click, setClick] = useState(false)
  return (
    <section className='about-me'>
      <div>
        <h2>A bit <span>about me</span> </h2>
        <p>I am a frontend developer who is passionate about <span>creating beautiful and accessible websites</span>. I always strive to improve my knowledge and skills. In my free time I love doing <span>photography, cooking and travelling.</span></p>
        <p className='about-me--download'>If you want to see more,</p>
        {/* <button className='about-me--download-button'>Download my resume</button> */}
        <div class="container">
	<label>
		{/* <input class="check" type="checkbox"/> */}
		<div className={ click ? 'btn btn-new' : 'btn'}>
      <a href={cv} download='CV-Anna-Bondarets' target='_blank' rel='' onClick={() => setClick(true)}>
        <span className="download-text">Download my resume</span>
      </a>
			<span className="download-process">Hang on a moment, download in progress</span>
		</div>
	</label>
</div>
      </div>
      <figure className='about-me--image'>
        <img src="/public/images/other-image.jpg" alt="Image for hobby" />
      </figure>
    </section>
  )
}

export default About_me