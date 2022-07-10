export default function truncate(
  content = "...",
  word = false,
  limit = 160,
  after = "...",
  character = false
) {
  let newContent;

  if (content && content.length) {
    if (character == true) {
      content = content.trim();
      if (content.length <= limit) return content;
      newContent = content.substr(0, limit);
      newContent = newContent.substr(
        0,
        Math.min(newContent.length, newContent.lastIndexOf(" "))
      );
      newContent = newContent + " " + (after ? after : "");
    } else if (word === true) {
      content = content.trim();
      newContent = content.split(" ");
      if (newContent.length <= limit) return content;
      newContent = newContent.slice(0, limit);
      newContent = newContent.join(" ") + " " + (after ? after : "");
    } else {
      content = content.trim();
      newContent = content.split("");
      if (newContent.length <= limit) return content;
      // newContent = newContent.slice(0, limit);
      // newContent = newContent.join("") + " " + (after ? after : "");
      newContent = content.substr(0, limit);
      newContent = newContent.substr(
        0,
        Math.min(newContent.length, newContent.lastIndexOf(" "))
      );
      newContent = newContent + " " + (after ? after : "");
    }
  }

  return newContent;
}
