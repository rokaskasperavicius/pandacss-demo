// Components
import { Header } from "@/components/global";
import { Input, Button } from "@/components/ui";

// Styles
import { vstack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";

export const App = () => (
  <div className={css({ maxWidth: "40rem", margin: "auto" })}>
    <Header />

    <div className={vstack({ gap: "10px", marginTop: "4rem" })}>
      <h1 className={css({ fontSize: "20px" })}>Sign In for Panda Content</h1>

      <label
        className={vstack({
          gap: "4px",
          alignItems: "flex-start",
          width: "100%",
        })}
      >
        <span>Your Email</span>

        <Input type="email" />
      </label>

      <label
        className={vstack({
          gap: "4px",
          alignItems: "flex-start",
          width: "100%",
        })}
      >
        <span>Secret Password</span>

        <Input type="password" />
      </label>

      <Button onClick={() => alert("Welcome to PandaCSS!")}>Sign In</Button>
    </div>
  </div>
);
