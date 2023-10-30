


document.getElementById('chatButton').addEventListener('click', function() {
  var chatCard = document.querySelector('.card.card-bordered');
  if (chatCard.style.display === 'none' || chatCard.style.display === '') {
      chatCard.style.display = 'block';
  } else {
      chatCard.style.display = 'none';
  }
});

function exitApp(){
  window.location.href = "https://www.google.com";
  
}

function closeChat() {
  $('.card.card-bordered').hide();
}

$('#closeChat').on('click', closeChat);

var name;

var chatSampleHTML = `<div class="media media-chat d-flex">
  <img class="avatar" src="./asserts/icon.png" alt="...">
  <div class="media-body" id="chat-body">
  </div>
</div>`;


var chatContent;
function submitName() {
  event.preventDefault();
  name = $("#user-name").val().trim();

  if (name !== "") {
      // remove #name-input
      $("#name-input").remove();
      appenGreeting(name);
      chatContent = $("#chat-content").html();
      StartChat();
  } else {
      alert("Please enter your name.");
  }
}

function setupSubmitNameButton() {
  $("#submit-name").on("click", submitName);
}

$(document).ready(function() {
  setupSubmitNameButton();
});

// chat bottom
$(document).ready(function() {
  // Show or hide the button based on scroll position
  // of #chat-content
  $("#chat-content").scroll(function() {
      if ($(this).scrollTop() > 100) {
          $(".scrollUp").fadeIn();
      } else {
          $(".scrollUp").fadeOut();
      }
      });
  // Scroll to the top when the button is clicked
  $(".scrollUp").click(function() {
      $(".scrollUp").animate({ scrollTop: 0 }, "fast");
  });

  //on click of chat button,scroll to bottom
  $(".scrollUp").click(function() {
      $("#chat-content").animate({ scrollTop: 0 }, "fast");
  });
});

// .scroll-up-button-reset
$(document).ready(function() {
  // Show or hide the button based on scroll position
  // of #chat-content
  $("#chat-content").scroll(function() {
      if ($(this).scrollTop() > 100) {
          $(".scroll-up-button-reset").fadeIn();
      } else {
          $(".scroll-up-button-reset").fadeOut();
      }
      });
  // Scroll to the top when the button is clicked
  $(".scroll-up-button-reset").click(function() {
      $(".scroll-up-button-reset").animate({ scrollTop: 0 }, "fast");
  });

  //on click of chat button,scroll to bottom
  $(".scroll-up-button-reset").click(function() {
    resetChat();
      
  });
});



function resetChat() {
  // Reset to the original HTML content
  $("#chat-content").html(chatContent);
  console.log(chatContent);

  // Optionally, re-scroll to the bottom or top
  $("#chat-content").scrollTop($("#chat-content")[0].scrollHeight);
  // setupSubmitNameButton();
  ONLY_ONCE = true;
  StartChat();
  $('#closeChat').on('click', closeChat);

}






