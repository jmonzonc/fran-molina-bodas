export async function uploadFile(file) {
  const res = await fetch("/api/upload", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      filename: file.name,
      contentType: file.type,
      contentLength: file.size,
    }),
  });
  const { signedUrl, publicUrl } = await res.json();

  await fetch(signedUrl, {
    method: "PUT",
    body: file,
    headers: { "Content-Type": file.type },
  });

  return publicUrl;
}
