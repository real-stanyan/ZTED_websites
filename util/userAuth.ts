export default function userAuth() {
  const user = localStorage.getItem("userInfo");
  if (user) {
    const user_ = JSON.parse(user);
    const loginTimeStamp = Date.parse(user_.loginTime);
    const nowTimeStamp = Date.now();
    const timeDiff = nowTimeStamp - loginTimeStamp;
    if (timeDiff > 86400000) {
      console.log("user expired");
      localStorage.removeItem("userInfo");
      return false;
    } else {
      console.log("user authenticated");
      return user_;
    }
  } else {
    return false;
  }
}
