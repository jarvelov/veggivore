import ViewContainer from 'views/Container'
import ViewLayoutMain from 'views/Layouts/Main'
import { NavigationMenu } from 'components/Navigation'

const App = {
  name: 'App',
  render (h) {
    return (
      <div id="app">
        <ViewLayoutMain>
          <NavigationMenu slot="header"/>
          <ViewContainer slot="main"/>
        </ViewLayoutMain>
      </div>
    )
  }
}

export default App
