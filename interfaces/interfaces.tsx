export interface ErrorResponseType {
  error: string;
}

export interface AchievementProps {
  _id: string,
  image_url: string,
  title: string,
  description: string,
  score: number,
}

export interface AchievementData {
  id: string,
  month: number,
  day: number,
  image_url: string,
  title: string,
  description: string,
  score: number,
  date?:string,

}
export interface CriteriaData {
  id: string,
  month: number,
  day: number,
  description: string,
  score: number,

}
export interface DepartmentProps {
  department: string,
  average: number,
  position: number
}

export interface SignInFormatData {
  email: string;
  password: string;
}

export interface AuthResponse {
  userWithoutPassword: UserWithoutPassword;
  token: string;
}

export interface UserSuccessResponseType {
  _id: string;
  name: string,
  department: string,
  company: string,
  email: string,
  password: string,
  position: number,
  score: number,
  multiply: number,
  old_position: number,
  role: 'Jogador' | 'PMO' | 'Manager',
  rewards: RewardProps[],
  criterias: CriteriaData[],
  achievements: AchievementData[]
}
export interface UserWithoutPassword {
  _id: string;
  name: string,
  department: string,
  company: string,
  email: string,
  password?: string,
  position: number,
  old_position: number,
  score: number,
  multiply: number,
  role: 'Jogador' | 'PMO' | 'Manager',
  rewards: RewardProps[],
  criterias: CriteriaData[],
  achievements: AchievementData[]
}

export interface PlayerRankPros {
  _id: string;
  name: string,
  department: string,
  company: string,
  email: string,
  position: number,
  score: number,
  multiply: number,
  old_position: number,
  role: 'Jogador' | 'PMO' | 'Manager',
  rewards: RewardProps[],
  criterias: CriteriaData[],
  achievements: AchievementData[]
}

export interface ConquistasProps {
  _id: string,
  url: string,
  nome: string,
  description: string,
  score: number,
}

export interface CriteriosProps {
  _id: string,
  icon: string,
  description: string,
  score: number,
}

