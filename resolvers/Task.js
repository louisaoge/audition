exports.Task = {
  phase: ({ phaseId }, args, { db }) => {
    return db.phases.find((phase) => phase.id === phaseId);
  },
};
