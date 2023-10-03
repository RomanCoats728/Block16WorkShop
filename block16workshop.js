// Blocck 16 Workshop
//copy and paste the following customer objects into a new index
// if a customer has a subscription, the customer will receive a 25% discount
// if a customer has a coupon , the customer will receive a 10$ discount.
//at the end of the script recive a string that says "Your Grand total is ""final amoutn"!

const timmy = {
  prescription: "acetaminophen",
  pricePerRefill: 25,
  refills: 3,
  subscription: false,
  coupon: true,
};
const sarah = {
  prescription: "diphenhydramine",
  pricePerRefill: 50,
  refills: 1,
  subscription: true,
  coupon: false,
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

const pricePerRefill1 = 25;
const refills1 = 3;
const subscription1 = false;
const coupon1 = true;

function sumOfPre(pricePerRefill1, refills1) {
  return pricePerRefill1 * refills1;
}
const preTotal = sumOfPre(pricePerRefill1, refills1);
function addCoupon(preTotal) {
  if (coupon1 == true) return preTotal - 10;
}
const preWithCoupon = addCoupon(preTotal);
function addSub(preWithCoupon, subscription1) {
  if (subscription1 == true) return preWithCoupon - preWithCoupon * 0.25;

  return preWithCoupon;
}
const totalForMeds = addSub(preWithCoupon, subscription1);
console.log("Timmy Grand Total is  :", totalForMeds);

prescription: "diphenhydramine";
const pricePerRefill2 = 50;
const refills2 = 1;
const subscription2 = true;
const coupon2 = false;

function sumOfPre2(pricePerRefill2, refills2) {
  return pricePerRefill2 * refills2;
}
const preTotal2 = sumOfPre2(pricePerRefill2, refills2);
function addCoupon2(preTotal2) {
  if (coupon2 == true) return preTotal2 - 10;
  return preTotal2;
}
const preWithCoupon2 = addCoupon2(preTotal2);
function addSub2(preWithCoupon2, subscription2) {
  if (subscription2 == true) return preWithCoupon2 - preWithCoupon2 * 0.25;

  return preWithCoupon2;
}
const totalForMeds2 = addSub2(preWithCoupon2, subscription2);

console.log("Sarah Grand Total  is:", totalForMeds2);

prescription: "phenylephrine";
const pricePerRefill3 = 30;
const refills3 = 5;
const subscription3 = true;
const coupon3 = true;

function sumOfPre3(pricePerRefill3, refills3) {
  return pricePerRefill3 * refills3;
}
const preTotal3 = sumOfPre3(pricePerRefill3, refills3);
function addCoupon3(preTotal3) {
  if (coupon3 == true) return preTotal3 - 10;
  return preTotal3;
}
const preWithCoupon3 = addCoupon3(preTotal3);
function addSub3(preWithCoupon3, subscription3) {
  if (subscription3 == true) return preWithCoupon3 - preWithCoupon3 * 0.25;

  return preWithCoupon3;
}
const totalForMeds3 = addSub3(preWithCoupon3, subscription3);

console.log("Rocky grand total  is:", totalForMeds3);
