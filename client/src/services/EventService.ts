import axios from "axios";

export default {
  async getEvents() {
    const res = await axios.get("http://localhost:8001/events");
    return res.data;
  },

  async getEventSingle(eventID: number) {
    const res = await axios.get("http://localhost:8001/events/" + eventID);
    return res;
  },
};
