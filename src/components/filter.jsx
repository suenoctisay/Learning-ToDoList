const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <h2>Filter</h2>
      <div className="filter-options">
        <div>
          <p className="text">Status</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value='all'>All</option>
            <option value='active'>Active</option>
            <option value='completed'>Completed</option>
          </select>
        </div>
        <div>
          <p className="text">Alphabetical order</p>
          <button className="btn-order">A-Z</button>
          <button className="btn-order">Z-A</button>
        </div>
      </div>
    </div>
  )
}

export default Filter