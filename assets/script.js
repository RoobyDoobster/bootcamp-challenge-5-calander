$(function () {
  var saveButton = $(".saveBtn");
  var description = $(".description");

  function setBtn(num, obj, timeOfDay, string) {
    saveButton[num].addEventListener('click', function() {
      obj = {
        timeOfDay: timeOfDay,
        TODO: description[num].value.trim()
      }
      localStorage.setItem(string, JSON.stringify(obj))
    })
  }

  setBtn(0, eight, 8, 'eight');
  setBtn(1, nine, 9, 'nine');
  setBtn(2, ten, 10, 'ten');
  setBtn(3, eleven, 11, 'eleven');
  setBtn(4, twelve, 12, 'twelve');
  setBtn(5, one, 1, 'one');
  setBtn(6, two, 2, 'two');
  setBtn(7, three, 3, 'three');
  setBtn(8, four, 4, 'four');
  setBtn(9, five, 5, 'five');

  function getLastChange(string, obj, num) {
    var lastEdit = JSON.parse(localStorage.getItem(string));
    console.log(lastEdit)
    if(lastEdit !== null) {
      description[num].textContent = lastEdit.TODO;
    }
  }

  function init() {
    getLastChange('eight', eight, 0);
    getLastChange('nine', nine, 1);
    getLastChange('ten', ten, 2);
    getLastChange('eleven', eleven, 3);
    getLastChange('twelve', twelve, 4);
    getLastChange('one', one, 5);
    getLastChange('two', two, 6);
    getLastChange('three', three, 7);
    getLastChange('four', four, 8);
    getLastChange('five', five, 9);
  }

  init();

  var currentDay = dayjs().format("dddd, MMMM D");

  console.log(currentDay);
  console.log($("#currentDay"));
  $("#currentDay").append(currentDay);

  var eight = ("#hour-8");
  var nine = ("#hour-10");
  var ten = ("#hour-9");
  var eleven = ("#hour-11");
  var twelve = ("#hour-12");
  var one = ("#hour-1");
  var two = ("#hour-2");
  var three = ("#hour-3");
  var four = ("#hour-4");
  var five = ("#hour-5");

  var time = dayjs().format('H');

  if(time < 8) {
    eight.addClass('future').removeClass('past', 'present')
    nine.addClass('future').removeClass('past', 'present')
    ten.addClass('future').removeClass('past', 'present')
    eleven.addClass('future').removeClass('past', 'present')
    twelve.addClass('future').removeClass('past', 'present')
    one.addClass('future').removeClass('past', 'present')
    two.addClass('future').removeClass('past', 'present')
    three.addClass('future').removeClass('past', 'present')
    four.addClass('future').removeClass('past', 'present')
    five.addClass('future').removeClass('past', 'present')
  }

  if(time == 8) {
    eight.addClass('present').removeClass('past', 'future')
    nine.addClass('future').removeClass('past', 'present')
    ten.addClass('future').removeClass('past', 'present')
    eleven.addClass('future').removeClass('past', 'present')
    twelve.addClass('future').removeClass('past', 'present')
    one.addClass('future').removeClass('past', 'present')
    two.addClass('future').removeClass('past', 'present')
    three.addClass('future').removeClass('past', 'present')
    four.addClass('future').removeClass('past', 'present')
    five.addClass('future').removeClass('past', 'present')
  }

  if(time == 9) {
    eight.addClass('past').removeClass('present', 'future')
    nine.addClass('present').removeClass('past', 'future')
    ten.addClass('future').removeClass('past', 'present')
    eleven.addClass('future').removeClass('past', 'present')
    twelve.addClass('future').removeClass('past', 'present')
    one.addClass('future').removeClass('past', 'present')
    two.addClass('future').removeClass('past', 'present')
    three.addClass('future').removeClass('past', 'present')
    four.addClass('future').removeClass('past', 'present')
    five.addClass('future').removeClass('past', 'present')
  }

  if(time == 10) {
    eight.addClass('past').removeClass('present', 'future')
    nine.addClass('future').removeClass('present', 'future')
    ten.addClass('present').removeClass('past', 'future')
    eleven.addClass('future').removeClass('past', 'present')
    twelve.addClass('future').removeClass('past', 'present')
    one.addClass('future').removeClass('past', 'present')
    two.addClass('future').removeClass('past', 'present')
    three.addClass('future').removeClass('past', 'present')
    four.addClass('future').removeClass('past', 'present')
    five.addClass('future').removeClass('past', 'present')
  }

  if(time == 11) {
    eight.addClass('past').removeClass('present', 'future')
    nine.addClass('past').removeClass('present', 'future')
    ten.addClass('past').removeClass('present', 'future')
    eleven.addClass('present').removeClass('past', 'future')
    twelve.addClass('future').removeClass('past', 'present')
    one.addClass('future').removeClass('past', 'present')
    two.addClass('future').removeClass('past', 'present')
    three.addClass('future').removeClass('past', 'present')
    four.addClass('future').removeClass('past', 'present')
    five.addClass('future').removeClass('past', 'present')
  }

  if(time == 12) {
    eight.addClass('past').removeClass('present', 'future')
    nine.addClass('past').removeClass('present', 'future')
    ten.addClass('past').removeClass('present', 'future')
    eleven.addClass('past').removeClass('present', 'future')
    twelve.addClass('present').removeClass('past', 'future')
    one.addClass('future').removeClass('past', 'present')
    two.addClass('future').removeClass('past', 'present')
    three.addClass('future').removeClass('past', 'present')
    four.addClass('future').removeClass('past', 'present')
    five.addClass('future').removeClass('past', 'present')
  }

  if(time == 13) {
    eight.addClass('past').removeClass('present', 'future')
    nine.addClass('past').removeClass('present', 'future')
    ten.addClass('past').removeClass('present', 'future')
    eleven.addClass('past').removeClass('present', 'future')
    twelve.addClass('past').removeClass('present', 'future')
    one.addClass('present').removeClass('past', 'future')
    two.addClass('future').removeClass('past', 'present')
    three.addClass('future').removeClass('past', 'present')
    four.addClass('future').removeClass('past', 'present')
    five.addClass('future').removeClass('past', 'present')
  }

  if(time == 14) {
    eight.addClass('past').removeClass('present', 'future')
    nine.addClass('past').removeClass('present', 'future')
    ten.addClass('past').removeClass('present', 'future')
    eleven.addClass('past').removeClass('present', 'future')
    twelve.addClass('past').removeClass('present', 'future')
    one.addClass('past').removeClass('present', 'future')
    two.addClass('present').removeClass('past', 'future')
    three.addClass('future').removeClass('past', 'present')
    four.addClass('future').removeClass('past', 'present')
    five.addClass('future').removeClass('past', 'present')
  }

  if(time == 15) {
    eight.addClass('past').removeClass('present', 'future')
    nine.addClass('past').removeClass('present', 'future')
    ten.addClass('past').removeClass('present', 'future')
    eleven.addClass('past').removeClass('present', 'future')
    twelve.addClass('past').removeClass('present', 'future')
    one.addClass('past').removeClass('present', 'future')
    two.addClass('past').removeClass('present', 'future')
    three.addClass('present').removeClass('past', 'future')
    four.addClass('future').removeClass('past', 'present')
    five.addClass('future').removeClass('past', 'present')
  }

  if(time == 16) {
    eight.addClass('past').removeClass('present', 'future')
    nine.addClass('past').removeClass('present', 'future')
    ten.addClass('past').removeClass('present', 'future')
    eleven.addClass('past').removeClass('present', 'future')
    twelve.addClass('past').removeClass('present', 'future')
    one.addClass('past').removeClass('present', 'future')
    two.addClass('past').removeClass('present', 'future')
    three.addClass('past').removeClass('present', 'future')
    four.addClass('present').removeClass('past', 'future')
    five.addClass('future').removeClass('past', 'present')
  }

  if(time == 17) {
    eight.addClass('past').removeClass('present', 'future')
    nine.addClass('past').removeClass('past', 'future')
    ten.addClass('past').removeClass('present', 'future')
    eleven.addClass('past').removeClass('past', 'future')
    twelve.addClass('past').removeClass('present', 'future')
    one.addClass('past').removeClass('present', 'future')
    two.addClass('past').removeClass('present', 'future')
    three.addClass('past').removeClass('present', 'future')
    four.addClass('past').removeClass('present', 'future')
    five.addClass('present').removeClass('past', 'future')
  }
  
  if(time > 17) {
    eight.addClass('past').removeClass('present', 'future')
    nine.addClass('past').removeClass('present', 'future')
    ten.addClass('past').removeClass('present', 'future')
    eleven.addClass('past').removeClass('present', 'future')
    twelve.addClass('past').removeClass('present', 'future')
    one.addClass('past').removeClass('present', 'future')
    two.addClass('past').removeClass('present', 'future')
    three.addClass('past').removeClass('present', 'future')
    four.addClass('past').removeClass('present', 'future')
    five.addClass('past').removeClass('present', 'future')
  }
});
