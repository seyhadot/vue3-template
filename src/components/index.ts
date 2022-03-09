import type { App } from 'vue'
import Card from './Card.vue'

const components = [
  Card,
]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default install