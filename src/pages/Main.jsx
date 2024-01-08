import { useContext } from "react";
import Loading from "../components/Loading";
import GeneralContext from "../contexts/GeneralContext";

function Main() {
  const general = useContext(GeneralContext);
  const { global } = general;
  return <Loading message={`MAIN PAGE ${global}`}></Loading>;
}

export default Main;
