//Give 4 ways to create an IIFE

(function () {
  console.log("IIFE");
})()(
  (function () {
    console.log("IIFE");
  })()
);

!(function () {
  console.log("IIFE");
})() +
  (function () {
    console.log("IIFE4");
  })();
