var countdown = document.getElementById("first_element");
setTimeout(() => {
  countdown.innerHTML = 10;
  setTimeout(() => {
    countdown.innerHTML = 9;
    setTimeout(() => {
      countdown.innerHTML = 8;
      setTimeout(() => {
        countdown.innerHTML = 7;
        setTimeout(() => {
          countdown.innerHTML = 6;
          setTimeout(() => {
            countdown.innerHTML = 5;
            setTimeout(() => {
              countdown.innerHTML = 4;
              setTimeout(() => {
                countdown.innerHTML = 3;
                setTimeout(() => {
                  countdown.innerHTML = 2;
                  setTimeout(() => {
                    countdown.innerHTML = 1;
                    setTimeout(() => {
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


