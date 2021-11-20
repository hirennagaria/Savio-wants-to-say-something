<template>
  <div id="app" v-on:scroll="scrollFunction">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <!-- <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span> -->
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="#overview"> WHAT IS SAVIO ALL ABOUT? </a>

          <a class="navbar-item" href="#teaser">
            THIS IS WHAT WE'VE MANAGED SO FAR...
          </a>

          <a class="navbar-item" href="#actor"> ACTOR </a>

          <a class="navbar-item" href="#filmmaker"> FILM-MAKER </a>

          <a class="navbar-item" href="#donate"> DONATE </a>
        </div>
      </div>
    </nav>
    <div class="overview has-text-left" id="overview">
      <div class="savio-overview content is-medium">
        <h5>WHAT IS SAVIO ALL ABOUT?</h5>
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
        <p>
          <b>Savio</b> is an 82 year-old man who lives a simple life trying to
          master frying round eggs in the morning to chit-chatting with lazy
          pigeons by the evening.
        </p>
        <p>
          One fine day, he decides to make his ordinary life a little less
          ordinary by recording a <b>video</b> message for the people who know
          him and for a <b>reason</b> that only he seems to know.
        </p>
        <p>
          While doing so, he takes everyone aboard a train of thought that
          travels through his rant about life, <b>love</b> and everything in
          between.
        </p>
      </div>

      <div class="film-overview content is-medium">
        <h5>WHAT IS THIS FILM ALL ABOUT?</h5>
        <p>
          In simple words, the <b>core</b> idea of the film is a representation
          of an old grown man's thoughts about life and love in a comical and
          honest way.
        </p>
        <p>
          The approach taken for the <b>narrative</b> is a casual, sit-down,
          piece-to-camera where Savio is speaking to the viewer. We see him fail
          miserably to come to the point but somewhere in his failure lies his
          pursuit of winning people over. What he eventually wants to say is the
          <b>foundation</b> of the film's narrative.
        </p>
      </div>
    </div>

    <div class="teaser-bts content is-medium" id="teaser">
      <div class="teaser">
        <h5>THIS IS WHAT WE'VE MANAGED SO FAR...</h5>
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
        <h5>BEHIND THE SCENE</h5>
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
        <h5 class="has-text-left" id="actor">ACTOR</h5>
        <img src="./assets/actortv.png" class="tv-img" />
        <p class="has-text-left">
          Arvind Parab is an 82-year-old actor living in Bombay. He retired at
          the age of 56 from his career in Banking and started the second
          innings of his life as an <b>Actor</b>. He started on stage and came
          to the screen much later in the face of many small side roles in big
          films with bigger stars. His role as the twisted <b>scientist</b> in
          the Bingo commercial of 2008 had made him a star in the Indian
          advertising scene and he still finds himself etched in some corner of
          the audience's memory even a decade later.
        </p>
        <p class="has-text-left">
          As for us, we believe that as 'Savio' even <b>Arvind</b> wants to say
          something.
        </p>
      </div>
      <div class="director-overview content is-medium">
        <h5 class="has-text-left" id="filmmaker">FILM-MAKER</h5>
        <img src="./assets/filmmaker.png" class="tv-img" />
        <p class="has-text-left">
          Omkar Phatak is a 27-year-old filmmaker based out of Bombay. He
          started off as a producer in advertising and moved on to a non-fiction
          form of narrative later on as director and cinematographer. He wrote
          <b>'Savio Wants To Say Something'</b> in 2019 and has been chasing the
          right people to collaborate with and bring this film to <b>light</b>.
          He truly believes that <b>cinema</b> has the power to change lives and
          recommends watching 'Children of Men' to pretty much everyone he comes
          across.
        </p>
      </div>
      <div class="donate-overview content is-medium has-text-left">
        <h5 class="has-text-left">BUT WHY SHOULD I PAY?</h5>
        <p>Because we don’t have the money to pay</p>
        <p>Jokes apart...</p>
        <p>
          This campaign is a sincere attempt to raise <b>funds</b> that will be
          solely used to execute the short film's production. The specific areas
          that the money will be spent on are <b>location</b> fees (so we don't
          end up in prison), <b>art</b> setups (re-creating a certain aesthetic
          from the 60's & 70's era) overall <b>production</b> costs, technical
          requirements (so the film can look & sound the way it should) pre &
          post-production expenses, <b>festival</b> entries & other relevant
          expenses of the same nature.
        </p>
        <p>
          Our target as of now is to raise a minimum of 12 Lakh Rupees out of
          which we have managed to raise 3 Lakh so far. With a
          <b>kind</b> gesture from your end, this number would certainly be
          different.
        </p>
      </div>
      <div class="donate-btn-div">
        <button
          class="button donate-btn"
          v-on:click="onButtonClick()"
          id="donate"
        >
          HELP SAVIO MAKE HIS FILM
        </button>
      </div>
    </div>

    <footer class="footer">
      <div class="columns is-mobile is-align-items-center">
        <div class="column savio-gif">
          <img src="./assets/sofa-savio.gif" ref="gif" class="sofa-savio" />
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
      count: 0,
    };
  },
  mounted() {
    this.$nextTick(function () {
    
      document.addEventListener("DOMContentLoaded", () => {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(
          document.querySelectorAll(".navbar-burger"),
          0
        );

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
          // Add a click event on each of them
          $navbarBurgers.forEach((el) => {
            el.addEventListener("click", () => {
              // Get the target from the "data-target" attribute
              const target = el.dataset.target;
              const $target = document.getElementById(target);

              // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
              el.classList.toggle("is-active");
              $target.classList.toggle("is-active");
            });
          });
        }
      });
    });
  },
  components: { VueSlickCarousel },
  methods: {
    onButtonClick() {
      Instamojo.open("https://www.instamojo.com/@omkarp21");
    },
    scrollFunction() {
      this.count++;
      if (this.count % 90 === 0) {
        this.$refs.gif.src = this.img1;
      }
      if (this.count % 90 === 30) {
        this.$refs.gif.src = this.img2;
      }
      if (this.count % 90 === 60) {
        this.$refs.gif.src = this.img3;
      }
    },
  },
  created () {
    window.addEventListener('scroll', this.scrollFunction);
  },
  destroyed () {
    window.removeEventListener('scroll', this.scrollFunction);
  },
  computed: {
    img1: function() {
      return require("./assets/sequence1.png");
    },
    img2: function() {
      return require("./assets/sequence2.png");
    },
    img3: function() {
      return require("./assets/sequence3.png");
    },
    
  }
};
</script>

