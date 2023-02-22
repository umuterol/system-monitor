import React, { useEffect, useState } from "react";
import { postApi } from "../../helpers/system-api";
import { morseToIng as translate } from "../../helpers/translate";
import cpuSvg from "../../assets/images/cpu.svg";

import classes from "./cpu.module.css";

const Cpu = () => {
  const [cpu, setCpu] = useState();
  useEffect(() => {
    async function apply() {
      const response = await postApi("-.-. .--. ..-");
      const data = response.data;
      const translateData = data.map((d) => {
        return {
          model: translate(d.model),
          speed: translate(d.speed),
        };
      });

      setCpu(translateData);
    }
    const interval = setInterval(() => {
      apply();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes["cpu-container"]}>
      {cpu &&
        cpu.map((data, index) => (
          <div className={classes.cpu} key={data.model + index}>
            <img src={cpuSvg} width={100}></img>

            <p className={classes.model}>
              {data.model} <span>({data.speed} MHz)</span>
            </p>
          </div>
        ))}
    </div>
  );
};

export default Cpu;
