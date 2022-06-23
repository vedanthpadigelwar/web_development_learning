const graphql = require ('graphql');

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema

} = graphql;

//create types
const UserType = new GraphQLObjectType({
    name : 'User',
    description: 'Documentation for user',
    fields : () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        age : {type: GraphQLInt}
    })
});

//RootQuery
const  RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    description: 'Description',
    fields: {
        user: {
            type: UserType,
            args: { id: {type: GraphQLString}},
            resolve(parent,args){
                //we resolve with data from data source
                // we get and return data

            }
        }
    }
});


module.exports = new GraphQLSchema({
    query : RootQuery
})