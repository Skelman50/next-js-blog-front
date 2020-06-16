import { useState } from "react";
import SearchForm from "../../ui/SearchForm";
import { listSearch } from "../../actions/blog";
import SearchedBlogs from "../../ui/SerchedBlogs";

const Search = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [searched, setSearched] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await listSearch({ search });
    if (response.error) {
      console.log(response.error);
    } else {
      setResult(response);
      setSearched(true);
      setMessage(`${response.length} blogs found!`);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
    setSearched(false);
    setResult([]);
  };

  return (
    <div className="container-fluid">
      <div className="pt-3 pb-3">
        <SearchForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          search={search}
        />
      </div>
      {searched && <SearchedBlogs message={message} result={result} />}
    </div>
  );
};

export default Search;
