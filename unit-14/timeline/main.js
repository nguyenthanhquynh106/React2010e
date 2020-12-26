const timeline = [
  {
    year: '1934',
    content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium'
  },
  {
    year: '1937',
    content: 'Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. Suspendisse finibus mauris et bibendum molestie. Aenean ex agus, vatius et pulvinar in, pretium non nisi.'
  },
  {
    year: '1940',
    content: 'Porin iaculis, nibh eget sfficitur varuis, libero tellus porta dolor, at pulvinar tortor ex eget ligula, Integer eu dapibus arcu, sit amet sollicitudin eros.'
  },
]

const show = () => {
  const body = document.body
  const container = document.createElement('div')
  container.setAttribute('id', 'container')
  body.insertBefore(container, body.childNodes[0])

  const ul = document.createElement('ul')
  ul.classList.add('timeline')
  container.appendChild(ul)
  timeline.forEach((item, index) => {
    const li = document.createElement('li')
    const ribbon = document.createElement('div')
    if (!(index % 2)) {
      li.classList.add('right')
      ribbon.classList.add('ribbon-right')
    } else {
      li.classList.add('left')
      ribbon.classList.add('ribbon-left')
    }
    li.appendChild(ribbon)
    const text = document.createElement('div')
    text.classList.add('text')
    ribbon.appendChild(text)
    const h2 = document.createElement('h2')
    h2.innerText = item.year
    const span = document.createElement('span')
    span.innerText = item.content
    text.appendChild(h2)
    text.appendChild(span)
    ul.appendChild(li)
  })
}
show()
  