import React, {useState, useRef, useEffect} from 'react'
import {Helmet} from 'react-helmet'
import { Typography, Button , Switch, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { useForm, ValidationError } from '@formspree/react';

import bg_video from '../static/images/pexels-mikhail-nilov-7677510.mp4'


const useStyles = makeStyles({
  root:{
    margin: 0,
    height: '100vh',
    width: '100vw',
    position:'relative',
    background:'rgba(255, 222, 112, 0.233)',
  },
  containerContact:{
      position:'relative'
  },
  containerform:{
    padding:'20px',

    background:'#fff',
    position: 'absolute',  
    width: '45%', 
    height: '60%',
    transform:'translate(-50%,-50%)',
    left: '70%',
    top: '45%',
    display:'flex',
    justifyContent:'center',
  },
  myform: {
      width: '100%'
  },    
  titleForm:{
    fontFamily: 'Futura LT Pro Bold',
    fontSize: 20,
  },
  bg_video: {
    height: '100vh',
    width:' 100vw',
    objectFit: 'cover',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    zIndex: -1,
  },
  inputFields:{
      '& input, & textarea':{
        margin: '10px 0', 
        background: 'transparent',
        border: 'none' ,
        borderBottom: '2px solid #222224',
        padding: '10px',
        color: 'black', 
        fontWeight : 'bold ', 
        width: '90%',
      },
      '& textarea':{
        maxHeight:'40vh',
        height:'40vh'
    }
  },
  btnSend:{
    backgroundColor: 'transparent',
    border: 'none',
    color:'  #222224',
    cursor: 'pointer',
    fontSize:' 1rem',
    textDecoration: 'none',
    textAlign: 'center',
    margin: '5px',
    '&:hover':{
        color:'  #E16D5D',

    }
  },
  copyright:{
      margin : 0 , 
      color:'#fff',
      textAlign:'center', 
    position:'absolute', 
    bottom: 20,
    fontFamily: 'Futura LT Pro Light',
    fontSize:15,
    transform:'translate(-50%,-50%)',
    left: '50%',
  },
  '@media screen and (max-width: 650px)': {
    containerform:{
      left:'50%',
      width:'70%'
    }, 
    status:{
      fontSize:25,

    },
  }

})

const Contact = () => {
  const classes = useStyles()
  const [state, handleSubmit] = useForm("mqknynjg");
  if (state.succeeded) {
    return <p>Envoyé</p>;
  }




  return (

    <div className={classes.root} id='cont'>
      <Helmet>
        <meta charSet='utf-8' name='viewport' content='width=device-width, initial-scale=1'/>
      </Helmet>


        <div className={classes.containerContact}>
            
            <video  loop="true" autoplay="autoplay"  playsinline preload="auto"  className={classes.bg_video} id="myVideo">
            <source src={bg_video} type="video/mp4"></source>
            </video>    

            <div className={classes.containerform}>
                <form className={classes.myform} onSubmit={handleSubmit}>

                    <Typography variant="h5" className={classes.titleForm}>
                        Envoyer un message 
                    </Typography>

                    <div className={classes.inputFields}>
                        <input id="email" type="email"  name="email"  placeholder ="Email" required/>
                    </div>
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                

                    <div className={classes.inputFields}>
                        <textarea placeholder ="Message" id="message" name="message" required ></textarea>
                    </div>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" className={classes.btnSend} disabled={state.submitting}>
                        Envoyer
                    </button>
                </form>
            </div>

            <Typography variant="h5" id="character" className={classes.copyright}>
                Copyright © 2022 Chelsey Millo | Tous droits réservés 
            </Typography>


            
        </div>

      



    </div>


  );
}

export default Contact;
