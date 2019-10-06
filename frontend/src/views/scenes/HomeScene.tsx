import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import WelcomeBoard from '../components/welcome/WelcomeBoard';
import RecentlyAddedEventListContainer from '../containers/event/RecentlyAddedEventListContainer';
import RecentlyFinishedEventListContainer from '../containers/event/RecentlyFinishedEventListContainer';
import RecentlyAddedGroupListContainer from '../containers/group/RecentlyAddedGroupListContainer';
import BottomAppBar from '../components/appBar/BottomAppBar';
import EventIcon from '@material-ui/icons/Event';

const menus = [{ icon: <EventIcon />, text: 'イベント作成', link: '/event/add' }];

/**
 * Home画面
 */
const HomeScene: React.FC = () => {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <RecentlyAddedEventListContainer title="新着イベント" type="basic" />
            <WelcomeBoard />
          </Grid>
          <Grid item xs={12} sm={4}>
            <RecentlyAddedGroupListContainer title="新着グループ" />
            <RecentlyFinishedEventListContainer title="お布施" type="enrollment" />
          </Grid>
        </Grid>
      </Container>
      <BottomAppBar menus={menus} />
    </>
  );
};

export default HomeScene;
