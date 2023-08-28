// Components
import { Button } from "@/components/ui";

// Styles
import { css } from "@/styled-system/css";
import { flex } from "@/styled-system/patterns";

export const Header = () => (
  <header
    className={css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid",
      borderColor: "neutral.600",
      paddingY: "0.5rem",
    })}
  >
    <h2>Welcome to PandaCSS</h2>

    <div className={flex({ gap: "0.5rem" })}>
      <Button variant="outline">Home</Button>
      <Button variant="outline">About</Button>
    </div>
  </header>
);
