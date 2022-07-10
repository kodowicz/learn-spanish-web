import React from "react";
import { useNavigate } from "react-router-dom";

import { paths } from "../../router/paths";

function StudySetPage() {
  const navigate = useNavigate();

  const getNavigate = () => {
    navigate(paths.studySets);
  };

  return (
    <>
      <h1>Home page</h1>
      <button onClick={() => getNavigate()}>study sets</button>
    </>
  );
}

export default StudySetPage;
