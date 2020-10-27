const input = document.querySelector('input')
const paragraphs = document.querySelectorAll('a')
const block = document.querySelector(".dropdown");

input.addEventListener('input', e => {
  const searchTerm = e.target.value
  const regex = new RegExp(searchTerm, 'g')
  const replacement = `<span class="highlighted">${ searchTerm }</span>`
  block.innerHTML = "";
  for (const a of paragraphs) {
    if (a.innerText.match(regex) && searchTerm) {
      a.innerText = a.innerText + "<br/>";
      a.innerHTML = a.innerText.replace(regex, replacement);    
      block.insertAdjacentElement("beforeend", a.cloneNode(true));
    }
  }
  let text = document.body.textContent
  let separator = searchTerm
  let number = WordCount(text, separator)
  document.getElementById('result').textContent = number
})

function WordCount(str, separator) {
  return (str.split(separator).length - 1);
}