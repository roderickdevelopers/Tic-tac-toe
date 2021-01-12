<template>
  <div class="reset_password_link">
    <div class="reset_password">
      <a href="url">Reset Password?</a>
    </div>
    <label>
      <h1>Reset Password?</h1>
      <p>Old Password</p>
      <input type="text" name="name" placeholder="Old Password" required>
      <p>New Password</p>
      <input type="text" name="name" placeholder="New Password" required>
      <p>Confirm New Password</p>
      <input type="text" name="name" placeholder="Confirm New Password" required>
    </label>
  </div>
  <div class="submit_button">
    <button type="submit">
      Login
    </button>
  </div>
  <div class="sign_out_button">
    <button type="submit">
      Sign Out
    </button>
  </div>
</template>

<style lang="scss" src="./styles.scss"></style>