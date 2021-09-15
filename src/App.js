import "./styles.css";
import { App as SendbirdApp } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
export default function App() {
  return (
    <div className="App" style={{ height: 600 }}>
      <SendbirdApp appId="12CEAA34-57C3-4123-AB09-5708E35F2FA1" userId="3" />
    </div>
  );
}
