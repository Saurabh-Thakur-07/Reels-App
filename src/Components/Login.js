import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Login.css'
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import { TextField } from '@mui/material';
import instagram from '../Assets/Instagram.jpeg';
import { CloudUpload } from '@material-ui/icons';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import bg from '../Assets/insta.png'
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/img2.jpg'
import img3 from '../Assets/img3.jpg'
import img4 from '../Assets/img4.jpg'
import img5 from '../Assets/img5.jpg'

export default function Login() {
  return (
    <div className='login'>
        <div className="img-carousel" style={{backgroundImage:'url('+bg+')',backgroundSize:'cover'}}>
            <div className='img-card' >
                <CarouselProvider
                    visibleSlides={1}
                    naturalSlideWidth={238}
                    naturalSlideHeight={423}
                    totalSlides={5}
                    
                    isPlaying={true}
                    infinite={true}
                    dragEnabled={true}
                    touchEnabled={true}
                    >
                    <Slider>
                    <Slide index={0}><img src={img1}/></Slide>
                    <Slide index={1}><img src={img2}/></Slide>
                    <Slide index={2}><img src={img3}/></Slide>
                    <Slide index={3}><img src={img4}/></Slide>
                    <Slide index={4}><img src={img5}/></Slide>
                    </Slider>
                </CarouselProvider>
            </div>
        </div>
        <div className='login-wrapper'>
            <Card variant='outlined'>
            <img src={instagram} alt='instagram' className='login-img' />
            <CardContent>
                    <TextField id="outlined-basic" label="Email" variant="outlined" className='inputs' size='small' margin='dense'/>
                <TextField id="outlined-basic" label="Password" variant="outlined" className='inputs' size='small' margin='dense'/>
                <Button variant="contained" className='inputs' sx={{ my: 2 }}>Login</Button>
            </CardContent>
            </Card>
            <Card variant='outlined' sx={{my:1}}>
            <CardContent> 
                <Typography variant="body2" color="text.secondary" align='center'>
                     Don't have an account? <Link to="/signup" className='links'>Sign Up</Link>  
                </Typography>
            </CardContent>
            </Card>
        </div>
    </div>
  );
}