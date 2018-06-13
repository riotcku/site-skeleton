window.onload = function() {
  console.log('Hello, this logs after page is fully loaded.');
}

function AJAX(method, url, type) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    if (type) {
      xhr.responseType = type;
    }

    xhr.open(method, url);

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(this.response);
      } else {
        reject(this.status);
      }
    };

    xhr.onerror = function () {
      reject(this.status);
    };

    xhr.send();
  });
}