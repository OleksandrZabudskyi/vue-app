import { shallowMount, createLocalVue } from "@vue/test-utils";
import SearchBar from "../../src/components/SearchBar.vue";
import Vuetify from "../../src/plugins/vuetify";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("SearchBar", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(SearchBar, {
      localVue: localVue,
      vuetify: Vuetify,
      data() {
        return { searchText: "Find movie" };
      }
    });
  });

  afterEach(() => {
    wrapper.destroy;
  });

  it("should show header with text in SearchBar ", () => {
    const header = wrapper.find(".search-bar__header");

    expect(header.text()).toBe("FIND YOUR MOVIE");
  });

  it("should show button with text in SearchBar ", () => {
    const btn = wrapper.find(".search-bar__button");

    expect(btn.text()).toBe("SEARCH");
  });

  it("should show filter text in SearchBar ", () => {
    const filter = wrapper.find(".search-bar__buttons--filter");

    expect(filter.text()).toBe("SEARCH BY");
  });
});
