import type { ButtonHTMLAttributes } from "react";
import LCD from "../theme/lcd";

export default function LCDButton(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      style={{
        height: LCD.buttonHeight,
        width: "100%",
        marginBottom: 12,
        borderRadius: LCD.buttonRadius,
        fontSize: LCD.bodySize,
        cursor: "pointer",
      }}
    />
  );
}
