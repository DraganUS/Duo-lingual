<template>
  <div class="hello">

<button  @click="createCookie('srbLanguage', 'srb'); newVideoSrb()" class="language">SRB</button>
<button @click="createCookie('engLanguage', 'eng'); newVideoEng()" class="language">ENG</button>

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
  name: 'HelloWorld',
  data(){
    return{
      modalVisible: false,
      item: [],
      img: '',
      
    }
  },
   beforeCreate(){
     function readCookie() {
        const nameEQ = "srbLanguage" + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                let contents = c.substring(nameEQ.length, c.length);
                contents = decodeURIComponent(contents);
                return contents;
            }
        }
        return null;
      }
     if ( readCookie() === 'srb'){
       fetch("https://api.myjson.com/bins/99ixh")
       .then(response => response.json())
       .then((data) => {
       this.item = data.videos;
      })
    } else{ 
     fetch("https://api.myjson.com/bins/13mms5")      
     .then(response => response.json())
       .then((data) => {
       this.item = data.videos;
      })
    }
  },
  methods:{
    newVideoSrb(){
       fetch("https://api.myjson.com/bins/99ixh")
      .then(response => response.json())
      .then((data) => {
      this.item = data.videos;
     })
    },
    newVideoEng(){
       fetch("https://api.myjson.com/bins/13mms5")
      .then(response => response.json())
      .then((data) => {
      this.item = data.videos;
     }),
     console.log(this.readCookie('srbLanguage'))
    },
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
        // console.log(videoIdOrUrl);
        this.img = this.generateThumbnailUrl(videoIdOrUrl);
      //  return this.generateThumbnailUrl(videoIdOrUrl);
    },
    createCookie(name, value, days) {
        value = encodeURIComponent(value);
        let expires;

        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        } else {
            expires = '';
        }

        document.cookie = name + '=' + value + expires + '; path=/';
    },
    readCookie(name) {
        const nameEQ = name + '=';
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                let contents = c.substring(nameEQ.length, c.length);
                contents = decodeURIComponent(contents);
                return contents;
            }
        }
        return null;
    },
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


  
