import React, { useEffect } from 'react';
import { Event } from 'typescript-fetch-api';
import { FormValues } from '../../forms/addEvent';
import { FormikProps } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';

interface OtherProps {
  isLoading: boolean;
  error: Error;
  addEvent: (event: Event) => void;
}

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

type SelectedTab = 'write' | 'preview';

const AddEvent: React.FC<OtherProps & FormikProps<FormValues>> = (
  props: OtherProps & FormikProps<FormValues>
) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
    addEvent
  } = props;
  const effectFn = () => {
    addEvent({ title: 'sample' });
  };
  const [selectedTab, setSelectedTab] = React.useState<SelectedTab>('write');
  useEffect(effectFn, []);
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="standard-name"
        label="タイトル"
        value={values.title}
        onChange={handleChange('title')}
        margin="normal"
      />
      <TextField
        id="standard-name"
        label="画像URL"
        value={values.imageUrl}
        onChange={handleChange('imageUrl')}
        margin="normal"
      />
      <ReactMde
        value={values.description}
        selectedTab={selectedTab}
        onChange={handleChange('description')}
        onTabChange={tab => {
          setSelectedTab(tab);
        }}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={isSubmitting || !!(errors.title && touched.title)}
      >
        イベント作成
      </Button>
    </form>
  );
};

export default AddEvent;
