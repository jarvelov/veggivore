const NavigationMenuItem = {
  name: 'NavigationMenuItem',
  props: {
    uri: {
      String,
      required: true
    },
    label: {
      String,
      required: true
    },
    icon: String
  },
  functional: true,
  render (h, ctx) {
    const itemProperties = (item) => {
      return (
        <router-link to={item.uri} class="item">
          <i class={'icon ' + item.icon}></i>
          <span>{item.label}</span>
        </router-link>
      )
    }

    return itemProperties(ctx.props)
  }
}

export default NavigationMenuItem
