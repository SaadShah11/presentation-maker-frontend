import {setOutline} from "../Redux/slices/OutlineSlice.js";

export default async function FetchOutline(socketId, reqPrompt, grade, slides, difficulty, setLoading, dispatch) {
  setLoading(true);
  let response = await fetch(`${import.meta.env.VITE_SERVER_URL}/main?socketID=${socketId}&userText=${reqPrompt}&grade=${grade}&slides=${slides}`, {
    method: "POST",
  });
  response = await response.text()
  response = JSON.parse(response.slice(7, -5))
  dispatch(setOutline(response))
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return response;
}
