function calculateScore(scoreObject) {
  if (!("score" in scoreObject)) {
    scoreObject.score =
      scoreObject.chickenwings * 5 +
      scoreObject.hamburgers * 3 +
      scoreObject.hotdogs * 2;
  }
  delete scoreObject.chickenwings;
  delete scoreObject.hamburgers;
  delete scoreObject.hotdogs;
  return scoreObject;
}

function compareParticipants(a, b) {
  if (a.score < b.score) {
    return 1;
  } else if (a.score > b.score) {
    return -1;
  } else {
    return a.name < b.name ? -1 : 1;
  }
}

function scoreboard(whoAteWhat) {
  const normalizedParticipants = whoAteWhat.map((participant) =>
    calculateScore(participant)
  );
  return normalizedParticipants.sort(compareParticipants);
}
