<template>
  <form action="#" class="search">
    <input type="text" placeholder="Search contacts.." />

    <i class="fas fa-search"></i>
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// variables
$color-grey-light-2: #f4f2f2;
$color-grey-light-3: #f0eeee;
$color-grey-light-4: #ccc;

.search {
  flex: 0 0 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  & input {
    font-size: 15px;
    color: inherit;
    background-color: $color-grey-light-2;
    border: none;
    padding: 10px 20px;
    border-radius: 100px;
    width: 90%;
    transition: all 0.2s;
    margin-right: -30px;

    &:focus {
      outline: none;
      width: 100%;
      background-color: $color-grey-light-3;
    }

    &::-webkit-input-placeholder {
      font-weight: 100;

      color: $color-grey-light-4;
      margin-bottom: 20px;
    }
  }

  & input:focus {
    background-color: $color-grey-light-3;
  }

  & i {
    font-size: 20px;
  }
}
</style>
