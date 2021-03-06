import axios from "axios";

export default {
  // Gets the giver with the given email
  getGiver: function(email) {
    return axios.get("/api/givers/" + email);
  },
  createGiver: function(giver){
    return axios.post("/api/givers", giver);
  },
  getWisher:function(email){
    return axios.get("/api/wishers/"+email);
  },
  createWisher:function(wishers){
    return axios.post("/api/wishers", wishers);
  },
  updateWishlist:function(email,newlist){
    return axios.put("/api/wishers/"+email,newlist)
  },
  updateGiverlist:function(email, newlist){
    return axios.put("/api/givers/"+email,newlist)
  },

  deleteWish: function(id) {
    return axios.delete("/api/wishes/" + id);
  },
  updateWish: function(id, updated){
    return axios.put("/api/wishes/"+id,updated)
  },

  createWish: function(wish) {
    console.log(wish);
    return axios.post("/api/wishes/", wish);
  },
  getWishes: function(category){
    console.log(category);
    return axios.get("/api/wishes/"+category);
  }
};