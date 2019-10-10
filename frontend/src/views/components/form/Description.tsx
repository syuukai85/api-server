import React from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import 'react-mde/lib/styles/css/react-mde-all.css';
import './description-override.css';

interface Props {
  value: string;
  name: string;
  onChange: (value?: string) => void;
  onBlur: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
}

type SelectedTab = 'write' | 'preview';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const Description: React.FC<Props> = (props: Props) => {
  const [selectedTab, setSelectedTab] = React.useState<SelectedTab>('write');
  return (
    <ReactMde
      value={props.value}
      selectedTab={selectedTab}
      onChange={props.onChange}
      onTabChange={tab => {
        setSelectedTab(tab);
      }}
      textAreaProps={{ name: props.name, onBlur: props.onBlur }}
      generateMarkdownPreview={markdown =>
        Promise.resolve(converter.makeHtml(markdown))
      }
    />
  );
};

export default Description;
