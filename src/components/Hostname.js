import React, { useEffect, useState } from "react";
import { postApi } from "../helpers/system-api";
import { morseToIng as translate } from "../helpers/translate";

const Hostname = () => {
  const [hostname, setHostname] = useState();

  useEffect(() => {
    async function apply() {
      const response = await postApi(".... --- ... - -. .- -- .");
      const data = translate(response.data);

      setHostname(data);
    }

    apply();
  }, []);

  return <div>{hostname && <h6>HOSTNAME: {hostname}</h6>}</div>;
};

export default Hostname;
