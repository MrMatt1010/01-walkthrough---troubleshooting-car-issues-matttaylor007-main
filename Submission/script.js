/**
 *
 * @param {string} userInput A string of the value that is typed into the web form. Example: "yes"
 * @returns {string} The reply which is either the next question or answer. Example "Are the battery terminals corroded?"
 */

// global scope
let level = 1;
let branch;
let endOfWalkthrough = false;

const getReply = (userInput) => {
  // sanitising userInput
  const noFurtherOptions =
    "You have reached the end of troubleshooting - please type 'reset' if you'd like to start again.";
  const lowerCaseTrimmedUserInput = userInput.toLowerCase().trim();

  if (lowerCaseTrimmedUserInput === "reset") {
    level = 1;
    branch = undefined;
    return "Is the car silent when you turn the key?";
  }

  if (
    lowerCaseTrimmedUserInput !== "yes" &&
    lowerCaseTrimmedUserInput !== "no"
  ) {
    return "Your input is invalid - please enter either 'yes', 'no' or 'reset'";
  }

  if (endOfWalkthrough === true) {
    return noFurtherOptions;
  }

  if (level === 1) {
    level = 2;

    if (lowerCaseTrimmedUserInput === "yes") {
      branch = "yes";
      return "Are the battery terminals corroded?";
    } else {
      branch = "no";
      return "Does the car make a clicking noise?";
    }
  }

  if (level === 2) {
    level = 3;

    if (branch === "yes") {
      endOfWalkthrough = true;

      if (lowerCaseTrimmedUserInput === "yes") {
        return "Clean terminals and try starting again.";
      } else {
        return "Replace cables and try again.";
      }
    } else {
      if (lowerCaseTrimmedUserInput === "yes") {
        endOfWalkthrough = true;
        return "Replace the battery.";
      } else {
        return "Does the car crank up but fail to start?";
      }
    }
  }

  if (level === 3) {
    level = 4;

    if (lowerCaseTrimmedUserInput === "yes") {
      endOfWalkthrough = true;
      return "Check spark plug connections.";
    } else {
      return "Does the engine start and then die?";
    }
  }

  if (level === 4) {
    level = 5;

    if (lowerCaseTrimmedUserInput === "yes") {
      return "Does your car have fuel injection?";
    } else {
      // there is no 'no' option here
      endOfWalkthrough = true;
      return noFurtherOptions;
    }
  }

  if (level === 5) {
    endOfWalkthrough = true;

    if (lowerCaseTrimmedUserInput === "yes") {
      return "Get it in for a service.";
    } else {
      return "Check to ensure the choke is opening and closing.";
    }
  }

  return "Invalid!";
};

export { getReply };
