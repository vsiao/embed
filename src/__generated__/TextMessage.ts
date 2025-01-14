/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: TextMessage
// ====================================================

export interface TextMessage_reactions_emoji {
  __typename: "ReactionEmoji";
  name: string;
  url: string | null;
}

export interface TextMessage_reactions {
  __typename: "Reaction";
  count: number;
  emoji: TextMessage_reactions_emoji;
}

export interface TextMessage_attachments {
  __typename: "Attachment";
  url: string;
  height: number | null;
  width: number | null;
  name: string;
  size: string;
  spoiler: boolean;
}

export interface TextMessage_embeds_author {
  __typename: "EmbedAuthor";
  proxyIconURL: string | null;
  name: string | null;
  url: string | null;
}

export interface TextMessage_embeds_fields {
  __typename: "EmbedField";
  value: string;
  name: string;
  inline: boolean;
}

export interface TextMessage_embeds_image {
  __typename: "EmbedImage";
  proxyURL: string;
  width: number;
  height: number;
}

export interface TextMessage_embeds_provider {
  __typename: "EmbedProvider";
  name: string | null;
  url: string | null;
}

export interface TextMessage_embeds_footer {
  __typename: "EmbedFooter";
  proxyIconURL: string | null;
  text: string;
}

export interface TextMessage_embeds_thumbnail {
  __typename: "EmbedThumbnail";
  height: number;
  width: number;
  proxyURL: string;
}

export interface TextMessage_embeds_video {
  __typename: "EmbedVideo";
  height: number;
  width: number;
  url: string;
}

export interface TextMessage_embeds {
  __typename: "Embed";
  title: string | null;
  description: string | null;
  url: string | null;
  timestamp: number | null;
  hexColor: string | null;
  type: string | null;
  author: TextMessage_embeds_author | null;
  fields: TextMessage_embeds_fields[];
  image: TextMessage_embeds_image | null;
  provider: TextMessage_embeds_provider | null;
  footer: TextMessage_embeds_footer | null;
  thumbnail: TextMessage_embeds_thumbnail | null;
  video: TextMessage_embeds_video | null;
}

export interface TextMessage {
  __typename: "TextMessage";
  /**
   * Message content
   */
  content: string | null;
  /**
   * Time the message was edited
   */
  editedAt: any | null;
  /**
   * Message reactions
   */
  reactions: TextMessage_reactions[];
  /**
   * Message attachments
   */
  attachments: TextMessage_attachments[];
  /**
   * Message embeds
   */
  embeds: TextMessage_embeds[] | null;
}
