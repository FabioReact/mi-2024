import { ReactNode } from 'react';
import Loader from '../components/Loader/Loader';

const Waiting = ({ loading, children }: { loading: boolean; children: ReactNode }) => {
  if (loading) return <Loader />;
  return children;
};

export default Waiting;
