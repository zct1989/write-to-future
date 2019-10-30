import { ApolloClient } from 'apollo-boost'
import VueApollo from 'vue-apollo'


export default(){
  const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: '/simple/v1/awesomeTalksClone'
  })
  
  Vue.use(VueApollo)
}
