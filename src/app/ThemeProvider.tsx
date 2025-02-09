import { Theme as ThemeContext } from '@lib/emotion'
import Color from 'color'
import { ThemeProvider as Provider } from 'emotion-theming'
import * as React from 'react'
import * as _ from 'lodash'
import { GlobalStyles } from './elements'
import GET_SETTINGS from './Settings.graphql'

import { Theme_guild_theme } from '@generated'
import * as Constants from '@constants'
import { useQuery } from 'react-apollo-hooks'
import {useCacheLoaded, useRouter} from '@hooks'
import {generalStore} from '@store';

const getQueryParam = (query: string) => {
	const matched = window.location.search.match(new RegExp(`[?&]${query}=([^&#]*)`))
	return matched && matched[1];
};

export const ThemeProvider = ({ children }) => {
  let guild;
  const use = useRouter();

  if (!use) {
    guild  = null;
  } else {
    guild = use.guild;
  }

  const { data } = useQuery(GET_SETTINGS, { variables: { guild }, fetchPolicy: 'network-only' });


  let theme: Theme_guild_theme = {
    __typename: 'Theme',
    colors: {
      __typename: 'ThemeColors',
      primary: data.guild && data.guild.settings.theme && data.guild.settings.theme.colors && data.guild.settings.theme.colors.primary || Constants.THEME_COLOR_PRIMARY,
      accent: data.guild && data.guild.settings.theme && data.guild.settings.theme.colors && data.guild.settings.theme.colors.accent || Constants.THEME_COLOR_ACCENT,
      background: data.guild && data.guild.settings.theme && data.guild.settings.theme.colors && data.guild.settings.theme.colors.background || Constants.THEME_BACKGROUND
    },
    css: data.guild && data.guild.settings.theme && data.guild.settings.theme.css || ``
  };

  // if (data.guild && data.guild.theme) _.merge(theme, data.guild.theme);
  generalStore.toggleGuest(data.guild && data.guild.settings.guestMode);
  generalStore.toggleRead(data.guild && data.guild.settings.readonly);

  const themeContext: ThemeContext = {
    ...theme,
    readonly: data.guild && data.guild.settings.readonly || false,
    guestMode: data.guild && data.guild.settings.guestMode || false,
    singleChannel: data.guild && data.guild.settings.singleChannel || false,
    colors: {
      ...theme.colors,
      _primary: Color(theme.colors.primary),
      _background: Color(theme.colors.background),
      _accent: Color(theme.colors.accent)
    },
    url: {
      preset: getQueryParam('preset') as 'crate' | null,
      api: getQueryParam('api')
    }
  };
  // TODO: I found why the URL parsing doesn't work l m a o.

  GlobalStyles.inject(themeContext);

  return <Provider theme={themeContext}>{children}</Provider>
};
