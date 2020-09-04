import { shallowMount, createLocalVue } from "@vue/test-utils";
import MovieCard from "../../src/components/MovieCard.vue";
import Vuetify from "../../src/plugins/vuetify";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("MovieCard", () => {
  let wrapper;

  const props = {
    movie: {
      poster: "/poster.png",
      title: "Four rooms",
      genre: "Action and Adventure",
      releaseYear: 2014
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
    const poster = wrapper.vm.movie.poster;

    expect(poster).toBe("/poster.png");
  });

  it("should have movie title ", () => {
    const title = wrapper.vm.movie.title;

    expect(title).toBe("Four rooms");
  });

  it("should have movie genre ", () => {
    const genre = wrapper.vm.movie.genre;

    expect(genre).toBe("Action and Adventure");
  });

  it("should have movie release year ", () => {
    const releaseYear = wrapper.vm.movie.releaseYear;

    expect(releaseYear).toBe(2014);
  });
});
