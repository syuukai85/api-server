import React from 'react';
import { Field, getIn } from 'formik';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  errorText: {
    color: 'red',
    marginTop: 5
  },
  errorTextWrap: {
    borderColor: 'transparent'
  }
});

interface Props {
  name: string;
}

const ErrorMessage: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  const { name } = props;
  return (
    <Field
      name={name}
      render={({ form }: any) => {
        const error = getIn(form.errors, name);
        const touch = getIn(form.touched, name);
        return touch && error ? (
          <div className={classes.errorTextWrap}>
            <p className={classes.errorText}>{error}</p>
          </div>
        ) : null;
      }}
    />
  );
};

export default ErrorMessage;
