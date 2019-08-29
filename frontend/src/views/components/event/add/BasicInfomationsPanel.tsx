import React from 'react';
import { FormValues } from '../../../forms/addEvent';
import { FormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Description from '../../form/Description';
import SelectColor from '../../form/SelectColor';
import UploadFileButton from '../../form/UploadFileButton';
import PreviewHeaderImage from '../../form/PreviewHeaderImage';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const BasicInfomationsPanel: React.FC<FormikProps<FormValues>> = (
  props: FormikProps<FormValues>
) => {
  const { values, handleChange, setFieldValue } = props;
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>基本情報</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              id="standard-name"
              label="イベント名"
              value={values.title}
              onChange={handleChange('title')}
              margin="normal"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Description
              value={values.description}
              onChange={handleChange('description')}
            />
          </Grid>
          <Grid item xs={12}>
            <Box>
              <SelectColor
                colorCode={values.colorCode}
                onChange={e => setFieldValue('colorCode', e.hex)}
              />
            </Box>
            <Box>
              <UploadFileButton
                onChange={(e: any) => {
                  setFieldValue('imageFile', e.target.files[0]);
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <PreviewHeaderImage
              colorCode={values.colorCode}
              imageFile={values.imageFile}
            />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default BasicInfomationsPanel;
