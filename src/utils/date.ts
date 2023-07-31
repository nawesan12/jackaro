export function formatDate(inputDate: string) {
  const timezone = "America/Argentina/Buenos_Aires";

  const date = new Date(inputDate);
  const dateFormatter = new Intl.DateTimeFormat("es-AR", {
    timeZone: timezone,
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const formattedDate = dateFormatter.format(date);
  return formattedDate;
}
