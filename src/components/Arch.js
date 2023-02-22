import React, { useEffect, useState } from "react";
import { postApi } from "../helpers/system-api";
import { morseToIng as translate } from "../helpers/translate";

const Arch = () => {
  const [arch, setArch] = useState();

  useEffect(() => {
    async function apply() {
      const response = await postApi(".- .-. -.-. ....");
      const data = translate(response.data);

      setArch(data);
    }

    apply();
  }, []);

  return (
    <div className="text-center">
      {arch && (
        <h6>
          ARCH: <strong>{arch}</strong>
        </h6>
      )}
    </div>
  );
};

export default Arch;
