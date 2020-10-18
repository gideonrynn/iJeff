import axios from "axios";

export default {
    
    getAllHistory: function() {
      return axios.get("/api/history/all");
    },

    
}