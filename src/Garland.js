import React, {useState, useEffect} from 'react'

export const Garland = () => {
    const [ status, setStatus ] = useState(0);
    const blueColor = 'rgba(72, 152, 249, 0.4)';
    const redColor = 'rgba(249, 81, 72, 0.4)';
    const redInside = '#b50915';
    const blueInside = '#0f09b5'

    const getColor =  () => {      
        if (status === 0) {
            setStatus(1)
        } else {
            setStatus(0)
        }
    }

    useEffect(() => {
        const interval = setInterval(() => getColor(), 1000);
        return () => clearInterval(interval);
    })
    
    const lampZero = (
        <span class="dot" 
        style={{
            backgroundColor: status === 0 ? redColor : blueColor,
            transform: status === 0 ? 'rotate(8deg)' : 'rotate(-8deg)'    
        }}>
            <p className='inside'
            style={{
                backgroundColor: status === 0 ? redInside : blueInside       
            }}
            ></p>
        </span>
    )

    const lampOne = (
        <span class="dot" 
        style={{
            backgroundColor: status === 0 ?   blueColor: redColor,
            transform: status === 0 ? 'rotate(-8deg)' : 'rotate(8deg)'
        }}
        >
            <p className='inside'
            style={{
                backgroundColor: status === 0 ? blueInside : redInside        
            }}
            ></p>
        </span>
    )

    return (
        <div
        className='box'
        style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '40px',
            marginBottom: '60px', 
        }}
        >
            {lampZero}
            {lampOne}
            {lampZero}
            {lampOne}
            {lampZero}
            {lampOne}
            {lampZero}
            {lampOne}
            {lampZero}
            {lampOne}
            {lampZero}
            {lampOne}
            {lampZero}
            {lampOne}
            {lampZero}
            {lampOne}
        </div>
    )
}

