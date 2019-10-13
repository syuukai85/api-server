import React from 'react';
import { FormValues } from '../../../forms/addEvent';
import { FormikProps } from 'formik';
import Grid from '@material-ui/core/Grid';
import UploadFileButton from '../../form/UploadFileButton';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ErrorMessage from '../../form/ErrorMessage';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { AddEventFormProps } from '../../../forms/types/AddEventFormProps';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'contain'
  }
});

const ThrowingMoneyPanel: React.FC<AddEventFormProps & FormikProps<FormValues>> = (
  props: AddEventFormProps & FormikProps<FormValues>
) => {
  const { setFieldValue } = props;
  const classes = useStyles({});
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>投げ銭QRコード画像</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <UploadFileButton
              onChange={(e: any) => {
                if (e.target.files.length <= 0) return;
                if (!props.isValidFileFormat(e.target.files[0].type)) return;
                setFieldValue('qrCodeFile', e.target.files[0]);
              }}
            />
            <ErrorMessage name="qrCodeFile" />
          </Grid>
          {props.values.qrCodeFile !== null && (
            <Grid item xs={12}>
              <Box>
                <img className={classes.image} src={URL.createObjectURL(props.values.qrCodeFile)} />
              </Box>
            </Grid>
          )}
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ThrowingMoneyPanel;
