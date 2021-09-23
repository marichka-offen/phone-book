<template>
  <div id="header">
    <slot name="header"> </slot>
    <search-bar />
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"

export default {
  components: { SearchBar }
}
</script>

<style lang="scss" scoped>
// variables
$color-grey-light: #faf9f9;
$primary-color: #00bf72;
$primary-dark: #008793;

#header {
  margin: 20px;
  color: $primary-color;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin: 0;
    font-size: 24px;
    font-weight: 300;
    letter-spacing: 1px;
  }
}
</style>
