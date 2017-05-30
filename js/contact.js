$(function() {
  var form = $('#contact-form');

  var formMessages = $('#form-messages');

  $(form).submit(function(event) {
    event.preventDefault();

    var formData = $(form).serialize();
    $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: formData
    })
    .done(function(response) {
      $(formMessages).removeClass('alert alert-danger');
      $(formMessages).addClass('alert alert-success');

      $(formMessages).text(response);

      $('#subject').val('');
      $('#email').val('');
    })
    .fail(function(data) {
      $(formMessages).removeClass('alert alert-success');
      $(formMessages).addClass('alert alert-danger');

      if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
      } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
      }
    });
  });
});