<style lang="scss">
$text-color: #2c2a25;
$lime-green: #7eb299;
$orange: #d65245;
$bg-color: #ececd1;

@font-face {
  font-family: "appareolight";
  src: url("assets/fonts/appareolight.otf");
}

html {
  scroll-behavior: smooth;
}

.navbar {
  background-color: $bg-color !important;
}

.navbar-menu {
  background-color: $bg-color !important;
}

.navbar-item {
  color: $orange !important;
}

.navbar-burger {
  background: url("assets/icons/menu.png") no-repeat center center transparent;
  background-size: 2rem;
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
  background-color: $bg-color !important;
}

.footer {
  background-color: $lime-green !important;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 16px;
  padding: 0;
  z-index: 1000;
}

.sofa-savio {
  /* padding-bottom: 0;
  max-height: 100px; */
  max-height: 100px;
  z-index: 1003;
  position: relative;
  bottom: 100px;
}

.overview {
  margin: 32px 0 32px 0;

  padding: 0 32px 0 32px;
}

.overview h5 {
  color: $orange;
}

.overview p {
  font-size: 0.7em;
}

.overview .carousel {
  max-width: 500px;
  max-height: 500px;
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

  padding: 16px 32px 0 32px;
}

.teaser-bts h5 {
  color: $bg-color;
}

#tv_container {
  // background: url("assets/cine_reel.png") no-repeat top left transparent;
  // width: 900px; /* Adjust TV image width */
  // height: 800px; /* Adjust TV image height */
  // position: relative;
  // margin: 0 auto;

  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
  max-width: 640px;
  max-height: 480px;
  margin: 0 auto;
}
#tv_container iframe {
  // position: absolute;
  // top: 115px; /* Adjust top position */
  // left: 105px; /* Adjust left position */

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  font-family: "Lato", sans-serif;
  width: 70%;
}
</style>
