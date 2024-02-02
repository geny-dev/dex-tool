
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Dropdown from '#/ui/Dropdown';

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
        key : "#2", 
        avatar: <img src='https://www.dextools.io/resources/tokens/logos/ether/0x8c688327c9371bb3bd69f6e1f1a6d8c9ca0880a7.jpg?1706539781101' className='token-logo__image ng-star-inserted' />,
        tranName: <p className='p-color-right'><strong>DEFI</strong>/WETH</p>,
        currency: <p className='p-currency'>$0.005803</p>,
        percentImg: <svg className="percentimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 22 22" width="6" transform=""><path d="M13.2223 13.2223L9.88883 16.5558C8.66147 17.7832 6.67152 17.7832 5.44416 16.5558C4.2168 15.3285 4.2168 13.3385 5.44416 12.1112L8.77767 8.77767L0 0H22V22L13.2223 13.2223Z" fill="currentColor"></path></svg>,
        percent: <p className='p-currency'>1039.53%</p>
    },
    {
        key : "#3", 
        avatar: <img src='https://www.dextools.io/resources/tokens/logos/ether/0x5e8d701c2c1ec6b2602cb95d2bb78313486253aa.png?1706809370268' className='token-logo__image ng-star-inserted' />,
        tranName: <p className='p-color-right'><strong>DEFI</strong>/WETH</p>,
        currency: <p className='p-currency'>$0.005803</p>,
        percentImg: <svg className="percentimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 22 22" width="6" transform=""><path d="M13.2223 13.2223L9.88883 16.5558C8.66147 17.7832 6.67152 17.7832 5.44416 16.5558C4.2168 15.3285 4.2168 13.3385 5.44416 12.1112L8.77767 8.77767L0 0H22V22L13.2223 13.2223Z" fill="currentColor"></path></svg>,
        percent: <p className='p-currency'>1039.53%</p>
    },
    {
        key : "#4", 
        avatar: <img src='https://www.dextools.io/resources/tokens/logos/ether/0x01b7ca09d62069301c6a8569ef99d0d1b6aba7b9.jpg?1706646182920' className='token-logo__image ng-star-inserted' />,
        tranName: <p className='p-color-right'><strong>DEFI</strong>/WETH</p>,
        currency: <p className='p-currency'>$0.005803</p>,
        percentImg: <svg className="percentimg" fill="currentColor" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true" viewBox="0 0 22 22" width="6" transform=""><path d="M13.2223 13.2223L9.88883 16.5558C8.66147 17.7832 6.67152 17.7832 5.44416 16.5558C4.2168 15.3285 4.2168 13.3385 5.44416 12.1112L8.77767 8.77767L0 0H22V22L13.2223 13.2223Z" fill="currentColor"></path></svg>,
        percent: <p className='p-currency'>1039.53%</p>
    },
    {
        key : "#5", 
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
    <div className="font-medium text-gray-200 group-hover:text-gray-50 dark-tb rounded-xl p-5">
      <div className='flex justify-between'>
        <div className='flex items-center space-x-2'>
          <svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="fire-flame-curved" className="svg-inline--fa fa-fire-flame-curved" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" width="15" height="30">
            <path fill="currentColor" d="M153.6 29.9l16-21.3C173.6 3.2 180 0 186.7 0C198.4 0 208 9.6 208 21.3V43.5c0 13.1 5.4 25.7 14.9 34.7L307.6 159C356.4 205.6 384 270.2 384 337.7C384 434 306 512 209.7 512H192C86 512 0 426 0 320v-3.8c0-48.8 19.4-95.6 53.9-130.1l3.5-3.5c4.2-4.2 10-6.6 16-6.6C85.9 176 96 186.1 96 198.6V288c0 35.3 28.7 64 64 64s64-28.7 64-64v-3.9c0-18-7.2-35.3-19.9-48l-38.6-38.6c-24-24-37.5-56.7-37.5-90.7c0-27.7 9-54.8 25.6-76.9z"></path>
          </svg>
          <h4>Hot pairs</h4>
          <svg role="img" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-info" className="svg-inline--fa fa-circle-info" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  width="12" height="18"><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path></svg>
        </div>
        <Dropdown />
      </div>
      <div className="flex">
        <TableContainer className='rounded-none' component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="simple table">
            <TableBody className='dark-tb'>
              {rows.map((row) => (
                <TableRow
                  key={row.key}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  className='dash-sm-tr' 
                >
                  <TableCell component="td" scope="row" className='dash-key-td border-none'>
                    {row.key}
                  </TableCell>
                  <TableCell className='border-none' align="right">{row.avatar}</TableCell>
                  <TableCell className='border-none' align="right">{row.tranName}</TableCell>
                  <TableCell className='border-none' align="right">{row.currency}</TableCell>
                  <TableCell className='border-none' align="right">{row.percentImg}</TableCell>
                  <TableCell className='border-none' align="right">{row.percent}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </TableContainer>
          <TableContainer className='rounded-none' component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableBody className='dark-tb'>
                {rows.map((row) => (
                  <TableRow
                    key={row.key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className='dash-sm-tr' 
                  >
                    <TableCell component="td" scope="row" className='dash-key-td border-none'>
                      {row.key}
                    </TableCell>
                    <TableCell className='border-none' align="right">{row.avatar}</TableCell>
                    <TableCell className='border-none' align="right">{row.tranName}</TableCell>
                    <TableCell className='border-none' align="right">{row.currency}</TableCell>
                    <TableCell className='border-none' align="right">{row.percentImg}</TableCell>
                    <TableCell className='border-none' align="right">{row.percent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TableContainer className='rounded-none' component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableBody className='dark-tb'>
                {rows.map((row) => (
                  <TableRow
                    key={row.key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    className='dash-sm-tr' 
                  >
                    <TableCell component="td" scope="row" className='dash-key-td border-none'>
                      {row.key}
                    </TableCell>
                    <TableCell className='border-none' align="right">{row.avatar}</TableCell>
                    <TableCell className='border-none' align="right">{row.tranName}</TableCell>
                    <TableCell className='border-none' align="right">{row.currency}</TableCell>
                    <TableCell className='border-none' align="right">{row.percentImg}</TableCell>
                    <TableCell className='border-none' align="right">{row.percent}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </div>
    </div>
  );
}