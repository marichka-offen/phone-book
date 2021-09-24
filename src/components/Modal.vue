<template>
  <div>
    <button id="show-modal" @click="showModal = true"></button>
    <transition name="modal">
      <div class="modal">
        <div class="modal-wrapper">
          <div class="modal-container">
            <button class="modal-close-btn" @click="$emit('close')">
              <i class="far fa-times-circle"></i>
            </button>

            <div class="modal-header">
              <slot name="header"> Random Title </slot>
            </div>

            <div class="modal-body">
              <slot name="body"> </slot>
            </div>

            <div class="modal-footer">
              <slot name="footer"> </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// variables
$primary-color: #00bf72;
$primary-dark: #008793;
$color-grey-light-4: #ccc;

#show-modal {
  display: none;
}
.modal {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
  display: table;
  transition: all 0.3s ease;
  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &-container {
    width: 400px;
    margin: 0 auto;
    padding: 10px 25px 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  &-header {
    display: block;
    font-size: 20px;
    text-align: center;
    text-transform: uppercase;
    color: $primary-color;
  }
  &-body {
    margin: 20px 0;
    max-height: 500px;
    overflow-y: auto;
    padding: 10px;
  }

  &-close-btn {
    float: right;
    margin-top: 5px;
    color: $color-grey-light-4;
    transition: 0.1s;

    & > * {
      font-size: 20px;
    }

    &:hover {
      color: $primary-color;
    }

    &:focus {
      color: $primary-dark;
    }
  }
}
// modal transition settings
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
