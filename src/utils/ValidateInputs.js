export default function ValidateInputs(inputFields) {
  var invalidInputs = [];
  Object.keys(inputFields).map((key) => {
    const inputField = inputFields[key];
    const regEx = new RegExp(inputField.regex);
    console.log(inputField);
    if (regEx.test(inputField.text) == false) {
      invalidInputs.push(inputField);
    }
  });
  return {
    invalidInputs: invalidInputs,
    valid: invalidInputs.length == 0,
  };
}
