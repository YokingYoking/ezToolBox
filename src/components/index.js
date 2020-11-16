import { Button } from 'vant'
import { NavBar } from 'vant'
import { Tabbar, TabbarItem } from 'vant'
import { List } from 'vant'
import { Cell, CellGroup } from 'vant'
import { Toast } from 'vant'

const components = [
    Button,
    NavBar,
    Tabbar,
    TabbarItem,
    List,
    Cell,
    CellGroup,
    Toast,
]

const install = (Vue) => {
    components.forEach( component => {
        Vue.component(component.name, component)
    })
}
export default {
    install,
}