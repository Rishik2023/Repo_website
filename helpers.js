function appendChatOptions(options){
  for(option in options){
    chatOptions = `<div class="media media-chat d-flex">`;
    chatOptions += `<div class="media-body" id="chat-body">`;
    chatOptions += `<p class='option'>${options[option]}</p>`;
    chatOptions += `</div>`;
    chatOptions += `</div>`;
    $("#chat-content").append(chatOptions);
  }
  onClickOnAnyOption();
}

function onClickOnAnyOption(){
  $(".option").off("click");
  $(".option:not(.option-selected, .disabled)").on("click", function() {
    makeSelected($(this));
    option = $(this).text();  
    questions = getQuestionByCategory(option);
    console.log(questions);
    // append horizontal line
    $("#chat-content").append(`<hr>`);
    appendChatOptions(questions);
  });
}

ONLY_ONCE = true;
function makeSelected(option){
  option.addClass("option-selected");
  option.off("click");
  if(ONLY_ONCE){
    $(".option").addClass("disabled");
  }
  ONLY_ONCE = false;
}

