export type View =
  | {
      type: "home";
    }
  | {
      type: "details";
      alphaCode: string;
    };

export interface NavigationState {
  view: View;
  navigateToHome: () => void;
  navigateToDetails: (alphaCode: string) => void;
}
