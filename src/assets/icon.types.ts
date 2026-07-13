import type { ComponentType } from "react";

/**
 * Every icon takes only a className and inherits its colour from `currentColor`
 * -- the surrounding `.ic` tile sets the colour, the icon just draws the path.
 * Size comes from CSS (`width`/`height` on the svg), never from a prop.
 */
export type IconProps = { className?: string };

export type IconComponent = ComponentType<IconProps>;
