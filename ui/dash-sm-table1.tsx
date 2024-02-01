
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  key: string,
  avatar: string,
  tranName: string,
  currency: string,
  percentImg: string,
  percent: string,
) {
  return { key, avatar, tranName, currency, percentImg, percent };
}

const datas = [
    {
        key : "#1", 
        avatar: <img src='https://www.dextools.io/resources/tokens/logos/ether/0x01b7ca09d62069301c6a8569ef99d0d1b6aba7b9.jpg?1706646182920' className='token-logo__image ng-star-inserted' />,
        tranName: <p className='p-color-right'><strong>DEFI</strong>/WETH</p>,
        currency: <p className='p-currency'>$0.005803</p>,
        percentImg: <svg className="percentimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 22 22" width="6" transform=""><path d="M13.2223 13.2223L9.88883 16.5558C8.66147 17.7832 6.67152 17.7832 5.44416 16.5558C4.2168 15.3285 4.2168 13.3385 5.44416 12.1112L8.77767 8.77767L0 0H22V22L13.2223 13.2223Z" fill="currentColor"></path></svg>,
        percent: <p className='p-currency'>1039.53%</p>
    },
    {
        key : "#1", 
        avatar: <img src='https://www.dextools.io/resources/tokens/logos/ether/0x01b7ca09d62069301c6a8569ef99d0d1b6aba7b9.jpg?1706646182920' className='token-logo__image ng-star-inserted' />,
        tranName: <p className='p-color-right'><strong>DEFI</strong>/WETH</p>,
        currency: <p className='p-currency'>$0.005803</p>,
        percentImg: <svg className="percentimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 22 22" width="6" transform=""><path d="M13.2223 13.2223L9.88883 16.5558C8.66147 17.7832 6.67152 17.7832 5.44416 16.5558C4.2168 15.3285 4.2168 13.3385 5.44416 12.1112L8.77767 8.77767L0 0H22V22L13.2223 13.2223Z" fill="currentColor"></path></svg>,
        percent: <p className='p-currency'>1039.53%</p>
    },
    {
        key : "#1", 
        avatar: <img src='https://www.dextools.io/resources/tokens/logos/ether/0x01b7ca09d62069301c6a8569ef99d0d1b6aba7b9.jpg?1706646182920' className='token-logo__image ng-star-inserted' />,
        tranName: <p className='p-color-right'><strong>DEFI</strong>/WETH</p>,
        currency: <p className='p-currency'>$0.005803</p>,
        percentImg: <svg className="percentimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 22 22" width="6" transform=""><path d="M13.2223 13.2223L9.88883 16.5558C8.66147 17.7832 6.67152 17.7832 5.44416 16.5558C4.2168 15.3285 4.2168 13.3385 5.44416 12.1112L8.77767 8.77767L0 0H22V22L13.2223 13.2223Z" fill="currentColor"></path></svg>,
        percent: <p className='p-currency'>1039.53%</p>
    },
    {
        key : "#1", 
        avatar: <img src='https://www.dextools.io/resources/tokens/logos/ether/0x01b7ca09d62069301c6a8569ef99d0d1b6aba7b9.jpg?1706646182920' className='token-logo__image ng-star-inserted' />,
        tranName: <p className='p-color-right'><strong>DEFI</strong>/WETH</p>,
        currency: <p className='p-currency'>$0.005803</p>,
        percentImg: <svg className="percentimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 22 22" width="6" transform=""><path d="M13.2223 13.2223L9.88883 16.5558C8.66147 17.7832 6.67152 17.7832 5.44416 16.5558C4.2168 15.3285 4.2168 13.3385 5.44416 12.1112L8.77767 8.77767L0 0H22V22L13.2223 13.2223Z" fill="currentColor"></path></svg>,
        percent: <p className='p-currency'>1039.53%</p>
    },
    {
        key : "#1", 
        avatar: <img src='https://www.dextools.io/resources/tokens/logos/ether/0x01b7ca09d62069301c6a8569ef99d0d1b6aba7b9.jpg?1706646182920' className='token-logo__image ng-star-inserted' />,
        tranName: <p className='p-color-right'><strong>DEFI</strong>/WETH</p>,
        currency: <p className='p-currency'>$0.005803</p>,
        percentImg: <svg className="percentimg" fill='currentColor' xmlns='http://www.w3.org/2000/svg' focusable='false' aria-hidden='true' viewBox='0 0 22 22' width='6' transform=''><path d='M13.2223 13.2223L9.88883 16.5558C8.66147 17.7832 6.67152 17.7832 5.44416 16.5558C4.2168 15.3285 4.2168 13.3385 5.44416 12.1112L8.77767 8.77767L0 0H22V22L13.2223 13.2223Z' fill='currentColor'></path></svg>,
        percent: <p className='p-currency'>1039.53%</p>
    },

];

const rows = datas.map((data) => {
    return createData(data.key, data.avatar, data.tranName, data.currency, data.percentImg, data.percent);
});

export default function DashSmTable1() {
  return (
    <TableContainer className='rounded-none table-fixed' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody className='dark-tb'>
          {rows.map((row) => (
            <TableRow
              key={row.key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              className='dash-sm-tr' 
            >
              <TableCell component="td" scope="row" className='dash-key-td border-none first-id-td'>
                {row.key}
              </TableCell>
              <TableCell className='border-none second-avatar-td' align="right">{row.avatar}</TableCell>
              <TableCell className='border-none third-tran-td' align="right">{row.tranName}</TableCell>
              <TableCell className='border-none forth-currency-td' align="right">{row.currency}</TableCell>
              <TableCell className='border-none fixth-percent-td float-right'><div className='flex space-x-2'>{row.percentImg}{row.percent}</div></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}