import dynamic from "next/dynamic";
import { Quillmodules, Quillformats } from "../helpers/quill";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const CreateBlogForm = ({
  handleBody,
  handleChange,
  handleSubmit,
  values,
  loading,
  body,
}) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label className="text-muted">Title</label>
      <input
        className="form-control"
        name="title"
        type="text"
        onChange={handleChange}
        value={values.title}
      />
    </div>
    <div className="form-group">
      <ReactQuill
        placeholder="Write somethig amazing!"
        onChange={handleBody}
        value={body}
        modules={Quillmodules}
        formats={Quillformats}
      />
    </div>
    <div className="form-group">
      <button type="submit" className="btn btn-primary" disabled={loading}>
        Create
      </button>
    </div>
  </form>
);

export default CreateBlogForm;
