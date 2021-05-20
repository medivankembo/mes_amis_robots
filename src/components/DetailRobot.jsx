function DetailRobot({onClick, className}) {
/*   function fermer() {
    console.log("Bien fait");
  }
 */
  return (
    <div className={className}>
      <div className="entete-modal">
        <h2>Detail du robot</h2>
      </div>

      <div className="corps-modal">
        <div className="partie-image">
          <img src="" alt="Avatar du robot" />
        </div>
        <div className="partie-texte">
          <p>Nom : Nom </p>
          <p>Nom utilisateur : Nom utilisateur </p>
          <p>E-mail : E-mail</p>
          <p>Téléphone : Téléphone</p>
          <p>Site Web : Site Web</p>
        </div>
      </div>
      <div className="btn-fermer">
        <button onClick = {onClick}>Fermer</button>
      </div>
    </div>
  );
}

export default DetailRobot;
