"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

const BreadCrumbComp = () => {
  const path = usePathname();

  const editedPath = path.slice(1, 12);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Anasayfa</BreadcrumbLink>
        </BreadcrumbItem>
        {path === "/" ? null : (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>
                {editedPath === "inbox" && "Gelen Kutusu"}
                {editedPath === "sent-mails" && "Gönderilen Postalar"}
                {editedPath === "draft" && "Taslak"}
                {editedPath === "trash" && "Çöp Kutusu"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbComp;
