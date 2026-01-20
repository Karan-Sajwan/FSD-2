import Button from "./Button";
import TextField from "./TextField";
import Checkbox from "./Checkbox";

export default function Home() {
  return (
    <div className="page">
      <h2>Home Page</h2>
      <TextField placeholder="Enter Name" />
      <Button label="Submit" />
      <Checkbox text="Accept Terms" />
    </div>
  );
}
