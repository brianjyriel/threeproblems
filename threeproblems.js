/**
 *
 * This is a WOD. It is used to solve three modified problems
 * Created by brianjyriel on 9/23/15.
 */

console.log("This is the start of the [THREEPROBLEMS] WOD");

var testData = [1, 2, 3, 4];

function sumFor(nums)
{

  var total = 0;
  for(var i = 0; i < nums.length; i++)
  {
    total += nums[i];
  }
  return total;
}

console.log("Calling the sumFor function");
console.log(sumFor(testData));
console.log("");

function sumWhile(nums)
{
  var total = 0;
  var i = 0;
  while(i < nums.length)
  {
    total += nums[i];
    i++;
  }
  return total;
}

console.log("Calling the sumWhile function");
console.log(sumWhile(testData));
console.log("");

function sumRecursion(nums)
{
  if(nums.length === 0)
  {
    return 0;
  }
  else {
    return nums[0] + sumRecursion(nums.slice(1, nums.length));
  }

}

console.log("Calling the sumRecursion function");
console.log(sumRecursion(testData));
console.log("");

function sumTheSimpleWay(nums)
{
  return _.reduce(nums, function(memo, num) {
    return memo + num;
  }, 0)
}

console.log("Calling the sumTheSimpleWay function");
console.log(sumTheSimpleWay(testData));
console.log("");

//Second problem to solve
var testList1 = [1, 2, 3];
var testList2 = ["a", "b", "c"];

function zipList(list1, list2)
{
  var resultList = [];
  for(var i = 0; i < list1.length; i++) {
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}

console.log("Calling the zipList function");
console.log(zipList(testList1, testList2));
console.log("");

function zipListTheSimpleWay(list1, list2)
{
  return _.flatten(_.zip(list1, list2));

}

console.log("Calling the zipListTheSimpleWay function");
console.log(zipListTheSimpleWay(testList1, testList2));
console.log("");

//Third problem
function fib()
{
  var tail = 0;
  var head = 1;
  var fibList = [tail];
  for(var i = 0; i < 99; i++)
  {
    var tempHead = head;
    head = head + tail;
    tail = tempHead;
    fibList.push(head);
  }
  return fibList;
}


console.log("Calling the fib function");
console.log(fib());
console.log("");

console.log("END OF WOD! THANK YOU!");

