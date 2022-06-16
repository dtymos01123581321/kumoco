class Http {
  get = (path) => fetch(path, {
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 400) {
          return res;
        }
        throw res;
      })
      .then((res) => {
        if (res.clone().json()) {
          return res.clone().json();
        }
        return res;
      });
}

export default new Http();
