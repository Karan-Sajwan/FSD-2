import TextField from "./TextField";
import Button from "./Button";

export default function Contact() {
  return (
    <div className="page">
      <h2>Contact Page</h2>
      <TextField placeholder="Email" />
      <Button label="Send" />
    </div>
  );
}
