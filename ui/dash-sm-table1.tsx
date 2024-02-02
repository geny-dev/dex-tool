import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Api } from '@mui/icons-material';
import axios from 'axios';
import Button from './button';
import { ColorSwatchIcon } from '@heroicons/react/outline';

export default async function DashSmTable() {
  function createData(
    id: string,
    avatar: object,
    name: string,
    tras: string,
    percents: string,
  ) {
    return { id, avatar, name, tras, percents };
  }
  async function getdata (){
    try {
      const response = await axios
        .create({
          baseURL: 'http://localhost:3000',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        })
        .get('/new-func/top-earner');
        return(response.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  const datas = await getdata();
  // console.log(datas)

  const percentupImg = <svg className="text-green-700 inline-block" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 22 22" width="6" transform=""><path d="M13.2223 13.2223L9.88883 16.5558C8.66147 17.7832 6.67152 17.7832 5.44416 16.5558C4.2168 15.3285 4.2168 13.3385 5.44416 12.1112L8.77767 8.77767L0 0H22V22L13.2223 13.2223Z" fill="currentColor"></path></svg>
  const percentdownImg = <svg className="text-red-600 inline-block" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 22 22" width="6" transform=""><path d="M13.2223 8.77766L9.88883 5.44416C8.66147 4.2168 6.67152 4.2168 5.44416 5.44416C4.2168 6.67152 4.2168 8.66147 5.44416 9.88883L8.77767 13.2223L0 22L22 22L22 0L13.2223 8.77766Z" fill="currentColor"></path></svg>


  const rows = new Array();
  for(let i = 0; i < datas.length; i ++){
    const row_ele = createData(
      ('#'+ (i+1)).toString(),                                                  //id
      <img src='https://www.dextools.io/resources/tokens/logos/ether/0x01b7ca09d62069301c6a8569ef99d0d1b6aba7b9.jpg?1706646182920' className='token-logo__image ng-star-inserted' />,                                                                 //avatar
      datas[i].baseCurrency.symbol+'/'+datas[i].quoteCurrency.symbol,           //baseCurrency
      '$'+datas[i].first_trade_price,                                           //price
      parseInt(datas[i].final).toFixed(2) + '%'                                                            //percent
    );
    rows.push(row_ele);
  }
  return (
    <TableContainer className='rounded-none' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody className='dark-tb'>
          {rows.map((row, index) => (
            <TableRow
              className='dash-sm-tr'
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" className='dash-key-td border-none'>
                {row.id}
              </TableCell>
              <TableCell className='border-none' align="right">{row.avatar}</TableCell>
              <TableCell className='border-none p-color-right' align="right">{row.name}</TableCell>
              <TableCell className='border-none p-currency' align="right">{row.tras}</TableCell>
              {parseInt(row.percents)>0? 
              <TableCell className='border-none' align="right">{percentupImg}&nbsp;&nbsp;<span className='inline-block p-currency'>{row.percents}</span></TableCell>
              :
              <TableCell className='border-none' align="right">{percentdownImg}&nbsp;&nbsp;<span className='text-sm inline-block text-red-600'>{row.percents}</span></TableCell>
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
