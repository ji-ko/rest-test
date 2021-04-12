const ul = document.querySelector("#data");

async function fetchData() {
  const response = await fetch("http://localhost:3333/reviews");
  const reviews = await response.json();
  return reviews;
}

fetchData().then((reviews) => {
  for (let item of reviews) {
    const li = document.createElement("li");
    const btnDel = document.createElement("button");
    btnDel.innerHTML = `x`;
    btnDel.addEventListener("click", async () => {
      const deleteConfirmation = confirm("まじで? (｡╯︵╰｡)");
      if (!deleteConfirmation) return;
      await fetch(`http://localhost:3333/reviews/`, {
        method: "delete",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          kanji: item.kanji,
        }),
      }).then((res) => console.log(res));
      location.reload();
    });
    btnDel.classList.add("btnDel");
    li.innerHTML = `<a href="https://jisho.org/search/${item.kanji}" target="_blank" rel="noopener">${item.kanji}</a> 「${item.kana}」`;
    li.appendChild(btnDel);
    ul.appendChild(li);
  }
});
