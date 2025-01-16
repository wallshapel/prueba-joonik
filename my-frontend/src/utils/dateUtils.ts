export const formatDate = (dateString: string): string => {
  const dateParts = dateString.split("-").map(Number);
  const date = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);

  return new Intl.DateTimeFormat("en-US", {
    month: "short", // example: "Jan"
    day: "2-digit", // example: "15"
    year: "numeric", // example: "2022"
  }).format(date);
};