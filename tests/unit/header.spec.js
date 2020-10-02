import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from "../../src/components/Header.vue";
import Vuetify from "../../src/plugins/vuetify";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(Header, {
      localVue: localVue,
      vuetify: Vuetify
    });
  });

  afterEach(() => {
    wrapper.destroy;
  });

  it("should show logo in header ", () => {
    const logo = wrapper.find(".header__logo");

    expect(logo.text()).toBe("NETFLIXRoulett");
  });

  it("should show magnify icon ", () => {
    const icon = wrapper.find(".mdi-magnify");

    expect(icon).toBeTruthy();
  });
});
