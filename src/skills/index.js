import React, { useEffect} from 'react'
import {Helmet} from 'react-helmet'
import { Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root:{
    margin: 0,
    height: '100vh',
    width: '100vw',
    position:'relative',
  },
  containerskill:{
      position:'relative',
    '& iframe':{
        height: '100vh'
    }
  },
  containertitle:{
    position:'absolute',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left:' 8%',
  },
  titleSkill:{
    userSelect: 'none',
    pointerEvents: 'none',
    color:'#fff',
    padding: '2em',
    fontFamily: 'Futura LT Pro Bold',
    fontSize: 70,
    transform: 'rotate(-90deg)',
    letterSpacing: '20px',
    transition: '2s',
    textTransform:'uppercase',
    '& span':{
        color:'#272627'
      }
  },
  click:{
    fontFamily: 'Futura LT Pro Bold',
    color:'#272627',
    fontSize: 15,
    position:'absolute',
    top: '2%',
    left:' 2%',

  },
  '@media screen and (max-width: 650px)': {
    titleSkill:{
      fontSize:55,
    }, 
  },
  '@media screen and (max-width: 500px)': {
    titleSkill:{
      fontSize:45,
    }, 
    containertitle:{
      left:'6%'
    }
  },

})

const Skill = () => {
  const classes = useStyles()


  useEffect(() => {

  });



  return (

    <div className={classes.root} id='comp'>
      <Helmet>
        <meta charSet='utf-8' name='viewport' content='width=device-width, initial-scale=1'/>
      </Helmet>


        <div className={classes.containerskill}>
            <Typography variant="h2" className={classes.click}>
                cliquer pour voir 
            </Typography>
            <div className={classes.containertitle}>
                <Typography variant="h2" className={classes.titleSkill}>
                    Compétences
                    <span>.</span>
                </Typography>
            </div>
            <iframe src='https://my.spline.design/blockycopycopy-2c1774fc2f749e85556d6722de099a24/' frameborder='0' width='100%' height='100%'></iframe>
	    </div>

      



    </div>


  );
}

export default Skill;
