import React from 'react';
import { Category } from 'typescript-fetch-api';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  category: {
    margin: '5px'
  }
});

interface Props {
  categories?: Array<Category>;
}

const CategoryChips: React.FC<Props> = (props: Props) => {
  const classes = useStyles({});
  if (props.categories === void 0) return <></>;
  return (
    <div>
      {props.categories.map((category: Category) => (
        <Chip
          key={category.id}
          className={classes.category}
          label={category.name}
        />
      ))}
    </div>
  );
};

export default CategoryChips;
