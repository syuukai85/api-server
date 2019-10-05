import React from 'react';
import { Event } from 'typescript-fetch-api';
import GroupChip from './GroupChip';
import CategoryChips from './CategoryChips';
import OrganizerChips from './OrganizerChips';
import HoldDateBox from './HoldDateBox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  eventContainer: {
    height: '200px'
  },
  groupChipContainer: {
    margin: '10px'
  },
  userChipContainer: {
    margin: '10px'
  },
  category: {
    margin: '5px'
  },
  listItem: {
    '&:hover': {
      backgroundColor: '#e1f5fe'
    }
  },
  image: {
    width: '100%',
    marginTop: '10px'
  }
});

interface Props {
  event: Event;
}

/**
 * Eventの基本となるリスト
 */
const BasicEventListItem: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={3}>
        <HoldDateBox
          fromDate={props.event.holdStartDate}
          toDate={props.event.holdEndDate}
        />
      </Grid>
      <Grid item xs={12} sm={9}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5">{props.event.title}</Typography>
            <Divider />
          </Grid>
        </Grid>
        <Grid container>
          <Divider />
          <Grid item xs={12} sm={8}>
            <div className={classes.groupChipContainer}>
              <GroupChip group={props.event.group} />
            </div>
            <div className={classes.userChipContainer}>
              <OrganizerChips organizers={props.event.organizers} />
            </div>
            <label>category</label>
            <CategoryChips categories={props.event.categories} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <img className={classes.image} src={props.event.imageUrl} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BasicEventListItem;
