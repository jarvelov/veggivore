import ViewContainer from 'views/Container'
import { NavigationMenu } from 'components/Navigation'

const App = {
  name: 'App',
  render (h) {
    return (
      <div id="app">
        <NavigationMenu/>
        <ViewContainer/>
      </div>
    )
  }
}

export default App
