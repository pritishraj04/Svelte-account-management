<script>
  import { session } from "$app/stores";
  import ATag from "$lib/Buttons/ATag.svelte";
  import supabase from "$lib/db";

  const user = supabase.auth.user();
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<h1>Profile</h1>
{#if $session === null}
  <h6>Please <a href="/signin">Sign In</a> to view your profile.</h6>
{:else}
  <h3>Hello,</h3>
  {#if user != null}
    {#if user.user_metadata.name}
      <h3>{user.user_metadata.name}</h3>
    {:else}
      {user.email}
    {/if}
    <table>
      <thead>User data</thead>
      {#if user.user_metadata != null}
        {#if user.user_metadata.name != null}
          <tr><th>Full Name:</th> <td>{user.user_metadata.name}</td></tr>
        {:else}
          <tr
            ><th>Full Name:</th>
            <td class="no-data">No User Data Found.</td></tr
          >
        {/if}
        {#if user.user_metadata.dob != null}
          <tr><th>Date of Birth:</th> <td>{user.user_metadata.dob}</td></tr>
        {:else}
          <tr
            ><th>Date of Birth:</th>
            <td class="no-data">No User Data Found.</td></tr
          >
        {/if}
        {#if user.user_metadata.mob != null}
          <tr><th>Mobile Number:</th> <td>{user.user_metadata.mob}</td></tr>
        {:else}
          <tr
            ><th>Mobile Number:</th>
            <td class="no-data">No User Data Found.</td></tr
          >
        {/if}
      {/if}

      <tr>Last Updated: {user.updated_at.slice(0, 10)}</tr>
    </table>
    <ATag link="/profile/update" text="Update Profile" />
    <!-- <pre>
        {JSON.stringify(user, null, 2)}
      </pre> -->
  {:else}
    Loading...
  {/if}
{/if}

<style lang="scss">
  .no-data {
    background: orangered;
    padding: 0.2em;
    border-radius: 2px;
  }
  table {
    padding: 0.5em;
    width: 100%;
    row-gap: 10px;
    thead {
      padding: 0.5em;
      text-align: center;
      font-weight: bold;
      font-size: 1.3em;
      border: 2px solid orangered;
    }
    tr {
      font-size: 3em;
      margin: 0.5em;
      border: 1px solid orangered;
      th {
        font-size: 0.3em;
        margin: 0.5em;

        border: 1px solid orangered;
      }
      td {
        font-size: 0.3em;
        margin: 0.5em;
        padding: 0.8em 1em;
        border: 1px solid orangered;
      }
      &:last-child {
        font-size: 0.6em;
      }
    }
  }
</style>
