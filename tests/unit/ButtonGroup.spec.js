import { mount, createLocalVue } from "@vue/test-utils";
import ButtonGroup from "../../src/components/ButtonGroup.vue";
import Vuetify from "../../src/plugins/vuetify";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("ButtonGroup", () => {
  let wrapper;
  const props = {
    leftButtonName: "TITLE",
    rightButtonName: "GENRE"
  };

  beforeEach(() => {
    wrapper = mount(ButtonGroup, {
      localVue: localVue,
      vuetify: Vuetify,
      propsData: props
    });
  });

  afterEach(() => {
    wrapper.destroy;
  });

  it("should show leftButtonName in ButtonGroup ", () => {
    const btn = wrapper.findAll(".v-btn > span").at(0);

    expect(btn.text()).toBe("TITLE");
  });

  it("should show rightButtonName in ButtonGroup ", () => {
    const btn = wrapper.findAll(".v-btn > span").at(1);
    expect(btn.text()).toBe("GENRE");
  });
});
