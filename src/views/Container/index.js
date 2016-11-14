const ViewContainer = {
  name: 'ViewContainer',
  render (h) {
    return (
      <div class="ui raised very padded text container segment">
        <router-view></router-view>
      </div>
    )
  }
}

export default ViewContainer
