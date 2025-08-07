// types/index.d.ts (Optional, you can put these interfaces directly in DropdownMenu.tsx)

export interface MenuItem {
    name: string;
    path: string;
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