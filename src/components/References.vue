<template>
<b-row class="rowdata">
    <b-col class="col-md-12 col-title">
        <h1 class="reference-title">References</h1>
        <b-link href="https://scotch.io/tutorials/build-a-progressive-web-application-with-nuxtjs" class="link-ref">
            https://scotch.io/tutorials/build-a-progressive-web-application-with-nuxtjs
        </b-link>
        <br/>
        <b-link href="https://www.themealdb.com/api.php" class="link-ref">https://www.themealdb.com/api.php</b-link>
    </b-col>
</b-row>
</template>
<script>
export default {
}
</script>
<style>
.rowdata {
    margin: 50px;
}
.col-title {
    margin-bottom: 30px;
}
.reference-title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 400;
    font-size: 30px;
    color: #35495e;
    letter-spacing: 1px;
}
.link-ref {
    text-decoration: none;
    color: navy;
}
</style>