'use strict';

const CopyCatContainer = () => {
  const [copying, setCopying] = React.useState(true);
  const [value, setValue] = React.useState("");
  const [name, setName] = React.useState("Tom");
  const toggleTape = () => { setCopying(!copying); }
  const handleChange = ($event) => {setValue($event.target.value)};
  const handleAuxClick = () => {
    let catName = prompt("What is the cat name?");
    setName(catName);
  };
  return (
      <CopyCat
        copying={copying}
        onClick={toggleTape}
        value={value}
        onChange={handleChange}
        name={name}
        onAuxClick={handleAuxClick}
    />
  );
}

ReactDOM.render(<CopyCatContainer />, document.getElementById('app'));
