import { Button } from "@mui/material";
import MyButton from "./propsAndChildren/MyButton";
import MyMessage from "./propsAndChildren/MyMessage";
import Counter from "./states/Counter";
import Countries from "./effects/Countries";
import GrandParent from "./context/GrandParent";
import Timer from "./effects/Timer";
import FormExample from "./forms/FormExample";

export default function SandboxPage() {
  return (
    <div>
      <FormExample />
    </div>
  );
}
