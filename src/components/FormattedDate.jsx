import React from 'react';

function FormattedDate({ date }) {
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleString("fr-FR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return <span>{formattedDate}</span>;
}

export default FormattedDate;
