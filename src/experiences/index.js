import React, {useState, useEffect} from 'react'
import {Helmet} from 'react-helmet'
import { Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import ArrowDownward from '../static/icons/down.svg';
import ArrowUpward from '../static/icons/up.svg';

const useStyles = makeStyles({
  root:{
    margin: 0,
    minHeight: '100vh',
    width: '100vw',
    position:'relative',
  },
  containerjob:{
    padding: '3em 5em',
    display:'flex'
  },
  containerjobOne:{
    display:'flex', 
    flexDirection:'column'
  },
  containerjobTwo:{
    width:'100%',
    '& ul':{
        listStyle: 'none',
        '& li':{
            borderTop: 'solid rgb(41, 41, 41)',
            minHeight:'20vh'
        }
    }
  },
  titlejob:{
    userSelect: 'none',
    transition: '2s',
    width:'70%',
    pointerEvents: 'none',
    padding: '1em 0px',
    fontFamily: 'Futura LT Pro Bold',
    fontSize: 70,
    textTransform:'uppercase',
    '& span':{
        color:'#E16D5D'
    }
  },
  parajob:{
    transition: '2s',
    width:'50%',
    fontSize: 35,
    color:'rgb(41, 41, 41)',
    fontFamily: 'Futura LT Pro Medium',
  },
  compagnie:{
    fontFamily: 'Futura LT Pro Bold',
    fontSize: 40,
    margin:'20px 0px'
  },
  infojob:{
    display:'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  job: {
    fontFamily: 'Futura LT Pro Medium',
    fontSize: 20
  },
  btnToggle:{
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    background:'transparent',
    border:'transparent',
    borderRadius:20,
    marginTop: 10,
    '&:hover':{
        background:'rgba(41, 41, 41, 0.082)'
    }
  },
  lineSeparator:{
    transition: '2s',
      margin: '0 auto',
    position: 'absolute',
    left: '25%',
    bottom:'15%',
    height:5, 
    width: '60%', 
    background:"#E16D5D"
  },
  '@media screen and (max-width: 1250px)': {
    containerjob:{
      flexDirection:'column'
    },
    parajob:{
      width:'initial'
    },
    lineSeparator:{
      bottom:'2%'
    }
  },
  '@media screen and (max-width: 950px)': {
    titlejob:{
      fontSize:35,
    }, 
    parajob:{
      fontSize:20,

    }
  },
  '@media screen and (max-width: 500px)': {
    titlejob:{
      fontSize:25,
    }, 
    status:{
      fontSize:15,
    },
    compagnie:{
      fontSize:23,
    },
    job:{
      fontSize:17,

    }
  }
})

const Exp = () => {
  const classes = useStyles()

  const [showMore1, setShowMore1] = useState(true)
  const [showMore2, setShowMore2] = useState(true)


  useEffect(() => {

  });



  return (

    <div className={classes.root} id='exp'>
      <Helmet>
        <meta charSet='utf-8' name='viewport' content='width=device-width, initial-scale=1'/>
      </Helmet>


        <div className={classes.containerjob}>
            <div className={classes.containerjobOne}>
                <Typography variant="h2" className={classes.titlejob}>
                    Expériences professionnelles
                    <span>.</span>
                </Typography>
                <p className={classes.parajob}>
                Au cours des deux dernières années, j'ai eu l'occasion de mettre mes connaissances en pratique et d'apporter mes compétences à des entreprise.
                </p>
            </div>
           
            <div className={classes.containerjobTwo}>
                <ul>
                    <li>
                        <Typography variant="h2" className={classes.compagnie}>
                            Amundi Asset Management
                        </Typography>
                        <div className={classes.infojob}>
                            <Typography variant="h2" className={classes.job}>
                                Développeuse Full Stack
                            </Typography>

                            <button className={classes.btnToggle} onClick={()=> setShowMore1(!showMore1)}>
                                <img src={showMore1? ArrowUpward : ArrowDownward} alt="Logo" />
                            </button>

                            
                        </div>
                        {showMore1 && 
                            <p>
                              Durant ce stage j'ai été en charge de la création d'application web en C# WPF.
                              J'ai effectué un projet d'entrainement consistant la consultation d'informations de la base de données et la réalisation d'opérations spécifiques.
                            </p>
                        }
                    </li>
                    <li>
                        <Typography variant="h2" className={classes.compagnie}>
                            namR
                        </Typography>
                        <div className={classes.infojob}>

                            <Typography variant="h2" className={classes.job}>
                                Intégratrice Web - Développeuse Front End
                            </Typography>
                            <button className={classes.btnToggle} onClick={()=> setShowMore2(!showMore2)}>
                            <img src={showMore2? ArrowUpward : ArrowDownward} alt="Logo" />
                            </button>
                        </div>
                        {showMore2 && 
                          <p>
                            J'effectue actuellement une alternance en tant qu'integratrice web où me rôle constitue à
                            mettre en place des éléments du site grâce aux maquettes fournis.
                          </p>
                        }
                    </li>
                </ul>
            </div>
            
        </div>

        <div className={classes.lineSeparator}></div>
      



    </div>


  );
}

export default Exp;
