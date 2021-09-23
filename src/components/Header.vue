<template>
  <div id="header">
    <slot name="header"> </slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// variables
$color-grey-light: #faf9f9;
$primary-color: #00bf72;
$primary-dark: #008793;

#header {
  margin: 21px;
  color: $primary-color;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * {
    margin: 0;
    font-size: 28px;
    font-weight: 300;
    letter-spacing: 1px;
  }
}
</style>
