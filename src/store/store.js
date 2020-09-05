import Vue from "vue";

export const store = Vue.observable({
  data: [
    {
      id: "",
      poster: "/poster.png",
      title: "Four rooms",
      genre: "Action and Adventure",
      rating: 4.3,
      duration: 140,
      releaseYear: 2014,
      producer: "Quentin Tarantino",
      description:
        "This movie features the collaborative directorial efforts of four\n" +
        "            new filmmakers, each of whom directs a segment of this comedy. It's New Year's Eve at the Mon Signor\n" +
        "            Hotel, a former grand old Hollywood hotel, now fallen upon hard times. Often using physical comedy and\n" +
        "            sight gags, this movie chronicles the slapstick misadventures of Ted, the Bellhop.",
      selected: false
    }
  ]
});

export const mutations = {
  setData(item) {
    store.data.push(item);
  }
};
