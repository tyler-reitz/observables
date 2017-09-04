class Observable {

  constructor() {
    this.observers = []
  }

  subscribe(f) {
    this.observers.push(f)
  }
  
  unsubscribe(f) {
    this.observers.filter(subscriber => subscriber !== f)
  }
  
  notify(data) {
    this.observers.forEach(observer => observer(data))
  }
  
}

// Usage

const input = document.querySelector('.js-input')
const p1 = document.querySelector('.js-p1')
const p2 = document.querySelector('.js-p2')
const p3 = document.querySelector('.js-p3')

const updateP1 = text => p1.textContent = text
const updateP2 = text => p2.textContent = text
const updateP3 = text => p3.textContent = text

const headingsObserver = new Observable()

headingsObserver.subscribe(updateP1)
headingsObserver.subscribe(updateP2)
headingsObserver.subscribe(updateP3)

input.addEventListener('keyup', e => {
  headingsObserver.notify(e.target.value)
})