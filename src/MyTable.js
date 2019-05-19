import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './App.css';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '50%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 300,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

let id = 0;
function createData(name, calories) {
  id += 1;
  return { id, name, calories };
}

const rows = [
  createData('Name', 'Galantryas Mukti Pratama'),
  createData('Nick Name', 'Gallant'),
  createData('Nationality', 'Indonesia'),
  createData('Weight', '173cm'),
  createData('Height', '70kg'),
  createData('Religions', 'Islam'),
  createData('Place DOB', 'Kendal, 14 May 2000'),
  createData('Address', 'Samirono CT6 RT 003/ RW 001 Sleman, Yogyakarta'),
  createData('Gender', 'Male'),
  createData('Occupation', 'College Student'),
  createData('Hobby', 'Reading'),
];

function MyTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} class="table">
      <Table className={classes.table}>
        <TableBody>
          {rows.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell component="th" scope="row">
                {row.name}
              </CustomTableCell>
              <CustomTableCell align="right">{row.calories}</CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

MyTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyTable);
