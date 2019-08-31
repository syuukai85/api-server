import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  imageWidthHalf: {
    width: '50%'
  },
  imageWidthFull: {
    width: '100%'
  },
  imageContainer: {
    marginTop: '15px',
    marginBottom: '15px'
  }
});

const eventDetailImg = require('../../../images/eventDetail.png');
const groupDetailImg = require('../../../images/groupDetail.png');
const throwingMoneyImg = require('../../../images/throwingMoney.png');

/**
 * WelcomeBoardの定義の追加
 */
const WelcomeBoard: React.FC = () => {
  const classes = useStyles({});
  return (
    <Card>
      <CardHeader title="connthassへようこそ" />
      <CardContent>
        <Typography color="textSecondary" component="p">
          connthassではイベントやグループを作成して好きな技術を余すことなく楽しむことができます
        </Typography>
        <div className={classes.imageContainer}>
          <img
            className={classes.imageWidthHalf}
            src={eventDetailImg}
            alt="eventDetail"
          />
          <img
            className={classes.imageWidthHalf}
            src={groupDetailImg}
            alt="groupDetail"
          />
        </div>
        <Typography color="textSecondary" component="p">
          イベント終了後は投げ銭感覚で登壇者にお布施を
        </Typography>
        <div className={classes.imageContainer}>
          <img
            className={classes.imageWidthFull}
            src={throwingMoneyImg}
            alt="throwingMoney"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default WelcomeBoard;
