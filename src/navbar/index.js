import React, { useEffect} from 'react'
import { makeStyles } from '@material-ui/core'
import homeIcon from '../static/icons/home_icon.svg'

const useStyles = makeStyles({
    root:{
        padding : '3% 3%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    listLinks: {
        display: 'flex',
        listStyle:'none',
        gap: '2em',
        '& a': {
            textDecoration:'none',
            borderBottom :'transparent solid',
            fontFamily: 'Arial',
            color: '#fff',
            fontWeight:'bold',
            '&:hover': {
            borderBottom :'#fff solid',

            }
        }
    },
    '@media screen and (max-width: 500px)': {
      listLinks:{
        display:'initial',
      }, 
    }
})
const ResponsiveAppBar = () => {
    const classes = useStyles()
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
    useEffect(() => {
        
    
      });
  return (

    <div className={classes.root}>
        <img src={homeIcon} alt="Logo" />
        <ul className={classes.listLinks}>
            <li onClick={()=>scrollToComp()} ><a>compétences</a></li>
            <li onClick={()=> scrollToExp()}><a>expériences</a></li>
            <li onClick={()=> scrollToCont()}><a>me contacter</a></li>
            
        </ul>
    </div>
   
  );
};
export default ResponsiveAppBar;