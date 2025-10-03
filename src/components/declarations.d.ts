declare namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      "ios-src"?: string;
      alt?: string;
      ar?: boolean;
      "auto-rotate"?: boolean;
      "camera-controls"?: boolean;
      "interaction-prompt"?: string;
      "shadow-intensity"?: string | number;
      exposure?: string | number;
      style?: React.CSSProperties;
    };
  }
}
