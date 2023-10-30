export const textTypes = ['subtitle-1', 'subtitle-2', 'body-1', 'body-2'] as const;
export type TextType = typeof textTypes[number];

export const textTags = ['p', 'span', 'b', 'i', 'u', 'kbd', 's'] as const;
export type TextTag = typeof textTags[number];
