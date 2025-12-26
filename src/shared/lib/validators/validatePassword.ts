export const validatePasswordMsg = (pw: string) => {
  if (pw.length < 6) return "Пароль должен быть не менее 6 символов";
  if (!/[A-Z]/.test(pw)) return "Пароль должен содержать заглавную букву";
  if (!/[a-z]/.test(pw)) return "Пароль должен содержать строчную букву";
  if (!/[!@#$%^&*(),.?":{}|<>[\]\\\/~`_\-+=;']/g.test(pw))
    return "Пароль должен содержать спецсимвол";
  return "";
};
