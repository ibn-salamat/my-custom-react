const createElement =
  (tagname) =>
  (strings, ...args) => {
    return {
      type: tagname,
      template: strings.reduce((acc, currentString, index) => {
        return acc + currentString + (args[index] || "");
      }, ""),
    };
  };

const firstname = "alex";
const lastname = "mercer";

const div = createElement("div");

console.log(div`Hello ${firstname} ${lastname} `);
