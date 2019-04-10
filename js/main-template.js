let index = {
  init: function () {
    // console.log(this)
    let me = this
    me.render()
    me.bind()
  },
  render: function () {
    let me = this
    me.test = document.getElementsByTagName('td')
  },
  bind: function () {
    let me = this
    let test = me.test
    for (let i = 0; i < test.length; i++) {
      const element = test[i];
      element.addEventListener('click', function (e) {
        this.children[0].setAttribute('contenteditable', true)
      })
    }
  },
  _do: function () {

  }
}

index.init()
module.export = index
