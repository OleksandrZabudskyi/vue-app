import { shallowMount, createLocalVue } from "@vue/test-utils";
import MovieCard from "../../src/components/MovieCard.vue";
import Vuetify from "../../src/plugins/vuetify";

const localVue = createLocalVue();
localVue.use(Vuetify);
localVue.filter("convertToString", () => "Action and Adventure");
localVue.directive("isInViewPort", data => data);

describe("MovieCard", () => {
  let wrapper;

  const props = {
    movie: {
      poster_path: "/poster.png",
      title: "Four rooms",
      genres: ["Action and Adventure"],
      release_date: 2014
    }
  };

  beforeEach(() => {
    wrapper = shallowMount(MovieCard, {
      localVue: localVue,
      vuetify: Vuetify,
      propsData: props
    });
  });

  afterEach(() => {
    wrapper.destroy;
  });

  it("should have movie poster path", () => {
    const poster = wrapper.vm.movie.poster_path;

    expect(poster).toBe("/poster.png");
  });

  it("should have movie title ", () => {
    const title = wrapper.find(".movie-card__title");

    expect(title.text()).toBe("Four rooms");
  });

  it("should convert movie genres to string", () => {
    const subtitle = wrapper.find(".movie-card__subtitle");

    expect(subtitle.text()).toBe("Action and Adventure");
  });

  it("should have movie release year ", () => {
    const releaseYear = wrapper.find(".movie-card__release");

    expect(releaseYear.text()).toBe("2014");
  });
});
