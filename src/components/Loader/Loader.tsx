import classes from './loader.module.css';

const Loader = () => {
  return (
    <div className='text-center' aria-busy='true' role='status'>
      <div className={classes.loader}></div>
    </div>
  );
};

export default Loader;
