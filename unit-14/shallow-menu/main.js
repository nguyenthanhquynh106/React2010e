const shallowMenu = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    children: [
      {
        title: 'Tool',
        link: '/dashboard/tool'
      },
      {
        title: 'Reports',
        link: '/dashboard/reports'
      },
      {
        title: 'Analytics',
        link: '/dashboard/analytics'
      },
      {
        title: 'Code Blocks',
        link: '/dashboard/code-blocks'
      },
    ]
  },
  {
    title: 'Sales',
    link: '/sales',
    children: [
      {
        title: 'New Sales',
        link: '/sales/new-sales'
      },
      {
        title: 'Expired Sales',
        link: '/sales/expired-sales'
      },
      {
        title: 'Sales Reports',
        link: '/sales/sales-reports'
      },
      {
        title: 'Deliveries',
        link: '/sales/deliveries'
      },
    ]
  },
  {
    title: 'Messages',
    link: '/messages',
    children: [
      {
        title: 'Inbox',
        link: '/messages/inbox'
      },
      {
        title: 'Outbox',
        link: '/messages/outbox'
      },
      {
        title: 'Sent',
        link: '/messages/sent'
      },
      {
        title: 'Archived',
        link: '/messages/archived'
      },
    ]
  },
  {
    title: 'Users',
    link: '/users',
    children: [
      {
        title: 'New User',
        link: '/users/new-user'
      },
      {
        title: 'User Groups',
        link: '/users/user-groups'
      },
      {
        title: 'Permissions',
        link: '/users/permissions'
      },
      {
        title: 'passwords',
        link: '/users/passwords'
      },
    ]
  },
  {
    title: 'Settings',
    link: '/settings',
    children: [
      {
        title: 'Databases',
        link: '/settings/databases'
      },
      {
        title: 'Design',
        link: '/settings/design'
      },
      {
        title: 'Change User',
        link: '/settings/change-user'
      },
      {
        title: 'Log Out',
        link: '/settings/log-out'
      },
    ]
  },
]
const icons = {
  Dashboard: '<i class="fas fa-tachometer-alt"></i>',
  Sales: '<i class="fas fa-truck-moving"></i>',
  Messages: '<i class="fas fa-envelope"></i>',
  Users: '<i class="fas fa-user-friends"></i>',
  Settings: '<i class="fas fa-cogs"></i>'
}
const iconArrow = '<i class="fas fa-angle-right"></i>'
const createItems = () => {
  const body = document.body
  const ul = document.createElement('ul')
  ul.setAttribute('id', 'shallow-list')
  body.insertBefore(ul, body.childNodes[0])

  shallowMenu.forEach(parent => {
    const li = document.createElement('li')
    li.classList.add('shallow-item')
    const att = document.createAttribute("onclick")
    att.value = 'show(event)'
    li.setAttributeNode(att)

    const a = document.createElement('a')
    a.setAttribute('href', parent.link)
    const spanIcon = document.createElement('span')
    for (let key in icons) {
      if (key === parent.title) {
        spanIcon.insertAdjacentHTML('afterbegin', icons[key])
        spanIcon.classList.add('icon')
      }
    }
    const spanText = document.createElement('span')
    spanText.innerText = parent.title
    spanText.classList.add('text')
    const spanIconArrow = document.createElement('span')
    spanIconArrow.insertAdjacentHTML('afterbegin', iconArrow)
    spanIconArrow.classList.add('icon-arrow')
    a.appendChild(spanIcon)
    a.appendChild(spanText)
    a.appendChild(spanIconArrow)

    const subUl = document.createElement('ul')
    subUl.classList.add('sub-shallow')
    parent.children.forEach(child => {
      const subLi = document.createElement('li')
      const subA = document.createElement('a')
      subA.innerText = child.title
      subA.setAttribute('href', child.link)
      subLi.appendChild(subA)
      subUl.appendChild(subLi)
    })

    li.appendChild(a)
    li.appendChild(subUl)

    ul.appendChild(li)
  })
}
createItems()
const show = e => {
  e.preventDefault()
  const li = e.currentTarget
  const i = li.querySelector('a span:last-child i')
  const isRotate = i.style.transform === '' ? 'rotate(90deg)' : ''
  i.style.transform = isRotate

  const ul = li.querySelector('ul')
  const isDisplay = ul.style.display === 'block' ? 'none' : 'block'
  ul.style.display = isDisplay
}
  