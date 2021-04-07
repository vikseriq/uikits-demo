# Vue-based UI Kits demo

Purpose: showcases of the same app on different UI frameworks
 without extra code to leverage maximum from built-in kits' components & styles.

## Demo

Build with Vite for Vue 2.
 Each kit composed into separate chunk and loads in iframe – it prevents global stylesheet overlap.
 Also kits can be accessed via direct path.

## Demo app structure

Three tabs. First is plain form, second is textarea with modal, third with collapsible content. 

## Frameworks

CSS Framework | Vue components | Showcase version
--- | --- | ---
[Material Design](https://material.io/design) | `vuetify` [Vuetify](https://vuetifyjs.com/en/getting-started/installation/) | 2.4
[Bootstrap](https://getbootstrap.com/) | `bootstrap-vue` [Vue Bootstrap](https://bootstrap-vue.org/docs) | 2.21
[Bulma](https://bulma.io/) | `buefy` [Buefy](https://buefy.org/documentation/start/) | 0.9.5
[Element UI](https://element.eleme.io/#/en-US) | `element-ui` [Element](https://element.eleme.io/#/en-US/component/installation) | 2.15 (WIP)
[Ant Design](https://ant.design/) | ~~ant-design-vue~~ [~~Ant Design Vue~~](https://antdv.com/docs/vue/getting-started/) | 1.7 demo declined due [Vue 2 incompatibility](https://github.com/vueComponent/ant-design-vue/issues/2745#issuecomment-813787461)
