export enum chatNodeType {
  Text = "text",
  Audio = "audio",
  Video = "video",
  File = "file",
  Image = "image",
  Empty = "empty",
  Link = "link",
  Switch = "switch",
  SwitchOption = "switchOption",
  SetTypingIndicator = "setTypingIndicator",

  Countdown = "countdown",
  Delay = "delay",
  HttpRequest = "httpRequest",
  Input = "input",
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
  chatNodeType.SwitchOption,
  chatNodeType.SetTypingIndicator,
];
