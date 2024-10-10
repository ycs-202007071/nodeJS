var figlet = require("figlet");

figlet.text(
    "jeong eun ji!",
    {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 180,
      whitespaceBreak: true,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
  