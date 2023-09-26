
import { useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import "./RandomNumber.css"
import style from './RandomNumber.module.css'
import styled from '@emotion/styled';

const WrapperRandomNumber = styled('div')``

function RandomNumber() {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [result, setResult] = useState(0);
    
    const handleMinChange = (event) => {
        setMin(event.target.value);
    };
    
    const handleMaxChange = (event) => {
        setMax(event.target.value);
    };
    
    const buttonClick = () => {
        const value = Math.floor(Math.random() * (max - min + 1) + min);
        setResult(value);
    };
      
    return (
        <div className={style['container']}>
            <div className={style['wrapper-a']}>
                <div className={style['wrapper-b']}>
                    <div className={style['wrapper-fisrt-row']}>
                        <div className={style["random-result"]}>{result}</div>

                        <div className={style['text-field']}>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                                >
                                <TextField id="min-basic" label="min" variant="filled" className={style["wraper-min"]} value={min} onChange={handleMinChange}/>
                                <TextField id="max-basic" label="max" variant="filled" className={style["wraper-max"]} value={max} onChange={handleMaxChange}/>
                            </Box>
                        </div>
                    </div>
                        <button onClick={buttonClick}>GENERATE</button>
                    <div className={style['wrapper-second-row']}>

                    </div>
                </div>
            </div>           
        </div>    
    );
}

export default RandomNumber;