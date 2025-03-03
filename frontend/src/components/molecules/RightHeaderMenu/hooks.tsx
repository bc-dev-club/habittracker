import { useEffect, useState } from "react";

export const useRightHeaderMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [username, setUsername] = useState("");

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const handleLogout = () => {
    handleMenuClose();
    // TODO: ログアウト処理
  };

  useEffect(() => {
    setUsername("ユーザ名");
  }, []);

  return {
    isMenuOpen,
    handleMenuOpen,
    handleMenuClose,
    handleLogout,
    username,
  };
};
