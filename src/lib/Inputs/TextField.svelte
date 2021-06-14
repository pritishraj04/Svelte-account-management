<script>
  export let labelText, id, type, value;
  function typeAction(node) {
    node.type = type;
  }
</script>

<div>
  <input {id} {...$$restProps} bind:value use:typeAction />
  <label for={id}>{labelText}</label>
</div>

<style lang="scss">
  div {
    position: relative;
  }

  label {
    position: absolute;
    margin: -10.4em 0.5em;
    font-size: 0.7em;
    font-weight: bold;
    background: rgb(187, 187, 187);
    padding: 0.7em 1em;
    border-top-right-radius: 1em;
    border-top-left-radius: 1em;
    z-index: -1;
  }
  input {
    display: block;
    width: -webkit-fill-available;
    width: -moz-available;
    padding: 1em;
    padding-left: 2px;
    border: none;
    font-size: 1.2em;
    margin: 1.5em auto;
    border-radius: 10px;
    border: 1.6px solid rgb(187, 187, 187);
  }
  input:focus {
    outline: none;
  }
  input:focus + label {
    background: rgb(100, 100, 100);
    color: rgb(238, 238, 238);
  }
  input:valid + label {
    background: rgb(72, 187, 68);
    color: rgb(238, 238, 238);
  }
  input:valid {
    border: 1.6px solid rgb(72, 187, 68);
  }
  input[type="date"] {
    margin: 2em auto;
  }
</style>
