<script>
  export let heading, footerText, footerLink, footerLinkText;
  export let handleAction;
</script>

<div class="card">
  <h3>{heading}</h3>
  <form on:submit|preventDefault={handleAction} method="post">
    <slot />
  </form>
  <div class="footerText">
    {#if footerText || footerLinkText}
      <p>{footerText}</p>
      <a href={footerLink}>{footerLinkText}</a>
    {/if}
  </div>
</div>

<style lang="scss">
  .card {
    background: rgba($color: #f1e4d1, $alpha: 0.4);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 2em 1.3em;
    margin-top: 4em;
  }
  h3 {
    font-size: 2em;
    text-shadow: 2px 2px #b3b3b3;
  }
  .footerText {
    width: 100%;
    padding: 2em 1em;
    p {
      font-size: 0.8em;
      display: inline;
    }
    a {
      font-size: 0.8em;
    }
  }
  @media (min-width: 800px) {
    .card {
      min-width: 25em;
      float: right;
    }
  }
</style>
