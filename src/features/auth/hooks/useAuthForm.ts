import { validateEmailMsg, validatePasswordMsg } from "@shared/lib/validators";
import { useEffect, useRef, useState } from "react";
import { Keyboard } from "react-native";
import useUserStore from "../store/authStore";

type Mode = "SignIn" | "SignUp";

type FormErrors = {
  email?: string;
  password?: string;
  confirm?: string;
};

type Config = {
  debounceMs?: number;
  onSubmit?: (form: {
    email: string;
    password: string;
    confirm?: string;
  }) => void | Promise<void>;
  validators?: {
    email?: (v: string) => string;
    password?: (v: string) => string;
    confirm?: (v: string, form: { password: string }) => string;
  };
};

export const useAuthForm = (mode: Mode, config: Config = {}) => {
  const { debounceMs = 600, onSubmit, validators = {} } = config;

  const { email, password, setEmail, setPassword } = useUserStore();

  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    password: "",
    confirm: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  const runEmailValidation = (value: string) => {
    const error = validators.email
      ? validators.email(value)
      : validateEmailMsg(value);
    setErrors((prev) => ({ ...prev, email: error }));
    return error;
  };

  const runPasswordValidation = (value: string) => {
    const error = validators.password
      ? validators.password(value)
      : validatePasswordMsg(value);
    setErrors((prev) => ({ ...prev, password: error }));
    return error;
  };

  const runConfirmValidation = (
    value: string,
    currForm: { password: string }
  ) => {
    if (!value) return "Повторите пароль";
    return value === currForm.password ? "" : "Пароли не совпадают!";
  };

  const handleChange = (field: keyof FormErrors | "confirm", value: string) => {
    const normalized = value.replace(/\s/g, "");
    if (field === "confirm") {
      setConfirm(normalized);
    } else if (field === "password") {
      setPassword(normalized);
    } else if (field === "email") {
      setEmail(normalized);
    }

    if (field === "password") {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        runPasswordValidation(normalized);
      }, debounceMs);
    }

    if (field === "confirm" && mode === "SignUp") {
      setErrors((prev) => ({
        ...prev,
        confirm: submitted
          ? runConfirmValidation(normalized, { password })
          : "",
      }));
    }
  };

  const validateAll = (): FormErrors => {
    const newErrors: FormErrors = {
      email: email ? runEmailValidation(email) : "Введите почту!",
      password: runPasswordValidation(password),
      ...(mode === "SignUp"
        ? {
            confirm: runConfirmValidation(confirm, { password }),
          }
        : {}),
    };

    return newErrors;
  };

  const handleSubmit = async (): Promise<boolean> => {
    Keyboard.dismiss();
    setSubmitted(true);

    const newErrors = validateAll();
    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      return false;
    }

    if (onSubmit) {
      await onSubmit({
        email: email.trim(),
        password,
        confirm,
      });
    }

    return true;
  };

  const resetForm = () => {
    setPassword("");
    setConfirm("");
    setErrors({
      email: "",
      password: "",
      confirm: "",
    });
    setSubmitted(false);
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
      debounceTimer.current = null;
    }
  };

  return {
    email,
    password,
    confirm,
    errors,
    submitted,
    handleChange,
    handleSubmit,
    resetForm,
  };
};

export default useAuthForm;
