declare module "*.gltf" {
  const src: string;
  export default src;
}

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        alt?: string;
        src?: string;
        poster?: string;
        exposure?: string;
        loading?: "auto" | "eager" | "lazy";
        reveal?: "auto" | "interaction" | "manual";
        "camera-controls"?: boolean;
        "auto-rotate"?: boolean;
        "rotation-per-second"?: string;
        "shadow-intensity"?: string;
        "environment-image"?: string;
        "interaction-prompt"?: string;
        "touch-action"?: string;
      };
    }
  }
}

export {};
