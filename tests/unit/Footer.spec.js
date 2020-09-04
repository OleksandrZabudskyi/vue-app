import { mount, createLocalVue } from "@vue/test-utils";
import Footer from "../../src/components/Footer.vue";
import Vuetify from "../../src/plugins/vuetify";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("Footer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Footer, {
      localVue: localVue,
      vuetify: Vuetify
    });
  });

  it("should show logo in footer ", () => {
    const logo = wrapper.find(".footer__logo");

    expect(logo.text()).toBe("NETFLIXRoulett");
  });
});
