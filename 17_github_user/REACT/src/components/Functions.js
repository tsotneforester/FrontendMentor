function datefy(dt) {
  const date = new Date(dt);
  return `${date.toLocaleString("en-US", { day: "numeric" })} ${date.toLocaleString("en-US", { month: "short" })} ${date.toLocaleString("en-US", { year: "numeric" })}`;
}

function http(link) {
  let array = link.split("//");
  return array[1];
}

export { http, datefy };
