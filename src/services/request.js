import axios from "./api";

export const getTracks = () => {
  return axios.get("/tracks/uz/");
};

export const getTracksHome = (url = "/top/home/") => {
  return axios.get(url);
};

export const getTrack = (trackId) => {
  return axios.get(`/tracks/${trackId}/`);
};

export const createTrack = (trackData) => {
  return axios.post("/tracks/", trackData);
};
