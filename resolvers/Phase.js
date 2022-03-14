exports.Phase = {
  tasks: ({ id: phaseId }, { filter }, { db }) => {
    const phaseTask = db.tasks.filter((task) => task.phaseId === phaseId);
    let filteredPhaseTasks = phaseTask;
    if (filter) {
      if (filter.isComplete === true) {
        filteredPhaseTasks = filteredPhaseTasks.filter((task) => {
          return task.isComplete;
        });
      }
    }
    return filteredPhaseTasks;
  },
};
