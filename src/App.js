import React, {useState, useRef, useEffect} from 'react'
import {Helmet} from 'react-helmet'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

import Navbar from './navbar/index'
import Presentation from './pres/index'
import Skills from './skills/index'
import Exp from './experiences/index'
import Contact from './contact/index'

import bg_video from './static/images/pexels-mart-production-7565817.mp4'
import bg_videoweb from './static/images/pexels-mart-production-7565817.webm'


const useStyles = makeStyles({
  root:{
  },
  content:{
    background:'rgba(255, 222, 112, 0.233)',

    height: '100vh',
    backgroundSize: 'cover',
    position: 'relative',

  },
  box:{
    display:'flex',
    flexDirection:'column',
    alignItems: 'flex-end',
    position: 'absolute',
    width: 634,
    height: 363,
    left: '5%',
    top: '25%',

  },
  name:{
    position:'relative',
    textTransform: 'uppercase',
    fontFamily: 'Futura LT Pro Bold',
    fontStyle: 'normal',
    fontSize: 125, //202020
    color: '#fff',
    width:'max-content',
    borderBottom: '10px #fff solid',
    transition: '2s',
  },
  status:{
    color: '#fff',
    fontFamily: 'Futura LT Pro Bold',
    fontSize: 31,
    margin : '5vh 0px',
    transition: '2s',
    width: 'max-content'
  },
  containerPresenation:{
    margin: 0,
  },
  bg_video: {
    height: '100vh',
    width:' 100vw',
    objectFit: 'cover',
    position: 'absolute',  
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  '@media screen and (max-width: 950px)': {
    name:{
      fontSize:80,
    }, 
    box:{
      display:'initial',
      width:'initial'
    }
  },
  '@media screen and (max-width: 650px)': {
    name:{
      fontSize:50,
    }, 
    status:{
      fontSize:25,

    },
  }

})

const App = () => {
  const classes = useStyles()
  const [isFrench, setIsFrench] = useState(true)
  const [visit, setVisit] = useState(0)
  const myContainer = useRef(null);


  useEffect(() => {
    myContainer.current.innerHTML = myContainer.current.textContent.replace(/\S/g,`<span class="mySpan" >$&</span>`)
    const element = document.querySelectorAll('span');
    console.log(element.length)
  
    for(let i = 0; i<element.length; i++){
      element[i].style.transform = "rotate("+ i*13+ "deg)";
    }

    const scrollToComp = () => {
      const comp = document.getElementById("comp");
      comp.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }
    const scrollToExp = () => {
      const exp = document.getElementById("exp");
      exp.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }
    const scrollToCont = () => {
      const cont = document.getElementById("cont");
      cont.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    }

  });


  const handleClickMail = () => {
    var mail = document.createElement("a");
    mail.href = "mailto:chelseymillo@gmail.com?subject=Mail porfolio";
    mail.click();
  }
  const handleChange =() => {
    setIsFrench(!isFrench)
    setVisit(visit+1)
  }

  return (

    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' name='viewport' content='width=device-width, initial-scale=1'/>
      </Helmet>

      <div className={classes.content}>
        <Navbar/>

        <div className={classes.box}>
          <Typography className={classes.name}>
            Chelsey 
          </Typography>
          <Typography className={classes.name}>
            Millo
          </Typography>
          <Typography className={classes.status}>
            développeuse web
          </Typography>
        </div>
        <section >
          <Typography class="animText" ref={myContainer}>
          Bienvenue.sur.mon.portfolio. 
          </Typography>
        </section>

        <video  loop="true" autoplay="autoplay"  playsinline preload="auto"  className={classes.bg_video} id="myVideo">
          <source src={bg_video} type="video/mp4"></source>
          <source src={bg_videoweb} type="video/webm" />
        </video>
      </div>

      <div className={classes.containerPresenation}>
        <Presentation/>
        <Skills/>
        <Exp/>
        <Contact/>
      </div>
      

      

    </div>
  );
}

export default App;
