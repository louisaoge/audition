exports.Stage = {
  steps: ({ id: stageId }, { filter }, { db }) => {
    const stageStep = db.steps.filter((step) => step.stageId === stageId);
    let filteredStageSteps = stageStep;
    if (filter) {
      if (filter.isComplete === true) {
        filteredStageSteps = filteredStageSteps.filter((step) => {
          return step.isComplete;
        });
      }
    }
    return filteredStageSteps;
  },
};
