const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: [String!]
    tasks(filter: TasksFilterInput): [Task!]!
    task(id: ID!): Task
    phases: [Phase!]!
    phase(id: ID!): Phase
  }

  type Mutation {
    addPhase(input: AddPhaseInput!): Phase!
    addTask(input: AddTaskInput!): Task!
    deletePhase(id: ID!): Boolean!
    deleteTask(id: ID!): Boolean!
    updatePhase(id: ID!, input: UpdatePhaseInput!): Phase
    updateTask(id: ID!, input: UpdateTaskInput!): Task
  }

  type Task {
    id: ID!
    title: String!
    isComplete: Boolean!
    phase: Phase!
  }

  type Phase {
    id: ID!
    title: String!
    tasks(filter: TasksFilterInput): [Task!]!
  }

  input TasksFilterInput {
    isComplete: Boolean
  }

  input AddPhaseInput {
    title: String!
  }
  input AddTaskInput {
    title: String!
    isComplete: Boolean!
    phaseId: ID
  }

  input UpdatePhaseInput {
    title: String!
  }
  input UpdateTaskInput {
    title: String
    isComplete: Boolean
    phaseId: ID
  }
`;
