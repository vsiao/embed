/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Theme
// ====================================================

export interface Theme_guild_theme_colors {
  __typename: "ThemeColors";
  /**
   * Primary theme color (font color)
   */
  primary: string | null;
  /**
   * Accent color (buttons)
   */
  accent: string | null;
  /**
   * Background color
   */
  background: string | null;
}

export interface Theme_guild_theme {
  __typename: "Theme";
  /**
   * Custom CSS for the server
   */
  css: string | null;
  /**
   * Custom colors for the server
   */
  colors: Theme_guild_theme_colors | null;
}

export interface Theme_guild {
  __typename: "Guild";
  theme: Theme_guild_theme | null;
}

export interface Theme {
  guild: Theme_guild;
}

export interface ThemeVariables {
  guild: string;
}
