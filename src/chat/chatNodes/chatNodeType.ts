export enum chatNodeType {
  Text = "text",
  Audio = "audio",
  Video = "video",
  File = "file",
  Image = "image",
  Empty = "empty",
  Link = "link",
  Switch = "switch",

  Countdown = "countdown",
  Delay = "delay",
  HttpRequest = "httpRequest",
  AllowUserToSendMessages = "allowUserToSendMessages",
  DisallowUserToSendMessages = "disallowUserToSendMessages",
  ShowTypingIndicator = "showTypingIndicator",
  HideTypingIndicator = "hideTypingIndicator",
}

export const executedAfterRender = [
  chatNodeType.Text,
  chatNodeType.Audio,
  chatNodeType.Video,
  chatNodeType.File,
  chatNodeType.Image,
  chatNodeType.Empty,
  chatNodeType.Link,
  chatNodeType.Empty,
  chatNodeType.AllowUserToSendMessages,
  chatNodeType.DisallowUserToSendMessages,
  chatNodeType.ShowTypingIndicator,
  chatNodeType.HideTypingIndicator,
];

// export enum chatNodeType {
//   Text,
//   Audio,
//   Video,
//   File,
//   Image,
//   Empty,
//   Link,
//   Switch,
//
//   Countdown,
//   Delay,
//   HttpRequest,
//   AllowUserToSendMessages,
//   DisallowUserToSendMessages,
//   ShowTypingIndicator,
//   HideTypingIndicator,
// }
//
// export const executedAfterRender = [
//   chatNodeType.Text,
//   chatNodeType.Audio,
//   chatNodeType.Video,
//   chatNodeType.File,
//   chatNodeType.Image,
//   chatNodeType.Empty,
//   chatNodeType.Link,
//   chatNodeType.Switch,
//   chatNodeType.Empty,
//   chatNodeType.AllowUserToSendMessages,
//   chatNodeType.DisallowUserToSendMessages,
//   chatNodeType.ShowTypingIndicator,
//   chatNodeType.HideTypingIndicator,
// ];
