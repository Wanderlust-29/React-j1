const Steps = (props) => {
  const stepsList = [
    "Faire un puits avec la farine et y verser les oeufs",
    "Battre les oeufs et la farine et y incorporer doucement le lait",
    "Faire fondre le beurre et l'ajouter au mélange"
  ];

  return (
    <>
      <h3>Étapes</h3>
      <ol>
        {stepsList.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </>
  );
};

export default Steps;