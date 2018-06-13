<?php

  function getCourses() {
    include_once "db.inc.php";
    $sql = "SELECT * FROM courses";
    $result = mysqli_query($link, $sql);
    $html = array();
    if (mysqli_num_rows($result) > 0) {
      while($row = $result->fetch_assoc()) {
        // $title = $row['name'];
        // $description = $row['description'];
        // $level = $row['level'];
        // $category = $row['category'];
        // $tags = $row['tags'];
        // $url = $row['image_url'];

        array_push($html, $row);

        // $html .= '<div class="card">';
        // $html .= '<img class="card-img-top" src="'.$url.'" alt="Card image cap">';
        // $html .= '<div class="card-body">';
        // $html .= '<h5 class="card-title">'.$title.'</h5>';
        // $html .= '<p class="card-text">'.$description.'</p>';
        // $html .= '</div>';
        // $html .= '<div class="card-footer d-flex justify-content-between">';
        // $html .= '<span class="course-level">';
        // $html .= $level;
        // $html .= '</span>';
        // $html .= '<span class="course-type">';
        // $html .= $type;
        // $html .= '</span>';
        // $html .= '</div>';
        // $html .= '</div>';
      } 
    } else {
      $error="Cannot get courses";
    }
    mysqli_close($sql);
    return $html;
  }

  $courses = getCourses();
  // $courses = substr($courses, 1, strlen($courses) - 2);
  echo json_encode($courses);
?>