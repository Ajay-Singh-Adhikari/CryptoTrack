import { useSelector } from "react-redux";
import Display from "./Display";

const DisplayItems = () => {
  const item = useSelector((store) => store.item);
  console.log(item);
  return (
    <>
      {item.map((item) => (
        <Display key={item.id} item={item} />
      ))}
    </>
  );
};
export default DisplayItems;
