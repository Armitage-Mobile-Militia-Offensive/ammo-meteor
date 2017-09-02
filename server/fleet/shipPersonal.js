const typeDef = `
  type Ship {
    id: String!
    manufacturer: String!
    hull: String!
    variant: String!
    role: String
    loadout: [Component]
    ownerId: String!
    captainId: String!
    xoId: String
    cargo: Int!
    qdFuel: Int!
    assignments: [Assignment]
    payload: [Cargo]
  }

  type Cargo {
    id: String!
    name: String!
    destination: String
    value: Float
    aquiredAt: String
  }

  type Assignment {
    id: String!
    name: String!
    value: Float
    description: String!
    origin: String
    destination: String
    priority: String!
    issuerId: String!
    editableId: String!
  }

  type Component {
    id: String!
    name: String!
    slot: String
    manufacturer: String!
    value: Float
    valueType: String
    purchaseValue: Float
    currentValue: Float
  }
`;
