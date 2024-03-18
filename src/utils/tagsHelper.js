export function getTagBackgroundColor(type) {
  switch (type) {
    case "grass":
      return "#00897b";
    case "fire":
      return "#ef6c00";
    case "water":
      return "#0288d1";
    case "bug":
      return "#43a047";
    case "dark":
      return "#424242";
    case "dragon":
      return "#d32f2f";
    case "electric":
      return "#cddc39";
    case "fairy":
      return "#f06292";
    case "fighting":
      return "#5c6bc0";
    case "flying":
      return "#2196f3";
    case "ghost":
      return "#263238";
    case "ground":
      return "#43a047";
    case "ice":
      return "#039be5";
    case "normal":
      return "#757575";
    case "poison":
      return "#9C70A1";
    case "psychic":
      return "#F968D3";
    case "rock":
      return "#A87E5F";
    case "steel":
      return "#58A8F8";
    default:
      return "#f0f0f0";
  }
}
