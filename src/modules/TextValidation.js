export function textValidate(text, type, state) {
  let _phone = /^\d{3}\d{3,4}\d{4}$/;
  let _korean = /^[가-힣]+$/
  let _email = /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (type === 'name') {
    if (text.length !== 0 && _korean.test(text)) {
      return true;
    } else {
      return false;
    }
  } else if (type === 'password') {
    if (text.length >= 6) {
      return true;
    } else {
      return false;
    }
  } else if (type === 'passwordConfirm') {
    if (text.length !== 0 && state === text) {
      return true;
    } else {
      return false;
    }
  } else if (type === 'phoneNumber') {
    if (text.length !== 0 && _phone.test(text)) {
      return true;
    } else {
      return false;
    }
  } else if (type === 'email') {
    if (text.length !== 0 && _email.test(text)) {
      return true;
    } else {
      return false;
    }
  } else if (type === 'preferPlace') {
    if (text.length !== 0) {
      return true;
    } else {
      return false;
    }
  } else if (type === 'terms') {
    console.log("hello!")
  }
}