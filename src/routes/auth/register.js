const handleSignup = async () => {
  let {
    user,
    session: supaSession,
    error,
  } = await supabase.auth.signUp({
    email: userEmail,
    password: userPassword,
  });
  if (res.ok) {
    $session = supaSession;
    dispatch("success");
    console.log(user, session);
  } else {
    console.log(error);
  }
};
