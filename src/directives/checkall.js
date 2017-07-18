let checkall = {
  // checkAll发生更改时
  update (el, binding) {
    if (binding.value.all === binding.oldValue.all) {} else {
      if (binding.value.all) {
        binding.value.item.forEach((item) => {
          item.checked = true
        })
      } else {
        binding.value.item.forEach((item) => {
          item.checked = false
        })
      }
    }
  }
}

export default checkall
