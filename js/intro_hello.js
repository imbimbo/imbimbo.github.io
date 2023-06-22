window.onload = async function init () {
  const node = document.querySelector("#type-text")
  
  await sleep(1000)
  node.innerText = ""
  
  while (true) {
    await node.type('Hello, ')
    await sleep(1000)
    await node.type('World!')
    await sleep(2000)
    await node.delete('Hello, World!')
    await node.type('I am Felipe')
    await sleep(2000)
    await node.delete('Felipe')
    await sleep(500)
    await node.type('a coder')
    await sleep(2000)
    await node.delete('I am a developer')
  }
}


// Source code 🚩

const sleep = time => new Promise(resolve => setTimeout(resolve, time))

class TypeAsync extends HTMLSpanElement {
  get typeInterval () {
    const randomMs = 100 * Math.random()
    return randomMs < 50 ? 10 : randomMs
  }
  
  async type (text) {
    for (let character of text) {
      this.innerText += character
      await sleep(this.typeInterval)
    }
  }
  
  async delete (text) {
    for (let character of text) {
      this.innerText = this.innerText.slice(0, this.innerText.length -1)
      await sleep(this.typeInterval)
    }
  }
}

customElements.define('type-async', TypeAsync, { extends: 'span' })


init()