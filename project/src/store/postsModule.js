// Define a new module for managing posts
import axios from "axios";
export const postsModule = {
    state: {
      postsdata: []
    },
    actions: {
      getPosts({ commit }) {
        axios.get(`https://artgallery-2a2a0-default-rtdb.firebaseio.com/InstituteImages.json`)
          .then(response => {
            commit('formatPostData', response.data);
          });
      }
    },
    mutations: {
      formatPostData(state, posts) {
        const formattedPosts = [];
        for (let key in posts) {
          formattedPosts.push({ ...posts[key], id: key });
        }
        state.postsdata = formattedPosts;
      }
    }
  };
  