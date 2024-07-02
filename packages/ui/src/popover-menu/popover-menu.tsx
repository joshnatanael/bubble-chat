import { Menu as MuiMenu, styled } from "@mui/material";

const PopoverMenu = styled(MuiMenu, { name: "PopoverMenu" })(({ theme }) => ({
  ".MuiMenu-paper": {
    boxShadow: `0px 8px 16px rgba(217, 217, 217, 0.25)`,
    border: `1px solid ${theme.palette.grey[100]}`,
    borderRadius: 8,
    backgroundColor: theme.palette.common.white,
    minWidth: "168px",
  },

  ".MuiMenu-list": {
    padding: 0,
  },
}));

PopoverMenu.displayName = "PopoverMenu";

export default PopoverMenu;
