<template>
  <div id="app">
    <div class="overview has-text-left">
      <div class="savio-overview content is-medium">
        <h2>WHAT IS SAVIO ALL ABOUT?</h2>
        <p>
          Savio is an 82 year-old man who lives a simple life trying to master
          frying round eggs in the morning to chit-chatting with lazy pigeons by
          the evening.
        </p>
        <p>
          One fine day, he decides to make his ordinary life a little less
          ordinary by recording a video message for the people who know him and
          for a reason that only he seems to know.
        </p>
        <p>
          While doing so, he takes everyone aboard a train of thought that
          travels through his rant about life, love and everything in between.
        </p>
      </div>
      <div class="carousel">
        <div class="carousel-border">
          <VueSlickCarousel v-bind="settings">
            <div>
              <img src="./assets/banner/01_the_wolf.png" />
            </div>
            <div>
              <img src="./assets/banner/01_apna_sapna.png" />
            </div>
            <div>
              <img src="./assets/banner/01_ghajini.png" />
            </div>
            <div>
              <img src="./assets/banner/01_money_heist.png" />
            </div>
            <div>
              <img src="./assets/banner/01_zero_no_1.png" />
            </div>
            <div>
              <img src="./assets/banner/02_muje_kuch.png" />
            </div>
          </VueSlickCarousel>
        </div>
      </div>
      <div class="film-overview content is-medium">
        <h2>WHAT IS THIS FILM ALL ABOUT</h2>
        <p>
          In simple words, the film is a representation of an old grown man's
          thoughts about life and love in a comical and honest way.
        </p>
        <p>
          The approach taken for the narrative is a casual, sit-down,
          piece-to-camera where Savio is speaking to the viewer. We see him fail
          miserably to come to the point but somewhere in his failure lies his
          pursuit of winning people over. What he eventually wants to say is the
          foundation of the film's narrative.
        </p>
      </div>
    </div>

    <div class="teaser-bts content is-medium">
      <div class="teaser">
        <h2>THIS IS WHAT WE'VE MANAGED SO FAR...</h2>
        <div class="teaser-video">
          <div id="tv_container">
            <iframe
              width="680"
              height="480"
              src="https://www.youtube-nocookie.com/embed/zaIkVmxpn1Q"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div class="bts">
        <h2>BEHIND THE SCENE</h2>
        <VueSlickCarousel v-bind="settings">
          <div>
            <img src="./assets/bts/01BTS.png" />
          </div>
          <div>
            <img src="./assets/bts/02_BTS.png" />
          </div>
          <div>
            <img src="./assets/bts/03_BTS.png" />
          </div>
          <div>
            <img src="./assets/bts/04_BTS.png" />
          </div>
          <div>
            <img src="./assets/bts/05_BTS.png" />
          </div>
          <div>
            <img src="./assets/bts/06_BTS.png" />
          </div>
          <div>
            <img src="./assets/bts/07_BTS.png" />
          </div>
          <div>
            <img src="./assets/bts/08_BTS.png" />
          </div>
          <div>
            <img src="./assets/bts/09_BTS.png" />
          </div>
        </VueSlickCarousel>
      </div>
    </div>

    <div class="overview">
      <div class="actor-overview content is-medium">
        <h2 class="has-text-left">ACTOR</h2>
        <img src="./assets/actov tv.png" class="tv-img" />
        <p class="has-text-left">
          Arvind Parab is an 82-year-old actor living in Bombay. He retired at
          the age of 56 from his career in Banking and started the second
          innings of his life as an Actor. He started on stage and came to the
          screen much later in the face of many small side roles in big films
          with bigger stars. His role as the twisted scientist in the Bingo
          commercial of 2008 had made him a star in the Indian advertising scene
          and he still finds himself etched in some corner of the audience's
          memory even a decade later.
        </p>
        <p class="has-text-left">
          As for us, we believe that as 'Savio' even Arvind wants to say
          something.
        </p>
      </div>
      <div class="director-overview content is-medium">
        <h2 class="has-text-left">FILM-MAKER</h2>
        <img src="./assets/filmmaker.png" class="tv-img" />
        <p class="has-text-left">
          Omkar Phatak is a 27-year-old filmmaker based out of Bombay. He
          started off as a producer in advertising and moved on to a non-fiction
          form of narrative later on as director and cinematographer. He wrote
          'Savio Wants To Say Something' in 2019 and has been chasing the right
          people to collaborate with and bring this film to light. He truly
          believes that cinema has the power to change lives and recommends
          watching 'Children of Men' to pretty much everyone he comes across.
        </p>
      </div>
      <div class="donate-overview content is-medium has-text-left">
        <h2 class="has-text-left">BUT WHY SHOULD I PAY?</h2>
        <p>Because we don’t have the money to pay</p>
        <p>Jokes apart...</p>
        <p>
          This campaign is a sincere attempt to raise funds that will be solely
          used to execute the short film's production. The specific areas that
          the money will be spent on are location fees (so we don't end up in
          prison), art setups (re-creating a certain aesthetic from the 60's &
          70's era) overall production costs, technical requirements (so the
          film can look & sound the way it should) pre & post-production
          expenses, festival entries & other relevant expenses of the same
          nature.
        </p>
        <p>
          Our target as of now is to raise a minimum of 12 Lakh Rupees out of
          which we have managed to raise 3 Lakh so far. With a kind gesture from
          your end, this number would certainly be different.
        </p>
      </div>
      <div class="donate-btn-div ">
        <button class="button donate-btn">HELP SAVIO MAKE HIS FILM</button>
      </div>
    </div>

    <!-- <div>
      <img src="./assets/logo.png" />
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank"
            >awesome-vue</a
          >
        </li>
      </ul>

      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank"
            >awesome-vue</a
          >
        </li>
      </ul>

      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank"
            >awesome-vue</a
          >
        </li>
      </ul>

      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank"
            >awesome-vue</a
          >
        </li>
      </ul>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank"
            >awesome-vue</a
          >
        </li>
      </ul>

      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank"
            >awesome-vue</a
          >
        </li>
      </ul>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank"
            >awesome-vue</a
          >
        </li>
      </ul>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank"
            >awesome-vue</a
          >
        </li>
      </ul>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank">Community Chat</a>
        </li>
        <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      </ul>
      <h2>Ecosystem</h2>
      <ul>
        <li>
          <a href="http://router.vuejs.org/" target="_blank">vue-router</a>
        </li>
        <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
        <li>
          <a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a>
        </li>
        <li>
          <a href="https://github.com/vuejs/awesome-vue" target="_blank"
            >awesome-vue</a
          >
        </li>
      </ul>
    </div> -->

    <footer class="footer">
      <div class="columns is-mobile is-align-items-center">
        <div class="column">
          <img src="./assets/icons/home.png" class="icon" />
        </div>
        <div class="column">
          <img src="./assets/sofa-savio.gif" class="sofa-savio" />
        </div>
        <div class="column">
          <img src="./assets/icons/menu.png" class="icon" />
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      settings: {
        dots: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
      },
    };
  },
  components: { VueSlickCarousel },
};
</script>

