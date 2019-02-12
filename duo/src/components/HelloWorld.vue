<template>
  <div class="hello">


  <ul v-for="(value, index) in item">   
      <li>{{ value.title }} <br> {{ value.author }}<br>
      <button @click="modalVisible = true "><i class="fas fa-play-circle"></i></button>   
      <img v-bind:src="imgFoto(value.youtubeId)"  alt=""> 
      </li>  
  </ul>

   <div v-show="modalVisible" id="modal">
    <div class="inside">
      <h1>Da li ste sigurni?</h1>
      <button @click="modalVisible = false">Da</button>
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
      item: [],
      img: '',
      
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
      getIdFromUrl(videoIdOrUrl) {
        if (videoIdOrUrl.indexOf('http') === 0) {
              return videoIdOrUrl.split('v=')[1];
        } else {
            return videoIdOrUrl;
        }
    },
     generateThumbnailUrl(videoIdOrUrl) {
        return 'https://i3.ytimg.com/vi/' + this.getIdFromUrl(videoIdOrUrl) + '/default.jpg';
    },

    generateWatchUrl(videoIdOrUrl) {
        return 'https://www.youtube.com/watch?v=' + this.getIdFromUrl(videoIdOrUrl);
    },
    
    generateEmbedUrl(videoIdOrUrl) {
        return 'https://www.youtube.com/embed/' + this.getIdFromUrl(videoIdOrUrl);
    },
       
    imgFoto(videoIdOrUrl) {
        console.log(videoIdOrUrl);
       return this.generateThumbnailUrl(videoIdOrUrl);
    }
  },
  mounted(){
   
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
  top:0;
  left: 0;
}
ul li {
  z-index: -1;
  height: 200px;
  width: 250px;
  background:#282a2b;
  color: aliceblue;
  
}
button{
  border: none;
  background: transparent;
  height: 40%;
  width: 100%;
  cursor: pointer;
}
button i {
  color: antiquewhite;
  font-size: 30px;
}

</style>


  
