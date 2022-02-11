import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Signup.css'
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import { TextField } from '@mui/material';
import instagram from '../Assets/Instagram.jpeg';
import { CloudUpload } from '@material-ui/icons';

export default function Signup() {
    // let useStyles = makeStyles({
    //     text1:{
    //         color: 'grey',
    //         textAlign: 'center'
    //     }
    // })
    // let classes = useStyles();
  return (
    <div className='signup'>
        <div className='signup-wrapper'>
            <Card variant='outlined'>
            <img src={instagram} alt='instagram' className='signup-img' />
            <CardContent>
                <Typography variant='subtitle2' className='signup-para'>
                Signup to see photos and videos from your friends
                </Typography>
                <Alert severity="error" >This is an error alert — check it out!</Alert>
                <TextField id="outlined-basic" label="Email" variant="outlined" className='inputs' size='small' margin='dense'/>
                <TextField id="outlined-basic" label="Password" variant="outlined" className='inputs' size='small' margin='dense'/>
                <TextField id="outlined-basic" label="Name" variant="outlined" className='inputs' size='small' margin='dense'/>
                <Button size='small' startIcon={<CloudUpload />} sx={{ my: 1 }} component="label" color="secondary" variant='outlined' className='inputs'>Upload Profile Image
                    <input type="file" accept='image/*' hidden/>
                </Button>
                <Button variant="contained" className='inputs' sx={{ my: 2 }}>Sign Up</Button>

                <Typography variant="body2" color="text.secondary" align='center'>
                    By signing up you agree to our Terms, Data Policy and Cookies Policy
                </Typography>
            </CardContent>
            </Card>
            <Card variant='outlined' sx={{my:1}}>
            <CardContent> 
                <Typography variant="body2" color="text.secondary" align='center'>
                    Have an account? <Link to="/login" className='links'>Login</Link>  
                </Typography>
            </CardContent>
            </Card>
        </div>
    </div>
  );
}