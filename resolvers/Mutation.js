const { v4: uuid } = require("uuid");
exports.Mutation = {
  addStage: (parent, { input }, { db }) => {
    const { title } = input;
    const newStage = {
      id: uuid(),
      title,
    };
    db.stages.push(newStage);
    return newStage;
  },
  addStep: (parent, { input }, { db }) => {
    const newStep = {
      id: uuid(),
      ...input,
    };
    db.steps.push(newStep);
    return newStep;
  },
  deleteStage: (parent, { id }, { db }) => {
    db.stages = db.stages.filter((stage) => stage.id !== id);
    db.steps = db.steps.map((step) => {
      if (step.stageId === id) {
        return {
          ...step,
          stageId: null,
        };
      } else {
        return step;
      }
    });
    return true;
  },
  deleteStep: (parent, { id }, { db }) => {
    db.steps = db.steps.filter((step) => step.id !== id);
    return true;
  },
  updateStage: (parent, { id, input }, { db }) => {
    const index = db.stages.findIndex((stage) => stage.id === id);
    if (index === -1) return null;
    db.stages[index] = Object.assign(db.stages[index], input);
    return db.stages[index];
  },
  updateStep: (parent, { id, input }, { db }) => {
    const index = db.steps.findIndex((step) => step.id === id);
    if (index === -1) return null;
    db.steps[index] = Object.assign(db.steps[index], input);
    return db.steps[index];
  },
};
