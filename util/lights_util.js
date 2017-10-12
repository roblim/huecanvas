export const fetchLights = () => {
    return $.ajax({
    method: "GET",
    url: "http://10.1.10.67/api/XRdYkx2QsmVe-8AX5XO0NwuDKjK1JfJrq4fYLBAW/lights"
  })
}
