export const followUser = (followee_id) => {
  return $.ajax({
    method: "POST",
    url: "/api/follows",
    data: {followee_id}
  })
}

export const unfollowUser = (followee_id) => {
  return $.ajax({
    method: "DELETE",
    url: "/api/follows"
  })
}
