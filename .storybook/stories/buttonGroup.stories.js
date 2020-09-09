import {storyFactory} from '../util/helpers'

import ButtonGroup from "../../src/components/ButtonGroup";

const story = storyFactory({
    components: ButtonGroup
})

export default {
    component: ButtonGroup,
    title: 'Button group'
}

export const asButtonGroupForResultBar = () => story({
    components: {ButtonGroup},
    template: '<button-group left-button-name="TITLE" right-button-name="GENRE"/>'
})

export const asButtonGroupForSearch = () => story({
    components: {ButtonGroup},
    template: '<button-group left-button-name="RELEASE DATE" right-button-name="RATING"/>'
})
