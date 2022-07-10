import React from "react";
import { useParams, useNavigate } from "react-router-dom";

import { paths } from "../../router/paths";

function StudySetPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const getBack = () => {
    navigate(paths.studySets, { replace: true });
  };

  return (
    <>
      <h1>study set {id} page</h1>
      <button onClick={() => getBack()}>go back</button>
    </>
  );
}

export default StudySetPage;
