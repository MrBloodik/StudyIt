export const validateEmailMsg = (value: string) => {
  if (/\S+@\S+\.\S+/.test(value)) return "";
  return "Введите верную почту!";
};
