function SearchBar({ query, setQuery }) {
  return (
    <input
      type="text"
      placeholder="Search GitHub users..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="search-input"
    />
  );
}

export default SearchBar;