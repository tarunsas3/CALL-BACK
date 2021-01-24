var countdown = document.getElementById("first_element");
setTimeout(function () {
  countdown.innerHTML = 10;
  setTimeout(function () {
    countdown.innerHTML = 9;
    setTimeout(function () {
      countdown.innerHTML = 8;
      setTimeout(function () {
        countdown.innerHTML = 7;
        setTimeout(function () {
          countdown.innerHTML = 6;
          setTimeout(function () {
            countdown.innerHTML = 5;
            setTimeout(function () {
              countdown.innerHTML = 4;
              setTimeout(function () {
                countdown.innerHTML = 3;
                setTimeout(function () {
                  countdown.innerHTML = 2;
                  setTimeout(function () {
                    countdown.innerHTML = 1;
                    setTimeout(function () {
                      countdown.innerHTML = "HAPPY INDEPENDANCE DAY";
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});

