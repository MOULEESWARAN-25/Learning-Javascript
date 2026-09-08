const apiUrl = "https://jsonplaceholder.typicode.com/posts";

async function sendRequest(title, url, options = {}) {
  console.log(`\n--- ${title} ---`);
  console.log(`${options.method || "GET"} ${url}`);

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("Request failed:", error.message);
  }
}

async function main() {
  // GET: read all posts.
  await sendRequest("GET - all posts", apiUrl);

  // GET with a path parameter: read one post.
  await sendRequest("GET - one post", `${apiUrl}/1`);

  // GET with query parameters.
  const query = new URLSearchParams({ userId: "1" });
  await sendRequest("GET - query parameters", `${apiUrl}?${query}`);

  // POST: create a new post.
  await sendRequest("POST - create", apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      title: "Learning fetch",
      body: "This is a new post",
      userId: 1,
    }),
  });

  // PUT: replace the complete resource.
  await sendRequest("PUT - replace", `${apiUrl}/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 1,
      title: "Replaced title",
      body: "Replaced body",
      userId: 1,
    }),
  });

  // PATCH: update only selected fields.
  await sendRequest("PATCH - update part", `${apiUrl}/1`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Updated title only" }),
  });

  // DELETE: remove a resource.
  await sendRequest("DELETE - remove", `${apiUrl}/1`, {
    method: "DELETE",
  });

  // Run independent requests at the same time.
  console.log("\n--- Promise.all - parallel GET requests ---");
  const responses = await Promise.all([
    fetch(`${apiUrl}/1`),
    fetch(`${apiUrl}/2`),
    fetch(`${apiUrl}/3`),
  ]);
  const posts = await Promise.all(responses.map((response) => response.json()));
  console.log(posts);
}

main();
