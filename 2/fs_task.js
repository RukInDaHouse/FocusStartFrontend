const input = document.querySelector('input')
const paragraphs = document.querySelectorAll('a')

input.addEventListener('input', e => {
  const searchTerm = e.target.value
  const regex = new RegExp(searchTerm, 'g')
  const replacement = `<span class="highlighted">${ searchTerm }</span>`

  for (const a of paragraphs) {
    if (a.innerText.match(regex) == null) {
      a.style.display = 'none';
    } else {
      a.style.display = 'block';
      a.innerHTML = a.innerText.replace(regex, replacement)
    }
  }

  let text = document.body.textContent
  let separator = searchTerm
  let number = WordCount(text, separator)
  //console.log("found ",number," times")
  document.getElementById('result').textContent = number
})

function WordCount(str, separator) {
  return (str.split(separator).length - 1);
}