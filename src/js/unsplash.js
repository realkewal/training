
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

// const _ = require('lodash');
// console.log(_('Hello world').truncate(5) );


// function scrollDiv() {
//   console.log('scroll');
// }

// scrollDiv();

const scrollDiv = (direction, id) => {
  let techDiv = document.getElementById(id);
  if (direction == 'right') {
    return techDiv.scrollBy({ left: 200, top:0, behavior:'smooth'}) 
  } else if (direction == 'left') {
    return techDiv.scrollBy({ left: -200, top: 0, behavior: 'smooth' });
  }
}

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

let techDiv = document.getElementById('technology');
let marketDiv = document.getElementById('marketing');
let businessDiv = document.getElementById('business');
let scienceDiv = document.getElementById('science');
let otherDiv = document.getElementById('other');


function updateHTML() {
  let techHtml = "";
  let marketHtml = "";
  let businessHtml = "";
  let scienceHtml = "";
  let otherHtml = "";

  technology.forEach(function (item) {
    techHtml += '<div class="card" >';
    techHtml += '<img class="card-img-top" src="' + item.image_url + '" alt="Card image cap">';
    techHtml += '<div class="card-body">';
    techHtml += '<h5 class="card-title">' + item.name + '</h5>';
    techHtml += '<p class="card-text">' + item.description.substring(0, 70) + '...</p>';
    techHtml += '</div>';
    techHtml += '<div class="card-footer d-flex justify-content-between">';
    techHtml += '<span class="course-level">' + item.level + '</span>';
    techHtml += '<span class="course-type">' + item.type + '</span>';
    techHtml += '</div>';
    techHtml += '</div>';
  })

  let techArrows = `<div class="left-arrow" onclick="scrollDiv('left', 'technology')"> <i class="material-icons">arrow_back</i> </div> ${techHtml} <div class="right-arrow" onclick="scrollDiv('right', 'technology')"> <i class="material-icons">arrow_forward</i> </div>`;
  techDiv.innerHTML = techArrows;

  marketing.forEach(function (item) {
    marketHtml += '<div class="card" >';
    marketHtml += '<img class="card-img-top" src="' + item.image_url + '" alt="Card image cap">';
    marketHtml += '<div class="card-body">';
    marketHtml += '<h5 class="card-title">' + item.name + '</h5>';
    marketHtml += '<p class="card-text">' + item.description.substring(0, 70) + '...</p>';
    marketHtml += '</div>';
    marketHtml += '<div class="card-footer d-flex justify-content-between">';
    marketHtml += '<span class="course-level">' + item.level + '</span>';
    marketHtml += '<span class="course-type">' + item.type + '</span>';
    marketHtml += '</div>';
    marketHtml += '</div>';
  })

  let marketArrows = `<div class="left-arrow" onclick="scrollDiv('left', 'marketing')"> <i class="material-icons">arrow_back</i> </div> ${techHtml} <div class="right-arrow" onclick="scrollDiv('right', 'technology')"> <i class="material-icons">arrow_forward</i> </div>`;
  marketDiv.innerHTML = marketArrows;

  business.forEach(function (item) {
    businessHtml += '<div class="card" >';
    businessHtml += '<img class="card-img-top" src="' + item.image_url + '" alt="Card image cap">';
    businessHtml += '<div class="card-body">';
    businessHtml += '<h5 class="card-title">' + item.name + '</h5>';
    businessHtml += '<p class="card-text">' + item.description.substring(0, 70) + '...</p>';
    businessHtml += '</div>';
    businessHtml += '<div class="card-footer d-flex justify-content-between">';
    businessHtml += '<span class="course-level">' + item.level + '</span>';
    businessHtml += '<span class="course-type">' + item.type + '</span>';
    businessHtml += '</div>';
    businessHtml += '</div>';
  })

  let businessArrows = `<div class="left-arrow" onclick="scrollDiv('left', 'business')"> <i class="material-icons">arrow_back</i> </div> ${techHtml} <div class="right-arrow" onclick="scrollDiv('right', 'business')"> <i class="material-icons">arrow_forward</i> </div>`;
  businessDiv.innerHTML = businessArrows;

  science.forEach(function (item) {
    scienceHtml += '<div class="card" >';
    scienceHtml += '<img class="card-img-top" src="' + item.image_url + '" alt="Card image cap">';
    scienceHtml += '<div class="card-body">';
    scienceHtml += '<h5 class="card-title">' + item.name + '</h5>';
    scienceHtml += '<p class="card-text">' + item.description.substring(0, 70) + '...</p>';
    scienceHtml += '</div>';
    scienceHtml += '<div class="card-footer d-flex justify-content-between">';
    scienceHtml += '<span class="course-level">' + item.level + '</span>';
    scienceHtml += '<span class="course-type">' + item.type + '</span>';
    scienceHtml += '</div>';
    scienceHtml += '</div>';
  })

  let scienceArrows = `<div class="left-arrow" onclick="scrollDiv('left', 'science')"> <i class="material-icons">arrow_back</i> </div> ${techHtml} <div class="right-arrow" onclick="scrollDiv('right', 'science')"> <i class="material-icons">arrow_forward</i> </div>`;
  scienceDiv.innerHTML = scienceArrows;

  other.forEach(function (item) {
    otherHtml += '<div class="card" >';
    otherHtml += '<img class="card-img-top" src="' + item.image_url + '" alt="Card image cap">';
    otherHtml += '<div class="card-body">';
    otherHtml += '<h5 class="card-title">' + item.name + '</h5>';
    otherHtml += '<p class="card-text">' + item.description.substring(0, 70) + '...</p>';
    otherHtml += '</div>';
    otherHtml += '<div class="card-footer d-flex justify-content-between">';
    otherHtml += '<span class="course-level">' + item.level + '</span>';
    otherHtml += '<span class="course-type">' + item.type + '</span>';
    otherHtml += '</div>';
    otherHtml += '</div>';
  })

  let otherArrows = `<div class="left-arrow" onclick="scrollDiv('left', 'other')"> <i class="material-icons">arrow_back</i> </div> ${techHtml} <div class="right-arrow" onclick="scrollDiv('right', 'other')"> <i class="material-icons">arrow_forward</i> </div>`;
  otherDiv.innerHTML = otherArrows;
}

