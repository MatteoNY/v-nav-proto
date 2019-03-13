<template>
  <section>
    <div class="carousel-view">
      <div class="carousel-view__controls">
        <button class='carousel-controls__button carousel-controls__button--left-mobile' @click="previous()">&#60;</button>
        <button v-for="(navItem, index) in slides" class='slide' :key="navItem.id" :disabled="index === 3" :class="{active: index === 3 }" @click.prevent="submitToServer(navItem, '=')">
          <div>
            <ul>
              <li>
                {{navItem.dateDisplayDay }}
              </li>
              <li>
                {{navItem.dateDisplayDate}}
              </li>
              <li>
                ${{navItem.price.amount}}
              </li>
            </ul>
          </div>
        </button>
        <button class='carousel-controls__button carousel-controls__button--right-mobile' @click="next()">&#62;</button>
      </div>
    </div>
    <h3>Submit to Server {{submitData}}</h3>
    <p><strong>Notes:</strong></p> 
      <p>This component prototype was built using mock data for integration into the main project.</p>
    <p>This is a smart component for web and mobile and uses flexbox to manage the responsiveness.</p>
    <p>This component was dropped from the main project for simplicity purposes. 
      Valuable insights were learned and expanded upon before the decision, for example, using slice to manage dynamic array elements in the main project. </p>
     
    
  </section>
</template>

<script>
export default {
  data() {
    return {
      submitData: null,
      slides: [
        {
          id: 1,
          date: "2018-09-19",
          dateDisplayDay: "Wed",
          dateDisplayDate: "19-Sep",
          price: {
            amount: "282.65"
          }
        },
        {
          id: 2,
          date: "2018-09-20",
          dateDisplayDay: "Thu",
          dateDisplayDate: "20-Sep",
          price: {
            amount: "300.85"
          }
        },
        {
          id: 3,
          date: "2018-09-21",
          dateDisplayDay: "Fri",
          dateDisplayDate: "21-Sep",
          price: {
            amount: "300.85"
          }
        },
        {
          id: 4,
          date: "2018-09-22",
          dateDisplayDay: "Sat",
          dateDisplayDate: "22-Sep",
          price: {
            amount: "296.85"
          }
        },
        {
          id: 5,
          date: "2018-09-23",
          dateDisplayDay: "Sun",
          dateDisplayDate: "23-Sep",
          price: {
            amount: "300.85"
          }
        },
        {
          id: 6,
          date: "2018-09-24",
          dateDisplayDay: "Mon",
          dateDisplayDate: "24-Sep",
          price: {
            amount: "293.15"
          }
        },
        {
          id: 7,
          date: "2018-09-25",
          dateDisplayDay: "Tue",
          dateDisplayDate: "25-Sep",
          price: {
            amount: "261.65"
          }
        }
      ]
    };
  },
  computed: {
    isMobileDevice() {
      const isMobile =
        "ontouchstart" in window || navigator.msMaxTouchPoints ? true : false;
      // console.log("is mobile?", isMobile);
      return isMobile;
    }
  },
  methods: {
    next() {
      if (this.isMobileDevice) {
        this.submitToServer(this.slides[4], ">");
      } else {
        this.submitToServer(this.slides[6], ">");
      }
    },
    previous() {
      if (this.isMobileDevice) {
        this.submitToServer(this.slides[2], "<");
      } else {
        this.submitToServer(this.slides[0], "<");
      }
    },
     submitToServer(val, msg) {
      this.submitData =
        msg +
        " " +
        val.date
      
    },
    debug_submitToServer(val, msg) {
      this.submitData =
        msg +
        " " +
        val.dateDisplayDay +
        " " +
        val.dateDisplayDate
         +
        " id " +
        val.id;
    }
  }
};
</script>

<style lang="scss">

.carousel-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.carousel-view__controls {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

ul {
  list-style: none;
  text-align: center;
  padding: 0;
  margin: 0;
}

.carousel-controls__button {
  height: $slide-arrow-btn-height;
  color: $brand-color-dark-green;
  font-size: 1rem;
  font-weight: bolder;
}

.carousel {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.slide {
  border: 0.1rem solid $default-gray-lite-color-dim;
  flex: 0 0 auto;
  height: $slide-height;
  width: $slide-width;
  margin: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  color: $brand-color-dark-green;
  background-color: $brand-color-lite-green;
}

.slide.active {
  background-color: white;
  border-bottom: none;
  border-top: 6px solid green;
  margin-bottom: 4px;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  .carousel-view {
    flex-direction: row;
  }

  .carousel-controls__button.carousel-controls__button--left-mobile {
    position: absolute;
    left: 3px;
  }

  .carousel-controls__button.carousel-controls__button--right-mobile {
    position: absolute;
    right: 3px;
  }

  .slide {
    flex: $slide-flex-grow-mobile;
  }
}
</style>
