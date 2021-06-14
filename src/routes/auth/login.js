const handleSignin = async () => {
  let {
    user,
    session: supaSession,
    error,
  } = await supabase.auth.signIn({
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
