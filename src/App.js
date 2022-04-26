import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Slider from "./components/Slider";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <section>
      <section style={{ marginBottom: "70px" }}>
        <Toggle></Toggle>
      </section>
      <section style={{ marginBottom: "70px" }}>
        <Tab></Tab>
      </section>
      <section style={{ marginBottom: "70px" }}>
        <Slider></Slider>
      </section>
      <section style={{ marginBottom: "70px" }}>
        <Input></Input>
      </section>
      <section style={{ marginBottom: "70px" }}>
        <Dropdown></Dropdown>
      </section>
    </section>
  );
}

export default App;
