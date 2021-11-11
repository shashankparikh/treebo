/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import hoistNonReactStatics from "hoist-non-react-statics";
import { LoaderContainer } from "./style";

const InjectLoader = (props) => {
  const { loading } = props;
  console.log(loading, "loading");
  console.log(props, "props");
  // const [showLoader, setShowLoader] = useState(loading || false);
  //   useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       window.showGlobalLoader = (bool) => {
  //         setShowLoader(bool);
  //       };
  //     }
  //   }, []);

  console.log(loading, "showLoader");

  return (
    <>
      {loading && (
        <LoaderContainer>
          <CircularProgress color="secondary" />
        </LoaderContainer>
      )}
    </>
  );
};
export default InjectLoader;
