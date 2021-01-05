const users = [
  {
    fullName: "Nguyễn Văn Nam",
    gender: "Nữ",
    age: 12
  },
  {
    fullName: "Nguyễn Thị Nữ",
    gender: "Nam",
    age: 16
  },
  {
    fullName: "	Nguyễn Ngọc Duy",
    gender: "Nữ",
    age: 16
  },
  {
    fullName: "Nguyễn Thị Duy",
    gender: "Nam",
    age: 15
  }
]
const container = document.querySelector('.container')
// edit-table
const editTable = document.createElement('div')
container.appendChild(editTable)
editTable.setAttribute('id', 'edit-table')
editTable.innerHTML = `
    <button type="button" id="btn-add" class="btn btn-primary" onclick="addUser(event)">Add</button>
    <button type="button" id="btn-delete" class="btn btn-danger" onclick="deleteUsers(event)">Delete</button>
`
// user-table
const userTable = document.createElement('table')
container.appendChild(userTable)
userTable.setAttribute('id', 'user-table')
userTable.classList.add('table', 'table-striped')
thead = document.createElement('thead')
userTable.appendChild(thead)
thead.innerHTML = `
    <tr>
        <th><input type="checkbox" name="" id=""></th>
        <th>ID</th>
        <th>Full Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Action</th>
    </tr>
`
tbody = document.createElement('tbody')
userTable.appendChild(tbody)
// render users
const render = array => {
  let html = ''
  array.forEach((user, index) => {
    html += `
          <tr id="row">
            <td><input type="checkbox" name="" id=""></td>
            <td id="">${index + 1}</td>
            <td id="">${user.fullName}</td>
            <td id="">${user.gender}</td>
            <td id="">${user.age}</td>
            <td id="">
                <button type="button" id="" value="Edit" class="btn btn-primary btn-sm btn-edit" onclick="editUser(event)">Edit</button>
                <button type="button" id="" value="Save" class="btn btn-success btn-sm btn-save" onclick="saveUser(event)">Save</button>
                <button type="button" id="" value="Cancel" class="btn btn-warning btn-sm btn-cancel" onclick="cancelUser(event)">Cancel</button>
                <button type="button" id="" value="Delete" class="btn btn-danger btn-sm btn-delete" onclick="deleteUser(event)">Delete</button>
            </td>
          </tr>
        `
  })
  tbody.innerHTML = html
}
render(users)
// Xử lý button Add
const btnAdd = document.getElementById('btn-add')
const addUser = e => {
  btnAdd.setAttribute('data-toggle', 'modal')
  btnAdd.setAttribute('data-target', '#myModal')
  const divModal = document.createElement('div')
  e.target.parentNode.appendChild(divModal)
  divModal.setAttribute('id', 'myModal')
  divModal.classList.add('modal', 'fade')
  divModal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
    
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Nhập thông tin</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body">
          <form action="">
            <div class="form-group">
              <label for="full-name">Full Name:</label>
              <input type="text" class="form-control" id="full-name">
            </div>
            <div class="form-group">
              <label for="gender">Gender:</label>
              <select class="form-control" id="gender">
                <option>Nam</option>
                <option>Nữ</option>
              </select>
            </div>
            <div class="form-group">
              <label for="age">Age:</label>
              <input type="number" class="form-control" id="age">
            </div>
          </form>
        </div>

        <!-- Modal footer -->
        <div class="modal-footer">
        <button type="submit" class="btn btn-primary" id="submit">Submit</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      
      </div>
    </div>
    `
  submit = document.getElementById('submit')
  submit.addEventListener('click', () => {
    const user = {
      fullName: document.getElementById('full-name').value,
      gender: document.getElementById('gender').value,
      age: document.getElementById('age').value
    }
    if (user.fullName === '' || user.age == '') {
      alert('Bạn chưa nhập đầy đủ thông tin')
    } else {
      users.push(user)
      render(users)
    }
  })
}
// Xử lý button Delete nhiều hàng
const btnDeletes = document.getElementById('btn-delete')
const deleteUsers = e => {
  if (confirm('Bạn có muốn xóa các user?')) {
    const selectAll = thead.querySelector('input[type="checkbox"]')
    if (selectAll.checked) {
      users.splice(0, users.length)
    }
    const select = tbody.querySelectorAll('input[type="checkbox"]')
    select.forEach((item, index) => {
      const id = Number(item.parentNode.parentNode.querySelector('td:nth-child(2)').innerText)
      if (item.checked && index === id - 1) {
        users.splice(index, 1)
      }
    })
  }
  render(users)
}
// Xử lý button Edit
const editUser = e => {
  e.target.style.display = "none"
  const parentEdit = e.target.parentNode
  parentEdit.querySelector('.btn-save').style.display = "inline-block"
  parentEdit.querySelector('.btn-cancel').style.display = "inline-block"

  const editName = parentEdit.parentNode.querySelector('td:nth-child(3)')
  const oldName = parentEdit.parentNode.querySelector('td:nth-child(3)').innerText
  editName.innerHTML = `<input type="text" class="form-control" id="full-name" value="${oldName}">`
  const editGender = parentEdit.parentNode.querySelector('td:nth-child(4)')
  editGender.innerHTML = `
    <select class="form-control" id="gender">
      <option>Nam</option>
      <option>Nữ</option>
    </select>
  `
  const editAge = parentEdit.parentNode.querySelector('td:nth-child(5)')
  const oldAge = parentEdit.parentNode.querySelector('td:nth-child(5)').innerText
  editAge.innerHTML = `<input type="number" class="form-control" id="age" value="${oldAge}">`
}
// Xử lý button Save
const saveUser = e => {
  const rowSave = e.target.parentNode.parentNode
  const newName = rowSave.querySelector('#full-name').value
  const newGender = rowSave.querySelector('#gender').value
  const newAge = rowSave.querySelector('#age').value
  const id = Number(rowSave.querySelector('td:nth-child(2)').innerText)
  users.forEach((user, index) => {
    if (index === id - 1) {
      user.fullName = newName
      user.gender = newGender
      user.age = newAge
    }
  })
  render(users)
}
// Xử lý button Cancel
const cancelUser = e => {
  render(users)
}
// Xử lý button Delete
const deleteUser = e => {
  const rowDelete = e.target.parentNode.parentNode
  const id = Number(rowDelete.querySelector('td:nth-child(2)').innerText) - 1
  if (confirm('Bạn có muốn xóa user này?')) {
    users.splice(id, 1)
  }
  render(users)
}
