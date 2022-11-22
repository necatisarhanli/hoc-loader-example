import React from "react";
import Loader from "../loader";

interface InjectedProps {
  loading?: boolean;
}

export const Withloader = <P extends {}>(Component: React.ComponentType<P>, Skeleton?: React.FC): React.FC<P & InjectedProps> => (
  props: P & InjectedProps
) => {
  if (props.loading) {
    return Skeleton ? <Skeleton /> : <Loader />;
  }
  return <Component {...props} />;
};

export default Withloader;
