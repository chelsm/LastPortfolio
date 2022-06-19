import React, {useState, useRef, useEffect} from 'react'
import {Helmet} from 'react-helmet'
import { Typography, Button , Switch, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import bg_moving_violet from '../static/images/moving_background.webp'


const useStyles = makeStyles({
  root:{
    margin: 0,
    height: '100vh',
    width: '100vw',
    position:'relative',
  },
  aboutMeContainer:{
    padding: '3em 5em',
  },
  titleInfo:{
    width: '70%',
    margin : 0,
    fontFamily: 'Futura LT Pro Bold',
    fontSize: 70,
    transition: '2s',
    textTransform: 'uppercase'
  },
  aboutMe:{
    fontSize: 30,
    color:'rgb(41, 41, 41)',
    marginTop: '10%',
    width: '60%',
    transition: '2s',
    fontFamily: 'Futura LT Pro Medium',
  },
  containerLetter:{
    userSelect: 'none',
  pointerEvents: 'none',
    position:'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left:' 88%',
  },
  letter:{
    transform: 'rotate(-90deg)',
    fontSize: '45vh',
    fontFamily: 'Futura LT Pro Bold',
    '& span':{
      color:'#E16D5D'
    },
    transition: '2s',

  },
  cursor:{
    border:'solid red',
    height: 50,
    width: 50,
    background: '#E16D5D',
    borderRadius:' 50%',
    position: 'absolute',
  },
  lineSeparator:{
    position: 'absolute',
    bottom:'15%',
    height:5, 
    width: '60%', 
    background:"#000",
    transition: '2s'
  },
  '@media screen and (max-width: 950px)': {
    titleInfo:{
      fontSize:50,
    }, 
    aboutMe:{
      width:'65%',
      fontSize:25
    },
    lineSeparator:{
      bottom:'10%'
    }
  },
  '@media screen and (max-width: 750px)': {
    aboutMe:{
      width:'100%'
    },
    letter:{
      transform:'initial',
      fontSize:'20vh'
    }, 
    containerLetter:{
      top: 'initial',
      transform:'initial',
      left: 'initial'
    }
  },
  '@media screen and (max-width: 500px)': {
    aboutMeContainer:{
      padding:'5em 3em'
    },
    titleInfo:{
      fontSize:25,
    }, 
    aboutMe:{
      fontSize:25
    },
    containerLetter:{
      display: 'none',

    },
  }

})

const App = () => {
  const classes = useStyles()


  useEffect(() => {
    var cursor = document.querySelector(".cursor");
    var cursor2 = document.querySelector(".cursor2");
    document.onmousemove=function(e){
      cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX+"px; top:" + e.clientY+"px;";
    }

  });

  return (

    <div className={classes.root}>
      <Helmet>
        <meta charSet='utf-8' name='viewport' content='width=device-width, initial-scale=1'/>
      </Helmet>


      <div className={classes.aboutMeContainer}>

        <div className={classes.lineSeparator}></div>


        <h2 className={classes.titleInfo}>Informations intéréssantes à savoir</h2>
        <p className={classes.aboutMe}>
            Je suis actuellement  étudiante en Bachelor Developpement Web à Digital Campus Paris et
            alternante au sein d'une entreprise cool et sympa. <br></br>
             <br></br> 
            Je suis à la recherche d'une école qui me permettra de développer mes connaissances et acquérir de nombreuses et nouvelles compétences! 
        </p>

        <div className={classes.containerLetter}>
          <Typography variant="h5" id="character" className={classes.letter}>
            Ch
            <span>.</span>
          </Typography>
        </div>


        <div class="cursor"></div>
        <div class="cursor2"></div>
      </div>

      



    </div>


  );
}

export default App;
