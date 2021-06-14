<script>
  export let text, link;
</script>

<a href={link}>{text}</a>

<style>
  a {
    text-decoration: none;
    display: block;
    background: #4ebcd4;
    color: #f4f4f4;
    border: none;
    border-radius: 20px;
    width: fit-content;
    padding: 1em 2em;
    font-size: 1.2em;
  }
</style>
