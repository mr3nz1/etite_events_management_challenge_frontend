export function formatDate(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding leading zero if needed
  const day = String(date.getDate()).padStart(2, "0"); // Adding leading zero if needed
  const hours = String(date.getHours()).padStart(2, "0"); // Adding leading zero if needed
  const minutes = String(date.getMinutes()).padStart(2, "0"); // Adding leading zero if needed

  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
  return formattedDate;
}
