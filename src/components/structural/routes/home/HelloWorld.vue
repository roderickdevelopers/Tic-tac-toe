<template>
  <div class="ttt_img">
    <img alt="Tic Tac Toe logo" src="@/assets/tictactoe.png">
  </div>
  <div class="ttt_container">
    <div class="lets_play">
      <p>Let's <span class="second_word">Play!</span></p>
    </div>
    <div class="login">
      <label>
        <h1>Login</h1>
        <p>User Name</p>
        <input type="text" name="name" placeholder="User Name" required>
        <div class="forgot_username">
          <a href="url">Forgot Username?</a>
        </div>
        <p>Password</p>
        <input type="text" name="name" placeholder="Password" required>
      </label>
    </div>
    <div class="forgot_password">
      <a href="url">Forgot Password?</a>
    </div>
    <div class="login_button">
      <button type="submit">
        Login
      </button>
    </div>
    <div class="sign_up">
      <label>
        <h1>Sign Up</h1>
        <p>User Name</p>
        <input type="text" name="name" placeholder="User Name" required>
      </label>
      <label>
        <p>Email</p>
        <input type="text" name="name" placeholder="Email" required>
      </label>
      <label>
        <p>Password</p>
        <input type="text" name="name" placeholder="Password" required>
      </label>
      <label>
        <p>Confirm Password</p>
        <input type="text" name="name" placeholder="Confirm Password" required>
      </label>
    </div>
    <div class="sign_up_button">
      <button type="submit">
        Sign Up
      </button>
    </div>
    <div class="forgot_username_link">
      <label>
        <h1>Forgot User Name?</h1>
        <p>Email</p>
        <input type="text" name="name" placeholder="Email" required>
        <p>Password</p>
        <input type="text" name="name" placeholder="Password" required>
      </label>
    </div>
    <div class="submit_button">
      <button type="submit">
        Login
      </button>
    </div>
    <div class="forgot_password_link">
      <label>
        <h1>Forgot Password?</h1>
        <p>User Name</p>
        <input type="text" name="name" placeholder="User Name" required>
        <p>Email</p>
        <input type="text" name="name" placeholder="Email" required>
      </label>
    </div>
    <div class="submit_button">
      <button type="submit">
        Login
      </button>
    </div>
    <div class="reset_password_link">
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
  </div>
</template>

<style lang="scss" src="./styles.scss"></style>