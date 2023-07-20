const Table = ({ sat }) => {
  const tableData = sat.map(data => 
    <tr key={sat.id}>
      <td>{data.name}</td>
      <td>{data.type}</td>
      <td>{data.launchDate}</td>
      <td>{data.operational === true ? 'Active' : 'Inactive'}</td>
    </tr>
  );
  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
  );
};

export default Table;