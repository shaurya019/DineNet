export const defaultOpenTime = "0000";
export const defaultCloseTime = "2359";
export const defaultClientId = window.localStorage.getItem("clientId") || "1";
export const defaultSource = window.localStorage.getItem("source") || "Room 1";
export const BASE_URL =  process.env.REACT_APP_BASE_URL || "https://staging-api.cubik.in/api";

