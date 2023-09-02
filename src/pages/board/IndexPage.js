import { Outlet } from "react-router-dom";

const IndexPage = () => {
  return (
    <div>
        <h1>Board</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default IndexPage;
