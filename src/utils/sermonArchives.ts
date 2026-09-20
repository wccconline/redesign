/**
 * YouTube playlists for the sermon archives, newest year first.
 * To add a new year, add an entry here; the Sermon Archives page and the
 * year range shown on the Live Stream page both update automatically.
 */
export const archives = [
  {
    year: 2026,
    description: 'Recent sermons and teachings from 2026',
    playlist: 'PLom-0r33d-gCrdM5y5EwTiTv-4oEMgui-',
  },
  {
    year: 2025,
    description: 'Sermons and teachings from 2025',
    playlist: 'PLom-0r33d-gAOWuczIHZAvbC_9eImSocp',
  },
  {
    year: 2024,
    description: 'Sermons and teachings from 2024',
    playlist: 'PLom-0r33d-gCan9qQJRoJMLTce2Nq0u4L',
  },
];

/** e.g. "2024–2026", or just "2026" if there is only one year. */
export const archiveYearRange = (): string => {
  const years = archives.map(({ year }) => year);
  const first = Math.min(...years);
  const last = Math.max(...years);
  return first === last ? `${first}` : `${first}–${last}`;
};
