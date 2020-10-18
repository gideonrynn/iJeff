import axios from "axios";

export default {
    
    getAllTasks: function() {
      return axios.get("/api/tasks/all");
    },

    getStatusNull: function() {
      return axios.get("/api/tasks/statusnull");
    },
    
    updateTask: function (id, update) {
      return axios.put("api/tasks/" + id, update)
    }

    
}