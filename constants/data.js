import { FiFile, FiHome, FiInbox, FiMail, FiTrash } from "react-icons/fi";

import { HiHashtag } from "react-icons/hi";

export const firstLinks = [
  { id: 1, icon: FiHome, to: "/", label: "Anasayfa" },
  { id: 2, icon: FiInbox, to: "/inbox", label: "Gelen Kutusu" },
  { id: 3, icon: FiMail, to: "/sent-mails", label: "Gönderilen Postalar" },
  { id: 4, icon: FiFile, to: "/draft", label: "Taslak" },
  { id: 5, icon: FiTrash, to: "/trash", label: "Çöp Kutusu" },
];

export const personalLinks = [
  { id: 1, icon: HiHashtag, to: "/", label: "İş Başvurusu Hk." },
  { id: 2, icon: HiHashtag, to: "/", label: "Şifre listesi" },
];
