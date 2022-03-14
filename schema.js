const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: [String!]
    steps(filter: StepsFilterInput): [Step!]!
    step(id: ID!): Step
    stages: [Stage!]!
    stage(id: ID!): Stage
  }

  type Mutation {
    addStage(input: AddStageInput!): Stage!
    addStep(input: AddStepInput!): Step!
    deleteStage(id: ID!): Boolean!
    deleteStep(id: ID!): Boolean!
    updateStage(id: ID!, input: UpdateStageInput!): Stage
    updateStep(id: ID!, input: UpdateStepInput!): Step
  }

  type Step {
    id: ID!
    title: String!
    isComplete: Boolean!
    stage: Stage!
  }

  type Stage {
    id: ID!
    title: String!
    steps(filter: StepsFilterInput): [Step!]!
  }

  input StepsFilterInput {
    isComplete: Boolean
  }

  input AddStageInput {
    title: String!
  }
  input AddStepInput {
    title: String!
    isComplete: Boolean!
    stageId: ID
  }

  input UpdateStageInput {
    title: String!
  }
  input UpdateStepInput {
    title: String
    isComplete: Boolean
    stageId: ID
  }
`;
