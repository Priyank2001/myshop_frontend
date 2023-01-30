export default function ValidateInputs(inputFields) {
  var invalidInputs = [];
  Object.keys(inputFields).map((key) => {
    if (key !== "roleSet") {
      const inputField = inputFields[key];
      const regEx = new RegExp(inputField.regex);
      if (regEx.test(inputField.text) === false) {
        invalidInputs.push(inputField);
      }
    }
  });
  return {
    invalidInputs: invalidInputs,
    valid: invalidInputs.length === 0,
  };
}
