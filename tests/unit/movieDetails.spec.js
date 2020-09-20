import { shallowMount, createLocalVue } from "@vue/test-utils";
import MovieDetails from "../../src/components/MovieDetails.vue";
import Vuetify from "../../src/plugins/vuetify";
import Vuex from "vuex";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);
localVue.filter("convertToString", () => "Action and Adventure");

describe("MovieDetails", () => {
  let wrapper;

  const props = {
    movie: {
      id: 12345
    }
  };

  beforeEach(() => {
    wrapper = shallowMount(MovieDetails, {
      localVue: localVue,
      vuetify: Vuetify,
      propsData: props,
      store: new Vuex.Store({
        modules: {
          movies: {
            namespaced: true,
            state: {
              movies: []
            },
            getters: {
              getMovieById: () => () => {
                return {
                  id: 12345,
                  poster_path: "/poster.png",
                  title: "Four rooms",
                  genres: ["Action and Adventure"],
                  vote_count: 4.3,
                  release_date: 2014,
                  overview: "This movie features"
                };
              }
            }
          }
        }
      })
    });
  });

  afterEach(() => {
    wrapper.destroy;
  });

  it("should have movie title ", () => {
    const title = wrapper.find(".movie-details__card__title");

    expect(title.text()).toBe("Four rooms");
  });

  it("should have movie genre ", () => {
    const genres = wrapper.find(".movie-details__card__subtitle");

    expect(genres.text()).toBe("Action and Adventure");
  });

  it("should have movie vote count ", () => {
    const rating = wrapper.find(".movie-details__card__rating--green");

    expect(rating.text()).toBe("4.3");
  });

  it("should have movie release year ", () => {
    const releaseYear = wrapper.find(".movie-details__card__release");

    expect(releaseYear.text()).toBe("2014");
  });

  it("should have movie description", () => {
    const description = wrapper.find(".movie-details__card__description");

    expect(description.text()).toBe("This movie features");
  });
});
