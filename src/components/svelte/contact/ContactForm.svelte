<script lang="ts">
  let responseMessage: string;

  async function submit(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response = await fetch("/api/contactForm", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    responseMessage = data.message;
  }
</script>

<div class="container">
  <h2>Contact us</h2>

  <form on:submit={submit}>
    <label>
      Name
      <input type="text" id="name" name="name" required />
    </label>
    <label>
      Email
      <input type="email" id="email" name="email" required />
    </label>
    <label>
      Message
      <textarea id="message" name="message" required />
    </label>
    <button>Send</button>
    {#if responseMessage}
      <p>{responseMessage}</p>
    {/if}
  </form>
</div>

<style>
  .container {
    width: 100%;
    padding: 2em 0;
  }
  h2 {
    font-weight: 500;
    font-size: 2em;
  }
  input,
  textarea {
    width: 100%;
    padding: 0.75em 1em;
    border-radius: 0.25em;
    border: 1px solid #999;
  }
  .form-group {
    margin-bottom: 1.5em;
  }
  label {
    display: block;
    padding-bottom: 0.5em;
  }
  .success {
    color: lightgreen;
  }
  .error {
    border: 1px solid red;
  }
  .red {
    color: red;
  }
</style>
