import React from "react";

const ProjectPage = ({ params }) => {
  console.log(params);
  if (params.project.length === 3) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <span>
          This is Project Page{" "}
          {params.project[2].charAt(0).toUpperCase() +
            params.project[2].slice(1)}
        </span>
      </div>
    );
  }
  if (params.project.length === 2) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <span>
          This is Project Page{" "}
          {params.project[1].charAt(0).toUpperCase() +
            params.project[1].slice(1)}
        </span>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Project Page{" "}
      {params.project[0].charAt(0).toUpperCase() + params.project[0].slice(1)}
    </div>
  );
};

export default ProjectPage;
