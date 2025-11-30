const url = `https://api.themoviedb.org/3/movie/${502356}`;
const main = document.querySelector("main");
//

axios
  .get(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOGI5NzZlYTg3YzEzMGU3MGVkYWViMGZmM2NmNzU2YSIsIm5iZiI6MTc0Mzc0OTY3My4wMTksInN1YiI6IjY3ZWY4MjI5NDhkNmYwMzFiMGFjZjU5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cMa_GThWqJ9P32lspViuOp8HVDwTuCBkrqbvpz27H9s",
    },
  })
  .then((res) => {
    const data = res.data;
    console.log(data);
    const img = document.createElement("img");
    const loop = data.genres.map((item) => {
      return item.name;
    });

    const src = "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg";
    img.src = `https://image.tmdb.org/t/p/w200/${src}`;
    const p1 = document.createElement("p");
    p1.textContent = `Genres: ${loop.join(", ")}`;
    // p1.textContent = loop.join(", ");
    const p2 = document.createElement("p");
    p2.textContent = `Rating: ${data.vote_average}`;
    p2.style.fontWeight = "800";

    p1.style.marginTop = "10px";
    img.alt = data.title;
    main.append(img, p1, p2);
  })
  .catch((err) => {
    console.log(err);
  });
