<script>
  export let text;
</script>

<button {...$$restProps}>
  {text}
</button>

<style>
  button {
    display: block;
    background: #4ebcd4;
    color: #f4f4f4;
    border: none;
    border-radius: 20px;
    width: 100%;
    padding: 1em 2em;
    font-size: 1.2em;
    margin: 0 auto;
  }
</style>
