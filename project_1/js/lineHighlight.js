// 요리 목록 하이라이팅 효과 함수
export function formatCookingList(resultValue) {
  const lines = resultValue.split("\n");
  
  let formattedString = "";

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    if (trimmedLine !== "") {
      const dotIndex = trimmedLine.indexOf(":");
      if (dotIndex !== -1) {
        const number = trimmedLine.substring(0, dotIndex).trim();
        const dish = trimmedLine.substring(dotIndex + 1).trim();

        const formattedLine = `<b class="line-highlight01">${number}:</b> ${dish}`;
        formattedString += `${formattedLine}<br>`;
      } else {
        formattedString += `<br>${trimmedLine}<br><br>`;
      }
    }
  });
  console.log(formattedString)
  return formattedString;
}

// 레시피 하이라이팅 효과 함수
export function formatRecipeText(resultRecipe) {
  const line_group = resultRecipe.split("\n");
  let formattedStr = "";

  line_group.forEach((line, index) => {
    const trim_line = line.trim();
    if (trim_line !== "") {
      const dotIdx = trim_line.indexOf(":");
      if (dotIdx !== -1) {
        const title = trim_line.substring(0, dotIdx).trim();
        const description = trim_line.substring(dotIdx + 1).trim();

        const format_line = `<br><b class="line-highlight02">${title}:</b> ${description}`;
        formattedStr += `${format_line}<br>`;
      } else {
        formattedStr += `${trim_line}<br>`;
      }
    }
    if (index === line_group.length - 1) {
      formattedStr += "<br>";
    }
  });
  return formattedStr;
}
