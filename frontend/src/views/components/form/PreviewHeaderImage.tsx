import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  colorCode: (props: any) => ({
    background: props.colorCode
  }),
  imageContainer: {
    width: '1000px',
    height: '500px'
  }
});

interface Props {
  colorCode: string;
  imageFile: File;
}

const PreviewHeaderImage: React.FC<Props> = (props: Props) => {
  const classes = useStyles({ colorCode: props.colorCode });
  return (
    <div className={`${classes.imageContainer} ${classes.colorCode}`}>
      {props.imageFile !== null && (
        <img src={URL.createObjectURL(props.imageFile)} />
      )}
    </div>
  );
};

export default PreviewHeaderImage;
