import { shallowMount, createLocalVue } from "@vue/test-utils";
import MovieDetails from "../../src/components/MovieDetails.vue";
import Vuetify from "../../src/plugins/vuetify";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Details from "@/views/Details";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.use(Vuex);
localVue.use(VueRouter);
localVue.filter("convertToString", () => "Action and Adventure");

describe("MovieDetails", () => {
  let wrapper;

  const props = {
    movie: {
      id: 12345,
      poster_path: "/poster.png",
      title: "Four rooms",
      genres: ["Action and Adventure"],
      release_date: "2014-10-20",
      vote_average: 4.3,
      overview: "This movie features"
    }
  };

  const router = new VueRouter({
    routes: [{ path: "/movies/:id", name: "details", component: Details }]
  });

  beforeEach(() => {
    wrapper = shallowMount(MovieDetails, {
      router: router,
      localVue: localVue,
      vuetify: Vuetify,
      propsData: props,
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
