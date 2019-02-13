<template>
  <div class="hello">

<button class="language">SRB</button>
<button class="language">ENG</button>

  <ul v-for="(value, index) in item">   
      <li  v-bind:style="{ 'background-image': 'url(' + img + ')' }">
        <p> {{ value.title }} </p>
        <button @click="modalVisible = true "><i class="fas fa-play-circle"></i></button>   
        <p> {{ value.author }} </p>
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
    fetch("https://api.myjson.com/bins/13mms5")
    .then(response => response.json())
    .then((data) => {
      this.item = data.videos;
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
        this.img = this.generateThumbnailUrl(videoIdOrUrl);
      //  return this.generateThumbnailUrl(videoIdOrUrl);
    }
  },
  mounted(){
    // From some method in one of your Vue components
this.$cookie.set('test', 'Hello world!', 1);
// This will set a cookie with the name 'test' and the value 'Hello world!' that expires in one day

// To get the value of a cookie use
this.$cookie.get('test');

// To delete a cookie use
this.$cookie.delete('test');
   
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
  color: #ff5722;
  padding-top: 10px;
  font-weight: 800;
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;   
}
button{
  border: none;
  background: transparent;
  
  
  cursor: pointer;
}
button i {
  color: #ff5722;
  font-size: 30px;
}
.language{
  border: 1px solid rgb(145, 128, 128);
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px; 
}
.language:hover{
  background: #ff5722;
  color: #fff;
}
</style>


  
