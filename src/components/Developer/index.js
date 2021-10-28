import "./style.css";
const Developer = ({ name, age, country }) => {
  return (
    <div className="container">
      <span className="spans">Dev: {name}</span>
      <span className="spans">Idade: {age}</span>
      <span className="spans">Cidade: {country}</span>
    </div>
  );
};
export default Developer;
