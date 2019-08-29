import React from 'react';
import { FormValues } from '../../../forms/addEvent';
import { FormikProps } from 'formik';
import Grid from '@material-ui/core/Grid';
import UploadFileButton from '../../form/UploadFileButton';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ThrowingMoneyPanel: React.FC<FormikProps<FormValues>> = (
  props: FormikProps<FormValues>
) => {
  const { setFieldValue } = props;
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>投げ銭QRコード画像</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <UploadFileButton
              onChange={(e: any) => {
                setFieldValue('qrImageFile', e.target.files[0]);
              }}
            />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default ThrowingMoneyPanel;
