import React, { ReactNode, useState } from "react";
import { InvitationType } from "./InvitationTypes";
import { Contex } from "./UserContext";

// Define the provider component type
type UserProviderProps = {
  children: ReactNode;
};

const User = ({ children }: UserProviderProps) => {
  const [assetTerm, setAssetTerm] = useState<boolean>(false);
  const [invitation, setInvitation] = useState<InvitationType>({
    id: "",
    email: "",
    status: "",
  });
  const [islogin, setIsLogin] = useState<boolean>(false);

  return (
    <Contex.Provider
      value={{
        assetTerm,
        setAssetTerm,
        invitation,
        setInvitation,
        islogin,
        setIsLogin,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export default User;
