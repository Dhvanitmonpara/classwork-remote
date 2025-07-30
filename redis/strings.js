import client from "./client.js";

async function main() {
  // await client.set("name:3", "John");
  await client.expire("name:3", 10)
  const result = await client.get("name:3");
  console.log("Result ->", result);
}

main()