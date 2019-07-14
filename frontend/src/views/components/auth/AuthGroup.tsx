import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

interface Props {
  uid: string;
  children: any;
  updateLoginState: () => void;
}

const AuthGroupContainer: React.FC<Props> = (props: Props) => {
  useEffect(() => {
    props.updateLoginState();
  }, [props]);
  return props.uid !== null ? props.children : <Redirect to={'/login'} />;
};

export default AuthGroupContainer;
