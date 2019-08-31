import React from 'react';
import { Event } from 'typescript-fetch-api';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles(theme => ({
  recruitRequirementsContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  table: {
    width: '60%',
    marginTop: '15px'
  },
  descriptionPaper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2)
  }
}));

interface Props {
  event: Event;
}

const RecruitRequirements: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  return (
    <Container>
      <Grid item xs={12} className={classes.recruitRequirementsContainer}>
        <Table className={classes.table}>
          <TableBody>
            <TableRow key={1}>
              <TableCell component="th" scope="row">
                募集人数
              </TableCell>
              <TableCell align="right">
                <Typography variant="h5">
                  {props.event.entries !== void 0
                    ? props.event.entries.length
                    : 0}
                  /{props.event.capacity}人
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Container>
  );
};

export default RecruitRequirements;
