/**
 * Array of predefined colors in hexadecimal format
 * Used for generating consistent avatar backgrounds
 */
const colors = [
  '#001219', // dark blue
  '#005f73', // teal
  '#0a9396', // light teal
  '#94d2bd', // mint
  '#e9d8a6', // beige
  '#ee9b00', // orange
  '#ca6702', // dark orange
  '#bb3e03', // rust
  '#ae2012', // red
  '#9b2226', // burgundy
];

/**
 * Generates initials and a consistent color from a name for avatar display
 * Primarily used for creating user/profile avatars with consistent coloring
 *
 * @example
 * // Returns { nameSplit: "JD", color: "#005f73" }
 * getSplitName("John Doe");
 *
 * @example
 * // Returns { nameSplit: "A", color: "#0a9396" }
 * getSplitName("Alice");
 *
 * @param {string} name - The full name to process
 * @returns {Object} An object containing:
 *   - nameSplit: The initials extracted from the name (1-2 characters)
 *   - color: A consistent color based on the name's first character
 */
const getSplitName = (name: string) => {
  // Select a color based on the first character's ASCII code
  let color: string;
  color = colors[name?.charCodeAt(0) % colors.length];

  // Process the name to extract initials
  let nameSplit: any = name.split(' ');

  // Remove any special characters from each part of the name
  nameSplit = nameSplit.map((name: string) => name.replace(/[^a-zA-Z0-9]/g, ''));

  // Filter out any empty strings
  nameSplit = nameSplit.filter(
    (name: string | undefined) => name !== '' && name !== undefined,
  );

  // Create initials (1 letter for single name, 2 letters for multiple names)
  if (nameSplit.length === 1) {
    nameSplit = nameSplit[0][0]; // First letter of single name
  } else {
    nameSplit = nameSplit[0][0] + nameSplit[1][0]; // First letters of first two names
  }

  const props = {
    nameSplit: nameSplit as string,
    color: color,
  };

  return props;
};

export default getSplitName;