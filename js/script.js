$(function() {
  var timeout,
      showButton = $('#show'),
      passwordInput = $('#password'),
      show = function () {
        passwordInput.attr('type', 'text');
        showButton.find('i').addClass('glyphicon-eye-close');
      },
      hide = function () {
        passwordInput.attr('type', 'password');
        showButton.find('i').removeClass('glyphicon-eye-close');
        clearTimeout(timeout);
      },
      showPassword = function (e) {
        if (passwordInput.attr('type') === 'password') {
          show();
          timeout = setTimeout(hide, 1000);
        } else {
          hide();
        }

        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      };

  showButton.click(showPassword);
});
