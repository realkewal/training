'use strict';

fetch('https://api.unsplash.com/photos/?client_id=ec1a19295a1d34340fb09265a8526eda2f0cdbc998c2bd432875250017f02f21').then(function (response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error('Failed to load'));
  }
}).then(function (response) {
  return response.json();
}) // parse response as JSON
.then(function (data) {
  console.log(data);
  // console.log(data[0].urls.small);
  data.forEach(function (res) {
    console.log(res.urls.small);
  });
}).catch(function (error) {
  console.log('Error: ' + error.message);
});