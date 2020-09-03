import { shallowMount, createLocalVue } from "@vue/test-utils";
import MovieSearchResult from "../../src/components/MovieSearchResult.vue";
import Vuetify from "../../src/plugins/vuetify";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MovieSearchResult, {
      localVue: localVue,
      vuetify: Vuetify
    });
  });

  afterEach(() => {
    wrapper.destroy;
  });

  it("should show sort text in MovieSearchResult ", () => {
    const filter = wrapper.find(".result-bar__sort");

    expect(filter.text()).toBe("SORT BY");
  });
});
