<template>
    <div>
        <h3 class="title">{{ strtitle }}</h3>
    </div>
</template>
<script>
export default {
  name: 'Title',
  props: {
    strtitle: String
  }
}
</script>
<style scoped>
.title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 400;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
}
</style>