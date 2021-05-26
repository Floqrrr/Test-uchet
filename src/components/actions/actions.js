import axios from "axios";

export const getData = async () => {
  const component = await axios.get("/api/todo/components");
  const cpu = await axios.get("/api/todo/cpu");
  const gpu = await axios.get("/api/todo/gpu");
  const motherboard = await axios.get("/api/todo/motherboard");
  const hdd = await axios.get("/api/todo/hdd");
  const ram = await axios.get("/api/todo/ram");
  const power = await axios.get("/api/todo/power");
  return { cpus: cpu.data, gpus: gpu.data, motherboards: motherboard.data, hdds: hdd.data, rams: ram.data, powers: power.data, components: component.data };
};

