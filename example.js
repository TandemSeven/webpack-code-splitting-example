import a from "./a";

// require.ensure(["./c"],
//   function(c) {
//     require("./b").xyz();
//     var d = require("./d");
//   });
//
// import("./c")
//   .then(c => {
//     require("./b").xyz();
//     var d = require("./d");
//   });

// import("./c")
//   .then(c => {
//     import("./b").then(b => {
//       b.xyz();
//       import("./d").then(d => {
//         // after d loads
//       })
//     })
//   });

import("./b")
  .then((b) => {
        // after b loads
    });