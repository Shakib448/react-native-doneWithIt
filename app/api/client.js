import { create } from "apisauce";
import cache from "../utils/cache";

const apiClient = create({ baseURL: "http://192.168.0.111:9000/api" });

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  const res = await get(url, params, axiosConfig);
  if (res.ok) {
    cache.store(url, res.data);
    return res;
  }
  const data = await cache.get(url);
  return data ? { ok: true, data } : res;
};

export default apiClient;
