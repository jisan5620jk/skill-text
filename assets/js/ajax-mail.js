document.addEventListener("DOMContentLoaded", function () {
  // Get the form elements defined in your form HTML above
  var forms = document.querySelectorAll(".dreamit-form");
  var statuses = document.querySelectorAll(".status");

  // Success and Error functions for after the form is submitted
  function success(response, formIndex) {
    forms[formIndex].reset();
    statuses[formIndex].classList.add("success");
    statuses[formIndex].innerHTML = '<i class="far fa-check-circle"></i> Thank you message sent.';

    // You can also do something with the response from the server if needed.
  }

  function error(statusCode, responseText, formIndex) {
    statuses[formIndex].classList.add("error");
    statuses[formIndex].innerHTML = '<i class="far fa-times-circle"></i> Oops! There was a problem.';

    // You can also display more specific error information if needed.
  }

  // Handle the form submission event for each form
  forms.forEach(function (form, index) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax("POST", form.action, data, success, error, index);
    });
  });

  // Helper function for sending an AJAX request
  function ajax(method, url, data, success, error, formIndex) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, formIndex);
      } else {
        error(xhr.status, xhr.responseText, formIndex);
      }
    };
    xhr.send(data);
  }
});
