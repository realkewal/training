<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/styles.css">
    <title>Training</title>
  </head>
  <body>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Academy</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Courses</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle nav-explore-btn" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Categories
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Technology</a>
              <a class="dropdown-item" href="#">Marketing</a>
              <a class="dropdown-item" href="#">Business</a>
              <a class="dropdown-item" href="#">Science</a>
              <a class="dropdown-item" href="#">Other</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-brand-green my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    <div class="jumbotron jumbotron-fluid hero m-0 p-0">
      <div class="container hero-container">
        <h1 class="display-4 shadow-text">Just A$9.90 / month</h1>
        <input type="email" class="signup-email" placeholder="Enter your email to get first month free!"/>
        <button class="btn cta-button mt-3">Sign up</button>
        <p class="lead shadow-text mt-2"></p>
      </div>
    </div>

    <div class="container-fluid hero-footer text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            1000+ Courses
          </div>
          <div class="col-md-4">
            Experienced Teachers
          </div>
          <div class="col-md-4">
            24x7 Support
          </div>
        </div>
      </div>
    </div>


    <section class="container-fluid py-5">
      <h1 class="display-5 text-center featured-heading">Featured courses</h1>

      <div class="pills-wrapper d-flex justify-content-center py-3">
        <ul class="nav nav-pills mx-auto">
        <li class="nav-item">
          <span class="nav-link active" id="all-btn" onclick="display('all')">All</span>
        </li>
        <li class="nav-item">
          <span class="nav-link" id="technology-btn" onclick="display('technology')">Technology</span>
        </li>
        <li class="nav-item">
          <span class="nav-link" id="marketing-btn" onclick="display('marketing')">Marketing</span>
        </li>
        <li class="nav-item">
          <span class="nav-link" id="business-btn" onclick="display('business')">Business</span>
        </li>
        <li class="nav-item">
          <span class="nav-link" id="science-btn" onclick="display('science')">Science</span>
        </li>
        <li class="nav-item">
          <span class="nav-link" id="other-btn" onclick="display('other')">Other</span>
        </li>
      </ul>
      </div> 
      
      <div id="technology-wrapper">
        <h3 class="ml-2">Technology</h3>
        <div class="cards-wrapper py-3 mb-3" id="technology">
        </div>
      </div>
      
      <div id="marketing-wrapper">
        <h3 class="ml-2">Marketing</h3>
        <div class="cards-wrapper py-3 mb-3" id="marketing">
        </div>
      </div>      
      
      <div id="business-wrapper">
        <h3 class="ml-2">Business</h3>
        <div class="cards-wrapper py-3 mb-3" id="business">
        </div>
      </div>
      
      <div id="science-wrapper">
        <h3 class="ml-2">Science</h3>
        <div class="cards-wrapper py-3 mb-3" id="science">
        </div>
      </div>
      
      <div id="other-wrapper">
        <h3 class="ml-2">Other</h3>
        <div class="cards-wrapper py-3 mb-3" id="other">
        </div>
      </div>

    </section>

    <div class="container-fluid footer px-0">
      <div class="container py-5">
        <div class="row">
          <div class="col-md-4">
            <h5 class="">
              About us
            </h5>
            <p class="">
              At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
            </p>
          </div>
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
          <div class="col-md-4"></div>
        </div>
      </div>
      <footer class="py-3">
        <span class="d-block text-center">&copy;2018</span>
      </footer>
    </div>

    <script src="js/jquery.min.js"></script>
    <!-- <script src="js/popper.min.js"></script> -->
    <script src="js/bootstrap.min.js"></script>
    <script src="js/unsplash.js"></script>
  </body>
</html>