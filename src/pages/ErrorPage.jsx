import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Loading from "../components/Loading";

function ErrorPage() {
  const navigate = useNavigate();

  useEffect(() => navigate("/"), []);

  return <Loading message="This page doesn't exist, redirecting you to the sign up page"></Loading>
}

export default ErrorPage;