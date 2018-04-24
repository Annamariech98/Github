<script>
  function initMap() {
  var uluru = {lat: 51.375801, lng: -2.359904};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: uluru
  });
  }
  var marker = new google.maps.Marker({
  position: uluru,
  map: map
  });
</script>