window.onload = updateHTML;
  

const display = (category) => {
  let marketingWrapper = document.getElementById('marketing-wrapper');
  let technologyWrapper = document.getElementById('technology-wrapper');
  let businessWrapper = document.getElementById('business-wrapper');
  let scienceWrapper = document.getElementById('science-wrapper');
  let otherWrapper = document.getElementById('other-wrapper');
  let btnArr = ['all-btn', 'technology-btn', 'marketing-btn', 'business-btn', 'science-btn', 'other-btn' ];
  
  switch (category) {
    case 'all':
      btnArr.forEach((element) => {
        removeActiveClass(element);
      })
      addActiveClass('all-btn');
      fadeIn(marketingWrapper);
      fadeIn(technologyWrapper);
      fadeIn(businessWrapper);
      fadeIn(scienceWrapper);
      fadeIn(otherWrapper);
      break;
    case 'technology':
      btnArr.forEach((element) => {
        removeActiveClass(element);
      })
      addActiveClass('technology-btn');
      fadeIn(technologyWrapper);
      fadeOut(marketingWrapper);
      fadeOut(businessWrapper);
      fadeOut(scienceWrapper);
      fadeOut(otherWrapper);
      break;
    case 'marketing':
      btnArr.forEach((element) => {
        removeActiveClass(element);
      })
      addActiveClass('marketing-btn');
      fadeIn(marketingWrapper);
      fadeOut(technologyWrapper);
      fadeOut(businessWrapper);
      fadeOut(scienceWrapper);
      fadeOut(otherWrapper);
        break;
    case 'business':
    
      btnArr.forEach((element) => {
        removeActiveClass(element);
      })
      addActiveClass('business-btn');
      fadeIn(businessWrapper);
      fadeOut(marketingWrapper);
      fadeOut(technologyWrapper);
      fadeOut(scienceWrapper);
      fadeOut(otherWrapper);
        break;
    case 'science':
      btnArr.forEach((element) => {
        removeActiveClass(element);
      })
      addActiveClass('science-btn');
      fadeIn(scienceWrapper);
      fadeOut(marketingWrapper);
      fadeOut(businessWrapper);
      fadeOut(technologyWrapper);
      fadeOut(otherWrapper);
        break;
    case 'other':
      btnArr.forEach((element) => {
        removeActiveClass(element);
      })
      addActiveClass('other-btn');
      fadeIn(otherWrapper)
      fadeOut(marketingWrapper);
      fadeOut(businessWrapper);
      fadeOut(scienceWrapper);
      fadeOut(technologyWrapper);
        break;
    default:
      console.log('invalid course filter');
      break;
  }
}

// fade out

const fadeOut = (el) => {
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

const fadeIn = (el, display) => {
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

const removeActiveClass = (id) => {
  var element = document.getElementById(id);
  element.classList.remove("active");
}

const addActiveClass = (id) => {
  var element = document.getElementById(id);
  element.classList.add("active");
}