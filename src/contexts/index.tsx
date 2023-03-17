import { ReactNode } from "react";
import { AddressProvider } from "./address";
import { AnnouncementProvider } from "./announcement";
import { AuthProvider } from "./auth";
import { CommentProvider } from "./comment";
import MenuProvider from "./menuContext";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <AuthProvider>
      <AnnouncementProvider>
        <CommentProvider>
          <AddressProvider>
            <MenuProvider>{children}</MenuProvider>
          </AddressProvider>
        </CommentProvider>
      </AnnouncementProvider>
    </AuthProvider>
  );
};
