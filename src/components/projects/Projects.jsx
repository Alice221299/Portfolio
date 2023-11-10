import React from 'react'
import "./projects.scss"

const Projects = () => {

  const projects = [{
    image: '/images/Detalleando.PNG',
    name: 'Detalleando',
    description: 'It is a website for gift shops. It shows said shops, lets a client make an order choosing time, date and direction, communicate with a seller using chat, add products/shops to favourites, edit profile, sort and search products and shops. It also has part for seller, where he can edit shop info, check sales and change order status, check and use chat and edit/add/delete products. All the information is stored in Firebase.',
    tech: 'React.js, React Redux, Firebase, Sass',
    linkSite: 'https://detalleando-project.web.app/',
    linkGitHub: 'https://github.com/MAKAIABootcamp/detalleando-project-front-5'
  },
  {
    image: '/images/CineColombia.PNG',
    name: 'CineColombia clone',
    description: 'It is a simulation of the real website of Cine Colombia with a page for administrator. User can choose mmovies, filter them by genre, cinema or day and make a purchase. Administrator can edit/add/delete shows and see all the information about the movie.',
    tech: 'React.js, Sass, React Router DOM, HTTPS requests with axios, JSON server, Git and Github',
    linkSite: 'https://cine-colombia-fake.vercel.app/',
    linkGitHub: 'https://github.com/Mrcsbda/Cine-Colombia-Fake'
  },{
    image: '/images/SpaceTravel.PNG',
    name: 'Space Tourism',
    description: '',
    tech: '',
    linkSite: 'https://workshop4-ten.vercel.app/',
    linkGitHub: ''
  }
]
  return (
    <section className='projects'>
      <h2>Selected <span>projects</span></h2>
      <div className='projects-container'>
        {
          projects.map((project, index) => (
            <div key={index} className='project'>
              <img src={project.image} alt={project.name} />
              <div className='project-info'>
                <h3>{project.name}</h3>
                <p className='project-info--description'>{project.description}</p>
                <p className='project-info--tecnologies'>{project.tech}</p>
                <div className='project-info--links'>
                    <a href={project.linkSite}>Live Preview</a>
                    <a href={project.linkGitHub}>See Code</a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Projects