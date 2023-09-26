import './CurencyConvertor.css'
import { useState } from 'react';
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

const Container = styled('div')`
    width: 1200px;
    font-weight: 600;
`

const Table = styled('table')`
    padding: 20px;
    border: 2px solid #CDD7E1;
`

const Row = styled('tr')`

`

const RowChild = styled('td')`
    align-items: left;
    justify-content: left;
`



const Transbt = styled('button')`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 1px solid #CDD7E1;
    cursor: grab;
    background-color: white;
`

const AmountChange = styled('input')`
    width: 240px;
    height: 34px;
    border-radius: 5px;
    border: 1px solid #CDD7E1;
    padding: 0px 30px;
`

function CurencyConvertor() { 
  const [from,setFrom] = useState(0);
  const [to,setTo] = useState(0);
  const [amount,setAmounts]= useState(0);
  const [resolt,setResolt]= useState(0);

  const handleFromChange = (event) => {
    setFrom(event.target.value);
  };
  console.log(from);

  const handleToChange = (event,) => {
    setTo(event.target.value);
  };
  console.log(to);

  const handleAmountChange = (event) => {
    setAmounts(event.target.value);
  };
  console.log(amount);

  const handleResoltClick = () => {
    setResolt((amount*from)/to);
  };

    return (
        <Container>

            <Table>
                <Row>
                    <RowChild className='a'>Amount</RowChild>
                    <RowChild className='b'>From</RowChild>
                    <RowChild></RowChild>
                    <RowChild className='a'>To</RowChild>
                </Row>

                <Row>
                    <RowChild><AmountChange onChange={handleAmountChange}></AmountChange></RowChild>
                    <RowChild>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={from}
                                onChange={handleFromChange}
                            >
                                <MenuItem value={1}>VND</MenuItem>
                                <MenuItem value={24}>USD</MenuItem>
                                <MenuItem value={25}>EUR</MenuItem>
                            </Select>
                            </FormControl>
                        </Box>
                    </RowChild>
                    <RowChild><Transbt className="transbt">~</Transbt></RowChild>
                    <RowChild>
                        <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label"></InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={to}
                                onChange={handleToChange}
                            >
                                <MenuItem value={1}>VND</MenuItem>
                                <MenuItem value={24}>USD</MenuItem>
                                <MenuItem value={25}>EUR</MenuItem>
                            </Select>
                            </FormControl>
                        </Box>
                    </RowChild>
                </Row>

                <Row>
                    <RowChild className='Wu'>We use midmarket rates</RowChild>
                    <RowChild></RowChild>
                    <RowChild>{resolt}</RowChild>
                    <RowChild className='bt' onClick={handleResoltClick}>
                        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'right'}}>
                            <Button>Convert</Button>
                        </Box>
                    </RowChild>
                </Row>  
            </Table>
        </Container>    
    );
}

export default CurencyConvertor;