<script>
  import ATag from "$lib/Buttons/ATag.svelte";
  import Primary from "$lib/Buttons/Primary.svelte";
  import FormCard from "$lib/FormCard/FormCard.svelte";
  import TextField from "$lib/Inputs/TextField.svelte";
  import supabase from "$lib/db";
  import { goto } from "$app/navigation";
  let username, dob, mobno;

  export let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;

  const handleUpdate = async () => {
    const { user, error } = await supabase.auth.update({
      data: { name: username, dob: dob, mob: mobno },
    });
    alert("Profile has successfully updated.");
    goto("/profile");
  };
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<h1>Update Profile</h1>
<ATag link="/profile" text="Profile" />
<FormCard handleAction={handleUpdate} heading="Update Your Profile">
  <TextField
    type="text"
    labelText="Name"
    id="fullName"
    title="Enter your full name."
    bind:value={username}
  />
  <TextField
    type="date"
    labelText="Date of Birth"
    id="dob"
    max={today}
    title="Enter valid date of birth."
    bind:value={dob}
  />
  <TextField
    type="number"
    labelText="Mobile Number"
    id="mobNo"
    max="9999999999"
    min="1000000000"
    title="Enter 10 digit mobile number."
    bind:value={mobno}
  />
  <Primary text="Update" />
</FormCard>
