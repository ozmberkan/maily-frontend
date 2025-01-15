import { FiFile, FiHome, FiInbox, FiMail, FiTrash } from "react-icons/fi";

import { HiHashtag } from "react-icons/hi";

export const firstLinks = [
  { id: 1, icon: FiHome, to: "/", label: "Anasayfa", isContext: false },
  {
    id: 2,
    icon: FiInbox,
    to: "/inbox",
    label: "Gelen Kutusu",
    isContext: true,
  },
  {
    id: 3,
    icon: FiMail,
    to: "/sent-mails",
    label: "Gönderilen Postalar",
    isContext: true,
  },
  { id: 4, icon: FiFile, to: "/draft", label: "Taslak", isContext: false },
  { id: 5, icon: FiTrash, to: "/trash", label: "Çöp Kutusu", isContext: false },
];

export const personalLinks = [
  { id: 1, icon: HiHashtag, to: "/", label: "İş Başvurusu Hk." },
  { id: 2, icon: HiHashtag, to: "/", label: "Şifre listesi" },
];
