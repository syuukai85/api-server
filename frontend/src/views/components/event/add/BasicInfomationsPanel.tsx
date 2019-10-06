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
import ErrorMessage from '../../form/ErrorMessage';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { AddEventFormProps } from '../../../forms/types/AddEventFormProps';
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

const BasicInfomationsPanel: React.FC<AddEventFormProps & FormikProps<FormValues>> = (
  props: AddEventFormProps & FormikProps<FormValues>
) => {
  const classes = useStyles({});
  const { values, handleChange, handleBlur, setFieldValue } = props;
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>基本情報</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <TextField
              label="イベント名"
              name="title"
              value={values.title}
              onChange={handleChange('title')}
              onBlur={handleBlur('title')}
              margin="normal"
              fullWidth
            />
            <ErrorMessage name="title" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">説明</Typography>
            <Description
              value={values.description}
              name="description"
              onBlur={handleBlur('description')}
              onChange={handleChange('description')}
            />
            <ErrorMessage name="description" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">ヘッダー画像設定</Typography>
            <Box className={classes.headerImageSettingContainer}>
              <SelectColor colorCode={values.colorCode} onChange={e => setFieldValue('colorCode', e.hex)} />
              <Box className={classes.uploadFileButtonContainer}>
                <UploadFileButton
                  onChange={(e: any) => {
                    if (e.target.files.length <= 0) return;
                    if (!props.isValidFileFormat(e.target.files[0].type)) return;
                    setFieldValue('imageFile', e.target.files[0]);
                  }}
                />
              </Box>
            </Box>
            <ErrorMessage name="colorCode" />
            <ErrorMessage name="imageFile" />
          </Grid>
          <Grid item xs={12}>
            <PreviewHeaderImage colorCode={values.colorCode} imageFile={values.imageFile} />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default BasicInfomationsPanel;
