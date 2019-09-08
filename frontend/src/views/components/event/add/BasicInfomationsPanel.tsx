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
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  headerImageSettingContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  uploadFileButtonContainer: {
    marginLeft: '10px'
  }
});

const BasicInfomationsPanel: React.FC<FormikProps<FormValues>> = (
  props: FormikProps<FormValues>
) => {
  const classes = useStyles({});
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
            <Typography variant="overline">説明</Typography>
            <Description
              value={values.description}
              onChange={handleChange('description')}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">ヘッダー画像設定</Typography>
            <Box className={classes.headerImageSettingContainer}>
              <SelectColor
                colorCode={values.colorCode}
                onChange={e => setFieldValue('colorCode', e.hex)}
              />
              <Box className={classes.uploadFileButtonContainer}>
                <UploadFileButton
                  onChange={(e: any) => {
                    setFieldValue('imageFile', e.target.files[0]);
                  }}
                />
              </Box>
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