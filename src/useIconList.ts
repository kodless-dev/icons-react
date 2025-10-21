export async function useIconList(
  cdnUrl = 'https://kodless-dev.github.io/icons-cdn'
): Promise<string[]> {
  const res = await fetch(`${cdnUrl}/index.json`);
  const data = await res.json();
  return data.icons;
}
