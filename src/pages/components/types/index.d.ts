// types/index.d.ts (Optional, you can put these interfaces directly in DropdownMenu.tsx)


  export interface MenuItem {
  name: string;
  href: string;
  // other properties if any
}
export interface DropdownMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  initialActiveItem?: string; // Name of the item that should initially be active
}
// export interface ActiveItem {
//   name: string;
//   color: BlockquoteHTMLAttributes;
// }