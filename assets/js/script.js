$(function () {
  function updateTime() {
    var currentTime = dayjs().format("hh:mm:ss A");
    $("#currentTime").text(currentTime);
  }

  updateTime();
  setInterval(updateTime, 1000);

  function updateDate() {
    var currentDate = dayjs().format("MMM DD YYYY");
    $("#currentDate").text(currentDate);
  }

  updateDate();
  setInterval(updateTime, 1000);

  $(".time-block").each(function () {
    var timeId = $(this).attr("id");
    var savedData = localStorage.getItem(timeId);
    if (savedData) {
      $(this).find(".description").val(savedData);
    }
  });

  $(".saveBtn").on("click", function () {
    var timeBlock = $(this).closest(".time-block").attr("id");
    var userInput = $(this).siblings(".description").val();
    localStorage.setItem(timeBlock, userInput);
  });

  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var hour = parseInt(timeBlockId.split("-")[1]);

    if (hour < currentHour) {
      $(this).addClass("past");
    } else if (hour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
});
