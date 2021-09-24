<template>
  <div id="contact">
    <div class="d-flex">
      <img class="avatar" :src="contact.avatar" />
      <div>
        <p class="name">{{ contact.name }}</p>
        <p class="address">{{ contact.street }}, {{ contact.city }}</p>
      </div>
    </div>
    <div class="contacts">
      <p>{{ contact.email }}</p>
      <p>{{ contact.phone }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
// variables
$color-grey-light-2: #f4f2f2;
$color-grey-dark: #999;

#contact {
  padding: 10px;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $color-grey-light-2;

  & .avatar {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 15px;
  }

  & .name {
    color: #004d7a;
    font-size: 15px;
    margin-top: 10px;
    text-transform: uppercase;
    font-weight: 600;
  }

  & .address {
    font-size: 12px;
    color: $color-grey-dark;
  }

  & .contacts {
    text-align: right;
    font-size: 12px;
    margin-top: 10px;
    color: $color-grey-dark;
  }
}
</style>
