export function formatListResponse(arr) {
  const newItems = [];
  for (const { id, data, uid } of arr) {
    const { img, title } = data;
    const newItem = {
      id,
      title: title[0].text,
      src: img.url,
      alt: img.alt,
      uid,
    };
    newItems.push(newItem);
  }
  return newItems;
}

export function formatHeadlinesResponse(arr) {
  const newHeadlines = [];
  for (const { id, uid, data } of arr) {
    const newHeadline = {
      id,
      uid,
      text: data.headline[0].text,
    };
    newHeadlines.push(newHeadline);
  }
  return newHeadlines;
}

export function formatDialogResponse(arr) {
  const newDialogs = [];
  for (const { type, text } of arr) {
    const dialog = text[0].text;
    newDialogs.push({ type, text: dialog });
  }
  return newDialogs;
}
