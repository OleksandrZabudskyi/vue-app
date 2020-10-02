import { shallowMount, createLocalVue } from "@vue/test-utils";
import MovieSearchResult from "../../src/components/MovieSearchResult.vue";
import Vuetify from "../../src/plugins/vuetify";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(MovieSearchResult, {
      localVue: localVue,
      vuetify: Vuetify,
      store: new Vuex.Store({
        modules: {
          movies: {
            namespaced: true,
            state: {
              movies: []
            }
          }
        }
      })
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
