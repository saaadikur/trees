$(document).ready(function() {
    let counter = 0;
    let savedValue = 15;

    // Array of offer images
    const offerImages = [
      '/assets/img/offer1.jpg',
      '/assets/img/offer2.jpg',
      '/assets/img/offer3.jpg',
      '/assets/img/offer4.jpg'
    ];

    // Prevent default form submission
    $('form').submit(function(event) {
      event.preventDefault();
    });

    // Prevent default link click behavior
    $('a').click(function(event) {
      event.preventDefault();
    });

    // Increase button click event
    $('#increase').click(function() {
      counter++;
      $('#counter-value').text(counter);
    });

    // Decrease button click event
    $('#decrease').click(function() {
      counter--;
      $('#counter-value').text(counter);
    });

    // Save and increase savedValue
    $('.save').click(function() {
      savedValue += 1;
      $('#saved-counter').text(savedValue);
      // Update localStorage
      localStorage.setItem('savedValue', savedValue);
    });

    // Save and decrease savedValue
    $('.saver').click(function() {
      savedValue -= 1;
      $('#saved-counter').text(savedValue);
      // Update localStorage
      localStorage.setItem('savedValue', savedValue);
    });

    // Save 10 to savedValue
    $('#save1').click(function() {
      savedValue += 10;
      $('#saved-counter').text(savedValue);
      // Update localStorage
      localStorage.setItem('savedValue', savedValue);
    });

    // Save 16 to savedValue
    $('#save2').click(function() {
      savedValue += 16;
      $('#saved-counter').text(savedValue);
      // Update localStorage
      localStorage.setItem('savedValue', savedValue);
    });

    // Save 50 to savedValue
    $('#save3').click(function() {
      savedValue += 50;
      $('#saved-counter').text(savedValue);
      // Update localStorage
      localStorage.setItem('savedValue', savedValue);
    });

    // Save 100 to savedValue
    $('#save4').click(function() {
      savedValue += 100;
      $('#saved-counter').text(savedValue);
      // Update localStorage
      localStorage.setItem('savedValue', savedValue);
    });

    // Reset button click event
    $('#reset').click(function() {
      counter = 0;
      $('#counter-value').text(counter);
      // Reset savedValue and update localStorage
      savedValue = 15;
      $('#saved-counter').text(savedValue);
      localStorage.setItem('savedValue', savedValue);
    });

    // Context menu event listener for right-click (increase counter)
    $(document).on('contextmenu', function(event) {
      event.preventDefault(); // Prevent default context menu
      counter++;
      $('#counter-value').text(counter);
    });

    // Context menu event listener for right-click (increase savedValue)
    $(document).on('contextmenu', function(event) {
      event.preventDefault(); // Prevent default context menu
      savedValue += 1;
      $('#saved-counter').text(savedValue);
      // Update localStorage
      localStorage.setItem('savedValue', savedValue);
    });

    // Disable F5 and Ctrl+R (refresh) and other key combinations
    $(document).on('keydown', function(event) {
      if (event.keyCode === 116 || (event.ctrlKey && event.keyCode === 82)) {
        event.preventDefault();
      }
    });

    // Display initial savedValue from localStorage
    if (localStorage.getItem('savedValue')) {
      savedValue = parseInt(localStorage.getItem('savedValue'));
      $('#saved-counter').text(savedValue);
    }

    // Offer button click event
    $('#offer').click(function() {
      const randomIndex = Math.floor(Math.random() * offerImages.length);
      const randomImage = offerImages[randomIndex];
      $('#popup-ad img').attr('src', randomImage);
      $('#popup-ad').fadeIn();
      setTimeout(function() {
        $('#popup-ad').fadeOut();
      }, 8000);
    });

    // Disable the refresh button
    window.onbeforeunload = function () {
      return "Are you sure you want to leave? Changes you made may not be saved.";
    };

    // Hide main content initially
    $('.main-content').hide();

    // Form submission handling
    $('#login-form').submit(function(event) {
      event.preventDefault(); // Prevent form submission

      // Replace with your actual validation logic
      var username = $('#username').val();
      var password = $('#password').val();

      if (username === 'trees' && password === '582005') {
        // Show main content and hide login section
        $('.main-content').show();
        $('.login').hide();
      } else {
        alert('Invalid username or password. Please try again.');
      }
    });


    
  });

  // coutndown start
(() => {
    // Specify the deadline date
    const deadlineDate = new Date('August 1, 2065 23:59:59').getTime();

    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours = document.querySelector('.countdown__hours .number');
    const countdownMinutes = document.querySelector('.countdown__minutes .number');
    const countdownSeconds = document.querySelector('.countdown__seconds .number');

    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {
        // Get current date and time
        const currentDate = new Date().getTime();

        // Calculate the distance between current date and time and the deadline date and time
        const distance = deadlineDate - currentDate;

        // Calculations the data for remaining days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        const seconds = Math.floor(distance % (1000 * 60) / 1000);

        // Insert the result data into individual countdown boxes
        countdownDays.innerHTML = days;
        countdownHours.innerHTML = hours;
        countdownMinutes.innerHTML = minutes;
        countdownSeconds.innerHTML = seconds;
    }, 1000);
})();
// coutndown End   