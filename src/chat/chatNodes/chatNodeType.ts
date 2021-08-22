export enum chatNodeType {
  Text = "text",
  Audio = "audio",
  Video = "video",
  File = "file",
  Image = "image",

  Empty = "empty",

  Link = "link",
  Switch = "switch", // Choose some option

  // not renderable
  Delay = "delay",
  HttpRequest = "httpRequest",
  AllowUserToSendMessages = "allowUserToSendMessages",
  DisallowUserToSendMessages = "disallowUserToSendMessages",
  ShowTypingIndicator = "showTypingIndicator",
  HideTypingIndicator = "hideTypingIndicator",

  // plus all the same that on user mesage
}
