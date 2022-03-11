const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  const header = document.createElement("div")
  const xDate = document.createElement("span")
  const xTitle = document.createElement("h1")
  const xTemp = document.createElement("span")

  header.classList.add("header")
  xDate.classList.add("date")
  xTemp.classList.add("temp")

  xDate.textContent = date;
  xTitle.textContent = title;
  xTemp.textContent = temp;

  header.appendChild(xDate);
  header.appendChild(xTitle);
  header.appendChild(xTemp);

  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const h = Header("Hello", "Foo", "Bar")
  const apnd = document.querySelector(selector).appendChild(h)
  return apnd
}

export { Header, headerAppender }
