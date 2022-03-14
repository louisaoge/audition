exports.Query = {
  hello: (parent, args, context) => {
    return ["World", "my", "friend"];
  },
  steps: (parent, { filter }, { db }) => {
    let filteredSteps = db.steps;

    if (filter) {
      const { isComplete } = filter;
      if (isComplete === true) {
        filteredSteps = filteredSteps.filter((step) => {
          return step.isComplete;
        });
      }
    }
    return filteredSteps;
  },
  step: (parent, { id }, { db }) => {
    return db.steps.find((step) => step.id === id);
  },
  stages: (parent, args, { db }) => db.stages,
  stage: (parent, { id }, { db }) => {
    return db.stages.find((stage) => stage.id === id);
  },
};
