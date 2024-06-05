export const getHighResImageUrl = (id: number): string => {
  const formattedId = String(id).padStart(3, "0");
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedId}.png`;
};

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
