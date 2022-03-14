exports.Query = {
  hello: (parent, args, context) => {
    return ["World", "my", "friend"];
  },
  tasks: (parent, { filter }, { db }) => {
    let filteredTasks = db.tasks;

    if (filter) {
      const { isComplete } = filter;
      if (isComplete === true) {
        filteredTasks = filteredTasks.filter((task) => {
          return task.isComplete;
        });
      }
    }
    return filteredTasks;
  },
  task: (parent, { id }, { db }) => {
    return db.tasks.find((task) => task.id === id);
  },
  phases: (parent, args, { db }) => db.phases,
  phase: (parent, { id }, { db }) => {
    return db.phases.find((phase) => phase.id === id);
  },
};
