import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SketchPicker, ColorChangeHandler } from 'react-color';

const useStyles = makeStyles({
  swatch: {
    padding: '5px',
    background: '#fff',
    borderRadius: '1px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
    display: 'inline-block',
    cursor: 'pointer'
  },
  color: {
    width: '36px',
    height: '14px',
    borderRadius: '2px'
  },
  colorCode: (props: any) => ({
    background: props.colorCode
  }),
  popover: {
    position: 'absolute',
    zIndex: 2
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  }
});

interface Props {
  colorCode: string;
  onChange: ColorChangeHandler;
}

const SelectColor: React.FC<Props> = (props: Props) => {
  const classes = useStyles({ colorCode: props.colorCode });
  const [displayColorPicker, setDisplayColorPicker] = React.useState(false);
  const handleClick = () => {
    setDisplayColorPicker(true);
  };
  const handleClose = () => {
    setDisplayColorPicker(false);
  };
  return (
    <div>
      <div className={classes.swatch} onClick={handleClick}>
        <div className={`${classes.color} ${classes.colorCode}`} />
      </div>
      {displayColorPicker && (
        <div className={classes.popover}>
          <div className={classes.cover} onClick={handleClose} />
          <SketchPicker color={props.colorCode} onChange={props.onChange} />
        </div>
      )}
    </div>
  );
};

export default SelectColor;
