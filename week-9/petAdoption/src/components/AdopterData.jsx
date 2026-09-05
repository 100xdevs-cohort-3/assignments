export default function AdopterData({ adopters = [] }) {
  return (
    <section>
      <h2>Applications ({adopters.length})</h2>
      {!adopters.length ? (
        <p>Your submitted applications will appear here.</p>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {['Pet', 'Type', 'Breed', 'Adopter', 'Email', 'Phone'].map((label) => (
                  <th key={label}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {adopters.map((adopter) => (
                <tr key={adopter.id}>
                  {['petName', 'petType', 'breed', 'adopterName', 'email', 'phone'].map((key) => (
                    <td key={key}>{adopter[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
