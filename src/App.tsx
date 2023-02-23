import { Button } from "@mui/material";
import HeaderApp from "./components/header/header";
import BottomNav from "./components/nav/botton-nav";

function App() {
  return (
    <div>
      <HeaderApp />
      <h2>hello</h2>
      <Button variant="contained">Click here</Button>
      <BottomNav />
    </div>
  );
}

export default App;
