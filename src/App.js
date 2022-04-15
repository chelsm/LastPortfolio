import React, {useState} from 'react'
import {Helmet} from 'react-helmet'
import { useTranslation } from 'react-i18next'
import { Typography, Button , Switch, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
// import Spline from '@splinetool/react-spline'
// import {} from ''

const useStyles = makeStyles({
  root:{
    '& .MuiGrid-container':{
      width:'initial'
    },
    
    '& .Mui-checked':{
      color: '#11233A' 
    },
    // '& .MuiSwitch-thumb': {
      '& .MuiButtonBase-root MuiIconButton-root PrivateSwitchBase-root-8 MuiSwitch-switchBase MuiSwitch-colorSecondary': {
      color: '#FEE1E1'
    },
    '& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track': {
      backgroundColor: '#2A4A73',
      opacity: '0.8'
    }
  },
  content: {
    height: '100vh',
    position:'relative'
  },
  switchLangage:{
    right:'5%',
    top:'5%',
    position:'absolute',
    '& span': {
      fontFamily:'Futura LT Pro Bold',
      fontSize: 20
    }
  },
  container:{
    display: 'flex',
    alignItems:'center',
    flexDirection: 'column',
    gap: '3em',
    borderRadius:64,
    position:'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    '& div': {
      width: '100vh'
    }
  },
  titlePtlio: {
    fontSize: 125,
    fontFamily:'Futura LT Pro Bold',
    textTransform:'uppercase',
    strokeDasharray: 500,
    strokeDashoffset: 500,
    animation: '$dash 3s linear forwards, $filling 4s ease-in forwards'
  },
  spanInfo:{
    fontFamily:'Futura LT Pro Light',
    fontStyle: 'italic',
    fontSize: 20,
    textAlign:'center'
  },
  btnContact:{
    width: 'max-content',
    textTransform:'initial',
    width: 260,
    height: 46,
    borderRadius: 19
  },
  btnLabel:{
    fontSize:16,
    fontFamily:'Futura LT Pro Bold',
    fontWeight: 'bold'
  },
  containerSpline: {
    height: '100vh',
    width:'100%',
    '& iframe': {
      height: '100%'
    }
  },
  "@keyframes dash": {
    'to': {
      strokeDashoffset: 0,
    }
  },
  "@keyframes filling": {
    'from':{
      fill:' #2A4A73',
      fillOpacity: 0,
    },
    'to': {
      fill: '#2A4A73',
      fillOpacity: 1,
    }
  },
})

const App = () => {
  const {
    trsl
  } = useTranslation()
  const classes = useStyles()
  const [isFrench, setIsFrench] = useState(true)
  const [visit, setVisit] = useState(0)

  const handleClickMail = () => {
    var mail = document.createElement("a");
    mail.href = "mailto:chelseymillo@gmail.com?subject=Mail porfolio";
    mail.click();
  }
  const handleChange =() => {
    setIsFrench(!isFrench)
    setVisit(visit+1)
  }

  console.log(visit)

  return (

    <div className={classes.root}
      style={{
        background:  isFrench ? '#FFE5E5' : '#2A4A73'
      }}>
      <Helmet>
        <meta charSet='utf-8' name='viewport' content='width=device-width, initial-scale=1'/>
      </Helmet>

      <div className={classes.content}>
        <Grid className={classes.switchLangage} container alignItems="center">
          <span
          style={{
            color : isFrench ? '#2A4A73' : '#FFE5E5'
          }}
          >
            en
          </span>
          <Grid >
            <Switch defaultChecked 
            
              // checked={state.checked} // relevant state for your case
              onChange={handleChange} // relevant method to handle your change
              // value="checked" // some value you need
            />
          </Grid>
          <span
          style={{
            color : isFrench ? '#2A4A73' : '#FFE5E5'
          }}
          >
            fr
          </span>
        </Grid>

        <div className={classes.container}>
          <div >

            {isFrench && visit < 1 ?
            <svg  height="130px" width="100%" stroke="#2A4A73" stroke-width="2" class="text-line">
              <text  className={classes.titlePtlio}  x="50" y="100" fill="none" >Porfolio</text>
            </svg>
            :
            <Typography className={classes.titlePtlio}
              style={{
                color : isFrench ? '#2A4A73' : '#FFE5E5'
              }}
            >
              Portfolio
            </Typography> }


            <Typography className={classes.spanInfo}
              style={{
                color : isFrench ? '#2A4A73' : '#FFE5E5'
              }}
            >
              {isFrench ?'Ce site est actuellement en cours de construction.':'This website is currently under construction.' }
              
              {/* {trsl('This_web_is_currently_under_construction')} */}
            </Typography>
          </div>

          <Button 
            type="submit"
            variant="container"
            className={classes.btnContact}
            onClick={()=> handleClickMail()}
            style={{
              background:  isFrench ?  'rgba(42, 74, 115, 0.63)': 'rgba(236, 234, 234, 0.63)',
              color:   isFrench ?'#2A4A73' : '#FFE5E5',
              '&:hover':{
                backgroundColor: 'red'
              }
            }}
            
          >
            <Typography className={classes.btnLabel}
              style={{
                color : isFrench ? '#2A4A73' : '#FFE5E5'
              }}
            >
              {isFrench ?'me contacter':'contact me' }
            </Typography>  
            
          </Button>
        </div>
      </div>

      <div className={classes.containerSpline}>
        <iframe src='https://my.spline.design/friendskawaiicopy-1e72d1866d91e879b987006f0b807496/' frameborder='0' width='100%' height='100vh'></iframe>
      </div>
      

    </div>



    
  );
}

export default App;