<style lang="scss">
$text-color: #2c2a25;
$lime-green: #7eb299;
$orange: #d65245;
$bg-color: #ececd1;

@font-face {
  font-family: appareolight;
  src: url("assets/fonts/appareolight.otf");
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  font-family: "appareolight";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
  background-color: $bg-color;
}

.footer {
  background-color: $lime-green !important;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  padding: 0;
}

.sofa-savio {
  padding-bottom: 0;
  max-height: 100px;
}

.overview {
  margin: 32px 0 32px 0;

  padding: 0 16px 0 16px;
}

.overview h2 {
  color: $orange;
}

.overview .carousel-wrapper {
  /*  background: url("assets/black_frame.png") no-repeat top left transparent;
   width: 50rem;
   height: 50rem; */
}

.overview .carousel {
  // max-width: 500px;
  // max-height: 500px;
  //  position: absolute;
  // top: 115px; /* Adjust top position */
  // left: 105px; /* Adjust left position */

 

   border: 7px double #1e1d1d;
  border-radius: 1px;
  -webkit-box-shadow: 4px 4px 13px 2px rgba(0, 0, 0, 0.73);
  box-shadow: 4px 4px 13px 2px rgba(0, 0, 0, 0.73); 
  margin: 32px auto;
}

.carousel-border {
  border: 25px solid #ffffff;
  border-radius: 1px;
}

.teaser-bts {
  background-color: $orange;
  padding-top: 16px;
}

.teaser-bts h2 {
  color: $bg-color;
}

#tv_container {
  background: url("assets/cine_reel.png") no-repeat top left transparent;
  width: 900px; /* Adjust TV image width */
  height: 800px; /* Adjust TV image height */
  position: relative;
  margin: 0 auto;
}
#tv_container iframe {
  position: absolute;
  top: 115px; /* Adjust top position */
  left: 105px; /* Adjust left position */
}

.bts {
  max-width: 500px;
  max-height: 500px;

  margin: 32px auto;
}

.tv-img {
  margin: 32px auto;
}

.donate-btn {
  background-color: $orange;
  color: $bg-color;
  margin-bottom: 120px;
}
</style>
