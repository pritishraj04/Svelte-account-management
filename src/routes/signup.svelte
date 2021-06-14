<script>
  import Primary from "$lib/Buttons/Primary.svelte";
  import FormCard from "$lib/FormCard/FormCard.svelte";
  import Icon from "$lib/IconsSvgs/Icon.svelte";
  import TextField from "$lib/Inputs/TextField.svelte";
  import supabase from "$lib/db";
  import { session } from "$app/stores";
  import { goto } from "$app/navigation";

  let userEmail, userPassword;

  const handleSignup = async () => {
    let {
      user,
      session: supaSession,
      error,
    } = await supabase.auth.signUp({
      email: userEmail,
      password: userPassword,
    });
    $session = supaSession;
    goto("/");
    console.log(user, session, error);
  };
</script>

<svelte:head>
  <title>Sign Up</title>
</svelte:head>

{#if $session === null}
  <section>
    <div class="bannerimg">
      <Icon class="signupBanner" name="signup" width="400px" height="400px" />
    </div>
    <FormCard
      heading="Sign Up"
      footerText="Already a Member?"
      footerLinkText="Sign In"
      footerLink="/signin"
      handleAction={handleSignup}
    >
      <TextField
        required
        bind:value={userEmail}
        type="email"
        id="email"
        labelText="Email"
      />
      <TextField
        required
        bind:value={userPassword}
        type="password"
        id="password"
        labelText="Password"
      />
      <Primary type="submit" text="Sign Up" />
    </FormCard>
  </section>
{:else}
  <h6>View <a href="/profile">profile</a></h6>
{/if}

<style lang="scss">
  section::before {
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;
    content: "";
    background: #75d0d6;
    width: 100%;
    height: 45em;
    clip-path: ellipse(90% 60% at 18% 24%);
    z-index: -3;
  }
  .bannerimg {
    float: left;
    position: absolute;
    top: 25%;
    left: 7%;
    @media (max-width: 970px) {
      display: none;
    }
  }
</style>
