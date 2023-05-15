const resolvers = {
  Query: {
    locations: (_, __, { dataSources }) => {
      return dataSources.locationsAPI.getAllLocations();
    },
    location: (_, { id }, { dataSources }) => {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
  Location: {
    __resolveReference: (parent, { dataSources }) => {
      console.log(parent);
      return dataSources.locationsAPI.getLocation(parent.id);
    }
  },
};

module.exports = resolvers;
