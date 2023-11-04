const Survey = artifacts.require("Survey");

contract("Survey", accounts => {
  const [admin, participant] = accounts;

  it("should allow a participant to submit answers and calculate score correctly", async () => {
    const surveyInstance = await Survey.deployed();

    // Assuming the calculateScore function is now public for testing
    // This is the survey answers array, true represents a correct answer
    const answers = [true, false, true, true];
    const expectedScore = answers.filter(answer => answer).length * 10;

    // Participant submits answers
    await surveyInstance.submitAnswers(answers, { from: participant });

    // Retrieve score from contract
    const score = await surveyInstance.getScore(participant);

    // Check if the calculated score matches expected score
    assert.equal(score.toNumber(), expectedScore, "The score was not calculated correctly");
  });

  // Add more tests as necessary
});
