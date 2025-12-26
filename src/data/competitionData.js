const palette = [
  '#8e44ad', '#27ae60', '#9b59b6', '#2ecc71', '#f39c12',
  '#c0392b', '#16a085', '#d35400', '#2980b9', '#e74c3c'
];

export const competitionData = [
  {
    id: "tenis-meja",
    title: "Tenis Meja",
    htm: "Rp 25.000",
    icon: "🏓",
    color: palette[0],
    cp: "Nofal (087816519159), Najwa (083111303529)",
    linkGForm: "https://forms.gle/uNJLMSjVsWZfTae86",
    timeline: [
      { date: "24 Des - 07 Jan", activity: "Pendaftaran" },
      { date: "12 Januari 2026", activity: "Pelaksanaan Lomba" },
    ],
  },
  {
    id: "badminton",
    title: "Badminton",
    htm: "Rp 50.000",
    icon: "🏸",
    color: palette[1],
    cp: "Surizky (085765244197), Aulia (083190403619)",
    linkGForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSfSpYDZufzW13H0Dlh8oDmYGXTiiLsBErb8m-TmISjwE-DubQ/viewform?usp=header",
    timeline: [
      { date: "24 Des - 07 Jan", activity: "Pendaftaran" },
      { date: "12 - 13 Jan 2026", activity: "Pelaksanaan Lomba" },
    ],
  },
  {
    id: "fashion-show",
    title: "Fashion Show",
    htm: "Rp 70.000", // Sesuai Guidebook hal. 13
    icon: "🎭",
    color: palette[2],
    cp: "Sarah (082294086808), Nazwa (082272658094)",
    linkGForm: "https://forms.gle/U6Xn3Z7Bb89s27mP8",
    timeline: [
      { date: "24 Des - 07 Jan", activity: "Pendaftaran" },
      { date: "14 Januari 2026", activity: "Pelaksanaan Lomba" },
    ],
  },
  {
    id: "vocal-solo",
    title: "Vocal Solo",
    htm: "Rp 50.000", // Sesuai Guidebook hal. 17
    icon: "🎤",
    color: palette[3],
    cp: "Vima (082238070682)",
    linkGForm: "https://forms.gle/G4ReKRbrLq5QSDfT8",
    timeline: [
      { date: "24 Des - 07 Jan", activity: "Pendaftaran" },
      { date: "14 Januari 2026", activity: "Pelaksanaan Lomba" },
    ],
  },
  {
    id: "catur",
    title: "Catur",
    htm: "Rp 25.000",
    icon: "♟️",
    color: palette[4],
    cp: "Luthfi (082362305382)",
    linkGForm: "https://forms.gle/fkeArfw5nvwz6brF9",
    timeline: [
      { date: "24 Des - 07 Jan", activity: "Pendaftaran" },
      { date: "13 Januari 2026", activity: "Pelaksanaan Lomba" },
    ],
  },
  {
    id: "mobile-legends",
    title: "Mobile Legends",
    htm: "Rp 75.000",
    icon: "⚔️",
    color: palette[5],
    cp: "Dimas (082267202733)",
    linkGForm: "https://forms.gle/34yhDfcxhPFjxXPo6",
    timeline: [
      { date: "24 Des - 07 Jan", activity: "Pendaftaran" },
      { date: "13 Januari 2026", activity: "Pelaksanaan Lomba" },
    ],
  },
  {
    id: "futsal",
    title: "Futsal",
    htm: "Rp 175.000",
    icon: "⚽",
    color: palette[6],
    cp: "Arman (082267335915), Ihsan (081396399708)",
    linkGForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSe56qekodvC39bu02CBcbRqHiH04HAJLpPp06_Y7XAVFldFtQ/viewform?usp=dialog",
    timeline: [
      { date: "24 Des - 07 Jan", activity: "Pendaftaran" },
      { date: "12 - 13 Jan 2026", activity: "Pelaksanaan Lomba" },
    ],
  },
  {
    id: "design-poster",
    title: "Design Poster",
    htm: "Rp 20.000",
    icon: "🎨",
    color: palette[7],
    cp: "Rasyid (082163564827), Haidar (089521507646)",
    linkGForm: "https://forms.gle/wQKnPaF242e7v37Y9",
    timeline: [
      { date: "24 Des - 07 Jan", activity: "Pendaftaran & Karya" },
      { date: "08 - 13 Jan 2026", activity: "Penilaian Karya" },
    ],
  },
  {
    id: "cerdas-cermat",
    title: "Cerdas Cermat",
    htm: "Rp 50.000",
    icon: "🧠",
    color: palette[8],
    cp: "Alief (081388451299)",
    linkGForm:
      "https://docs.google.com/forms/d/e/1FAIpQLSfrgGRfZVRwDq9MU5aseLv81-xBKmJ_CrD0Aol8wjbl8zBkow/viewform?usp=dialog",
    timeline: [
      { date: "24 Des - 07 Jan", activity: "Pendaftaran" },
      { date: "12 Januari 2026", activity: "Pelaksanaan Lomba" },
    ],
  },
  {
    id: "efootball",
    title: "E-Football Console",
    htm: "Rp 25.000",
    icon: "🎮",
    color: palette[9],
    cp: "Dian (081360389967)",
    linkGForm: "https://forms.gle/WrgRDYm7iErjUFrs9",
    timeline: [
      { date: "24 Des - 07 Jan", activity: "Pendaftaran" },
      { date: "13 Januari 2026", activity: "Pelaksanaan Lomba" },
    ],
  },
];

export const globalInfo = {
  organizedBy: "HMJ Ilmu Komputer UINSU", // [cite: 1082]
  payment: {
    method: "SeaBank",
    account: "901564976701",
    owner: "Wulan Rama Dini", // [cite: 1205, 1297]
  },
  links: {
    guidebook: "https://s.id/guidebookcsf",
    tenant: "https://forms.gle/Uo276723rSDEtauC7",
    instagram: "https://instagram.com/csf.uinsu",
  },
};
