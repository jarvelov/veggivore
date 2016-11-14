import NavigationMenuItem from '../NavigationMenuItem'

// TODO: Replace Mockup navigation items with actual data from the API
const getNavigationMenuItems = () => {
  return [{
    uri: '/',
    label: 'Home',
    icon: 'home'
  }, {
    uri: '/page',
    label: 'Page',
    icon: 'mail'
  }]
}

const NavigationMenu = {
  name: 'NavigationMenu',
  render (h) {
    let navigationMenuItems = getNavigationMenuItems().map(item => {
      return <NavigationMenuItem uri={item.uri} label={item.label} icon={item.icon}/>
    })

    return (
      <div class="ui attached stackable menu">
        <div class="ui container">
          { navigationMenuItems }
        </div>
      </div>
    )
  }
}

export default NavigationMenu
