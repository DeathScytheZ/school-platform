

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.4yZSIr2l.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CWvp9Glw.js"];
export const stylesheets = ["_app/immutable/assets/4.Dg9IOnbk.css"];
export const fonts = [];
