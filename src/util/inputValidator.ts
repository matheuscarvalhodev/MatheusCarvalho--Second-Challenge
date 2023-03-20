export function containsNumbers(value: string): boolean {
  return /\d/.test(value);
}

export function isTextOnly(value: string): boolean {
  return /^[A-Za-z ]+$/.test(value);
}

export function isStrongPassword(value: string): boolean {
  const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{6,}$/;
  return passwordRegex.test(value);
}

export function emailValidation(value: string): boolean {
  const regex = /^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/g;
  if (!regex.test(value)) {
    return false;
  }
  return true;
}

export function isValidDate(value: string): boolean {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(value)) {
    return false;
  }
  const inputDate = new Date(value);
  const newDate = new Date(inputDate.getTime() + inputDate.getTimezoneOffset() * 60000)
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1; // Janeiro é 0, então soma 1
  const day = newDate.getDate();

  const dateString = value.split("-").join(""); // remover o traço para comparar com a string sem traço

  const currentDate = new Date();
  const newCurrentDate = new Date(currentDate.getTime() + currentDate.getUTCDate() * 60000)
  if (isNaN(newDate.getTime()) || newDate > newCurrentDate || (newDate.getDate() === newCurrentDate.getDate() && newDate.getFullYear() === newCurrentDate.getFullYear() && newDate.getMonth() === newCurrentDate.getMonth())) {
    return false;
  }

  return (
    !isNaN(newDate.getTime()) &&
    year.toString() === dateString.slice(0, 4) &&
    month.toString().padStart(2, "0") === dateString.slice(4, 6) &&
    day.toString().padStart(2, "0") === dateString.slice(6)
  );
}