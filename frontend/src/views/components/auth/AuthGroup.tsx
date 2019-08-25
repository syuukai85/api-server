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
  const effectFn = () => {
    props.updateLoginState();
  };
  useEffect(effectFn, []);
  if (props.isLoading) {
    return <></>;
  }
  return props.uid !== null ? props.children : <Redirect to={'/login'} />;
};

export default AuthGroup;
