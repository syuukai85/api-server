import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

interface Props {
  uid: string;
  isLoading: boolean;
  // TODO: append react children type
  children: any;
  updateLoginState: () => void;
}

const AuthGroup: React.FC<Props> = (props: Props) => {
  const effectFunc = () => {
    props.updateLoginState();
  };
  useEffect(effectFunc, []);
  if (props.isLoading) {
    return <div>loading....</div>;
  }
  return props.uid !== null ? props.children : <Redirect to={'/login'} />;
};

export default AuthGroup;
