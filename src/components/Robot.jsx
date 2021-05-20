const Robot = ({onClick, src, nom, email, key }) => {
    const a = console.log("van");
  return (
    <div onClick={a} className="robot" key={key}>
      <div className="image">
        <img src={src} alt={nom} />
      </div>

      <h2 className="nom">{nom}</h2>

      <p className="email">{email}</p>
    </div>
  );
};
export default Robot;
