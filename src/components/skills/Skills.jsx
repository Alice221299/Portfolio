import React from 'react'
import "./skills.scss"

const Skills = () => {

  const skillsNow = [{
    image: '/public/icons/html.svg',
    name: 'HTML5'
  },{
    image: '/public/icons/css.svg',
    name: 'CSS3'
  },{
    image: '/public/icons/sass.svg',
    name: 'Sass'
  },{
    image: '/public/icons/js.svg',
    name: 'JavaScript'
  },{
    image: '/public/icons/react.svg',
    name: 'React.js'
  },
  {
    image: '/public/icons/redux.svg',
    name: 'React Redux'
  },
  {
    image: '/public/icons/git.svg',
    name: 'Git'
  },
  {
    image: '/public/icons/firebase.svg',
    name: 'Firebase'
  },
  {
    image: '',
    name: ''
  },
]

const skillsLearning = [{
  image: '/public/icons/us.svg',
  name: 'English C1'
},{
  image: '/public/icons/spain.svg',
  name: 'Spanish B2'
},{
  image: '/public/icons/russia.svg',
  name: 'Russian Native'
},{
  image: '/public/icons/figma.svg',
  name: 'Figma'
},{
  image: '',
  name: ''
},
]

  return (
    <section className='skills'>
      <h2>My <span>skills</span> </h2>
      <div>
        <h3>Tech Stack</h3>
        <div className='skills--container'>
          {
          skillsNow.map((skill, index) => (
            <div key={index} className='skill'>
              <img src={skill.image} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))
        }
        </div>
      </div>
      <div>
        <h3>Other Skills</h3>
        <div className='skills--container'>
          {
            skillsLearning.map((skill, index) => (
              <div key={index} className='skill'>
                <img src={skill.image} alt={skill.name} />
                <p>{skill.name}</p>
              </div>
            ))
          }
        </div>
        
      </div>
    </section>
  )
}

export default Skills