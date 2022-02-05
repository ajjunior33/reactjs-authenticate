import React from "react";
import { useAuth } from "../contexts/Auth";

// import { LoadingComponent } from "../components/LoadingComponent";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

const ListRoutes = () => {
  const { signed, loading } = useAuth();

  // if (loading) {
  //   return <LoadingComponent />;
  // }
  const component = signed ? <AppRoutes /> : <AuthRoutes />;

  return component;
};
export default ListRoutes;
