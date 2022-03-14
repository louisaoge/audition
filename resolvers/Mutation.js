const { v4: uuid } = require("uuid");
exports.Mutation = {
  addPhase: (parent, { input }, { db }) => {
    const { title } = input;
    const newPhase = {
      id: uuid(),
      title,
    };
    db.phases.push(newPhase);
    return newPhase;
  },
  addTask: (parent, { input }, { db }) => {
    const newTask = {
      id: uuid(),
      ...input,
    };
    db.tasks.push(newTask);
    return newTask;
  },
  deletePhase: (parent, { id }, { db }) => {
    db.phases = db.phases.filter((phase) => phase.id !== id);
    db.tasks = db.tasks.map((task) => {
      if (task.phaseId === id) {
        return {
          ...task,
          phaseId: null,
        };
      } else {
        return task;
      }
    });
    return true;
  },
  deleteTask: (parent, { id }, { db }) => {
    db.tasks = db.tasks.filter((task) => task.id !== id);
    return true;
  },
  updatePhase: (parent, { id, input }, { db }) => {
    const index = db.phases.findIndex((phase) => phase.id === id);
    if (index === -1) return null;
    db.phases[index] = Object.assign(db.phases[index], input);
    return db.phases[index];
  },
  updateTask: (parent, { id, input }, { db }) => {
    const index = db.tasks.findIndex((task) => task.id === id);
    if (index === -1) return null;
    db.tasks[index] = Object.assign(db.tasks[index], input);
    return db.tasks[index];
  },
};
