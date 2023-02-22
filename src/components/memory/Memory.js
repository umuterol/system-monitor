import React, { useEffect, useState } from "react";
import { postApi } from "../../helpers/system-api";
import { morseToIng as translate } from "../../helpers/translate";
import { formatSizeUnits } from "../../helpers/bytes";
import ProgressBar from "react-bootstrap/ProgressBar";
import classes from "./memory.module.css";

const Member = () => {
  const [totalmem, setTotalmem] = useState();
  const [freemem, setFreemem] = useState();
  const [fullmem, setFullmem] = useState();

  useEffect(() => {
    async function applyFreemem() {
      const response = await postApi("..-. .-. . . -- . --");
      const data = translate(response.data);

      setFreemem(+data);
    }

    async function applyTotalmem() {
      const response = await postApi("- --- - .- .-.. -- . --");
      const data = translate(response.data);

      setTotalmem(+data);
    }

    applyTotalmem();
    const interval = setInterval(() => {
      applyFreemem();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (totalmem && freemem) {
      setFullmem(totalmem - freemem);
    }
  }, [totalmem, freemem]);

  return (
    <div>
      <div>
        {totalmem && (
          <h6>
            MEMORY: <strong>{formatSizeUnits(totalmem)}</strong>
          </h6>
        )}
      </div>
      <ProgressBar className={classes.progressbar}>
        <ProgressBar
          animated
          now={150}
          max={200}
          label={formatSizeUnits(fullmem)}
          key={1}
        />
        <ProgressBar
          variant="success"
          animated
          now={50}
          label={formatSizeUnits(freemem)}
          max={200}
          key={2}
        />
      </ProgressBar>
    </div>
  );
};

export default Member;
