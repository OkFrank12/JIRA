import { GlobalProvider } from "./Global/GlobalProvider";
import { mainRoute } from "./Router/mainRoute";
import { RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <RouterProvider router={mainRoute} />
      </GlobalProvider>
    </div>
  );
};

export default App;
