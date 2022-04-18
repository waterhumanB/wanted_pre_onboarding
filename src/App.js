import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Slider from "./components/Slider";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <section>
      <section>
        <Toggle></Toggle>
      </section>
      <section>
        <Tab></Tab>
      </section>
      <section>
        <Slider></Slider>
      </section>
      <section>
        <Input></Input>
      </section>
      <section>
        <Dropdown></Dropdown>
      </section>
    </section>
  );
}

export default App;
