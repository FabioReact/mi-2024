type StarProps = {
  filled?: boolean;
  visible?: boolean;
  onFill?: () => void;
  onUnfill?: () => void;
};

const Star = ({ filled = false, visible = true, onFill, onUnfill }: StarProps) => {
  if (!visible) return;
  if (filled)
    return (
      <i
        aria-checked={filled}
        role='checkbox'
        className='pi pi-star-fill ml-4 cursor-pointer'
        onClick={onUnfill}
      ></i>
    );
  return (
    <i
      aria-checked={filled}
      role='checkbox'
      className='pi pi-star ml-4 cursor-pointer'
      onClick={onFill}
    ></i>
  );
};

export { Star };
