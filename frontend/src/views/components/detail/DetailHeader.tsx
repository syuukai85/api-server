import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import AssignButton from './AssignButton';

interface ColorProps {
  backgroundColor: string;
}

const useStyles = makeStyles(theme => ({
  header: (props: ColorProps) => ({
    width: '100%',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: props.backgroundColor
  }),
  headerImage: {
    marginBottom: '50px',
    width: '50%'
  },
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  }
}));

interface Props {
  title: string;
  colorCode?: string;
  imageUrl?: string;
}

const DetailHeader: React.FC<Props> = (props: Props) => {
  const bgColor = props.colorCode !== void 0 ? props.colorCode : '#000';
  const classes = useStyles({ backgroundColor: bgColor });
  return (
    <div className={classes.header}>
      <Container>
        <Grid item xs={12}>
          <Box textAlign="center" className={classes.headerContainer}>
            <img className={classes.headerImage} src={props.imageUrl} />
            <Typography variant="h2">{props.title}</Typography>
            <AssignButton />
          </Box>
        </Grid>
      </Container>
    </div>
  );
};

export default DetailHeader;
