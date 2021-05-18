export function post(url, data = null, jwt = null) {
  return fetch(url, {
    method: "POST",
    headers: (function () {
      if (jwt) {
        return {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        };
      } else {
        return {
          "Content-Type": "application/json",
        };
      }
    })(),
    body: JSON.stringify(data),
  });
}

export function get(url, data = null, jwt = null) {
  return fetch(url, {
    method: "GET",
    headers: (function () {
      if (jwt) {
        return {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        };
      } else {
        return {
          "Content-Type": "application/json",
        };
      }
    })(),
  });
}
