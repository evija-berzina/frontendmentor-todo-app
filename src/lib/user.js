export function getUserId() {
  let userId = localStorage.getItem("userId");

  console.log(userId)
  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem("userId", userId);
  }

  return userId;
}