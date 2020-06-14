import { Fragment } from "react";

const ShowBlogCheckboxes = ({ list, handleChange }) => {
  return (
    <Fragment>
      {list &&
        list.map((item, idx) => (
          <li key={`${item.slug}${idx}`} className="list-unstyled">
            <input
              type="checkbox"
              className="mr-2"
              onChange={() => handleChange(item._id)}
            />
            <label className="form-check-label">{item.name}</label>
          </li>
        ))}
    </Fragment>
  );
};

export default ShowBlogCheckboxes;
