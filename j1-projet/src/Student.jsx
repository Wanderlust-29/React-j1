const Student = (props) => {
    const students = [
      { notes: [12, 11, 10], name: "Alan" },
      { notes: [18, 10, 19], name: "Alice" },
      { notes: [10, 9, 11], name: "Bernard" },
      { notes: [11, 17, 19], name: "Sophie" },
    ];
    const sum = 0;

  return (
    <section>
      <h2>Étudiant-e-s</h2>
      <ul>
        {students.map((student, i) => {
          const sum = student.notes.reduce((acc, note) => acc + note, 0);
          const average = sum / student.notes.length;

          return (
            <li key={i}>
              <h3>{student.name}</h3>
              <ul>
                {student.notes.map((note, j) => (
                  <li key={j}>{note}</li>
                ))}
              </ul>
              <p>Moyenne : {average.toFixed(2)}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Student;
