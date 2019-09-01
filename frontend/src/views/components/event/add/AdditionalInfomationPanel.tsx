import React from 'react';
import { FormValues } from '../../../forms/addEvent';
import { FormikProps } from 'formik';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// グループを一括で取得する処理はまた別pullreqで対応予定
const groups = [{ value: 1, label: 'group1' }, { value: 2, label: 'group2' }, { value: 3, label: 'group3' }];

// カテゴリーを一括で取得する処理はまた別pullreqで対応予定
const categories = [
  { value: 1, label: 'category1' },
  { value: 2, label: 'category2' },
  { value: 3, label: 'category3' },
];

const AdditionalInfomationPanel: React.FC<FormikProps<FormValues>> = (props: FormikProps<FormValues>) => {
  const { values, handleChange } = props;
  return (
    <ExpansionPanel defaultExpanded>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <Typography>イベント追加情報</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography variant="overline">グループ</Typography>
            <Select value={values.group} onChange={handleChange('group')} options={groups} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="overline">カテゴリー</Typography>
            <Select
              closeMenuOnSelect={false}
              isMulti
              value={values.categories}
              onChange={handleChange('categories')}
              options={categories}
            />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default AdditionalInfomationPanel;
