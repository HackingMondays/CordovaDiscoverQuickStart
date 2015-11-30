$(document).on('deviceready', function () {
  $('.listening').hide();
  $('.received').show();
  $('button[name="scan"]').click(function() {
    // L'exercice est d'afficher les informations du livre à l'écran.
    // pour obternir ces informations : https://www.googleapis.com/books/v1/volumes?q=isbn:9782212133318
    // documentation : https://developers.google.com/books/docs/v1/reference/volumes/list
    // exemple : https://www.googleapis.com/books/v1/volumes?q=isbn:9780596805524
    // Nous allons partir du postulat que le code bar d'un livre est toujours son ISBN.
    // Pour faire la requête : $.get(), documentation : https://api.jquery.com/jquery.get/
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        $('#code').text(result.text);
        console.log("We got a barcode\n" +
              "Result: " + result.text + "\n" +
              "Format: " + result.format + "\n" +
              "Cancelled: " + result.cancelled);
      },
      function (error) {
        console.log("Scanning failed: " + error);
      }
    );
  })


});

