export const fetchAllScenes = () => {
  return $.ajax({
    method: "GET",
    url: "/api/"
  })
}
