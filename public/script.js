const ul = document.querySelector("#data");

async function fetchData() {
  const response = await fetch("http://localhost:3333/reviews");
  const reviews = await response.json();
  return reviews;
}

fetchData().then((reviews) => {
  for (let item of reviews) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = `x`;
    delBtn.addEventListener("click", async () => {
      const response = await fetch(`http://localhost:3333/reviews/`, {
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
    delBtn.classList.add("btn", "btn-danger", "btn-sm");
    li.innerHTML = `<a href="https://jisho.org/search/${item.kanji}" target="_blank" rel="noopener">${item.kanji}</a> 「${item.kana}」`;
    li.appendChild(delBtn);
    ul.appendChild(li);
  }
});
