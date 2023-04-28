import React, { useEffect, useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, Stack } from '@mui/material';


export const Timer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [deadline, setDeadline] = useState('');
    const [addDeadline, setAddDeadline] = useState();
    const [timeDeadline, setTimeDeadline] = useState();

    const handleChange = (e) => {
        setAddDeadline(e.target.value)   
    }

    const handleAddDeadline = () => {
        setDeadline(addDeadline)
        const arrayOfDate = deadline.split('-'); 
        setTimeDeadline(arrayOfDate[1] + ', ' +  arrayOfDate[2] + ', ' + arrayOfDate[0])
    }
    
    // arrayOfDate[0] = year
    // arrayOfDate[1] = month
    // arrayOfDate[2] = day
            
    const getTime =  () => {      
        const time =  Date.parse(timeDeadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }
    
    useEffect(() => {
        const interval = setInterval(() => getTime(timeDeadline), 1000);
        return () => clearInterval(interval);
    },
    // [timeDeadline]
    )

    return (
        <div 
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '50px',
            width: '100%'
        }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div 
                className='container' 
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <div 
                    style={{
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center'
                    }}
                    id='form'
                    className='form'
                    >
                        <input 
                        className='input' 
                        type='date'  
                        onChange={handleChange} 
                        />
                    </div>
                    <Button 
                    onClick={handleAddDeadline} 
                    className='button' 
                    variant='filled' 
                    float='left'
                    sx={{
                        backgroundColor: 'rgb(51, 51, 51)',
                        height: '40px',
                        color: 'black',
                        fontSize: '20px',
                        width: '50px',
                        borderRadius: '5px'
                    }}
                    >
                        Set
                    </Button> 
                </div>
                <Stack 
                className='stack' 
                sx={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '300px'
                }}>
                    { days  && <p className='text' > {days}  </p>}
                    { !hours == 0 && <p className='text'>  :{hours} </p>}
                    { !minutes == 0 && <p className='text'> :{minutes} </p>}
                    { !seconds == 0 && <p className='text'>  :{seconds} </p>}
                </Stack>
            </LocalizationProvider> 
        </div>
    )
}
