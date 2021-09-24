<template>
  <form>
    <div class="mb-3">
      <label for="contactName" class="form-label">Name</label>
      <input type="text" class="form-control" id="contactName" />
    </div>
    <div class="mb-3">
      <label for="contactEmail" class="form-label">Email</label>
      <input type="email" class="form-control" id="contactEmail" />
    </div>
    <div class="mb-3">
      <label for="contactAddress" class="form-label">Address</label>
      <input type="text" class="form-control" id="contactAddress" />
    </div>
    <div class="mb-3">
      <label for="contactCity" class="form-label">City</label>
      <input type="text" class="form-control" id="contactCity" />
    </div>
    <div class="mb-3">
      <label for="contactPhone" class="form-label">Phone</label>
      <input type="tel" class="form-control" id="contactPhone" />
    </div>
    <div class="mb-3">
      <label for="contactCategory" class="form-label">Category</label>
      <select class="form-select mb-3" id="contactCategory">
        <option selected disabled>Select category..</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="contactAvatar" class="form-label">Avatar URL</label>
      <input type="url" class="form-control" id="contactAvatar" />
    </div>

    <button type="submit" class="btn submit-button">Add Contact</button>
  </form>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
// variables
$color-grey-light: #faf9f9;
$primary-color: #00bf72;
$primary-dark: #008793;

form {
  //background-color: $color-grey-light;
  padding: 15px;
}

label {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 12px;
  color: $primary-color;
  margin: 0;
}

.submit-button {
  color: $color-grey-light;
  text-transform: uppercase;
  width: 100%;
  background-color: $primary-color;

  &:focus {
    background-color: $primary-dark;
  }
}
</style>
