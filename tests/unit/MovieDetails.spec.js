import { shallowMount, createLocalVue } from "@vue/test-utils";
import MovieDetails from "../../src/components/MovieDetails.vue";
import Vuetify from "../../src/plugins/vuetify";

const localVue = createLocalVue();
localVue.use(Vuetify);

describe("MovieDetails", () => {
  let wrapper;

  const props = {
    movie: {
      poster: "/poster.png",
      title: "Four rooms",
      genre: "Action and Adventure",
      rating: 4.3,
      duration: 140,
      releaseYear: 2014,
      description: "This movie features"
    }
  };

  beforeEach(() => {
    wrapper = shallowMount(MovieDetails, {
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

  it("should have movie rating ", () => {
    const rating = wrapper.vm.movie.rating;

    expect(rating).toBe(4.3);
  });

  it("should have movie duration ", () => {
    const duration = wrapper.vm.movie.duration;

    expect(duration).toBe(140);
  });

  it("should have movie release year ", () => {
    const releaseYear = wrapper.vm.movie.releaseYear;

    expect(releaseYear).toBe(2014);
  });

  it("should have movie description", () => {
    const description = wrapper.vm.movie.description;

    expect(description).toBe("This movie features");
  });
});
