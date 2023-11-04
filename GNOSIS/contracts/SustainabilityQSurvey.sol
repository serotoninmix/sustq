// SPDX-License-Identifier: MIT
pragma solidity >=0.4.25 <0.9.0;

contract Survey {
    mapping(address => uint256) private scores;

    // This event can be picked up by an oracle or off-chain service
    event SurveyCompleted(address indexed participant, uint256 score, string chainIdentifier);

    function submitAnswers(bool[] memory answers) public {
        uint256 score = calculateScore(answers);
        scores[msg.sender] = score;

        // Emit an event with the participant's score and an identifier for the target chain
        emit SurveyCompleted(msg.sender, score, "TargetChainNFTIssuer");
    }

    function calculateScore(bool[] memory answers) private pure returns (uint256) {
        uint256 score = 0;
        for (uint256 i = 0; i < answers.length; i++) {
            if (answers[i]) {
                score += 10; // For example: each correct answer gives 10 points
            }
        }
        return score;
    }

    function getScore(address participant) public view returns (uint256) {
        return scores[participant];
    }
}
