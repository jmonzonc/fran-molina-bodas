const handleLogin = async () => {
  const res = await fetch("/api/auth", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  
  if (res.ok) {
    setAuthenticated(true);
  } else {
    toast.error("Contraseña incorrecta");
  }
};
