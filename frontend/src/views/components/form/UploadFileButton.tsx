import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  onChange: (e: any) => void;
}

const useStyles = makeStyles({
  hide: {
    display: 'none'
  }
});

const UploadFileButton: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  return (
    <Button variant="contained" component="label">
      UPLOAD FILE
      <input id="selected-image" type="file" onChange={props.onChange} className={classes.hide} accept="image/*" />
    </Button>
  );
};

export default UploadFileButton;
