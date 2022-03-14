exports.Step = {
  stage: ({ stageId }, args, { db }) => {
    return db.stages.find((stage) => stage.id === stageId);
  },
};
