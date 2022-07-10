import { paths } from "./paths";

export type RouteItem = {
  path: paths;
  exact?: boolean;
  secure: boolean;
  element: React.ReactElement;
};
