// Dynamically import modules, so they can be reset between test runs
// https://github.com/facebook/jest/issues/3236
// https://www.npmjs.com/package/babel-plugin-dynamic-import-node
let getReply;

beforeEach(() => {
  return import("../Submission/script").then((module) => {
    getReply = module.getReply;
    jest.resetModules();
  });
});

describe("getReply", () => {
  it("should reply with - yes yes", () => {
    // Input: "yes"
    // Output: "Are the battery terminals corroded?"
    // Input: "yes"
    // Output: "Clean terminals and try starting again"

    // "Are the battery terminals corroded?"
    const input1 = "yes";
    const reply1 = getReply(input1);
    const expectedReply1 = "Are the battery terminals corroded?";

    // "Clean terminals and try starting again"
    const input2 = "yes";
    const reply2 = getReply(input2);
    const expectedReply2 = "Clean terminals and try starting again.";

    // Uncomment the following line and update your actual reply with your expected reply
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
  });

  it("should reply with - yes no", () => {
    // Input: "yes"
    // Output: "Are the battery terminals corroded?"
    // Input: "no"
    // Output: "Replace cables and try again."

    // "Are the battery terminals corroded?"
    const input1 = "yes";
    const reply1 = getReply(input1);
    const expectedReply1 = "Are the battery terminals corroded?";

    // "Replace cables and try again."
    const input2 = "no";
    const reply2 = getReply(input2);
    const expectedReply2 = "Replace cables and try again.";

    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
  });

  it("should reply with - no yes", () => {
    // Input: "no"
    // Output: "Does the car make a clicking noise?"
    // Input: "yes"
    // Output: "Replace the battery."

    // "Does the car make a clicking noise?"
    const input1 = "no";
    const reply1 = getReply(input1);
    const expectedReply1 = "Does the car make a clicking noise?";

    // "Replace the battery."
    const input2 = "yes";
    const reply2 = getReply(input2);
    const expectedReply2 = "Replace the battery.";

    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
  });

  it("should reply with - no no yes", () => {
    // Input: "no"
    // Output: "Does the car make a clicking noise?"
    // Input: "no"
    // Output: "Does the car crank up but fail to start?"
    // Input: "yes"
    // Output: "Check spark plug connections."

    // "Does the car make a clicking noise?"
    const input1 = "no";
    const reply1 = getReply(input1);
    const expectedReply1 = "Does the car make a clicking noise?";

    // "Does the car crank up but fail to start?"
    const input2 = "no";
    const reply2 = getReply(input2);
    const expectedReply2 = "Does the car crank up but fail to start?";

    // "Check spark plug connections."
    const input3 = "yes";
    const reply3 = getReply(input3);
    const expectedReply3 = "Check spark plug connections.";

    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
  });

  it("should reply with - no no no", () => {
    // Input: "no"
    // Output: "Does the car make a clicking noise?"
    // Input: "no"
    // Output: "Does the car crank up but fail to start?"
    // Input: "no"
    // Output: "Does the engine start and then die?"

    // "Does the car make a clicking noise?"
    const input1 = "no";
    const reply1 = getReply(input1);
    const expectedReply1 = "Does the car make a clicking noise?";

    // "Does the car crank up but fail to start?"
    const input2 = "no";
    const reply2 = getReply(input2);
    const expectedReply2 = "Does the car crank up but fail to start?";

    // "Does the engine start and then die?"
    const input3 = "no";
    const reply3 = getReply(input3);
    const expectedReply3 = "Does the engine start and then die?";

    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
  });

  it("should reply with - no no no yes", () => {
    // Input: "no"
    // Output: "Does the car make a clicking noise?"
    // Input: "no"
    // Output: "Does the car crank up but fail to start?"
    // Input: "no"
    // Output: "Does the engine start and then die?"
    // Input: "yes"
    // Output: "Does your car have fuel injection?"

    // "Does the car make a clicking noise?"
    const input1 = "no";
    const reply1 = getReply(input1);
    const expectedReply1 = "Does the car make a clicking noise?";

    // "Does the car crank up but fail to start?"
    const input2 = "no";
    const reply2 = getReply(input2);
    const expectedReply2 = "Does the car crank up but fail to start?";

    // "Does the engine start and then die?"
    const input3 = "no";
    const reply3 = getReply(input3);
    const expectedReply3 = "Does the engine start and then die?";

    // "Does your car have fuel injection?"
    const input4 = "yes";
    const reply4 = getReply(input4);
    const expectedReply4 = "Does your car have fuel injection?";

    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
    expect(reply4).toEqual(expectedReply4);
  });

  it("should reply with - no no no yes no", () => {
    // Input: "no"
    // Output: "Does the car make a clicking noise?"
    // Input: "no"
    // Output: "Does the car crank up but fail to start?"
    // Input: "no"
    // Output: "Does the engine start and then die?"
    // Input: "yes"
    // Output: "Does your car have fuel injection?"
    // Input: "no"
    // Output: "Check to ensure the choke is opening and closing."

    // "Does the car make a clicking noise?"
    const input1 = "no";
    const reply1 = getReply(input1);
    const expectedReply1 = "Does the car make a clicking noise?";

    // "Does the car crank up but fail to start?"
    const input2 = "no";
    const reply2 = getReply(input2);
    const expectedReply2 = "Does the car crank up but fail to start?";

    // "Does the engine start and then die?"
    const input3 = "no";
    const reply3 = getReply(input3);
    const expectedReply3 = "Does the engine start and then die?";

    // "Does your car have fuel injection?"
    const input4 = "yes";
    const reply4 = getReply(input4);
    const expectedReply4 = "Does your car have fuel injection?";

    // Check to ensure the choke is opening and closing.
    const input5 = "no";
    const reply5 = getReply(input5);
    const expectedReply5 = "Check to ensure the choke is opening and closing.";

    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
    expect(reply4).toEqual(expectedReply4);
    expect(reply5).toEqual(expectedReply5);
  });

  it("should reply with - no no no yes yes", () => {
    // Input: "no"
    // Output: "Does the car make a clicking noise?"
    // Input: "no"
    // Output: "Does the car crank up but fail to start?"
    // Input: "no"
    // Output: "Does the engine start and then die?"
    // Input: "yes"
    // Output: "Does your car have fuel injection?"
    // Input: "yes"
    // Output: "Get it in for a service."

    // "Does the car make a clicking noise?"
    const input1 = "no";
    const reply1 = getReply(input1);
    const expectedReply1 = "Does the car make a clicking noise?";

    // "Does the car crank up but fail to start?"
    const input2 = "no";
    const reply2 = getReply(input2);
    const expectedReply2 = "Does the car crank up but fail to start?";

    // "Does the engine start and then die?"
    const input3 = "no";
    const reply3 = getReply(input3);
    const expectedReply3 = "Does the engine start and then die?";

    // "Does your car have fuel injection?"
    const input4 = "yes";
    const reply4 = getReply(input4);
    const expectedReply4 = "Does your car have fuel injection?";

    // Get it in for a service.
    const input5 = "yes";
    const reply5 = getReply(input5);
    const expectedReply5 = "Get it in for a service.";

    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
    expect(reply4).toEqual(expectedReply4);
    expect(reply5).toEqual(expectedReply5);
  });

  it("should reply with - yes invalidInput - Your input is invalid - please enter either 'yes', 'no' or 'reset'", () => {
    // Input: "yes"
    // Output: "Are the battery terminals corroded?"
    // Input: "invalidInput"
    // Output: "Your input is invalid - please enter either 'yes', 'no' or 'reset'"

    // "Are the battery terminals corroded?"
    const input1 = "yes";
    const reply1 = getReply(input1);
    const expectedReply1 = "Are the battery terminals corroded?";

    // "Your input is invalid - please enter either 'yes', 'no' or 'reset'"
    const input2 = "invalidInput";
    const reply2 = getReply(input2);
    const expectedReply2 =
      "Your input is invalid - please enter either 'yes', 'no' or 'reset'";

    // Uncomment the following line and update your actual reply with your expected reply
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
  });

  it("should reply with - yes reset - Is the car silent when you turn the key?", () => {
    // Input: "yes"
    // Output: "Are the battery terminals corroded?"
    // Input: "reset"
    // Output: "Is the car silent when you turn the key?"

    // "Are the battery terminals corroded?"
    const input1 = "yes";
    const reply1 = getReply(input1);
    const expectedReply1 = "Are the battery terminals corroded?";

    // "Is the car silent when you turn the key?"
    const input2 = "reset";
    const reply2 = getReply(input2);
    const expectedReply2 = "Is the car silent when you turn the key?";

    // Uncomment the following line and update your actual reply with your expected reply
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
  });

  it("should reply with - yes capitalised and whitespaced yes - Clean terminals and try starting again.", () => {
    // Input: "yes"
    // Output: "Are the battery terminals corroded?"
    // Input: "   YES    "
    // Output: "Clean terminals and try starting again."

    // "Are the battery terminals corroded?"
    const input1 = "yes";
    const reply1 = getReply(input1);
    const expectedReply1 = "Are the battery terminals corroded?";

    // "Clean terminals and try starting again."
    const input2 = "   YES    ";
    const reply2 = getReply(input2);
    const expectedReply2 = "Clean terminals and try starting again.";

    // Uncomment the following line and update your actual reply with your expected reply
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
  });

  it("should reply with - yes yes yes - You have reached the end of troubleshooting - type 'reset' if you'd want to start again.", () => {
    // Input: "yes"
    // Output: "Are the battery terminals corroded?"
    // Input: "yes"
    // Output: "Clean terminals and try starting again."
    // Input: "yes"
    // Output: "You have reached the end of troubleshooting - please type 'reset' if you'd like to start again."

    // "Are the battery terminals corroded?"
    const input1 = "yes";
    const reply1 = getReply(input1);
    const expectedReply1 = "Are the battery terminals corroded?";

    // "Clean terminals and try starting again."
    const input2 = "yes";
    const reply2 = getReply(input2);
    const expectedReply2 = "Clean terminals and try starting again.";

    // "You have reached the end of troubleshooting - please type 'reset' if you'd like to start again."
    const input3 = "yes";
    const reply3 = getReply(input3);
    const expectedReply3 =
      "You have reached the end of troubleshooting - please type 'reset' if you'd like to start again.";

    // Uncomment the following line and update your actual reply with your expected reply
    expect(reply1).toEqual(expectedReply1);
    expect(reply2).toEqual(expectedReply2);
    expect(reply3).toEqual(expectedReply3);
  });
});
