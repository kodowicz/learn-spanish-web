import React from "react";
import { useNavigate, generatePath } from "react-router-dom";

import { paths } from "../../router/paths";

function StudySetsPage() {
  const studySets: string[] = ["1", "2", "3", "4"];

  const navigate = useNavigate();

  const getPath = (id: string) => {
    const route = generatePath(paths.studySet, { id: id });

    navigate(route);
  };

  const getBack = () => {
    navigate(paths.root);
  };

  return (
    <>
      <h1>study sets page</h1>
      <button onClick={() => getBack()}>go back</button>
      <div>
        {studySets.map((id: string) => (
          <button key={id} onClick={() => getPath(id)}>
            study set {id}
          </button>
        ))}
      </div>
    </>
  );
}

export default StudySetsPage;
