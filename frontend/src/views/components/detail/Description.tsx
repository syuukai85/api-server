import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Markdown from 'markdown-to-jsx';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  descriptionPaper: {
    padding: theme.spacing(3, 2),
    margin: theme.spacing(3, 2),
  },
}));

interface Props {
  description?: string;
}

const Description: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  return (
    <Container>
      <Grid item xs={12}>
        <Paper className={classes.descriptionPaper}>
          <Typography variant="h5">説明</Typography>
          <Markdown>{props.description}</Markdown>
        </Paper>
      </Grid>
    </Container>
  );
};

export default Description;
