<template>
<b-row class="rowdata">
    <b-col class="col-md-12 col-title">
        <h1 class="meals-title">Canadian Food</h1>
    </b-col>
    <b-col class="col-md-3" v-for="(data, index) in datafood" :key="index">
        <b-card
            v-bind:img-src="data.strMealThumb"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <h4 class="food-title">{{ data.strMeal }}</h4>
        </b-card>
    </b-col>
</b-row>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datafood: []
    }
  },
  async created () {
    const BASEURI = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
    axios.get(BASEURI).then((result) => {
      this.datafood = result.data.meals
    })
  }
}
</script>
<style>
.rowdata {
    margin: 50px;
}
.col-title {
    margin-top: 50px;
}
.meals-title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 400;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
}
.food-title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 400;
    font-size: 20px;
    color: #35495e;
    letter-spacing: 1px;
}
</style>