import Robot from "./Robot";
const ListeDeRobots = ({ onClick, listeDeRobots }) => {
  console.log(onClick);
  return (
    <div className="liste-de-robots">
      {listeDeRobots.map((robot) => (
        <Robot
          onClick={onClick}
          src={"https://robohash.org/" + robot.id}
          nom={robot.name}
          email={robot.email}
          alt={robot.name}
          key={Robot.id}
        />
      ))}
    </div>
  );
};
export default ListeDeRobots;
