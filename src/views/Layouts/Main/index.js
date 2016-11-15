import ViewLayoutFooter from 'views/Layouts/Footer'

const ViewLayoutMain = {
  name: 'ViewLayoutMain',
  functional: true,
  render (h, ctx) {
    let slots = ctx.slots()

    return (
      <div class="container main">
        <header>
          {slots.header}
        </header>
        <main>
          {slots.main}
        </main>
        <footer>
          <ViewLayoutFooter/>
        </footer>
      </div>
    )
  }
}

export default ViewLayoutMain
