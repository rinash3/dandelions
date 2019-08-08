import axios from "axios";

export default {
  // Gets the giver with the given email
  getGiver: function(email) {
    return axios.get("/api/books/" + email);
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
  updateWishlist:function(newlist){

  },
  updateGiverlist:function(newlist){

  },

  // Deletes the book with the given id
  deleteWish: function(id) {
    return axios.delete("/api/books/" + id);
  },
  updateWish: function(id, updated){

  },

  // Saves a book to the database
  createWish: function(bookData) {
    return axios.post("/api/wishes", bookData);
  }
};