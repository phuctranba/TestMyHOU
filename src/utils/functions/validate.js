export function checkPass(value) {
  value = value.replace(/\s+/g, '');
  const re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{6,20}$/;
  return re.test(String(value));
}

export function checkEmpty(value) {
  return value !== '';
}

export function checkSpecialCharacters(value) {
  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?₫~`•√π÷×¶∆£€¢°©™®✓]/;
  return !format.test(value);
}
