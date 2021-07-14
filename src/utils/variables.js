export const ENV = "local"

export const BASE_URL = ENV === "development" ? "https://webapi-bae.herokuapp.com" : "http://localhost:5000"

export const IDLE_TIMER = 30