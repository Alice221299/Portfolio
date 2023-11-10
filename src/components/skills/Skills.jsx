import React from 'react'
import "./skills.scss"

const Skills = () => {

  const skillsNow = [{
    image: '/icons/html.svg',
    name: 'HTML5'
  },{
    image: '/icons/css.svg',
    name: 'CSS3'
  },{
    image: '/icons/sass.svg',
    name: 'Sass'
  },{
    image: '/icons/js.svg',
    name: 'JavaScript'
  },{
    image: '/icons/react.svg',
    name: 'React.js'
  },
  {
    image: '/icons/redux.svg',
    name: 'React Redux'
  },
  {
    image: '/icons/git.svg',
    name: 'Git'
  },
  {
    image: '/icons/firebase.svg',
    name: 'Firebase'
  },
  {
    image: '/icons/tailwind.svg',
    name: 'Tailwind CSS'
  },
]

const skillsLearning = [{
  image: '/icons/us.svg',
  name: 'English C1'
},{
  image: '/icons/spain.svg',
  name: 'Spanish B2'
},{
  image: '/icons/russia.svg',
  name: 'Russian Native'
},{
  image: '/icons/figma.svg',
  name: 'Figma'
}
// ,{
//   image: '',
//   name: ''
// },
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