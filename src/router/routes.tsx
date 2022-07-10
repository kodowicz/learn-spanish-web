import React from "react";

import { HomePage, StudySetsPage, StudySetPage } from "../pages";
import { RouteItem } from "./types";
import { paths } from "./paths";

const routes: RouteItem[] = [
  {
    path: paths.root,
    exact: true,
    secure: false,
    element: <HomePage />,
  },
  {
    path: paths.studySets,
    exact: true,
    secure: false,
    element: <StudySetsPage />,
  },
  {
    path: paths.studySet,
    exact: true,
    secure: false,
    element: <StudySetPage />,
  },
];

export default routes;
