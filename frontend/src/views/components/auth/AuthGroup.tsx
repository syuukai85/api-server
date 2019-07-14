import React from 'react';
import { Redirect } from 'react-router-dom';

interface Props {
  uid: string;
  children: any;
}

const AuthGroupContainer: React.FC<Props> = (props: Props) => {
  console.log(props.uid);
  return props.uid !== null ? props.children : <Redirect to={'/login'} />;
};

export default AuthGroupContainer;
