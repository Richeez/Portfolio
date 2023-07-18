import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MainContainer, MenuContainer } from './styles/stylez';
import { useState } from 'react';
import Globalstyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './styles/Theme/theme'
import Typewriter from "typewriter-effect";



function App() {


  function Navbar() {


    return (
      <MenuContainer>
        <div onClick={() => setDisplay('home')} className={display === 'home' ? 'active-btn' : 'control'}>
          <FontAwesomeIcon className='icon' icon={['fa', 'fa-home']} />
        </div>
        <div onClick={() => setDisplay('about')} className={display === 'about' ? 'active-btn' : 'control'}>
          <FontAwesomeIcon className='icon' icon={['fa', 'fa-user']} />
        </div>
        <div onClick={() => setDisplay('portfolio')} className={display === 'portfolio' ? 'active-btn' : 'control'} >
          <FontAwesomeIcon className='icon' icon={['fa', 'fa-briefcase']} />
        </div>
        {/* <div onClick={() => setDisplay('blogs')} className={display === 'blogs' ? 'active-btn' : 'control'} >
          <FontAwesomeIcon className='icon' icon={['far', 'fa-newspaper']} />
        </div> */}
        <div onClick={() => setDisplay('home')} className='control '>
          <FontAwesomeIcon className='icon' icon={['far', 'fa-envelope-open']} />
        </div>
      </MenuContainer>

    );
  }
  function Pages() {


    return (
      <>

        {display === 'home' && <header className='header section sec1 active'>
          <div className='header-contents'>
            <div className='left-side'>
              <div className='frame'></div>
              <div className='image-cont'>
                <img src="./images/profile-pic.png" alt="developer" />
              </div>
            </div>
            <div className='right-side'>
              <div className='text-cont'>
                <h1>
                  Hello, My Name is
                  <span className='name'> Richard Saturday <br /></span>
                  <span className='profession'> I'm  a&nbsp;
                    <Typewriter

                      options={{

                        strings: ["web developer", "UX/UI Designer", "React Developer"],
                        autoStart: true,
                        loop: true
                      }}
                    />
                  </span>

                </h1>
                <p>
                  I am a Full-stack Developer with experience using HTML5,
                  CSS3, Javascript, React JS, MongoDB and progressive web development.
                </p>
              </div>
              <div className='btn-cont'>
                <div onClick={download} className='btn-wrapper'>
                  <span className='btn-text'>Download CV</span>
                  <span className='btn-icon'> <FontAwesomeIcon icon={['fa', 'fa-download']} /></span>
                </div>
              </div>
            </div>
          </div>
        </header>}
        <main className="main-container">
          {display === 'about' && <section className="section sec2 about active ">
            <div className="main-title">
              <h2>
                about <span className="me">me</span>
                <span className="foreground">my stats</span>
              </h2>
            </div>

            <div className="about-cont">
              <div className="left-about">
                <div className="left-cont">
                  <h3>Information about me</h3>
                  <div>
                    <p>
                      Experienced and highly skilled full-stack Developer
                      specialiazing in HTML, CSS3, Javascript, React
                      JS(Front-end), and MongoDB(Back-end) with a strong
                      background in progressive web development and a passion for
                      creating efficient and user-friendly applications. Proven
                      track record of delivering high-quality code on time and
                      within budget. Detail-oriented and resourceful
                      problem-solver with excellent communication and teamwork.
                      Adept at working on both small and large-scale projects.
                      <br /> <br /> Therefore, these are my traits that support human
                      relations: <br /></p>

                    <ol>
                      <li>I am reliable.
                      </li>
                      <li>Problem-solving ability.
                      </li>
                      <li> Good interpersonal skills and ability to work effectively in a team.
                      </li>
                      <li>Ability to meet targets and challenges.
                      </li>
                      <li>I am jovial(friendly).
                      </li>
                      <li>Ability to learn fast with little or no supervision.</li>

                    </ol>

                  </div>
                  <div className="btn-cont">
                    <div onClick={download} className="btn-wrapper">
                      <span className="btn-text">Download CV</span>
                      <span className="btn-icon"> <i className="fas fa-download"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-about">
                <div className="about-items">
                  <div className="items-cont">
                    <p className="large-text">10+</p>
                    <p className="small-text">
                      Project <br />
                      completed.
                    </p>
                  </div>
                </div>
                <div className="about-items">
                  <div className="items-cont">
                    <p className="large-text">2+</p>
                    <p className="small-text">
                      Years of <br />
                      Experience.
                    </p>
                  </div>
                </div>
                {/* <!-- <div class="about-items">
                  <div class="items-cont">
                    <p class="large-text">10+</p>
                    <p class="small-text">
                      Happy <br />
                      Clients.
                    </p>
                  </div>
                </div>
                <div class="about-items">
                  <div class="items-cont">
                    <p class="large-text">10+</p>
                    <p class="small-text">
                      Customer <br />
                      Reviews.
                    </p>
                  </div>
                </div> --> */}
              </div>
            </div>

            <div className="my-stats">
              <h3 className="stats-title">My Skills</h3>
              <div className="progress-bars">
                <div className="progress-bar">
                  <p className="progress-title"> scss</p>
                  {/* <!-- <div class="progress-cont">
                      <p class="progress-text">90%</p>
                      <div class="progress">
                        <span class="scss"></span>
                      </div>
                    </div> --> */}
                </div>
                <div className="progress-bar">
                  <p className="progress-title"> javascript</p>
                  {/* <!-- <div class="progress-cont">
                      <p class="progress-text">90%</p>
                      <div class="progress">
                        <span class="scss"></span>
                      </div>
                    </div> --> */}
                </div>
                <div className="progress-bar">
                  <p className="progress-title"> react js</p>
                  {/*  <!-- <div class="progress-cont">
                      <p class="progress-text">90%</p>
                      <div class="progress">
                        <span class="scss"></span>
                      </div>
                    </div> --> */}
                </div>
                <div className="progress-bar">
                  <p className="progress-title">JavaScript (React)</p>
                  {/*<div class="progress-cont">
                      <p class="progress-text">90%</p>
                      <div class="progress">
                        <span class="scss"></span>
                      </div>
                    </div>*/}
                </div>
                <div className="progress-bar">
                  <p className="progress-title">Node.js, Express.js</p>
                  {/*<div class="progress-cont">
                      <p class="progress-text">90%</p>
                      <div class="progress">
                        <span class="scss"></span>
                      </div>
                    </div>*/}
                </div>
                <div className="progress-bar">
                  <p className="progress-title">styled components</p>
                  {/*<div class="progress-cont">
                      <p class="progress-text">90%</p>
                      <div class="progress">
                        <span class="scss"></span>
                      </div>
                    </div>*/}
                </div>
                <div className="progress-bar">
                  <p className="progress-title">RESTful APIs</p>
                  {/*<div class="progress-cont">
                      <p class="progress-text">90%</p>
                      <div class="progress">
                        <span class="scss"></span>
                      </div>
                    </div>*/}
                </div>
                <div className="progress-bar">
                  <p className="progress-title">UI/UX Design</p>
                  {/*<div class="progress-cont">
                      <p class="progress-text">90%</p>
                      <div class="progress">
                        <span class="scss"></span>
                      </div>
                    </div>*/}
                </div>
                <div className="progress-bar">
                  <p className="progress-title">Data Management(Context API, Redux-toolkit)</p>
                  {/*<div class="progress-cont">
                      <p class="progress-text">90%</p>
                      <div class="progress">
                        <span class="scss"></span>
                      </div>
                    </div>*/}
                </div>
                <div className="progress-bar">
                  <p className="progress-title">Deployment and Hosting(Vercel, Netlify)</p>
                  {/*<div class="progress-cont">
                      <p class="progress-text">90%</p>
                      <div class="progress">
                        <span class="scss"></span>
                      </div>
                    </div>*/}
                </div>
                <div className="progress-bar">
                  <p className="progress-title">Version control (Git)</p>
                  {/*<div class="progress-cont">
                      <p class="progress-text">90%</p>
                      <div class="progress">
                        <span class="scss"></span>
                      </div>
                    </div>*/}
                </div>
              </div>
            </div>

            <h3 className="stats-title">My timeline</h3>

            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-icon">
                  <i className="fas fa-briefcase"></i>
                </div>
                <p className="timeline-duration">2021 - present</p>
                <h4>Web developer  <span> - Beetos</span> </h4>
                <p className="duration-text">Responsible for development, implementaion and maintenance of both desktop and mobile user interface.</p>
              </div>
            </div>
          </section>}
          {display === 'portfolio' && <section className="section sec3 portfolio active">
            <div className="main-title">
              <h2>
                my <span className="me">portfolio</span>
                <span className="foreground">my work</span>
              </h2>
            </div>
            <p className="port-text">Here are some of my works I have done in various programming languages.  </p>

            <div className="portfolio-cont">

              <div className="portfolio-items">
                <div className="image-cont">
                  <img src="/images/proj05.png" alt="project" srcSet="" />
                </div>
                <div className="hover-item">
                  <h4>project source</h4>
                  <div className="icons-cont">
                    <div className="icon">
                      <i className="fab fa-github i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-facebook i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-linkedin i"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-items">
                <div className="image-cont">
                  <img src="./images/proj01.png" alt="project" srcSet="" />
                </div>
                <div className="hover-item">
                  <h4>project source</h4>
                  <div className="icons-cont">
                    <div className="icon">
                      <i className="fab fa-github i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-facebook i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-linkedin i"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-items">
                <div className="image-cont">
                  <img src="/images/proj04.png" alt="project" srcSet="" />
                </div>
                <div className="hover-item">
                  <h4>project source</h4>
                  <div className="icons-cont">
                    <div className="icon">
                      <i className="fab fa-github i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-facebook i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-linkedin i"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-items">
                <div className="image-cont">
                  <img src="/images/tacn-desk.png" alt="project" srcSet="" />
                </div>
                <div className="hover-item">
                  <h4>project source</h4>
                  <div className="icons-cont">
                    <div className="icon">
                      <i className="fab fa-github i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-facebook i"></i>
                    </div>
                    <div className='icon'>
                      < FontAwesomeIcon className='i' icon={['fab', 'fa-linkedin']} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-items">
                <div className="image-cont">
                  <img src="./images/proj01.jpg" alt="project" />
                </div>
                <div className="hover-item">
                  <h4>project source</h4>
                  <div className="icons-cont">
                    <div className="icon">
                      <i className="fab fa-github i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-facebook i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-linkedin i"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-items">
                <div className="image-cont">
                  <img src="/images/proj02.png" alt="project" />
                </div>
                <div className="hover-item">
                  <h4>project source</h4>
                  <div className="icons-cont">
                    <div className="icon">
                      <i className="fab fa-github i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-facebook i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-linkedin i"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="portfolio-items">
                <div className="image-cont">
                  <img src="/images/proj03.jpg" alt="project" srcSet="" />
                </div>
                <div className="hover-item">
                  <h4>project source</h4>
                  <div className="icons-cont">
                    <div className="icon">
                      <i className="fab fa-github i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-facebook i"></i>
                    </div>
                    <div className="icon">
                      <i className="fab fa-linkedin i"></i>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </section>}
          {/* display === 'blogs' && <section className="section sec4 blogs active">
            <div className="blog-cont">
              <div className="main-title">
                <h2>
                  my <span className="me">blogs</span>
                  <span className="foreground">my blogs</span>
                </h2>
              </div>
              <div className="blogs-wrapper">
                <div className="blog">
                  <img src="/images/profile-pic.png" alt="project" srcSet="" />
                  <div className="blog-text">
                    <h4>How to create your own website</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est distinctio possimus ipsum ea delectus facilis rerum reprehenderit laboriosam sint quibusdam!</p>
                  </div>
                </div>
                <div className="blog">
                  <img src="/images/profile-pic.png" alt="project" />
                  <div className="blog-text">
                    <h4>How to create your own website</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est distinctio possimus ipsum ea delectus facilis rerum reprehenderit laboriosam sint quibusdam!</p>
                  </div>
                </div>
                <div className="blog">
                  <img src="/images/profile-pic.png" alt="project" srcSet="" />
                  <div className="blog-text">
                    <h4>How to create your own website</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est distinctio possimus ipsum ea delectus facilis rerum reprehenderit laboriosam sint quibusdam!</p>
                  </div>
                </div>
                <div className="blog">
                  <img src="/images/profile-pic.png" alt="project" srcSet="" />
                  <div className="blog-text">
                    <h4>How to create your own website</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est distinctio possimus ipsum ea delectus facilis rerum reprehenderit laboriosam sint quibusdam!</p>
                  </div>
                </div>
                <div className="blog">
                  <img src="/images/profile-pic.png" alt="project" srcSet="" />
                  <div className="blog-text">
                    <h4>How to create your own website</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est distinctio possimus ipsum ea delectus facilis rerum reprehenderit laboriosam sint quibusdam!</p>
                  </div>
                </div>
                <div className="blog">
                  <img src="/images/profile-pic.png" alt="project" srcSet="" />
                  <div className="blog-text">
                    <h4>How to create your own website</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est distinctio possimus ipsum ea delectus facilis rerum reprehenderit laboriosam sint quibusdam!</p>
                  </div>
                </div>
              </div>
            </div>

          </section> */}
          <section className='section sec5 contact'>

          </section>
          <div onClick={themeMode} className='theme-cont'>
            <FontAwesomeIcon className='icon' icon={['fa', 'fa-adjust']} />
          </div>
        </main>
      </>


    )
  }


  function download() {
    // using Java Script method to get PDF file
    fetch('Richard-CV.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Richard-CV.pdf';
        alink.click();
      })
    })
  }



  function themeMode() {
    // setTheme(prev => !prev)
    theme === 'light' ? setTheme('dark') : setTheme('light')

  }

  const [display, setDisplay] = useState('home')

  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem('Current_Theme')) ?? 'light')




  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      {localStorage.setItem('Current_Theme', JSON.stringify(theme))}

      <>
        <Globalstyles />
        <MainContainer>
          <Navbar />
          <Pages />
        </MainContainer>
      </>
    </ThemeProvider>
  );


}

export default App;
