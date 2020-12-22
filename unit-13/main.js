// Bài 1
// Hãy tạo 1 thẻ div có các event sau:
// Khi di chuột vào thẻ div: console log ra Hover lúc: ${currentTime}
//     Trong đó currentTime là thời gian tại thời điểm hover vào theo format DD-MM-YYYY hh:mm:ss
//     Vd: Hover lúc 20-12-2020 18:35:26
// Khi di chuột ra khỏi thẻ div: console log ra Out hover lúc ${currentTime}
//     currentTime là thời gian hiện tại như mô tả bên trên
const getDate = () => {
  let date = new Date()
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  const hour = String(date.getHours()).padStart(2, '0')
  const minute = String(date.getMinutes()).padStart(2, '0')
  const second = String(date.getSeconds()).padStart(2, '0')

  date = day + '-' + month + '-' + year + ' ' + hour + ':' + minute + ':' + second
  return date
}

// Bài 2
// Tạo 1 ô input text nhập account với yêu cầu sau:
// Chỉ cho phép nhập vào các ký tự từ a-z (chữ thường), và các số từ 0-9, và dấu gạch dưới
// Nếu có ký tự không hợp lệ, hãy alert cho người dùng biết cần phải nhập đúng
const validateAccount = e => {
  const regex = /^([a-z0-9_]{1,})$/g
  if (!regex.test(e.target.value)) {
    alert('Bạn đã nhập kí tự không hợp lệ')
  }
}

// Bài 3
// Tạo 1 ô input number để nhập số tiền
// Các ký tự được phép sử dụng là 0-9
// Số tiền không được phép âm
// Số tiền nhập tối đa là 1000
// Nếu có lỗi hãy alert ra lỗi phù hợp
const validateMoney = e => {
  const regex = /^(\-)?[0-9]+$/g
  if (e.keyCode === 13) {
    if (!regex.test(e.target.value)) {
      alert('Bạn đã nhập kí tự không hợp lệ')
    }
    if (e.target.value.charAt(0) === '-') {
      alert('Số tiền không được âm')
    }
    if (parseInt(e.target.value) > 1000) {
      alert('Số tiền nhập tối đa là 1000')
    }
  }
}

// Bài 5
// Hãy viết 1 hàm, bắt sự kiện người dùng bôi đen 1 phần tử nào đó trên trang web
// Hãy log ra nội dung đang được bôi đen ra màn hình console log
const getSelectedText = () => {
  console.log(window.getSelection().toString())
}

// Bài 6
// Hãy Tạo 1 thẻ select có các item sau: apple, orange, banana
// Mỗi lần chọn 1 item nào đó, hãy log ra màn hình console item vừa chọn
const getSelectedItem = () => {
  const e = document.getElementById("fruits")
  const text = e.options[e.selectedIndex].text
  console.log(text)
}