export interface RewardProps {
  id: string;
  _id: string,
  title: string,
  score: number,
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: 'academic-cap.svg' |
  'adjustments.svg' |
  'annotation.svg' |
  'archive.svg' |
  'arrow-circle-down.svg' |
  'arrow-circle-left.svg' |
  'arrow-circle-right.svg' |
  'arrow-circle-up.svg' |
  'arrow-down.svg' |
  'arrow-left.svg' |
  'arrow-narrow-down.svg' |
  'arrow-narrow-left.svg' |
  'arrow-narrow-right.svg' |
  'arrow-narrow-up.svg' |
  'arrow-right.svg' |
  'arrow-up.svg' |
  'arrows-expand.svg' |
  'at-symbol.svg' |
  'backspace.svg' |
  'badge-check.svg' |
  'ban.svg' |
  'beaker.svg' |
  'bell.svg' |
  'book-open.svg' |
  'bookmark-alt.svg' |
  'bookmark.svg' |
  'briefcase.svg' |
  'cake.svg' |
  'calculator.svg' |
  'calendar.svg' |
  'camera.svg' |
  'cash.svg' |
  'chart-bar.svg' |
  'chart-pie.svg' |
  'chart-square-bar.svg' |
  'chat-alt-2.svg' |
  'chat-alt.svg' |
  'chat.svg' |
  'check-circle.svg' |
  'check.svg' |
  'chevron-double-down.svg' |
  'chevron-double-left.svg' |
  'chevron-double-right.svg' |
  'chevron-double-up.svg' |
  'chevron-down.svg' |
  'chevron-left.svg' |
  'chevron-right.svg' |
  'chevron-up.svg' |
  'chip.svg' |
  'clipboard-check.svg' |
  'clipboard-copy.svg' |
  'clipboard-list.svg' |
  'clipboard.svg' |
  'clock.svg' |
  'cloud-download.svg' |
  'cloud-upload.svg' |
  'cloud.svg' |
  'code.svg' |
  'cog.svg' |
  'collection.svg' |
  'color-swatch.svg' |
  'credit-card.svg' |
  'cube-transparent.svg' |
  'cube.svg' |
  'currency-bangladeshi.svg' |
  'currency-dollar.svg' |
  'currency-euro.svg' |
  'currency-pound.svg' |
  'currency-rupee.svg' |
  'currency-yen.svg' |
  'cursor-click.svg' |
  'database.svg' |
  'desktop-computer.svg' |
  'device-mobile.svg' |
  'device-tablet.svg' |
  'document-add.svg' |
  'document-download.svg' |
  'document-duplicate.svg' |
  'document-remove.svg' |
  'document-report.svg' |
  'document-search.svg' |
  'document-text.svg' |
  'document.svg' |
  'dots-circle-horizontal.svg' |
  'dots-horizontal.svg' |
  'dots-vertical.svg' |
  'download.svg' |
  'duplicate.svg' |
  'emoji-happy.svg' |
  'emoji-sad.svg' |
  'exclamation-circle.svg' |
  'exclamation.svg' |
  'external-link.svg' |
  'eye-off.svg' |
  'eye.svg' |
  'fast-forward.svg' |
  'film.svg' |
  'filter.svg' |
  'finger-print.svg' |
  'fire.svg' |
  'flag.svg' |
  'folder-add.svg' |
  'folder-download.svg' |
  'folder-open.svg' |
  'folder-remove.svg' |
  'folder.svg' |
  'gift.svg' |
  'globe-alt.svg' |
  'globe.svg' |
  'hand.svg' |
  'hashtag.svg' |
  'heart.svg' |
  'home.svg' |
  'identification.svg' |
  'inbox-in.svg' |
  'inbox.svg' |
  'information-circle.svg' |
  'key.svg' |
  'library.svg' |
  'light-bulb.svg' |
  'lightning-bolt.svg' |
  'link.svg' |
  'location-marker.svg' |
  'lock-closed.svg' |
  'lock-open.svg' |
  'login.svg' |
  'logout.svg' |
  'mail-open.svg' |
  'mail.svg' |
  'map.svg' |
  'menu-alt-1.svg' |
  'menu-alt-2.svg' |
  'menu-alt-3.svg' |
  'menu-alt-4.svg' |
  'menu.svg' |
  'microphone.svg' |
  'minus-circle.svg' |
  'minus-sm.svg' |
  'minus.svg' |
  'moon.svg' |
  'music-note.svg' |
  'newspaper.svg' |
  'office-building.svg' |
  'paper-airplane.svg' |
  'paper-clip.svg' |
  'pause.svg' |
  'pencil-alt.svg' |
  'pencil.svg' |
  'phone-incoming.svg' |
  'phone-missed-call.svg' |
  'phone-outgoing.svg' |
  'phone.svg' |
  'photograph.svg' |
  'play.svg' |
  'plus-circle.svg' |
  'plus-sm.svg' |
  'plus.svg' |
  'presentation-chart-bar.svg' |
  'presentation-chart-line.svg' |
  'printer.svg' |
  'puzzle.svg' |
  'qrcode.svg' |
  'question-mark-circle.svg' |
  'receipt-refund.svg' |
  'receipt-tax.svg' |
  'refresh.svg' |
  'reply.svg' |
  'rewind.svg' |
  'rss.svg' |
  'save-as.svg' |
  'save.svg' |
  'scale.svg' |
  'scissors.svg' |
  'search-circle.svg' |
  'search.svg' |
  'selector.svg' |
  'server.svg' |
  'share.svg' |
  'shield-check.svg' |
  'shield-exclamation.svg' |
  'shopping-bag.svg' |
  'shopping-cart.svg' |
  'sort-ascending.svg' |
  'sort-descending.svg' |
  'sparkles.svg' |
  'speakerphone.svg' |
  'star.svg' |
  'status-offline.svg' |
  'status-online.svg' |
  'stop.svg' |
  'sun.svg' |
  'support.svg' |
  'switch-horizontal.svg' |
  'switch-vertical.svg' |
  'table.svg' |
  'tag.svg' |
  'template.svg' |
  'terminal.svg' |
  'thumb-down.svg' |
  'thumb-up.svg' |
  'ticket.svg' |
  'translate.svg' |
  'trash.svg' |
  'trending-down.svg' |
  'trending-up.svg' |
  'truck.svg' |
  'upload.svg' |
  'user-add.svg' |
  'user-circle.svg' |
  'user-group.svg' |
  'user-remove.svg' |
  'user.svg' |
  'users.svg' |
  'variable.svg' |
  'video-camera.svg' |
  'view-boards.svg' |
  'view-grid-add.svg' |
  'view-grid.svg' |
  'view-list.svg' |
  'volume-off.svg' |
  'volume-up.svg' |
  'wifi.svg' |
  'x-circle.svg' |
  'x.svg' |
  'zoom-in.svg' |
  'zoom-out.svg'
  ,
  size: number,
  fill: string,
}
