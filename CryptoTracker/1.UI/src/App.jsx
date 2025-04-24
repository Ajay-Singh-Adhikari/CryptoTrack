import Header from "./components/Header";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";
import DisplayItems from "./components/DisplayItems";
import FetchItems from "./components/FetchItems"
const App = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner />: <DisplayItems />}
    </>
  );
};
export default App;
