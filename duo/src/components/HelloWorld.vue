<template>
  <div class="hello">
<button @click="modalVisible = true ">Posalji</button>
<ul v-for="(value, index) in item">   
      <li>{{ value.title }} <br> {{ value.author }}</li>
      
</ul>

   <div v-show="modalVisible" id="modal">
    <div class="inside">
      <h1>Da li ste sigurni?</h1>
      <button @click="modalVisible = false">da</button>
    </div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  data(){
    return{
      modalVisible: false,
      item: []
    }
  },
  beforeCreate(){
    fetch("https://api.myjson.com/bins/k1gz9")
    .then(response => response.json())
    .then((data) => {
      this.item = data;
    })
  },
  methods:{

  }
}


var youtube = {
    
    /**
     * Expects an argument that is either a youtube URL or a ID,
     * and returns back the ID.
     */
    getIdFromUrl: function(videoIdOrUrl) {
        if (videoIdOrUrl.indexOf('http') === 0) {
            return videoIdOrUrl.split('v=')[1];
        } else {
            return videoIdOrUrl;
        }
    },
    
    /**
     * Expects an argument that is either a youtube URL or a ID,
     * and returns back the URL of the thumbnail for that video.
     */
    generateThumbnailUrl: function(videoIdOrUrl) {
        return 'https://i3.ytimg.com/vi/' + youtube.getIdFromUrl(videoIdOrUrl) + '/default.jpg';
    },

    /**
     * Expects an argument that is either a youtube URL or a ID,
     * and returns back the URL for that video.
     */
    generateWatchUrl: function(videoIdOrUrl) {
        return 'https://www.youtube.com/watch?v=' + youtube.getIdFromUrl(videoIdOrUrl);
    },
    
    /**
     * Expects an argument that is either a youtube URL or a ID,
     * and returns back the embed URL for that video.
     */
    generateEmbedUrl: function(videoIdOrUrl) {
        return 'https://www.youtube.com/embed/' + youtube.getIdFromUrl(videoIdOrUrl);
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#modal {
  height:100vh;
  width: 100vw;
  position: fixed;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: grey;
}
ul li {
  height: 200px;
  width: 250px;
  background:#282a2b;
  color: aliceblue;
}

</style>
