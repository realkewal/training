
// fetch('https://api.unsplash.com/photos/?client_id=ec1a19295a1d34340fb09265a8526eda2f0cdbc998c2bd432875250017f02f21')
//   .then(response => {
//     if (response.ok) {
//       return Promise.resolve(response);
//     } else {
//       return Promise.reject(new Error('Failed to load'));
//     }
//   })
//   .then(response => response.json()) // parse response as JSON
//   .then(data => {
//     // console.log(data);
//     // console.log(data[0].urls.small);
//     data.forEach(res => {
//       // console.log(res.urls.small)
//     });
//   })
//   .catch(function (error) {
//     // console.log(`Error: ${error.message}`);
//   })


// fetch('get-courses.php')
//   .then(response => {
//     console.log(response.body)
//   })

let technology = [];
let marketing = [];
let business = [];
let science = [];
let other = [];

fetch('get-courses.php', {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})
  .then(response => {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error('Failed to load'));
    }
  })
  .then(response => response.json()) // parse response as JSON
  .then(data => {
    data.forEach(res => {
      if (res.category == 'technology') {
        technology.push(res);
      }
      if (res.category == 'marketing') {
        marketing.push(res);
      }
      if (res.category == 'business') {
        business.push(res);
      }
      if (res.category == 'science') {
        science.push(res);
      }
      if (res.category == 'other') {
        other.push(res);
      }
    });
  })
  .catch(function (error) {
    console.log(`Error: ${error.message}`);
  })

function updateHTML() {
  let techHtml = "";
  let marketHtml = "";
  let businessHtml = "";
  let scienceHtml = "";
  let otherHtml = "";

  let techDiv = document.getElementById('technology');
  let marketDiv = document.getElementById('marketing');
  let businessDiv = document.getElementById('business');
  let scienceDiv = document.getElementById('science');
  let otherDiv = document.getElementById('other');


  technology.forEach(function (item) {
    techHtml += '<div class="card" >';
    techHtml += '<img class="card-img-top" src="' + item.image_url + '" alt="Card image cap">';
    techHtml += '<div class="card-body">';
    techHtml += '<h5 class="card-title">' + item.name + '</h5>';
    techHtml += '<p class="card-text">' + item.description + '</p>';
    techHtml += '</div>';
    techHtml += '<div class="card-footer d-flex justify-content-between">';
    techHtml += '<span class="course-level">' + item.level + '</span>';
    techHtml += '<span class="course-type">' + item.type + '</span>';
    techHtml += '</div>';
    techHtml += '</div>';
  })

  techDiv.innerHTML = techHtml;

  marketing.forEach(function (item) {
    marketHtml += '<div class="card" >';
    marketHtml += '<img class="card-img-top" src="' + item.image_url + '" alt="Card image cap">';
    marketHtml += '<div class="card-body">';
    marketHtml += '<h5 class="card-title">' + item.name + '</h5>';
    marketHtml += '<p class="card-text">' + item.description + '</p>';
    marketHtml += '</div>';
    marketHtml += '<div class="card-footer d-flex justify-content-between">';
    marketHtml += '<span class="course-level">' + item.level + '</span>';
    marketHtml += '<span class="course-type">' + item.type + '</span>';
    marketHtml += '</div>';
    marketHtml += '</div>';
  })

  marketDiv.innerHTML = marketHtml;

  business.forEach(function (item) {
    businessHtml += '<div class="card" >';
    businessHtml += '<img class="card-img-top" src="' + item.image_url + '" alt="Card image cap">';
    businessHtml += '<div class="card-body">';
    businessHtml += '<h5 class="card-title">' + item.name + '</h5>';
    businessHtml += '<p class="card-text">' + item.description + '</p>';
    businessHtml += '</div>';
    businessHtml += '<div class="card-footer d-flex justify-content-between">';
    businessHtml += '<span class="course-level">' + item.level + '</span>';
    businessHtml += '<span class="course-type">' + item.type + '</span>';
    businessHtml += '</div>';
    businessHtml += '</div>';
  })

  businessDiv.innerHTML = businessHtml;

  science.forEach(function (item) {
    scienceHtml += '<div class="card" >';
    scienceHtml += '<img class="card-img-top" src="' + item.image_url + '" alt="Card image cap">';
    scienceHtml += '<div class="card-body">';
    scienceHtml += '<h5 class="card-title">' + item.name + '</h5>';
    scienceHtml += '<p class="card-text">' + item.description + '</p>';
    scienceHtml += '</div>';
    scienceHtml += '<div class="card-footer d-flex justify-content-between">';
    scienceHtml += '<span class="course-level">' + item.level + '</span>';
    scienceHtml += '<span class="course-type">' + item.type + '</span>';
    scienceHtml += '</div>';
    scienceHtml += '</div>';
  })

  scienceDiv.innerHTML = scienceHtml;

  other.forEach(function (item) {
    otherHtml += '<div class="card" >';
    otherHtml += '<img class="card-img-top" src="' + item.image_url + '" alt="Card image cap">';
    otherHtml += '<div class="card-body">';
    otherHtml += '<h5 class="card-title">' + item.name + '</h5>';
    otherHtml += '<p class="card-text">' + item.description + '</p>';
    otherHtml += '</div>';
    otherHtml += '<div class="card-footer d-flex justify-content-between">';
    otherHtml += '<span class="course-level">' + item.level + '</span>';
    otherHtml += '<span class="course-type">' + item.type + '</span>';
    otherHtml += '</div>';
    otherHtml += '</div>';
  })

  otherDiv.innerHTML = otherHtml;
}

window.onload = updateHTML;
  