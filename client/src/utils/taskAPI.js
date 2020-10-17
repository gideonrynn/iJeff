import axios from "axios";

export default {
    
    getAllTasks: function() {
      return axios.get("/api/tasks/all");
    },


    
}