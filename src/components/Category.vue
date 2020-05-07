<template>
<b-row class="rowdata">
    <b-col class="col-md-12 col-title">
        <h3 class="category-title">Categories</h3>
    </b-col>
    <b-col class="col-md-2" v-for="(data, index) in datacategory" :key="index">
        <b-card
            v-bind:img-src="data.strCategoryThumb"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <h6>{{ data.strCategory }}</h6>
        </b-card>
    </b-col>
</b-row>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      datacategory: []
    }
  },
  async created () {
    const BASEURI = 'https://www.themealdb.com/api/json/v1/1/categories.php'
    axios.get(BASEURI).then((result) => {
      this.datacategory = result.data.categories
    })
  }
}
</script>
<style>
.rowdata {
    margin: 50px;
}
.col-title {
    margin-top: 100px;
    margin-bottom: 30px;
}
.category-title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 400;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
}
</style>