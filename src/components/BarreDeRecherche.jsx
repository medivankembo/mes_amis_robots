const BarreDeRecherche = ({ onChange }) => {
  return (
    <div>
      <input type="text" placeholder="Rechercher par nom" onChange={onChange} />
    </div>
  );
};
export default BarreDeRecherche;
