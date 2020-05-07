<template>
    <div>
        <b-link :href="linkref" class="link-ref">{{ linkref }}</b-link>
    </div>
</template>
<script>
export default {
  name: 'Links',
  props: {
    linkref: String,
  },
};
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
.link-ref {
    text-decoration: none;
    color: navy;
}
</style>