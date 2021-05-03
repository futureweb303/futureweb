// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import "./pricing.css"
const useStyles = makeStyles({
  table: {
    maxWidth: 350,
    minWidth: 150,
  },
});

export const Pricings = (props) => {
  const classes = useStyles();
  console.log(props.data)
  return (
    <div id="pricing" className='text-center' >
      <div className='container'>
        <div className='section-title'>
          <h2>Pricing</h2>
        </div>
       {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.level}-${i}`} className='col-md-4'>
                {' '}
              <TableContainer   component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell id="cell" align="center"><b>{d.level}</b></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableCell id="rows" align="center">{d.price}</TableCell>
                  <TableCell id="rows" align="center">{d.domain}</TableCell>
                  <TableCell id="rows" align="center">{d.page}</TableCell>
                  <TableCell id="rows" align="center">{d.ads}</TableCell>
                  <TableCell id="rows" align="center">{d.optimize}</TableCell>
                  <TableCell id="rows" align="center">{d.seo}</TableCell>
                  <TableCell id="rows" align="center">{d.certificate}</TableCell>
                  <TableCell id="rows" align="center">{d.protection}</TableCell>
                  <TableCell id="rows" align="center">{d.storage}</TableCell>
                  <TableCell id="rows" align="center">{d.server}</TableCell>
                  <TableCell id="rows" align="center">{d.mail}</TableCell>
                  <TableCell id="rows" align="center">{d.support}</TableCell>
                  
                </TableBody>
              </Table>
            </TableContainer>
            </div>
              ))
            : 'Loading...'}
    </div>
    </div>
  );
}