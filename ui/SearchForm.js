const SearchForm = ({ handleSubmit, handleChange, search }) => (
  <form onSubmit={handleSubmit}>
    <div className="row">
      <div className="col-md-8">
        <input
          className="form-control"
          type="search"
          placeholder="Search blogs"
          onChange={handleChange}
          value={search}
        />
      </div>
      <div className="col-md-4">
        <button className="btn btn-block btn-outline-primary" type="submit">
          Search
        </button>
      </div>
    </div>
  </form>
);

export default SearchForm;
