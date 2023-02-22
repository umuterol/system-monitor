import React, { useEffect, useState } from "react";
import { postApi } from "../helpers/system-api";
import { morseToIng as translate } from "../helpers/translate";

const Platform = () => {
  const [platform, setPlatform] = useState();

  useEffect(() => {
    async function apply() {
      const response = await postApi(".--. .-.. .- - ..-. --- .-. --");
      const data = translate(response.data);

      setPlatform(data);
    }

    apply();
  }, []);

  return <div>{platform && <h6>PLATFORM: {platform}</h6>}</div>;
};

export default Platform;
