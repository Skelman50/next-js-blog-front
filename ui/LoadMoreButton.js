import { Fragment } from "react";

const LoadMoreButton = ({ size, limit, handleClick }) => (
  <div className="text-center pt-3 pb-4">
    {size > 0 && size >= limit && (
      <button onClick={handleClick} className="btn btn-outline-primary btn-lg">
        Load more
      </button>
    )}
  </div>
);

export default LoadMoreButton;
